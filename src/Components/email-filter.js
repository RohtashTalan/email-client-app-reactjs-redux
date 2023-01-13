import React from "react";
import { useDispatch } from "react-redux";
import { filterClicked } from "../action";
import emailFilter from "../reducers/filter.reducer";




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
                    addSelectedClass(e);
                    }}>Unread</span>
                <span className="filter-btn" onClick={(e)=>{
                    dispatch(filterClicked('Read'));
                    addSelectedClass(e);
                    }}>Read</span>
                <span className="filter-btn" onClick={(e)=>{
                    dispatch(filterClicked('Favorites'));
                    addSelectedClass(e);
                    }}>Favorites</span>
            </div>
        </section>
        </>
    )
}


export default EmailFilter;