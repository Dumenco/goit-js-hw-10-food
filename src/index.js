import './styles.css';

import cartMenuItem from './templates/menu.hbs';
import menu from './data/menu.json';

function menuItemFood(menu) {
	const menuList = document.querySelector('#menu');
	const markup = menu.map((item) => cartMenuItem(item)).join('');
	menuList.insertAdjacentHTML('beforeend', markup);
}

menuItemFood(menu);

const Theme = {
	LIGHT: 'light-theme',
	DARK: 'dark-theme'
};
const input = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');

const currentTheme = localStorage.getItem('theme');

if (currentTheme === Theme.LIGHT) {
	body.classList.add(Theme.LIGHT);
} else {
	body.classList.add(Theme.DARK);
	input.setAttribute('checked', true);
}

input.addEventListener('change', () => {
	body.classList.toggle(Theme.DARK);
	if (body.classList.contains(Theme.DARK)) {
		localStorage.setItem('theme', Theme.DARK);
	} else {
		localStorage.setItem('theme', Theme.LIGHT);
	}
});
