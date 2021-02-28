//Essa função abre um menu ao passar o mouse por Sobre
import outsideClick from './outisideClick.js';

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');
  
  dropDownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    })
  });
  
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  };
}

