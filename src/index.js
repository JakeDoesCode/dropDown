// const menuBtn = document.getElementById('menuBtn');
// menuBtn.addEventListener('click', () => {
//   menuBtn.classList.toggle('active');
//   const options = document.getElementById('options');
//   options.classList.toggle('hidden');
// });

function createButton(container) {
  const menuBtn = document.createElement('div');
  menuBtn.setAttribute('id', 'menuBtn');
  container.appendChild(menuBtn);
  const btnImg = document.createElement('img');
  btnImg.setAttribute('src', '/src/assets/prince.jpeg');
  btnImg.setAttribute('style', 'width: 100px; height: 100px');
  btnImg.classList.add('image');
  menuBtn.appendChild(btnImg);
  const options = document.createElement('div');
  options.setAttribute('id', 'options');
  options.classList.add('hidden');
  container.appendChild(options);
  const settings = document.createElement('div');
  settings.classList.add('optionBtn');
  options.appendChild(settings);
  const settingsImg = document.createElement('span');
  settingsImg.classList.add('material-symbols-outlined');
  settingsImg.textContent = 'settings';
  settings.appendChild(settingsImg);
  const settingsName = document.createElement('span');
  settingsName.classList.add('name');
  settingsName.textContent = 'Settings';
  settings.appendChild(settingsName);
  const mode = document.createElement('div');
  mode.classList.add('optionBtn');
  options.appendChild(mode);
  const modeImg = document.createElement('span');
  modeImg.classList.add('material-symbols-outlined');
  modeImg.textContent = 'light_mode';
  mode.appendChild(modeImg);
  const modeName = document.createElement('span');
  modeName.classList.add('name');
  modeName.textContent = 'Light Mode';
  mode.appendChild(modeName);
  const logOut = document.createElement('div');
  logOut.classList.add('optionBtn');
  options.appendChild(logOut);
  const logOutImg = document.createElement('span');
  logOutImg.classList.add('material-symbols-outlined');
  logOutImg.textContent = 'logout';
  logOut.appendChild(logOutImg);
  const logOutName = document.createElement('span');
  logOutName.classList.add('name');
  logOutName.textContent = 'Log Out';
  logOut.appendChild(logOutName);
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    options.classList.toggle('hidden');
  });
}
createButton(document.getElementById('dropDown'));
