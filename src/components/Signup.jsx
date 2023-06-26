import React from "react";
import { Link } from "react-router-dom"

function Signup() {
    return (
        <div className="d-flex_justify-content-center_align-items-center_bg-primary_vh-100">
        <div className="bg-white_p-3_rounded_w-25">
            <h2>Sign-Up</h2>
            <form action="">
                <div className="mb-3">
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" placeholder="Enter Name" className="form-control_rounded-0" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter Email" className="form-control_rounded-0" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" />
                </div>
                <button className="btn_btn-success">Sign Up</button>
                <p>Usted accede a nuestros términos y condiciones</p>
                <Link to="/" className="btn_btn-default_border">Login</Link>
            </form>
        </div>
    </div>
    )
}

export default Signup