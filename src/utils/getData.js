export function generateUniqKey(length = 32) {
  const chrs = "abcdehkmnpswxzABCDEFGHKMNPQRSTWXZ123456789";
  let str = "";
  for (let i = 0; i < length; i++) {
    const pos = Math.floor(Math.random() * chrs.length);
    str += chrs.substring(pos, pos + 1);
  }
  return str;
}

export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
