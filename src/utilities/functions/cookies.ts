//create cookie
export function setCookie(cname: string, cvalue: string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

//get cookie contents
export function getCookie(cname: string) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//delete cookie
export function deleteCookie(cname: string) {
  const d = new Date();
  d.setTime(d.getTime() - (1*24*60*60*1000));
  const expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
}

//check if cookie exists
export function checkCookie(cname: string){
  const c = getCookie(cname);
  if(c){
    return true;
  } else {
    return false;
  }
}