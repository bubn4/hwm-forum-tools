import isInViewport from './isInViewport';

export default function() {
	if(this.throttle || !window.newMessages) return;
  this.throttle = true;

  const messages = [...document.getElementsByClassName('newMessage')];
  const pages = document.getElementsByClassName('newPage');
  setTimeout(() => {
    pages?.[0]?.classList?.remove('newPage');
    messages.forEach(message => {
      if (isInViewport(message)) {
        message.classList.remove('newMessage');
        if(window.newMessages > 0) {
          window.newMessages--;
        }
      }
    })
		this.throttle = false;
	}, 3000);
}

