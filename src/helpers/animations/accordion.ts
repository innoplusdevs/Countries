export const accordion = (idCategory:string, idButton:string, idArrow:string) => {
  const category:HTMLElement|null = document.getElementById(idCategory);
  const button:HTMLElement|null = document.getElementById(idButton);
  const arrow:HTMLElement|null = document.getElementById(idArrow);

  if ((category?.className.indexOf("accordion--show")) === -1) {
    category.className = category.className.replace("accordion--hide", "accordion--show");
    category.className = category.className.replace("close", "open");
    button?.classList.replace('close', 'open');
    arrow?.classList.replace('close', 'open');

  } else {
    arrow?.classList.replace('open', 'close');
    button?.classList.replace('open', 'close');
    category?.classList.replace("open", "close");

    setTimeout(() => {
      category?.classList.replace("accordion--show", "accordion--hide");
    }, 350);

  }
}