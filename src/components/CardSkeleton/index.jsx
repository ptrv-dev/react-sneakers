import React from "react";

import "./cardskeleton.scss";

export const CardSkeleton = () => {
	return (
		<div className="skeleton">
			<div className="skeleton__image"></div>
			<div className="skeleton__title"></div>
			<div className="skeleton__subtitle"></div>
			<div className="skeleton__row">
				<div className="skeleton__price"></div>
				<div className="skeleton__button"></div>
			</div>
		</div>
	);
};
