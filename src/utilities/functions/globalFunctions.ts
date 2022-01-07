//redirect to url
function redirect(str: string) {
  return () => window.location.href = str;
}

//submit login information and send request
function submitLogin() {
  return () => alert('submitted login');
}

//submit register information and send request
function submitRegister() {
  return () => alert('submitted register');
}


export {redirect, submitLogin, submitRegister};