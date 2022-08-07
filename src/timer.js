import setFavicon from './setFavicon';

const notiFaviconHref = 'https://raw.githubusercontent.com/bubn4/hwm-forum-tools/master/assets/favicon-noti.ico';

export default function setTimer(i) {
  const el = document.getElementById('tools-counter-number');
  const spinner = document.getElementById('spinner');
  if(!el || !spinner) return;
  spinner.style.display = 'none';
  el.style.opacity = '1';

  if (window.timer == 0) {
    window.timer = undefined;
  el.style.opacity = '0';
      spinner.style.display = 'inline-block';

    return getNewPosts();
  }

  el.innerHTML = ` ${i}`;
  setTimeout(() => {
    if (i <= 1) {
      getNewPosts();
      el.style.opacity = '0';
      spinner.style.display = 'inline-block';
      return;
    }
    return setTimer(--i);
  }, 1000);
}

function getNewPosts() {
  const headers = new Headers()
  headers.append('Content-Type','text/plain; charset=windows-1251');

  fetch(window.location.href, headers)
    .then(res => res.arrayBuffer())
    .then(parseBuffer)
    .catch((error) => {
      setTimer(20);
    });
}

function parseBuffer(buffer) {
  const decoder = new TextDecoder('windows-1251');
  const content = decoder.decode(buffer);
  const page = document.createElement('div');
  page.innerHTML = content;

  const newTable = page.getElementsByClassName('table3 forum c_darker td_bordered')[0];
  const oldTable = document.getElementsByClassName('table3 forum c_darker td_bordered')[0];
  const newTBody = newTable?.childNodes?.[1];
  const oldTBody = oldTable?.childNodes?.[1];
  const newMessages = newTBody.childNodes.length-oldTBody.childNodes.length;

  const oldPages = [...document.getElementsByTagName('center')].filter(center => center.childNodes?.[0]?.innerText == '1' || center.childNodes?.[0]?.innerText == '<<').at(-1);
  const currPage = [...oldPages.childNodes].find(child => child.localName == 'b')?.innerText;
  const newPages = [...page.getElementsByTagName('center')].filter(center => center.childNodes?.[0]?.innerText == '1' || center.childNodes?.[0]?.innerText == '<<').at(-1);
  const lastPage = [...newPages.childNodes].at(-1).innerText;
  if(lastPage - currPage == 1) {
    window.notiFavicon = true;
    oldPages.className += ' newPage';
  }


  if (newMessages > 0) {
    window.notiFavicon = true;
    window.newMessages = window.newMessages ? 
      newMessages + window.newMessages :
      newMessages;
  }

  newTBody?.childNodes?.forEach((node, i) => {
    if (i >= newTBody?.childNodes?.length - window.newMessages) {
      node.className += ` newMessage`;
    }
  });
  oldTable.innerHTML = newTable.innerHTML;
  if (!document.hasFocus() && window.notiFavicon) { 
    setFavicon(notiFaviconHref);
  }

  const newPis = page.getElementsByClassName('pi'); 
  const oldPis = document.getElementsByClassName('pi'); 
  const newTopPages = newPis[0]?.parentNode;
  const newBottomPages = newPis[newPis.length - 1]?.parentNode;
  const oldTopPages = oldPis[0]?.parentNode;
  const oldBottomPages = oldPis[oldPis.length - 1]?.parentNode;
  oldTopPages.innerHTML = newTopPages.innerHTML;
  oldBottomPages.innerHTML = newBottomPages.innerHTML;


  setTimer(20);
}


