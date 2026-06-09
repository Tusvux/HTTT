window.TGMT_DATA = {
  "generatedAt": "2026-06-09 11:13:45",
  "dataset": {
    "source": "dream_data_vn.csv",
    "rows": 6000,
    "features": 7,
    "classes": 4
  },
  "labels": {
    "0": "\u00c1c m\u1ed9ng",
    "1": "M\u01a1 \u0111\u1eb9p",
    "2": "Ng\u1ee7 s\u00e2u",
    "3": "Kh\u00f4ng m\u01a1"
  },
  "features": [
    "tuoi",
    "gio_ngu",
    "muc_stress",
    "caffeine",
    "phut_tap_luyen",
    "chat_luong_ngu",
    "thoi_gian_man_hinh"
  ],
  "featureNames": {
    "tuoi": "Tu\u1ed5i",
    "gio_ngu": "Gi\u1edd ng\u1ee7",
    "muc_stress": "M\u1ee9c stress",
    "caffeine": "Caffeine",
    "phut_tap_luyen": "Ph\u00fat t\u1eadp luy\u1ec7n",
    "chat_luong_ngu": "Ch\u1ea5t l\u01b0\u1ee3ng ng\u1ee7",
    "thoi_gian_man_hinh": "Th\u1eddi gian m\u00e0n h\u00ecnh"
  },
  "model": {
    "name": "MLPClassifier",
    "bestDisplayName": "Neural Network (MLP)",
    "classes": [
      0,
      1,
      2,
      3
    ],
    "accuracy": 94.0,
    "artifacts": [
      "mo_hinh_tot_nhat_vn.pkl",
      "scaler_vn.pkl",
      "ten_dac_trung_vn.pkl"
    ]
  },
  "distribution": [
    {
      "id": 0,
      "label": "\u00c1c m\u1ed9ng",
      "count": 559,
      "percent": 9.32
    },
    {
      "id": 1,
      "label": "M\u01a1 \u0111\u1eb9p",
      "count": 1948,
      "percent": 32.47
    },
    {
      "id": 2,
      "label": "Ng\u1ee7 s\u00e2u",
      "count": 1209,
      "percent": 20.15
    },
    {
      "id": 3,
      "label": "Kh\u00f4ng m\u01a1",
      "count": 2284,
      "percent": 38.07
    }
  ],
  "featureSummary": [
    {
      "key": "tuoi",
      "name": "Tu\u1ed5i",
      "mean": 43.49,
      "std": 15.14,
      "min": 18.0,
      "max": 69.0
    },
    {
      "key": "gio_ngu",
      "name": "Gi\u1edd ng\u1ee7",
      "mean": 7.0,
      "std": 1.71,
      "min": 4.0,
      "max": 10.0
    },
    {
      "key": "muc_stress",
      "name": "M\u1ee9c stress",
      "mean": 5.01,
      "std": 2.88,
      "min": 0.0,
      "max": 10.0
    },
    {
      "key": "caffeine",
      "name": "Caffeine",
      "mean": 2.02,
      "std": 1.41,
      "min": 0.0,
      "max": 4.0
    },
    {
      "key": "phut_tap_luyen",
      "name": "Ph\u00fat t\u1eadp luy\u1ec7n",
      "mean": 59.36,
      "std": 35.01,
      "min": 0.0,
      "max": 119.0
    },
    {
      "key": "chat_luong_ngu",
      "name": "Ch\u1ea5t l\u01b0\u1ee3ng ng\u1ee7",
      "mean": 5.0,
      "std": 2.89,
      "min": 0.0,
      "max": 10.0
    },
    {
      "key": "thoi_gian_man_hinh",
      "name": "Th\u1eddi gian m\u00e0n h\u00ecnh",
      "mean": 3.97,
      "std": 2.3,
      "min": 0.0,
      "max": 8.0
    }
  ],
  "classProfiles": [
    {
      "id": 0,
      "label": "\u00c1c m\u1ed9ng",
      "count": 559,
      "tuoi": 44.77,
      "gio_ngu": 5.97,
      "muc_stress": 8.46,
      "caffeine": 2.49,
      "phut_tap_luyen": 71.16,
      "chat_luong_ngu": 2.86,
      "thoi_gian_man_hinh": 5.14
    },
    {
      "id": 1,
      "label": "M\u01a1 \u0111\u1eb9p",
      "count": 1948,
      "tuoi": 43.43,
      "gio_ngu": 7.14,
      "muc_stress": 2.54,
      "caffeine": 2.18,
      "phut_tap_luyen": 81.82,
      "chat_luong_ngu": 5.48,
      "thoi_gian_man_hinh": 4.18
    },
    {
      "id": 2,
      "label": "Ng\u1ee7 s\u00e2u",
      "count": 1209,
      "tuoi": 42.98,
      "gio_ngu": 7.85,
      "muc_stress": 7.07,
      "caffeine": 1.46,
      "phut_tap_luyen": 63.7,
      "chat_luong_ngu": 7.44,
      "thoi_gian_man_hinh": 4.1
    },
    {
      "id": 3,
      "label": "Kh\u00f4ng m\u01a1",
      "count": 2284,
      "tuoi": 43.49,
      "gio_ngu": 6.69,
      "muc_stress": 5.18,
      "caffeine": 2.07,
      "phut_tap_luyen": 35.02,
      "chat_luong_ngu": 3.81,
      "thoi_gian_man_hinh": 3.43
    }
  ],
  "ranking": [
    {
      "rank": 1,
      "name": "Neural Network (MLP)",
      "accuracy": 94.0,
      "precision": 92.9,
      "recall": 92.6,
      "f1": 92.7
    },
    {
      "rank": 2,
      "name": "SVM (RBF Kernel)",
      "accuracy": 92.33,
      "precision": 91.0,
      "recall": 90.3,
      "f1": 90.6
    },
    {
      "rank": 3,
      "name": "Gradient Boosting",
      "accuracy": 90.94,
      "precision": 90.3,
      "recall": 87.6,
      "f1": 88.8
    },
    {
      "rank": 4,
      "name": "Logistic Regression",
      "accuracy": 90.67,
      "precision": 90.4,
      "recall": 89.0,
      "f1": 89.7
    },
    {
      "rank": 5,
      "name": "Random Forest",
      "accuracy": 87.94,
      "precision": 86.8,
      "recall": 83.3,
      "f1": 84.8
    },
    {
      "rank": 6,
      "name": "AdaBoost",
      "accuracy": 85.61,
      "precision": 84.2,
      "recall": 82.7,
      "f1": 83.1
    },
    {
      "rank": 7,
      "name": "K-Nearest Neighbors",
      "accuracy": 84.72,
      "precision": 83.1,
      "recall": 80.9,
      "f1": 81.8
    },
    {
      "rank": 8,
      "name": "Naive Bayes",
      "accuracy": 83.22,
      "precision": 80.6,
      "recall": 80.7,
      "f1": 80.7
    },
    {
      "rank": 9,
      "name": "Decision Tree",
      "accuracy": 81.56,
      "precision": 79.4,
      "recall": 78.5,
      "f1": 78.9
    }
  ],
  "sampleRows": [
    {
      "tuoi": 58,
      "gio_ngu": 8.96,
      "muc_stress": 3.6,
      "caffeine": 0,
      "phut_tap_luyen": 68,
      "chat_luong_ngu": 5.36,
      "thoi_gian_man_hinh": 1.84,
      "loai_giac_mo": 2
    },
    {
      "tuoi": 22,
      "gio_ngu": 6.98,
      "muc_stress": 2.46,
      "caffeine": 4,
      "phut_tap_luyen": 57,
      "chat_luong_ngu": 8.99,
      "thoi_gian_man_hinh": 0.65,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 42,
      "gio_ngu": 7.13,
      "muc_stress": 1.23,
      "caffeine": 3,
      "phut_tap_luyen": 73,
      "chat_luong_ngu": 8.0,
      "thoi_gian_man_hinh": 1.48,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 64,
      "gio_ngu": 4.4,
      "muc_stress": 7.15,
      "caffeine": 1,
      "phut_tap_luyen": 84,
      "chat_luong_ngu": 1.96,
      "thoi_gian_man_hinh": 3.75,
      "loai_giac_mo": 0
    },
    {
      "tuoi": 18,
      "gio_ngu": 6.7,
      "muc_stress": 5.73,
      "caffeine": 1,
      "phut_tap_luyen": 17,
      "chat_luong_ngu": 0.24,
      "thoi_gian_man_hinh": 4.1,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 29,
      "gio_ngu": 7.65,
      "muc_stress": 9.71,
      "caffeine": 4,
      "phut_tap_luyen": 51,
      "chat_luong_ngu": 6.81,
      "thoi_gian_man_hinh": 0.51,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 69,
      "gio_ngu": 6.46,
      "muc_stress": 9.33,
      "caffeine": 2,
      "phut_tap_luyen": 89,
      "chat_luong_ngu": 5.33,
      "thoi_gian_man_hinh": 3.77,
      "loai_giac_mo": 0
    },
    {
      "tuoi": 25,
      "gio_ngu": 9.66,
      "muc_stress": 6.5,
      "caffeine": 4,
      "phut_tap_luyen": 114,
      "chat_luong_ngu": 5.13,
      "thoi_gian_man_hinh": 1.85,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 32,
      "gio_ngu": 9.78,
      "muc_stress": 2.0,
      "caffeine": 1,
      "phut_tap_luyen": 19,
      "chat_luong_ngu": 1.19,
      "thoi_gian_man_hinh": 6.26,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 29,
      "gio_ngu": 6.79,
      "muc_stress": 1.38,
      "caffeine": 2,
      "phut_tap_luyen": 25,
      "chat_luong_ngu": 1.65,
      "thoi_gian_man_hinh": 1.36,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 23,
      "gio_ngu": 4.79,
      "muc_stress": 4.99,
      "caffeine": 3,
      "phut_tap_luyen": 58,
      "chat_luong_ngu": 7.98,
      "thoi_gian_man_hinh": 7.45,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 55,
      "gio_ngu": 5.91,
      "muc_stress": 4.32,
      "caffeine": 0,
      "phut_tap_luyen": 48,
      "chat_luong_ngu": 8.79,
      "thoi_gian_man_hinh": 5.61,
      "loai_giac_mo": 2
    },
    {
      "tuoi": 35,
      "gio_ngu": 9.01,
      "muc_stress": 0.56,
      "caffeine": 4,
      "phut_tap_luyen": 19,
      "chat_luong_ngu": 8.51,
      "thoi_gian_man_hinh": 2.29,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 25,
      "gio_ngu": 7.82,
      "muc_stress": 3.88,
      "caffeine": 3,
      "phut_tap_luyen": 74,
      "chat_luong_ngu": 2.6,
      "thoi_gian_man_hinh": 2.76,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 30,
      "gio_ngu": 4.3,
      "muc_stress": 8.37,
      "caffeine": 1,
      "phut_tap_luyen": 118,
      "chat_luong_ngu": 4.1,
      "thoi_gian_man_hinh": 3.71,
      "loai_giac_mo": 0
    },
    {
      "tuoi": 33,
      "gio_ngu": 8.86,
      "muc_stress": 7.68,
      "caffeine": 2,
      "phut_tap_luyen": 55,
      "chat_luong_ngu": 8.54,
      "thoi_gian_man_hinh": 6.01,
      "loai_giac_mo": 2
    },
    {
      "tuoi": 69,
      "gio_ngu": 9.15,
      "muc_stress": 0.58,
      "caffeine": 4,
      "phut_tap_luyen": 13,
      "chat_luong_ngu": 5.39,
      "thoi_gian_man_hinh": 6.89,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 52,
      "gio_ngu": 4.3,
      "muc_stress": 3.94,
      "caffeine": 3,
      "phut_tap_luyen": 93,
      "chat_luong_ngu": 1.33,
      "thoi_gian_man_hinh": 5.89,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 21,
      "gio_ngu": 4.39,
      "muc_stress": 8.77,
      "caffeine": 1,
      "phut_tap_luyen": 104,
      "chat_luong_ngu": 3.3,
      "thoi_gian_man_hinh": 2.72,
      "loai_giac_mo": 0
    },
    {
      "tuoi": 47,
      "gio_ngu": 9.45,
      "muc_stress": 0.01,
      "caffeine": 1,
      "phut_tap_luyen": 77,
      "chat_luong_ngu": 7.57,
      "thoi_gian_man_hinh": 2.07,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 35,
      "gio_ngu": 8.45,
      "muc_stress": 5.43,
      "caffeine": 0,
      "phut_tap_luyen": 118,
      "chat_luong_ngu": 2.74,
      "thoi_gian_man_hinh": 4.74,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 57,
      "gio_ngu": 8.34,
      "muc_stress": 1.27,
      "caffeine": 3,
      "phut_tap_luyen": 116,
      "chat_luong_ngu": 4.16,
      "thoi_gian_man_hinh": 4.29,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 57,
      "gio_ngu": 4.54,
      "muc_stress": 9.11,
      "caffeine": 0,
      "phut_tap_luyen": 17,
      "chat_luong_ngu": 2.05,
      "thoi_gian_man_hinh": 3.6,
      "loai_giac_mo": 0
    },
    {
      "tuoi": 23,
      "gio_ngu": 8.87,
      "muc_stress": 5.34,
      "caffeine": 4,
      "phut_tap_luyen": 40,
      "chat_luong_ngu": 3.32,
      "thoi_gian_man_hinh": 7.18,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 44,
      "gio_ngu": 9.0,
      "muc_stress": 2.52,
      "caffeine": 2,
      "phut_tap_luyen": 74,
      "chat_luong_ngu": 4.08,
      "thoi_gian_man_hinh": 0.48,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 41,
      "gio_ngu": 8.05,
      "muc_stress": 7.74,
      "caffeine": 0,
      "phut_tap_luyen": 28,
      "chat_luong_ngu": 8.89,
      "thoi_gian_man_hinh": 6.36,
      "loai_giac_mo": 2
    },
    {
      "tuoi": 63,
      "gio_ngu": 9.08,
      "muc_stress": 5.4,
      "caffeine": 3,
      "phut_tap_luyen": 63,
      "chat_luong_ngu": 5.64,
      "thoi_gian_man_hinh": 6.49,
      "loai_giac_mo": 2
    },
    {
      "tuoi": 35,
      "gio_ngu": 8.68,
      "muc_stress": 1.23,
      "caffeine": 4,
      "phut_tap_luyen": 47,
      "chat_luong_ngu": 9.59,
      "thoi_gian_man_hinh": 7.74,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 34,
      "gio_ngu": 6.65,
      "muc_stress": 8.69,
      "caffeine": 2,
      "phut_tap_luyen": 36,
      "chat_luong_ngu": 0.2,
      "thoi_gian_man_hinh": 4.15,
      "loai_giac_mo": 0
    },
    {
      "tuoi": 23,
      "gio_ngu": 7.69,
      "muc_stress": 3.98,
      "caffeine": 2,
      "phut_tap_luyen": 102,
      "chat_luong_ngu": 5.68,
      "thoi_gian_man_hinh": 4.9,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 62,
      "gio_ngu": 9.83,
      "muc_stress": 8.73,
      "caffeine": 4,
      "phut_tap_luyen": 46,
      "chat_luong_ngu": 9.61,
      "thoi_gian_man_hinh": 1.48,
      "loai_giac_mo": 2
    },
    {
      "tuoi": 22,
      "gio_ngu": 8.02,
      "muc_stress": 9.57,
      "caffeine": 2,
      "phut_tap_luyen": 33,
      "chat_luong_ngu": 7.54,
      "thoi_gian_man_hinh": 1.23,
      "loai_giac_mo": 2
    },
    {
      "tuoi": 64,
      "gio_ngu": 7.1,
      "muc_stress": 6.69,
      "caffeine": 1,
      "phut_tap_luyen": 104,
      "chat_luong_ngu": 9.23,
      "thoi_gian_man_hinh": 6.89,
      "loai_giac_mo": 2
    },
    {
      "tuoi": 26,
      "gio_ngu": 5.02,
      "muc_stress": 2.55,
      "caffeine": 2,
      "phut_tap_luyen": 53,
      "chat_luong_ngu": 0.37,
      "thoi_gian_man_hinh": 4.28,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 45,
      "gio_ngu": 6.34,
      "muc_stress": 4.02,
      "caffeine": 0,
      "phut_tap_luyen": 68,
      "chat_luong_ngu": 3.61,
      "thoi_gian_man_hinh": 5.54,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 60,
      "gio_ngu": 5.44,
      "muc_stress": 0.76,
      "caffeine": 0,
      "phut_tap_luyen": 22,
      "chat_luong_ngu": 1.28,
      "thoi_gian_man_hinh": 1.22,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 57,
      "gio_ngu": 9.23,
      "muc_stress": 3.63,
      "caffeine": 4,
      "phut_tap_luyen": 113,
      "chat_luong_ngu": 3.09,
      "thoi_gian_man_hinh": 4.38,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 62,
      "gio_ngu": 5.15,
      "muc_stress": 4.5,
      "caffeine": 3,
      "phut_tap_luyen": 67,
      "chat_luong_ngu": 6.64,
      "thoi_gian_man_hinh": 0.5,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 18,
      "gio_ngu": 4.37,
      "muc_stress": 3.18,
      "caffeine": 0,
      "phut_tap_luyen": 87,
      "chat_luong_ngu": 5.36,
      "thoi_gian_man_hinh": 0.12,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 21,
      "gio_ngu": 5.41,
      "muc_stress": 1.69,
      "caffeine": 2,
      "phut_tap_luyen": 66,
      "chat_luong_ngu": 8.97,
      "thoi_gian_man_hinh": 1.6,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 22,
      "gio_ngu": 4.51,
      "muc_stress": 8.41,
      "caffeine": 1,
      "phut_tap_luyen": 14,
      "chat_luong_ngu": 4.51,
      "thoi_gian_man_hinh": 6.78,
      "loai_giac_mo": 0
    },
    {
      "tuoi": 26,
      "gio_ngu": 9.2,
      "muc_stress": 6.73,
      "caffeine": 3,
      "phut_tap_luyen": 14,
      "chat_luong_ngu": 5.66,
      "thoi_gian_man_hinh": 6.11,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 19,
      "gio_ngu": 5.65,
      "muc_stress": 5.97,
      "caffeine": 1,
      "phut_tap_luyen": 66,
      "chat_luong_ngu": 4.43,
      "thoi_gian_man_hinh": 3.57,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 60,
      "gio_ngu": 8.72,
      "muc_stress": 8.77,
      "caffeine": 4,
      "phut_tap_luyen": 15,
      "chat_luong_ngu": 7.95,
      "thoi_gian_man_hinh": 0.36,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 65,
      "gio_ngu": 4.67,
      "muc_stress": 1.2,
      "caffeine": 4,
      "phut_tap_luyen": 72,
      "chat_luong_ngu": 0.38,
      "thoi_gian_man_hinh": 7.79,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 25,
      "gio_ngu": 6.02,
      "muc_stress": 5.73,
      "caffeine": 1,
      "phut_tap_luyen": 44,
      "chat_luong_ngu": 6.1,
      "thoi_gian_man_hinh": 4.19,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 34,
      "gio_ngu": 8.8,
      "muc_stress": 6.28,
      "caffeine": 0,
      "phut_tap_luyen": 25,
      "chat_luong_ngu": 8.88,
      "thoi_gian_man_hinh": 7.34,
      "loai_giac_mo": 2
    },
    {
      "tuoi": 66,
      "gio_ngu": 7.89,
      "muc_stress": 9.56,
      "caffeine": 4,
      "phut_tap_luyen": 111,
      "chat_luong_ngu": 8.33,
      "thoi_gian_man_hinh": 6.59,
      "loai_giac_mo": 2
    },
    {
      "tuoi": 60,
      "gio_ngu": 7.28,
      "muc_stress": 5.47,
      "caffeine": 4,
      "phut_tap_luyen": 50,
      "chat_luong_ngu": 3.99,
      "thoi_gian_man_hinh": 2.17,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 20,
      "gio_ngu": 7.12,
      "muc_stress": 8.52,
      "caffeine": 3,
      "phut_tap_luyen": 4,
      "chat_luong_ngu": 0.88,
      "thoi_gian_man_hinh": 6.33,
      "loai_giac_mo": 0
    },
    {
      "tuoi": 22,
      "gio_ngu": 7.55,
      "muc_stress": 8.87,
      "caffeine": 2,
      "phut_tap_luyen": 117,
      "chat_luong_ngu": 4.28,
      "thoi_gian_man_hinh": 4.77,
      "loai_giac_mo": 2
    },
    {
      "tuoi": 27,
      "gio_ngu": 6.92,
      "muc_stress": 7.02,
      "caffeine": 4,
      "phut_tap_luyen": 107,
      "chat_luong_ngu": 3.57,
      "thoi_gian_man_hinh": 2.09,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 44,
      "gio_ngu": 5.32,
      "muc_stress": 4.45,
      "caffeine": 4,
      "phut_tap_luyen": 58,
      "chat_luong_ngu": 3.85,
      "thoi_gian_man_hinh": 7.54,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 68,
      "gio_ngu": 9.57,
      "muc_stress": 2.86,
      "caffeine": 3,
      "phut_tap_luyen": 66,
      "chat_luong_ngu": 9.04,
      "thoi_gian_man_hinh": 1.32,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 59,
      "gio_ngu": 6.63,
      "muc_stress": 4.68,
      "caffeine": 2,
      "phut_tap_luyen": 61,
      "chat_luong_ngu": 9.0,
      "thoi_gian_man_hinh": 0.7,
      "loai_giac_mo": 2
    },
    {
      "tuoi": 38,
      "gio_ngu": 5.31,
      "muc_stress": 4.79,
      "caffeine": 0,
      "phut_tap_luyen": 79,
      "chat_luong_ngu": 8.44,
      "thoi_gian_man_hinh": 2.81,
      "loai_giac_mo": 2
    },
    {
      "tuoi": 33,
      "gio_ngu": 4.05,
      "muc_stress": 1.3,
      "caffeine": 2,
      "phut_tap_luyen": 37,
      "chat_luong_ngu": 5.97,
      "thoi_gian_man_hinh": 1.56,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 61,
      "gio_ngu": 9.71,
      "muc_stress": 4.37,
      "caffeine": 4,
      "phut_tap_luyen": 64,
      "chat_luong_ngu": 0.12,
      "thoi_gian_man_hinh": 0.47,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 27,
      "gio_ngu": 7.27,
      "muc_stress": 0.08,
      "caffeine": 2,
      "phut_tap_luyen": 113,
      "chat_luong_ngu": 0.54,
      "thoi_gian_man_hinh": 5.8,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 20,
      "gio_ngu": 6.76,
      "muc_stress": 7.23,
      "caffeine": 0,
      "phut_tap_luyen": 67,
      "chat_luong_ngu": 5.55,
      "thoi_gian_man_hinh": 0.23,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 40,
      "gio_ngu": 9.39,
      "muc_stress": 1.59,
      "caffeine": 0,
      "phut_tap_luyen": 110,
      "chat_luong_ngu": 8.47,
      "thoi_gian_man_hinh": 7.5,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 69,
      "gio_ngu": 5.92,
      "muc_stress": 3.83,
      "caffeine": 1,
      "phut_tap_luyen": 83,
      "chat_luong_ngu": 4.42,
      "thoi_gian_man_hinh": 5.03,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 68,
      "gio_ngu": 8.85,
      "muc_stress": 0.12,
      "caffeine": 4,
      "phut_tap_luyen": 10,
      "chat_luong_ngu": 3.97,
      "thoi_gian_man_hinh": 0.4,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 62,
      "gio_ngu": 4.01,
      "muc_stress": 1.1,
      "caffeine": 0,
      "phut_tap_luyen": 59,
      "chat_luong_ngu": 6.82,
      "thoi_gian_man_hinh": 2.58,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 18,
      "gio_ngu": 7.69,
      "muc_stress": 1.01,
      "caffeine": 1,
      "phut_tap_luyen": 9,
      "chat_luong_ngu": 4.52,
      "thoi_gian_man_hinh": 6.2,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 47,
      "gio_ngu": 4.67,
      "muc_stress": 2.9,
      "caffeine": 0,
      "phut_tap_luyen": 45,
      "chat_luong_ngu": 3.89,
      "thoi_gian_man_hinh": 5.13,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 56,
      "gio_ngu": 9.41,
      "muc_stress": 4.55,
      "caffeine": 2,
      "phut_tap_luyen": 109,
      "chat_luong_ngu": 6.84,
      "thoi_gian_man_hinh": 4.33,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 30,
      "gio_ngu": 4.81,
      "muc_stress": 3.65,
      "caffeine": 2,
      "phut_tap_luyen": 41,
      "chat_luong_ngu": 3.63,
      "thoi_gian_man_hinh": 6.2,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 37,
      "gio_ngu": 5.34,
      "muc_stress": 2.61,
      "caffeine": 0,
      "phut_tap_luyen": 34,
      "chat_luong_ngu": 3.2,
      "thoi_gian_man_hinh": 1.34,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 52,
      "gio_ngu": 7.89,
      "muc_stress": 2.67,
      "caffeine": 1,
      "phut_tap_luyen": 21,
      "chat_luong_ngu": 9.65,
      "thoi_gian_man_hinh": 2.01,
      "loai_giac_mo": 2
    },
    {
      "tuoi": 57,
      "gio_ngu": 4.82,
      "muc_stress": 4.85,
      "caffeine": 2,
      "phut_tap_luyen": 30,
      "chat_luong_ngu": 8.9,
      "thoi_gian_man_hinh": 3.66,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 60,
      "gio_ngu": 4.66,
      "muc_stress": 7.14,
      "caffeine": 1,
      "phut_tap_luyen": 96,
      "chat_luong_ngu": 0.61,
      "thoi_gian_man_hinh": 1.06,
      "loai_giac_mo": 0
    },
    {
      "tuoi": 21,
      "gio_ngu": 5.75,
      "muc_stress": 6.31,
      "caffeine": 4,
      "phut_tap_luyen": 66,
      "chat_luong_ngu": 6.04,
      "thoi_gian_man_hinh": 3.58,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 38,
      "gio_ngu": 9.11,
      "muc_stress": 6.26,
      "caffeine": 4,
      "phut_tap_luyen": 106,
      "chat_luong_ngu": 0.36,
      "thoi_gian_man_hinh": 6.13,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 57,
      "gio_ngu": 9.06,
      "muc_stress": 1.24,
      "caffeine": 1,
      "phut_tap_luyen": 81,
      "chat_luong_ngu": 4.89,
      "thoi_gian_man_hinh": 2.64,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 64,
      "gio_ngu": 8.93,
      "muc_stress": 4.93,
      "caffeine": 0,
      "phut_tap_luyen": 27,
      "chat_luong_ngu": 4.35,
      "thoi_gian_man_hinh": 1.61,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 65,
      "gio_ngu": 8.42,
      "muc_stress": 4.76,
      "caffeine": 0,
      "phut_tap_luyen": 92,
      "chat_luong_ngu": 3.94,
      "thoi_gian_man_hinh": 3.68,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 67,
      "gio_ngu": 5.97,
      "muc_stress": 5.47,
      "caffeine": 0,
      "phut_tap_luyen": 33,
      "chat_luong_ngu": 0.22,
      "thoi_gian_man_hinh": 7.56,
      "loai_giac_mo": 3
    },
    {
      "tuoi": 63,
      "gio_ngu": 4.92,
      "muc_stress": 1.08,
      "caffeine": 2,
      "phut_tap_luyen": 93,
      "chat_luong_ngu": 5.55,
      "thoi_gian_man_hinh": 0.85,
      "loai_giac_mo": 1
    },
    {
      "tuoi": 27,
      "gio_ngu": 5.54,
      "muc_stress": 3.55,
      "caffeine": 4,
      "phut_tap_luyen": 12,
      "chat_luong_ngu": 0.63,
      "thoi_gian_man_hinh": 1.68,
      "loai_giac_mo": 3
    }
  ],
  "charts": [
    {
      "title": "Ph\u00e2n b\u1ed1 \u0111\u1ed9 tu\u1ed5i",
      "file": "hinh_4_1_phan_bo_do_tuoi.png"
    },
    {
      "title": "Ph\u00e2n b\u1ed1 th\u1eddi l\u01b0\u1ee3ng ng\u1ee7",
      "file": "hinh_4_2_phan_bo_thoi_luong_ngu.png"
    },
    {
      "title": "Ma tr\u1eadn t\u01b0\u01a1ng quan",
      "file": "ma_tran_tuong_quan.png"
    },
    {
      "title": "So s\u00e1nh thu\u1eadt to\u00e1n",
      "file": "bieu_do_so_sanh_thuat_toan.png"
    },
    {
      "title": "B\u1ea3ng so s\u00e1nh thu\u1eadt to\u00e1n",
      "file": "bang_4_1_so_sanh_thuat_toan.png"
    },
    {
      "title": "Gradient Boosting analysis",
      "file": "hinh_4_3_gradient_boosting_analysis.png"
    },
    {
      "title": "Neural Network analysis",
      "file": "hinh_4_4_neural_network_analysis.png"
    }
  ]
};
