import React from "react";

export const Search = ({query, setQuery}) => {
	return (
		<div className="main__search">
			<img src="./assets/img/icons/search-icon.svg" alt="Search" />
			<input value={query} onChange={e=> setQuery(e.target.value)} type="text" placeholder="Поиск..." />
		</div>
	);
};
