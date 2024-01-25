import { number } from "prop-types";
import React, { Fragment, useState } from "react";
import('./LOGIN.css')

const LogIn = () => {
    return (
        <Fragment>
            <div className="back_">
            <div className="container ">
                <div class="card">
                    <div class="login-box">
                        <p>LOGIN</p>
                        <form>
                            <div class="user-box">
                                <input required="" name="" type="text"/>
                                    <label>EMAIL/PHONE NUMBER</label>
                            </div>
                            <div class="user-box">
                                <input required="" name="" type="password"/>
                                    <label>PASSWORD</label>
                            </div>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Submit
                            </a>
                        </form>
                        <p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
                    </div>
                </div>

            </div>
            </div>
        </Fragment>
    )
};

export default LogIn;