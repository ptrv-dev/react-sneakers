import React from "react";
import { Card } from "../components/Card";
import { CardSkeleton } from "../components/CardSkeleton";
import { Search } from "../components/UI/Search";

export const Home = ({
	query,
	setQuery,
	products,
	favorites,
	setFavorites,
	basket,
	setBasket,
	loading,
	setLoading,
}) => {
	const renderItems = () => {
		if (loading)
			return [...Array(8)].map((item, index) => <CardSkeleton key={index} />);
		return products
			.filter((el) => el.title.toLowerCase().includes(query.toLowerCase()))
			.map((item) => (
				<Card
					key={item._id}
					id={item._id}
					title={item.title}
					price={item.price}
					image={item.imageUrl}
					favorite={favorites}
					setFavorite={setFavorites}
					basket={basket}
					setBasket={setBasket}
				/>
			));
	};
	return (
		<main className="main">
			<div className="main__header">
				{query ? <h3>Поиск по запросу: {query}</h3> : <h3>Все кроссовки</h3>}
				<Search query={query} setQuery={setQuery} />
			</div>
			<div className="main__content">{renderItems()}</div>
		</main>
	);
};
