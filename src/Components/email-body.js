import axios from "axios";
import React, { useEffect, useState } from "react";




const EmailBody = () => {
    const [emailBody, setEmailBody] = useState();

    const getEmails = async(id) => {
        const response = await axios.get(`https://flipkart-email-mock.vercel.app/?id=${id}`);
        if(response.status === 200){
            setEmailBody(response.data);
        }
    }

useEffect(()=>{
    getEmails(2);
},[])



    return (
        <section className="email-body">
            <div className="email-body__left">
            <p className="avtar text-bold">{'F'}</p>
            </div>
            <div className="email-body__right">
                <div className="email-body__right--header">
                    <div className="email-details">
                        <h1>Lorem Ipsum</h1>
                        <p>12/06/2020 10:30 am</p>
                    </div>
                    <div className="favorite-btn--section">
                    <button className="favorite-btn text-bold">
                        Mark as Favorites
                    </button>
                    </div>
                   

                </div>
                <div className="email-body__right--content" dangerouslySetInnerHTML={emailBody && {__html: emailBody.body}}>
                     
                </div>

            </div>
        </section>
    )
}



export default EmailBody;