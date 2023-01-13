import React from "react";
import { useDispatch } from "react-redux";
import { filterClicked, openEmail } from "../action";




const EmailFilter = () => {
    const dispatch = useDispatch();

const addSelectedClass = (e) =>{
    let element = document.getElementsByClassName("filter-btn");
    for (let i = 0; i < element.length; i++) {
         element[i].classList.remove("selected");
    }
    e.target.classList.add("selected")
}

    return(
        <>
        <section className="filter">
            <div className="filter-text">
                <span>Filter By :</span>
            </div>
            <div className="filter-btns">
                <span className="filter-btn" onClick={(e)=>{
                    dispatch(filterClicked('Unread'));
                    dispatch(openEmail(null));
                    addSelectedClass(e);
                    }}>Unread</span>
                <span className="filter-btn" onClick={(e)=>{
                    dispatch(filterClicked('Read'));
                    dispatch(openEmail(null));
                    addSelectedClass(e);
                    }}>Read</span>
                <span className="filter-btn" onClick={(e)=>{
                    dispatch(filterClicked('Favorites'));
                    dispatch(openEmail(null));
                    addSelectedClass(e);
                    }}>Favorites</span>
            </div>
        </section>
        </>
    )
}


export default EmailFilter;