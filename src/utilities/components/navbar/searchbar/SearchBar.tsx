import "./SearchBar.css"

export function SearchBar(): JSX.Element {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search.." name="search"/>
    </div>
  );
}