//test

export function Blank():JSX.Element {
  function correctRoute() {
    window.location.href = 'home';
  }
  correctRoute();
  return (<></>);
}