import React from "react";

const Form = (props) => {

    const {values, change, submit} = props;

    const onSumbit = (evt) => {
        evt.preventDefault();
        submit()
    }

    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form className="form container" onSubmit={onSumbit}>
            <h2>Build Your Pizza</h2>
            <div className="form inputs">
                
                <label> Name: 
                    <input 
                        value={values.name}
                        name="name"
                        type="text"
                        onChange={onChange}
                    />
                </label>
                
                <label>Size: 
                    <select onChange={onChange} value={values.size} name="size">
                        <option value="">--Select A Size--</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xlarge">Extra Large</option>
                    </select>
                </label>

                <h4>Choose Your Toppings:</h4>
                <div className="form checkboxes">
                    <label> Pepperoni
                        <input 
                            type="checkbox"
                            name="pepperoni"
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label> Cheese
                        <input 
                            type="checkbox"
                            name="cheese"
                            checked={values.cheese}
                            onChange={onChange}
                        />
                    </label>
                    <label> Mushroom
                        <input 
                            type="checkbox"
                            name="mushroom"
                            checked={values.mushroom}
                            onChange={onChange}
                        />
                    </label>
                    <label> Peppers
                        <input 
                            type="checkbox"
                            name="peppers"
                            checked={values.peppers}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <h4>Special Instructions:</h4>
                <label>
                    <input 
                        value={values.instructions}
                        name="instructions"
                        type="text"
                        onChange={onChange}
                    />
                </label>
            </div>
            <button>Place Your Order</button>
        </form>
    );

};

export default Form;