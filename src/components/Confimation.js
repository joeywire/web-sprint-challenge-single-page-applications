import React from "react";

const Confirmation = (props) => {
    const {orders} = props
    const order = orders[0];

    if(!order){
        return <h3>Working on Fetching Your Order</h3>
    }
    return (
        <div className="confirmation">
            <h2>Success! Here is Your Order Summary:</h2>
            <div className="confirm-details">
                <p>`Name: ${order.name}`</p>
                <p>`Size: ${order.size}`</p>
                <ul> Toppings:
                {order.toppings.map((topping) => {
                    return (
                        <li>{topping}</li>
                    )
                })}
                </ul>
                <p>`Special Instructions: ${order.instructions}`</p>
            </div>
        </div>
    );
};
export default Confirmation;