import React from "react";

import { Card } from "../components/Card";

export const Favorites = ({
	favorites,
	products,
	setFavorites,
	basket,
	setBasket,
}) => {
	return (
		<main className="main">
			<div className="main__header">
				<h3>Мои закладки</h3>
			</div>
			<div className="main__content">
				{favorites.length > 0
					? products.map(
							(item) =>
								favorites.includes(item._id) && (
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
								)
					  )
					: (
						<div className="full-size">
							<img src="./assets/img/favorites/emoji_1.png" alt="Emoji Image" />
							<h4>Закладок нет :(</h4>
							<p>Вы ничего не добавляли в закладки</p>

						</div>
					)}
			</div>
		</main>
	);
};
