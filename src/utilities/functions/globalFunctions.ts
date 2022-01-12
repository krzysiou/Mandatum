//redirect to url
export function redirect(str: string) {
  return () => window.location.href = str;
}

//submit login information and send request
export function submitLogin() {
  return () => alert('submitted login');
}

//submit register information and send request
export function submitRegister() {
  return () => alert('submitted register');
}