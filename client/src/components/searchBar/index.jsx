
export const SearchBar = ({ searchQuery, setSearchQuery }) => {

    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="search..."
                className="blogInput"
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                }}
            />
        </div>
    );
};

