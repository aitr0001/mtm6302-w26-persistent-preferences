const items = ['Red', 'Blue', 'Green', 'Orange', 'Purple'];

const themeSelect = document.getElementById('themeSelect');
const styleSelect = document.getElementById('styleSelect');
const itemList = document.getElementById('itemList');

function buildList() {
  itemList.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    itemList.appendChild(li);
  });
}

function applyTheme(theme) {
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

function applyListStyle(style) {
  itemList.className = style;
  localStorage.setItem('listStyle', style);
}

function loadPreferences() {
  const savedTheme = localStorage.getItem('theme');
  const savedStyle = localStorage.getItem('listStyle');
  
  if (savedTheme) {
    themeSelect.value = savedTheme;
    applyTheme(savedTheme);
  } else {
    applyTheme('light');
  }
  
  if (savedStyle) {
    styleSelect.value = savedStyle;
    applyListStyle(savedStyle);
  } else {
    applyListStyle('expanded');
  }
}

buildList();
loadPreferences();

themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));
styleSelect.addEventListener('change', (e) => applyListStyle(e.target.value));