import React from 'react';
import styles from "./Business.module.css";

const businessObj = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};
function Business(){
    return (
        <div className={styles.Business}>
            <div className={styles.image}>
                <img src={businessObj.imageSrc} alt=""/>
            </div>
            <h2>{businessObj.name}</h2>
            <div className={styles.information}>
                <div className={styles.addressSection}>
                    <p>{businessObj.address}</p>
                    <p>{businessObj.city}</p>
                    <p>{businessObj.state} {businessObj.zipCode}</p>
                </div>
                <div className={styles.reviewSection}>
                    <h3>{businessObj.category}</h3>
                    <h3 className={styles.rating}>{`${businessObj.rating} stars`}</h3>
                    <p>{`${businessObj.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    )
}

export default Business;