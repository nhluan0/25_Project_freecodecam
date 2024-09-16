const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search_container">
      <input
        type="text"
        placeholder="Enter city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control"
      ></input>
      <button className=" btn btn-md btn-danger" onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default Search
