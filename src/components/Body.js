import { useState } from "react";
import {restaurantList} from "../contants";
import RestaurantCard  from "./RestaurantCard";

console.log("searchText");

const Body = ()=> {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
 
  console.log("searchText");

  const filteredData = () => {
    console.log("restaurantList");
    if(searchText){

      const restaurantData = [...restaurants];
      const data = restaurantData.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()));
      console.log("data", data);
      setRestaurants(data);
    }
    setRestaurants(restaurantList);
  }
  console.log("restaurantList",restaurants);

    return(
    <>
    <div className="search-container">
      <input type="text"
        value={searchText}
        placeholder="search..." 
        className="search-text"
        onChange={(e) => setSearchText(e.target.value)}
        />
      <button className="search-btn" onClick={filteredData}>Search</button>
    </div>
    <div className="restaurant-list">
      {restaurants.map((restaurant) => {
        return(
          <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>      
        )
      })}    
        
    </div>
    </>
    )
};
export default Body;