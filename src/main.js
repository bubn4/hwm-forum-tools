import setTimer from './timer';
import css from './styles';

export default () => {
  const block = [...document.getElementsByTagName('center')].find(el => el.innerText == 'К списку тем');
  if (!block) return;
  block.childNodes[0].style.textDecoration = 'none';

  const main = document.createElement('div'); 
  main.id = 'tools-main';

  const counterLink = document.createElement('div');
  counterLink.id = 'tools-counter-link';
  counterLink.innerText = 'Получить новые посты:';
  counterLink.onclick = onCounterLinkClick;

  const counterNumber = document.createElement('div');
  counterNumber.id = 'tools-counter-number';

  const spinner = document.createElement('div');
  spinner.className = 'spinner gray animating';
  spinner.id = "spinner";
  const spinnerBlade = document.createElement('div');
  spinnerBlade.className = 'spinner-blade'
  for(let i = 0; i < 8; i++) {
    spinner.appendChild(spinnerBlade.cloneNode(true));
  }

  window.originalFaviconHref = document.querySelector("link[rel='shortcut icon']").href;
  
  main.appendChild(counterLink);
  main.appendChild(counterNumber);
  main.appendChild(spinner);
  block.prepend(main);

  const style = document.createElement("style");
  style.innerText = css;
  document.head.appendChild(style);

  setTimer(3);
}

function onCounterLinkClick() {
  window.timer = 0;
}
