import "./SearchBar.css"

type Props = {
  placeholder: string,
  name: string,
}

export function SearchBar({placeholder, name}:Props): JSX.Element {
  return (
    <div className="search-bar">
      <input type="text" placeholder={placeholder} id={name}/>
    </div>
  );
}