const data = window.TGMT_DATA;

const colors = {
  0: "#b94e48",
  1: "#1c7c54",
  2: "#3867b7",
  3: "#b47b12",
};

const defaultInput = {
  tuoi: 32,
  gio_ngu: 7.5,
  muc_stress: 4,
  caffeine: 1,
  phut_tap_luyen: 45,
  chat_luong_ngu: 7,
  thoi_gian_man_hinh: 2,
};

const inputRanges = {
  tuoi: [18, 80, 1],
  gio_ngu: [4, 12, 0.1],
  muc_stress: [0, 10, 0.1],
  caffeine: [0, 5, 1],
  phut_tap_luyen: [0, 180, 1],
  chat_luong_ngu: [0, 10, 0.1],
  thoi_gian_man_hinh: [0, 12, 0.1],
};

const API_BASE = "http://127.0.0.1:8000";

function fmt(value, suffix = "") {
  return `${Number(value).toLocaleString("vi-VN")}${suffix}`;
}

function byId(id) {
  return document.getElementById(id);
}

function initOverview() {
  byId("generatedAt").textContent = `Cập nhật ${data.generatedAt}`;
  byId("rowsCount").textContent = fmt(data.dataset.rows);
  byId("featureCount").textContent = fmt(data.dataset.features);
  byId("classCount").textContent = fmt(data.dataset.classes);
  byId("bestModel").textContent = data.model.bestDisplayName;
  byId("bestAccuracy").textContent = `Accuracy ${data.model.accuracy.toFixed(2)}%`;
}

function initQuickInsights() {
  const nightmare = data.ranking.find((item) => item.name === "Neural Network (MLP)");
  const weakestClass = data.distribution.reduce((min, item) => (item.count < min.count ? item : min), data.distribution[0]);
  const strongestClass = data.distribution.reduce((max, item) => (item.count > max.count ? item : max), data.distribution[0]);
  const stressFeature = data.featureSummary.find((item) => item.key === "muc_stress");
  const sleepFeature = data.featureSummary.find((item) => item.key === "gio_ngu");

  const insights = [
    {
      label: "Kết luận model",
      value: `${data.model.bestDisplayName} dẫn đầu`,
      note: `Accuracy ${data.model.accuracy.toFixed(2)}%, F1 ${nightmare?.f1.toFixed(1) || "92.7"}%.`,
    },
    {
      label: "Lớp ít mẫu nhất",
      value: weakestClass.label,
      note: `${fmt(weakestClass.count)} mẫu, ${weakestClass.percent}% tập dữ liệu.`,
    },
    {
      label: "Lớp nhiều mẫu nhất",
      value: strongestClass.label,
      note: `${fmt(strongestClass.count)} mẫu, ${strongestClass.percent}% tập dữ liệu.`,
    },
    {
      label: "Tín hiệu chính",
      value: "Stress và giấc ngủ",
      note: `Stress TB ${stressFeature?.mean}, giờ ngủ TB ${sleepFeature?.mean}h.`,
    },
  ];

  byId("quickInsights").innerHTML = insights
    .map(
      (item) => `
        <article class="insight-card">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
          <p>${item.note}</p>
        </article>
      `,
    )
    .join("");
}

function initDistribution() {
  const max = Math.max(...data.distribution.map((item) => item.count));
  byId("labelBars").innerHTML = data.distribution
    .map((item) => {
      const width = (item.count / max) * 100;
      return `
        <div class="label-row">
          <strong>${item.label}</strong>
          <div class="bar-track">
            <div class="bar-fill" style="--w:${width}%;--c:${colors[item.id]}"></div>
          </div>
          <span>${fmt(item.count)} (${item.percent}%)</span>
        </div>
      `;
    })
    .join("");

  byId("classProfiles").innerHTML = data.classProfiles
    .map(
      (item) => `
        <div class="class-item">
          <div>
            <strong>${item.label}</strong>
            <span>${fmt(item.count)} mẫu</span>
          </div>
          <em>${item.muc_stress} stress</em>
        </div>
      `,
    )
    .join("");
}

function initModels() {
  byId("modelTable").innerHTML = data.ranking
    .map(
      (row) => `
        <tr>
          <td><span class="rank-badge ${row.rank <= 3 ? "top" : ""}">${row.rank}</span></td>
          <td><strong>${row.name}</strong></td>
          <td class="metric">${row.accuracy.toFixed(2)}%</td>
          <td>${row.precision.toFixed(1)}%</td>
          <td>${row.recall.toFixed(1)}%</td>
          <td>${row.f1.toFixed(1)}%</td>
        </tr>
      `,
    )
    .join("");
}

