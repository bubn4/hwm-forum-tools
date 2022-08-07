import main from './main';
import onWindowFocus from './onWindowFocus';
import onWindowScroll from './onWindowScroll';

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    onWindowFocus();
  }
});

main();

window.onscroll = onWindowScroll;
