export default (href) => {
  document.querySelector("link[rel='shortcut icon']").remove()
  const newicon = document.createElement('link') 
  newicon.href = href;
  newicon.rel ='shortcut icon';
  document.getElementsByTagName('head')[0].appendChild(newicon);
}
