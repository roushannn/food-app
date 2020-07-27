import React from "react"
import Restaurant from "./Restaurant"
import {getRestaurants} from "../services/restaurantService"

function HomePage() {
    console.log(getRestaurants())

    return (
        <div className="container-fluid">
            <p>HomePage</p>
            <div className="row">
            
                {getRestaurants().map(restaurant => 
                    <Restaurant key={restaurant._id} 
                        name={restaurant.name} 
                        address={restaurant.address}
                        img={restaurant.imageUrl}/>)}
            </div>
        </div>
    )
}

export default HomePage