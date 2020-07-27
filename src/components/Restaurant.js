import React from "react"

function Restaurant(props) {
    return (
        <div className="card" style={{width: "15rem"}}>
            <img className="card-img-top" src={props.img} alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.address}</p>
                <a href="#" className="btn btn-primary">Order</a>
            </div>
        </div>
    )
}

export default Restaurant