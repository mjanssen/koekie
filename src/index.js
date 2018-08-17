function setCookie(name, value, options = { expires: 1, in: 'days' }) {
  const expiryDate = new Date();
  if (options.in === 'hours') expiryDate.setHours(expiryDate.getHours() + options.expires);
  if (options.in === 'days') expiryDate.setDate(expiryDate.getDate() + options.expires);
  if (options.in === 'months') expiryDate.setMonth(expiryDate.getMonth() + options.expires);
  if (options.in === 'years') expiryDate.setFullYear(expiryDate.getFullYear() + options.expires);
  document.cookie = `${name}=${value};expires=${expiryDate.toGMTString()}`;
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
