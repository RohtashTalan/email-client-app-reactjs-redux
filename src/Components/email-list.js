import axios from "axios";
import React, { useEffect, useState } from "react";


const EmailList = () => {
    const [emails, setEmails] = useState();


// convert time into readable format
    const dateTime = (utcSeconds) =>{
        const date = new Date(utcSeconds);
        let month = date.getMonth()+1;
        let day = date.getDate();
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let amPm ='am';

        if(month<10){month='0'+month;}
        if(day<10){day='0'+day;}
        if(minutes<10){minutes='0'+minutes;}

        if(hours > 12){
            hours = hours-12;
            if(hours<10){hours='0'+hours;}
            amPm = 'pm';
        }
        return `${day}/${month}/${year} ${hours}:${minutes}${amPm}`;
    }

    const getEmails = async() => {
        const response = await axios.get('https://flipkart-email-mock.vercel.app');
        if(response.status === 200){
            setEmails(response.data.list);
            dateTime(emails[0].date)
        }
    }

useEffect(()=>{
    getEmails();
},[])


    return(
        <section className="email-list">
            {emails && emails.map((email)=>(
                <div className="card" key={email.id}>
                <div className="card__left">
                    <p className="avtar text-bold">{email.from?.name.charAt(0).toUpperCase()}</p>
                </div>
                <div className="card__right">
                    <div className="email-address">
                        <span>From: </span>
                        <span className="text-bold">{email.from?.name}
                       {" <"+email.from?.email+">"}
                        </span>
                    </div>
                    <div className="email-subject">
                        <span>Subject: </span>
                        <span className="text-bold">{email.subject}</span>
                    </div>
                    <div className="email-preview">
                        <p className="email-preview__text">
                       {email.short_description}
                        </p>
                    </div>
                    <div className="email-timestamp">
                        <span>{dateTime(email.date)}</span>
                    </div>
                </div>

            </div>
            ))}
            
        </section>
    )
}


export default EmailList;