function initFeatures() {
  byId("featureCards").innerHTML = data.featureSummary
    .map(
      (feature) => `
        <article class="feature-card">
          <strong>${feature.name}</strong>
          <dl>
            <dt>Mean</dt><dd>${feature.mean}</dd>
            <dt>Std</dt><dd>${feature.std}</dd>
            <dt>Min</dt><dd>${feature.min}</dd>
            <dt>Max</dt><dd>${feature.max}</dd>
          </dl>
        </article>
      `,
    )
    .join("");
}

function initCharts() {
  const categorize = (chart) => {
    if (chart.file.includes("phan_bo") || chart.file.includes("tuong_quan")) return "distribution";
    if (chart.file.includes("so_sanh")) return "model";
    return "analysis";
  };
  const charts = data.charts.map((chart) => ({ ...chart, category: categorize(chart) }));

  const render = (filter = "all") => {
    const visible = filter === "all" ? charts : charts.filter((chart) => chart.category === filter);
    byId("chartGrid").innerHTML = visible
      .map(
        (chart) => `
          <article class="chart-card" data-category="${chart.category}">
            <img src="./assets/${chart.file}" alt="${chart.title}" loading="lazy" data-title="${chart.title}" />
            <h3>${chart.title}</h3>
          </article>
        `,
      )
      .join("");
  };

  render();

  byId("chartFilter").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    document.querySelectorAll("#chartFilter button").forEach((item) => item.classList.toggle("active", item === button));
    render(button.dataset.filter);
  });
}

function initImageLightbox() {
  const lightbox = byId("imageLightbox");
  const image = byId("lightboxImage");
  const caption = byId("lightboxCaption");

  const close = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    image.removeAttribute("src");
    image.alt = "";
    caption.textContent = "";
  };

  byId("chartGrid").addEventListener("click", (event) => {
    const target = event.target.closest("img");
    if (!target) return;

    image.src = target.src;
    image.alt = target.alt;
    caption.textContent = target.dataset.title || target.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });

  lightbox.addEventListener("click", close);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      close();
    }
  });
}

function scoreInput(values) {
  const nightmare =
    values.muc_stress * 0.35 +
    (10 - values.gio_ngu) * 0.2 +
    values.caffeine * 0.2 +
    values.thoi_gian_man_hinh * 0.15 +
    (10 - values.chat_luong_ngu) * 0.1;

  const goodDream =
    (10 - values.muc_stress) * 0.3 +
    values.gio_ngu * 0.2 +
    (values.phut_tap_luyen / 120) * 10 * 0.25 +
    values.chat_luong_ngu * 0.25;

  const deepSleep =
    values.gio_ngu * 0.35 +
    (5 - values.caffeine) * 0.2 +
    values.chat_luong_ngu * 0.35 +
    (values.phut_tap_luyen / 120) * 10 * 0.1;

  const noDream =
    (10 - Math.abs(values.gio_ngu - 7)) * 0.25 +
    (10 - Math.abs(values.muc_stress - 5)) * 0.2 +
    (5 - Math.abs(values.caffeine - 2)) * 0.15 +
    ((120 - values.phut_tap_luyen) / 120) * 10 * 0.2 +
    ((8 - values.thoi_gian_man_hinh) / 8) * 10 * 0.1 -
    Math.abs(values.chat_luong_ngu - 5) * 0.1;

  const scores = [nightmare, goodDream, deepSleep, noDream];
  const min = Math.min(...scores);
  const shifted = scores.map((score) => Math.max(score - min + 0.01, 0.01));
  const sum = shifted.reduce((acc, score) => acc + score, 0);
  const probabilities = shifted.map((score) => score / sum);
  const prediction = probabilities.indexOf(Math.max(...probabilities));
  return { prediction, probabilities, scores };
}

function readFormValues() {
  return Object.fromEntries(
    data.features.map((key) => [key, Number(document.querySelector(`[name="${key}"]`).value)]),
  );
}

