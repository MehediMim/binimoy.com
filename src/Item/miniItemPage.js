import React, { useRef, useState, useEffect } from "react";
import _mini_miniItemPage from "../Item/_mini_miniItemPage";
import ItemBig from '../itemBig/itemBig'; 
import styles from './miniItemPage.module.css';
import defaultImage from "../Item/itemMini.webp"; 

const HeroCategory = () => {
    const wrapperRef = useRef(null);
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/home/trending'); // Adjust the API URL as needed
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const handleLeftClick = () => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollLeft -= 600; // Adjust based on your layout
        }
    };

    const handleRightClick = () => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollLeft += 600; // Adjust based on your layout
        }
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className={styles.topCategories}>
            <div className={styles.title}>TRENDING NOW</div>
            <div className={styles.wrapperContainer}>
                <div className={`${styles.arrow} ${styles.left_arrow}`} onClick={handleLeftClick}>&#10094;</div>
                <div className={styles.wrapper} ref={wrapperRef}>
                    {items.map((item, index) => (
                        <div className={styles.item} key={index} onClick={() => handleItemClick(item)}>
                            <_mini_miniItemPage
                                item_id={item.item_id} 
                                image={item.image || defaultImage}
                                name={item.name}
                                price={item.price}
                                discount={item.discount}
                                // Include item_id if you need it for _mini_miniItemPage or elsewhere
                            />
                        </div>
                    ))}
                </div>
                <div className={`${styles.arrow} ${styles.right_arrow}`} onClick={handleRightClick}>&#10095;</div>
            </div>
            {selectedItem && (
                <ItemBig item={selectedItem} onClose={() => setSelectedItem(null)} />
            )}
        </div>
    );
};

export default HeroCategory;

