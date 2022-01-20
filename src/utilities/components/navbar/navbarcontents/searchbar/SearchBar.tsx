import "./SearchBar.css"

type Props = {
  placeholder: string,
  name: string,
  password?:boolean
}

export function SearchBar({placeholder, name, password}:Props): JSX.Element {
  return (
    <div className="search-bar">
      <input type={password ? "password" : "text"} placeholder={placeholder} id={name}/>
    </div>
  );
}