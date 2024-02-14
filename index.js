
   // DOM Elements
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// Apply the cached theme on reload
const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');
if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

// Button Event Handlers

darkButton.onclick = () => {
  body.classList.remove('light');
  body.classList.add('dark');

  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.classList.remove('dark');
  body.classList.add('light');
  body.classList.replace('dark', 'light');

  localStorage.setItem('theme', 'light');
};