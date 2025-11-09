# Playwright Automation (Web + API)

## 🔍 Overview
Project ini menggunakan Playwright untuk automation testing pada Web UI dan API dengan struktur Page Object Model  
Semua test bisa dijalankan dalam satu framework agar konsisten dan mudah dirawat.

---

## 🧩 Assumptions
- Base URL dan endpoint API sudah dapat diakses.
- Data login dan test tersedia di file `testData`.
- API testing menggunakan mock endpoint (`jsonplaceholder.typicode.com`).
- Tidak ada autentikasi kompleks seperti OAuth.

---

## ⚠️ Challenges & Limitations
- Login API bersifat mock, bukan autentikasi nyata.  
- Belum ada environment config (dev/staging/prod).  
- Belum terintegrasi CI/CD atau database validation.

---
### Setup 
git clone https://github.com/amos13super/playwright-doitpay.git
cd playwright-doitplaytest
npm install


### How to running test : 

- npx playwright test : running all scenario 
- npx playwright test src/tests/api : running all scenario API 
- npx playwright test src/tests/web : running all scenario Web 

