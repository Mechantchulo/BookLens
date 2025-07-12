const Search = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search book here"
        value={searchTerm}
        onChange={onSearchChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearchSubmit();
          }
        }}
      />

      <button onClick={onSearchSubmit}>Search</button>
    </div>
  );
};

export default Search;
