import React from "react";
import styles from '../Item/_mini_miniItemPage.module.css';

// Add item_id in the component's parameters
const _mini_miniItemPage = ({ item_id, image, name, price, discount }) => {
    return (
        <div className={styles.item}>
            {/* Optionally, use item_id in the key or other attributes if necessary */}
            <img src={image} alt={name} className={styles.item_image} />
            <div className={styles.item_details}>
                {/* You can display item_id if needed */}
                <h2 className={styles.item_name}>{item_id}</h2>
                <h2 className={styles.item_name}>{name}</h2>
                <p className={styles.item_price}>Price: ${price}</p>
                <p className={styles.item_discount}>Discount: {discount}%</p>
            </div>
        </div>
    );
};

export default _mini_miniItemPage;

