import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openEmail } from "../action";

const EmailList = () => {
  const [emails, setEmails] = useState();
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.emailFilter);

  // convert time into readable format
  const dateTime = (utcSeconds) => {
    const date = new Date(utcSeconds);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let amPm = "am";

    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (hours > 12) {
      hours = hours - 12;
      if (hours < 10) {
        hours = "0" + hours;
      }
      amPm = "pm";
    }
    return `${day}/${month}/${year} ${hours}:${minutes}${amPm}`;
  };

  let readEmailList, favoriteEmailList;
  const fetchSessionStorage = () => {
    readEmailList = window.sessionStorage.getItem("readEmailList");
    if (readEmailList) {
      readEmailList = JSON.parse(readEmailList);
    }
    favoriteEmailList = window.sessionStorage.getItem("favoriteEmailList");
    if (favoriteEmailList) {
      favoriteEmailList = JSON.parse(favoriteEmailList);
    }
  };

  const getEmails = async () => {
    const response = await axios.get("https://flipkart-email-mock.vercel.app");
    if (response.status === 200) {
      setEmails(response.data.list);
    }
  };

  const addSelectedClass = (id) => {
    let element = document.getElementsByClassName("card");
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("opened");
    }
   document.getElementById(`email_${id}`).classList.add("opened");
  };

const renderEmail = () =>{
fetchSessionStorage();
    if(filter === 'Unread'){
      if(readEmailList){
      return(emails.map((email)=>(
        readEmailList[email.id] !== email.id ? 
        (<div className="card" id={'email_'+email.id} key={email.id} onClick={() => {
            dispatch(openEmail(email));
            addSelectedClass(email.id); 
          }} >
          <div className="card__left">
            <p className="avtar text-bold">
              {email.from?.name.charAt(0).toUpperCase()}
            </p>
          </div>
          <div className="card__right">
            <div className="email-address">
              <span>From: </span>
              <span className="text-bold">
                {email.from?.name.charAt(0).toUpperCase() +
                  email.from?.name.slice(1)}
                {" <" + email.from?.email + ">"}
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
        </div>):('')


        ))
        )
                }
                
    }
    if(filter === 'Read'){
      if(readEmailList){
        return(emails.map((email)=>(
            readEmailList[email.id] === email.id ? 
            (<div className="card" id={'email_'+email.id}  key={email.id} onClick={() => {
                dispatch(openEmail(email));
                addSelectedClass(email.id); 
              }} >
              <div className="card__left">
                <p className="avtar text-bold">
                  {email.from?.name.charAt(0).toUpperCase()}
                </p>
              </div>
              <div className="card__right">
                <div className="email-address">
                  <span>From: </span>
                  <span className="text-bold">
                    {email.from?.name.charAt(0).toUpperCase() +
                      email.from?.name.slice(1)}
                    {" <" + email.from?.email + ">"}
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
            </div>):('')
    
    
            ))
            )
          }

          return 'No email in Read';
    }
    if(filter === 'Favorites'){
      if(favoriteEmailList){
        return(emails.map((email)=>(
           favoriteEmailList[email.id] === email.id ? 
            (<div className="card" id={'email_'+email.id}  key={email.id} onClick={() => {
                dispatch(openEmail(email));
                addSelectedClass(email.id); 
              }} >
              <div className="card__left">
                <p className="avtar text-bold">
                  {email.from?.name.charAt(0).toUpperCase()}
                </p>
              </div>
              <div className="card__right">
                <div className="email-address">
                  <span>From: </span>
                  <span className="text-bold">
                    {email.from?.name.charAt(0).toUpperCase() +
                      email.from?.name.slice(1)}
                    {" <" + email.from?.email + ">"}
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
            </div>):('No email in Favourite')
          
    
            )))
       }

       return 'No email in Favourite';
    }

    return(emails.map((email)=>(
        <div className="card"  id={'email_'+email.id} key={email.id} onClick={() => {
            dispatch(openEmail(email));
            addSelectedClass(email.id); 
          }} >
          <div className="card__left">
            <p className="avtar text-bold">
              {email.from?.name.charAt(0).toUpperCase()}
            </p>
          </div>
          <div className="card__right">
            <div className="email-address">
              <span>From: </span>
              <span className="text-bold">
                {email.from?.name.charAt(0).toUpperCase() +
                  email.from?.name.slice(1)}
                {" <" + email.from?.email + ">"}
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

        ))
        )
}

  useEffect(() => {
    getEmails();
  }, [filter]);

  return (
    <>
      <section className="email-list">
        {emails && renderEmail()}
      </section>
    </>
  );
};

export default EmailList;
