import React, { Fragment } from "react";
import "./categorynavBar.css";
const CategoryNavBar = () => {
    return (
        <Fragment>
            <div class="category-navbar" style={{
            background: 'rgb(36,0,35)',
            background: 'linear-gradient(90deg, hsla(211, 66%, 87%, 1) 0%, hsla(348, 67%, 88%, 1) 50%, hsla(272, 26%, 72%, 1) 100%)'
        }}>
                <a href="#category1" class="category-item">BOOKS</a>
                <a href="#category2" class="category-item">ELECTRONICS</a>
                <a href="#category3" class="category-item">GADGETS</a>
                <a href="#category3" class="category-item">HEALTH AND BEAUTY</a>
                <a href="#category3" class="category-item">FURNITURE & DECOR</a>
            </div>
        </Fragment>
    )
}
export default CategoryNavBar;