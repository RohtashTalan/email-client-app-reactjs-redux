import React, { useState } from "react";





const EmailFilter = () => {
    const [selectedFilter, setSelectedFilter] = useState();

    return(
        <>
        <section className="filter">
            <div className="filter-text">
                <span>Filter By :</span>
            </div>
            <div className="filter-btns">
                <span className="filter-btn" onClick={()=>(selectedFilter('Unread'))}>Unread</span>
                <span className="filter-btn" onClick={()=>(selectedFilter('Read'))}>Read</span>
                <span className="filter-btn" onClick={()=>(selectedFilter('Favorites'))}>Favorites</span>
            </div>
        </section>
        </>
    )
}


export default EmailFilter;