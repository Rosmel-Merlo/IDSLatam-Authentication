const keyJwt = "Jwt";
const keyAccess = "Access";
const CLAIM_EXP = "exp";

const getAccessLocalStorage = () => {
  let c = localStorage.getItem(keyAccess);
  if (c) {
    return JSON.parse(c);
  }

  return null;
};

const getToken = () => {
  let c = localStorage.getItem(keyJwt);
  if (c && c != "") {
    return c.substring(1, c.length - 1);
  }
  return null;
};

const getInfoToken = (key) => {
  let s = getToken();

  if (s) {
    let t = JSON.parse(atob(s.split(".")[1]));
    return t[key];
  }

  return null;
};

const removeToken = () => {
  localStorage.removeItem(keyJwt);
};

const expiroToken = () => {
  let exp = new Date(getInfoToken(CLAIM_EXP) * 1000);
  let now = new Date();

  if (exp < now) {
    return true;
  }
  return false;
};

const cambiarUrl = (url) => {
  let urlAux = url?.replace("//", "@");
  return urlAux?.replace(/\//g, "!");
};

const RedireccionUrlIdentidad = (urlBase, email, token, urlLogin) => {
  const urlRedireccin = `${urlBase}/cambiarContrasenia?email=${email}&token=${token}&urlLogin=${urlLogin}`;
  return urlRedireccin;
};
module.exports = {
  getAccessLocalStorage,
  getToken,
  getInfoToken,
  expiroToken,
  removeToken,
  cambiarUrl,
  RedireccionUrlIdentidad,
};