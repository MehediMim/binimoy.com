import { number } from "prop-types";
import React, { Fragment, useState } from "react";
import('./signup.css')

const SignUp = () => {
    // first_name, middle_name, last_name, phone_number,email, password
    const [first_name, setfirst_name] = useState("");
    const [middle_name, setmiddle_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setphone_number] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitForm = async e => {
        console.log("pressed");
        e.preventDefault();
        try {
            const body = { first_name,middle_name,last_name, phone_number,email,password};
            const response = await fetch("http://localhost:4000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";

        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <Fragment>
            
            <div className="container ">
                <div class="login-box">
                    <p>REGISTRATION</p>

                    <form  onSubmit={onSubmitForm}>
                        <div class="user-box">
                            <input type="email" name="" required="" value={first_name} onChange={e => setfirst_name(e.target.value)} />
                            <label>FIRST NAME</label>
                        </div>
                        <div class="user-box">
                            <input type="email" name="" required="" value={middle_name} onChange={e => setmiddle_name(e.target.value)} />
                            <label>MIDDLE NAME</label>
                        </div>
                        <div class="user-box">
                            <input type="email" name="" required="" value={last_name} onChange={e => setlast_name(e.target.value)} />
                            <label>LAST NAME</label>
                        </div>
                        <div class="user-box">
                            <input type="email" name="" required="" value={email} onChange={e => setEmail(e.target.value)} />
                            <label>EMAIL</label>
                        </div>
                        <div class="user-box">
                            <input type="email" name="" required="" value={phone_number} onChange={e => setphone_number(e.target.value)} />
                            <label>PHONE NUMBER</label>
                        </div>
                        <div class="user-box">
                            <input type="email" name="" required="" value={password} onChange={e => setPassword(e.target.value)} />
                            <label>PASSWORD</label>
                        </div>

                        <center>
                            <a href="#" className="btn">
                                SUBMIT
                                <span></span>
                            </a>
                        </center>


                    </form>
                </div>
            </div>
        </Fragment>
    )
};

export default SignUp;