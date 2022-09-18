import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Basket } from "./components/Basket";
import { Header } from "./components/Header";

import "./App.scss";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import axios from "axios";

function App() {
	const [products, setProducts] = useState([]);
	const [isProductsLoading, setIsProductsLoading] = useState(true);
	const [query, setQuery] = useState("");
	const [favorites, setFavorites] = useState([]);
	const [basket, setBasket] = useState([]);
	const [isBasketOpen, setIsBasketOpen] = useState(false);

	let totalPrice = 0;
	if (basket.length > 0) {
		for (const basketItem of basket) {
			products.map((item) => {
				if (item._id === basketItem) totalPrice += item.price;
				return true;
			});
		}
	}

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(
				"https://63242f8e5c1b435727a285ed.mockapi.io/products"
			);
			setProducts(response.data);
			setIsProductsLoading(false);
		}
		fetchData();
	}, []);

	return (
		<>
			<div className="wrapper">
				<Header
					total={totalPrice}
					setIsBasketOpen={setIsBasketOpen}
					favorites={favorites}
				/>
				<hr />
				<Routes>
					<Route
						path="/"
						element={
							<Home
								query={query}
								setQuery={setQuery}
								products={products}
								favorites={favorites}
								setFavorites={setFavorites}
								basket={basket}
								setBasket={setBasket}
								loading={isProductsLoading}
								setLoading={setIsProductsLoading}
							/>
						}
					/>
					<Route
						path="/favorites"
						element={
							<Favorites
								favorites={favorites}
								products={products}
								setFavorites={setFavorites}
								basket={basket}
								setBasket={setBasket}
							/>
						}
					/>
				</Routes>
			</div>
			<Basket
				isOpen={isBasketOpen}
				basket={basket}
				setBasket={setBasket}
				products={products}
				total={totalPrice}
				isBasketOpen={isBasketOpen}
				setIsBasketOpen={setIsBasketOpen}
			/>
		</>
	);
}

export default App;
