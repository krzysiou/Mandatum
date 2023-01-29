import './SearchBar.css';

type Props = {
  placeholder: string,
  name: string,
  password?:boolean,
  onChange?: (value:string)=>void
}

export function SearchBar({placeholder, name, password = false, onChange = () => {
  return;
}}:Props): JSX.Element {
  return (
    <div className="search-bar">
      <input type={password ? 'password' : 'text'} placeholder={placeholder} id={name} onChange={(e)=>onChange(e.target.value)}/>
    </div>
  );
}