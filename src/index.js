function setCookie(name, value, options = { expires: 3600 }) {
  document.cookie = `${name}=${value};expires=${new Date(Date.now() + options.expires)}`;
}

function getCookie(name) {
  const c = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return c ? c[2] : undefined;
}

function cookieExists(name) {
  return typeof getCookie(name) !== 'undefined';
}

function getAllCookies() {
  return document.cookie;
}

function removeCookie(name) {
  document.cookie = `${name}=;expires=0`;
}

export default { setCookie, getCookie, getAllCookies, cookieExists, removeCookie };
