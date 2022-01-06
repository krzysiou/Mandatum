//test function
function say(str:string) {
  return () => alert(str);
}

export { say }