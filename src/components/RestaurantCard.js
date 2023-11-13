import {IMG_CDN_URL} from "../contants";

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
    return(
        <div className="card">
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
        </div>
    );
};
export default RestaurantCard;