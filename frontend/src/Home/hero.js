import React, { Fragment } from "react";
import image from '../components/img1.png';
import styles from './hero.module.css'
const Hero = () => {
    return (
        <Fragment>
            <div className={styles.hero}>
                <div className={styles.hero_left}>
                    {/* <h2>Trade With Trust</h2>
                    <div>
                        <div className={styles.hand_hand_icon}>
                            <p>buy,sell &</p>
                        </div>
                        <p>beyond</p>
                        <p>for everyone</p>
                    </div>
                    <div className={styles.hero_latest_btn}>
                        <button className={styles.learn_more}>
                            <span className={styles.circle} aria_hidden="true">
                                <span className={styles.icon}></span>
                            </span>
                            <span className={styles.button_text}>TRADE NOW</span>
                        </button>
                    </div> */}
                    <div class={styles.search_bar_container}>
                        <select class={styles.dropdown}>
                            <option value="option1">Search In</option>
                            <option value="option1">Products</option>
                            <option value="option2">Category</option>
                            <option value="option3">OPTION 3</option>
                        </select>
                        <input type="text" class={styles.search_input} placeholder="Search...">
                            
                        </input>
                            <button type="submit" class={styles.search_button}>SEARCH</button>
                    </div>

                </div>
                <div className={styles.hero_right}>
                    <img src={image} alt="IMAGE"></img>
                </div>
            </div>
        </Fragment>
    )
}
export default Hero;