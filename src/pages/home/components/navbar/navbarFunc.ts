//redirect to url
function redirect(str: string) {
  return () => alert("redirecting to " + str);
}

export {redirect};