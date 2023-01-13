import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { favoriteEmailList } from "../action";




const EmailBody = () => {
    const [emailBody, setEmailBody] = useState();

    const email = useSelector((state)=>state.emailReducer);

    const getEmails = async(id) => {
        const response = await axios.get(`https://flipkart-email-mock.vercel.app/?id=${id}`);
        if(response.status === 200){
            setEmailBody(response.data);
        }
    }

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


     // readEmail list
     const readEmailList = (id) =>{
        let readList = {};
        let session = window.sessionStorage.getItem('readEmailList');
       
        if(session){
            readList = JSON.parse(session);
        }
        readList[id]=id;
        window.sessionStorage.setItem('readEmailList', JSON.stringify(readList))
     }

     // favorite list
     const favoriteEmailList = (id)=>{
        let favoriteEmailList = {};
        let session = window.sessionStorage.getItem('favoriteEmailList');
       
        if(session){
            favoriteEmailList = JSON.parse(session);
        }
        favoriteEmailList[id]=id;
        window.sessionStorage.setItem('favoriteEmailList', JSON.stringify(favoriteEmailList))
     }

    let favoriteList = window.sessionStorage.getItem("favoriteEmailList");
     if (favoriteList) {favoriteList = JSON.parse(favoriteList);}

     // useEffect for calling function based on state
useEffect(()=>{
    if(email){
        getEmails(email.id);
        readEmailList(email.id)
    }
},[email])



    return (
        <>
        {email ? (      
        <section className="email-body">
        <div className="email-body__left">
        <p className="avtar text-bold">{email.from?.name.charAt(0).toUpperCase()}</p>
        </div>
        <div className="email-body__right">
            <div className="email-body__right--header">
                <div className="email-details">
                    <h1>{email.subject}</h1>
                    <p>{dateTime(email.date)}</p>
                </div>
                <div className="favorite-btn--section"><button className="favorite-btn text-bold" onClick={()=>(favoriteEmailList(email.id))}>
                    Mark as Favorite
                </button>
               
                </div>
               

            </div>
            <div className="email-body__right--content" dangerouslySetInnerHTML={emailBody && {__html: emailBody.body}}>
                 
            </div>

        </div>
    </section>):('')}

    </>
    )
}



export default EmailBody;