const status = document.querySelector('#status');

// ปุ่ม Say Hello (จากโจทย์ต้นแบบ)
document.querySelector('#helloBtn').addEventListener('click', () => {
  status.textContent = 'Hello from GitHub Pages!';
});

// Exercise 3: ปุ่มเปลี่ยนข้อความ (วนข้อความไปเรื่อย ๆ)
const messages = [
  'ยินดีต้อนรับสู่เว็บไซต์ของฉัน 👋',
  'เว็บนี้ Deploy อัตโนมัติด้วย GitHub Actions ⚙️',
  'แก้โค้ด → push → เว็บอัปเดตเอง 🚀',
];
let msgIndex = 0;
document.querySelector('#msgBtn').addEventListener('click', () => {
  status.textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
});

// Exercise 3: Toggle Theme (Light / Dark) และจำค่าที่เลือกไว้
const root = document.documentElement;
const themeBtn = document.querySelector('#themeBtn');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeBtn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
}

let saved = 'light';
try { saved = localStorage.getItem('theme') || 'light'; } catch (e) {}
applyTheme(saved);

themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});