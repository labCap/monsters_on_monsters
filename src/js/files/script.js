// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей

const burger = document.querySelector(".icon-menu");
const menu = document.querySelector(".nav");
const searchBtn = document.querySelector(".header__social-item-search");
const searchForm = document.querySelector(".search-form");

searchBtn.addEventListener("click", () => {
	searchForm.classList.toggle("open");
});
burger.addEventListener("click", () => {
	burger.classList.toggle("menu-open");
	menu.classList.toggle("menu-open");
	document.body.classList.toggle("_lock");
});
