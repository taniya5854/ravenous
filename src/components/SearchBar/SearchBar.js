import React from "react";
import styles from "./SearchBar.module.css"

const sortByOptions = {
    "Best Match" : "best_match",
    "Highest Rated" : "rating",
    "Most Reviewed" : "review_count"
}

    

function SearchBar(){
    
    function renderSortByOption(){
        return Object.keys(sortByOptions).map((sortByOption) =>{
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    };
    return(
        <div>
            <div>
                <ul>{renderSortByOption()}</ul>
            </div>
            <div>
                <input placeholder="Search Business"/>
                <input placeholder="Where?"/>
            </div>
            <div>
                <button>Let's Go</button>
            </div>
        </div>
    )
}

export default SearchBar;