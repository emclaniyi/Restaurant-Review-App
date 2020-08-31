import React from 'react';
import Modal from './modal';
import Ratings from './ratings';

export default function RestaurantModal({
	restaurant,
	showRestaurantModal,
	toggleRestaurantModal
}) {
	return (
		showRestaurantModal && (
			<Modal title={restaurant?.restaurantName} toggleModal={toggleRestaurantModal}>
				<div className="restaurant-modal">
					{/* <img src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${restaurant.position.latitude},${restaurant.position.longitude}
					&fov=80&heading=70&pitch=0
					&key=AIzaSyAkqMXQhMJwYRSvhQ1_-qS_FpV7-NbZFf8`}/> */}

					<div>
						<img
							src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${restaurant?.address}
					&fov=80&heading=70&pitch=0
					&key=AIzaSyAkqMXQhMJwYRSvhQ1_-qS_FpV7-NbZFf8`}
							alt="restaurant"
						/>
						<span style={{ margin: '15px', padding: '15px' }}>{restaurant?.globalRating}</span>
						<Ratings stars={restaurant?.globalRating} />
						<p>{restaurant?.address}</p>
					</div>
					<div>
						<h3>Reviews</h3>
						{restaurant?.reviews.map(review => (
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<p style={{ marginRight: '15px' }}>{review.author_name}</p>
								<p style={{ marginRight: '15px' }}>{review.text.substring(0, 30)}</p>
								<Ratings stars={review.rating} />
							</div>
						))}
					</div>
				</div>
			</Modal>
		)
	);
}
