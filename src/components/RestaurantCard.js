import {IMG_CDN_URL} from "../contants";

const RestaurantCard = ({id, cloudinaryImageId, name, cuisines, avgRating}) => {
    return(
        <div className="card" key={id}>
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
        </div>
    );
};
export default RestaurantCard;