function renderPrediction(result) {
  const label = data.labels[result.prediction];
  const sourceText = result.source === "model"
    ? "Kết quả từ model MLP đã train trong Python backend."
    : "Ước lượng nhanh theo logic scoring dùng khi tạo nhãn dữ liệu.";

  byId("predictionCard").innerHTML = `
    <span>Kết quả</span>
    <strong>${label}</strong>
    <p>${sourceText}</p>
    <div class="prob-list" id="probList">
      ${result.probabilities
        .map((prob, index) => {
          const percent = prob * 100;
          return `
            <div class="prob-item">
              <div class="prob-top"><span>${data.labels[index]}</span><strong>${percent.toFixed(1)}%</strong></div>
              <div class="prob-track"><div style="--w:${percent}%;--c:${colors[index]}"></div></div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

async function predictWithBackend(values) {
  const response = await fetch(`${API_BASE}/api/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  const payload = await response.json();
  if (!response.ok || !payload.ok) {
    throw new Error(payload.error || "Backend prediction failed");
  }

  return {
    prediction: payload.prediction,
    probabilities: payload.probabilities,
    source: "model",
  };
}

function initPredictor() {
  const form = byId("predictForm");
  form.innerHTML = data.features
    .map((key) => {
      const [min, max, step] = inputRanges[key];
      return `
        <div class="field">
          <label for="${key}">${data.featureNames[key]}</label>
          <input id="${key}" name="${key}" type="number" min="${min}" max="${max}" step="${step}" value="${defaultInput[key]}" />
        </div>
      `;
    })
    .join("");
  form.insertAdjacentHTML(
    "beforeend",
    `
      <div class="form-actions">
        <button type="submit">Dự đoán</button>
        <button class="secondary" type="button" id="resetPredict">Đặt lại</button>
      </div>
    `,
  );

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = readFormValues();
    byId("predictionCard").innerHTML = `
      <span>Kết quả</span>
      <strong>Đang dự đoán...</strong>
      <p>Đang gọi Python backend tại ${API_BASE}.</p>
    `;

    try {
      renderPrediction(await predictWithBackend(values));
    } catch (error) {
      const fallback = scoreInput(values);
      fallback.source = "frontend";
      renderPrediction(fallback);
    }
  });

  byId("resetPredict").addEventListener("click", () => {
    for (const [key, value] of Object.entries(defaultInput)) {
      document.querySelector(`[name="${key}"]`).value = value;
    }
    const result = scoreInput(defaultInput);
    result.source = "frontend";
    renderPrediction(result);
  });

  const initial = scoreInput(defaultInput);
  initial.source = "frontend";
  renderPrediction(initial);
}

function initSampleTable() {
  const columns = [...data.features, "loai_giac_mo"];
  let filteredRows = [...data.sampleRows];
  let currentPage = 1;
  let pageSize = Number(byId("pageSize").value);

  byId("sampleHead").innerHTML = `
    <tr>
      ${columns.map((col) => `<th>${data.featureNames[col] || "Nhãn"}</th>`).join("")}
    </tr>
  `;

  const renderRows = () => {
    const totalPages = Math.max(1, Math.ceil(filteredRows.length / pageSize));
    currentPage = Math.min(currentPage, totalPages);
    const start = (currentPage - 1) * pageSize;
    const rows = filteredRows.slice(start, start + pageSize);

    byId("sampleBody").innerHTML = rows
      .map(
        (row) => `
          <tr>
            ${data.features.map((col) => `<td>${row[col]}</td>`).join("")}
            <td><strong>${data.labels[row.loai_giac_mo]}</strong></td>
          </tr>
        `,
      )
      .join("");

    const from = filteredRows.length ? start + 1 : 0;
    const to = Math.min(start + pageSize, filteredRows.length);
    byId("pageInfo").textContent = `${from}-${to} / ${filteredRows.length} dòng`;
    byId("prevPage").disabled = currentPage <= 1;
    byId("nextPage").disabled = currentPage >= totalPages;
  };

  const applyFilter = () => {
    const term = byId("searchInput").value.trim().toLowerCase();
    filteredRows = !term
      ? [...data.sampleRows]
      : data.sampleRows.filter((row) =>
          `${Object.values(row).join(" ")} ${data.labels[row.loai_giac_mo]}`.toLowerCase().includes(term),
        );
    currentPage = 1;
    renderRows();
  };

  renderRows();

  byId("searchInput").addEventListener("input", (event) => {
    applyFilter();
  });

  byId("clearSearch").addEventListener("click", () => {
    byId("searchInput").value = "";
    applyFilter();
  });

  byId("pageSize").addEventListener("change", (event) => {
    pageSize = Number(event.target.value);
    currentPage = 1;
    renderRows();
  });

  byId("prevPage").addEventListener("click", () => {
    currentPage -= 1;
    renderRows();
  });

  byId("nextPage").addEventListener("click", () => {
    currentPage += 1;
    renderRows();
  });
}

function initTabsMenu() {
  const links = [...document.querySelectorAll(".tab-link")];
  const sections = links
    .map((link) => document.getElementById(link.dataset.tab))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach((link) => {
      const active = link.dataset.tab === id;
      link.classList.toggle("active", active);
      link.setAttribute("aria-selected", String(active));
    });
  };

  links.forEach((link) => {
    link.addEventListener("click", () => setActive(link.dataset.tab));
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.35, 0.6] },
  );

  sections.forEach((section) => observer.observe(section));
}

initOverview();
initQuickInsights();
initDistribution();
initModels();
initFeatures();
initCharts();
initImageLightbox();
initPredictor();
initSampleTable();
initTabsMenu();
