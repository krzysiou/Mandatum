//redirect to url
function redirect(str: string) {
  return () => window.location.href = str;
}

export {redirect};