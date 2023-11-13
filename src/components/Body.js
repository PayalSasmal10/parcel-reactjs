import { useState } from "react";
import {restaurantList} from "../contants";
import RestaurantCard  from "./RestaurantCard";

const Body = ()=> {
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState("false");
    return(
    <>
    <div className="search-container">
      <input type="text"
        value={searchText}
        placeholder="search..." 
        className="search-text"
        onChange={(e) => setSearchText(e.target.value)}
        />
        <h1>{searchClicked}</h1>
      <button className="search-btn" onClick={() =>{
        if(searchClicked === "true"){
          setSearchClicked("false");
        }else{
          setSearchClicked("true");
        }

      }}>Search</button>
    </div>
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return(
          <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>      
        )
      })}    
        
    </div>
    </>
    )
};
export default Body;