import axios from "axios";
import React, { useEffect, useState } from "react";
import { BasketCard } from "../BasketCard";

export const Basket = ({
	isOpen,
	total,
	basket,
	setBasket,
	products,
	isBasketOpen,
	setIsBasketOpen,
}) => {
	const [orderId, setOrderId] = useState(0);

	useEffect(() => {
		if (!isBasketOpen && orderId !== 0) setOrderId(0);
	}, [isBasketOpen]);

	const order = async () => {
		const result = await axios.post(
			"https://63242f8e5c1b435727a285ed.mockapi.io/orders",
			{ order: basket }
		);
		setOrderId(result.data.id);
		setBasket([]);
	};
	return (
		<div className={`overlay ${isOpen ? "active" : ""}`}>
			<div className="basket">
				<div className="basket__header">
					<h3 className="basket__title">Корзина</h3>
					<button
						onClick={() => setIsBasketOpen(false)}
						className="basket__close"
					>
						<span></span>
						<span></span>
					</button>
				</div>
				<div
					className={`basket__items ${
						basket.length < 1 ? " content-center" : ""
					}`}
				>
					{basket.length < 1 ? (
						orderId ? (
							<>
								<img
									src="./assets/img/basket/order.jpg"
									alt="Order success"
									className="basket__image"
									width={85}
								/>
								<h4 className="basket__title basket__title_small basket__title_green">
									Заказ оформлен!
								</h4>
								<p className="basket__text">
									Ваш заказ #{orderId} скоро будет передан курьерской доставке
								</p>
								<button
									onClick={() => setIsBasketOpen(false)}
									className="button basket__button button_back"
								>
									<svg
										width="16"
										height="14"
										viewBox="0 0 16 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M14.7144 7L1.00007 7"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M7 13L1 7L7 1"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Вернуться назад
								</button>
							</>
						) : (
							<>
								<img
									src="./assets/img/basket/empty.png"
									alt="Basket is empty"
									className="basket__image"
									width={120}
									height={120}
								/>
								<h4 className="basket__title basket__title_small">
									Корзина пустая
								</h4>
								<p className="basket__text">
									Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
								</p>
								<button
									onClick={() => setIsBasketOpen(false)}
									className="button basket__button button_back"
								>
									<svg
										width="16"
										height="14"
										viewBox="0 0 16 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M14.7144 7L1.00007 7"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M7 13L1 7L7 1"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Вернуться назад
								</button>
							</>
						)
					) : (
						products
							.filter((item) => basket.includes(item._id))
							.map((item) => (
								<BasketCard
									key={item._id}
									id={item._id}
									title={item.title}
									image={item.imageUrl}
									price={item.price}
									setBasket={setBasket}
								/>
							))
					)}
				</div>
				{basket.length > 0 ? (
					<div className="basket__footer footer-basket">
						<div className="footer-basket__row">
							<p className="footer-basket__text">Итого: </p>
							<span></span>
							<p className="footer-basket__text footer-basket__text_strong">
								{total} руб.
							</p>
						</div>
						<div className="footer-basket__row">
							<p className="footer-basket__text">Налог 5%: </p>
							<span></span>
							<p className="footer-basket__text footer-basket__text_strong">
								{Math.round(total * 0.05)} руб.
							</p>
						</div>
						<button onClick={order} className="button footer-basket__button">
							Оформить заказ
							<svg
								width="16"
								height="14"
								viewBox="0 0 16 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.7144 7L1.00007 7"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M7 13L1 7L7 1"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};
