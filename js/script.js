"use strict"

// код для определения кде комп где татчскрин
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
//Проверка  комп или мобилка  можно посмотреть в разработчике
if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}

//Меню бургер

//созд конст которая будет искать класс .menu__icon
const iconMenu = document.querySelector('.menu__icon'); 
   //созд конст menuBody которая будет искать класс .menu__body
const menuBody = document.querySelector('.menu__body');
//проверка если создалась конст iconMenu работаем дальше
if (iconMenu) {
//событие клик на конст iconMenu
iconMenu.addEventListener("click", function(e) {
   //запрет скролла контента при открытом меню
   document.body.classList.toggle('_lock');
   //добавл класс _active на бургер для анимации в крестик
   iconMenu.classList.toggle('_active');
    //добавл класс _active на меню-боди чтобы выезжало left - 0
   menuBody.classList.toggle('_active');
});
}
//закрытие меню 
   //созд конст menuLinks которая будет искать класс .menu__link
const menuLinks = document.querySelectorAll('.menu__link');
//условие menuLinks существует
if (menuLinks) {
   //циклом перебираем все классы .menu__link
	menuLinks.forEach(menuLink => {
      //вешаем событие клик и функцию
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
      // при клике на конкретный линк
		const menuLink = e.target;
	// при условии что бургер актив
			if (iconMenu.classList.contains('_active')) {
            //удаляем классы и меню боди уезжает
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
		}
	}
