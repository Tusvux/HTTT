# TGMT Dream Prediction Frontend

Frontend tĩnh để xem trực tiếp số liệu dự án `tu/dream_prediction`.

## Chạy local

```bash
cd F:\TGMT\apps\frontend
python serve.py
```

Mở:

```text
http://127.0.0.1:5174
```

## Chạy cùng backend model thật

Mở thêm terminal thứ hai:

```bash
cd F:\TGMT\apps\backend
python server.py
```

Khi backend chạy ở `http://127.0.0.1:8000`, form dự đoán trên frontend sẽ gọi model `mo_hinh_tot_nhat_vn.pkl` thật. Nếu backend không chạy, frontend tự fallback về scoring rule mô phỏng.

## Dữ liệu

- `data.js`: snapshot dữ liệu từ `dream_data_vn.csv`, model ranking và sample rows.
- `assets/`: ảnh biểu đồ được copy từ `tu/dream_prediction/reports/figures`.

Nếu train lại model hoặc tạo lại dữ liệu, cần sinh lại `data.js` và copy lại ảnh mới.
