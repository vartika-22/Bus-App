import React from "react";
import Button from 'react-bootstrap/Button'

export default function Booking() {
    return ( 
        <div className="login">
            <form className="form-wrapper">
                <h1 className="h-2"><b>Booking Deatails</b></h1>
                <input type="text" name="Name" placeholder="Enter your Name" /><br/>
                <input type="email" name="email" placeholder="Enter Your Email" /><br/>
                <input type="number" name="number" placeholder="Enter  mobile number" /><br/>
                <input type="text" name="Bpoint" placeholder="Boarding Point" /><br/>
                <input type="text" name="Dpoint" placeholder="Dropping Point" /><br/>
                <input type="text" name="Bpoint" placeholder="Category" /><br/>
                <input type="text" name="Bpoint" placeholder="Boarding Point" /><br/> 

                <button className="submit-btn" onClick={function
                    (){window.print()}}>Submit </button>  


            </form>
        </div>
     );
}
