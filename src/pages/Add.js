import React, { useState } from 'react';

function Add(props) {

    const [newForm, setNewForm] = useState({
        fridge_name: "",
        image: "",
        needs_cleaning: false,
        canned_foods_needed: false,
        produce_needed: false,
        fruits_needed: false,
        maintenance_needed: false,
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createFridge(newForm);
        setNewForm({
            fridge_name: "",
            image: "",            
        });

    // const handleToggle = (event) => {
    //     event.preventDefault();
    //     props.createFridge(newForm);
    //     setNewForm(({ needs_cleaning, ...prevState}) => 
    //     ({ ...prevState, 
    //         needs_cleaning: !needs_cleaning, 
    //     }));
    // };
};

    return (
        <div add-container>

            <fieldset className="add-form">
                <legend className="form-title">
                    <h4>Please add details below</h4>
                </legend>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={newForm.fridge_name}
                            name="fridge_name"
                            className="name-field"
                            placeholder="Please enter street name..."
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={newForm.image}
                            name='image'
                            className="image-field"
                            placeholder="Image URL..."
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <input
                        type="checkbox"
                        value={newForm.produce_needed}
                        name="produce_needed"
                        className="produce-box"
                        label for="Is produce needed?"
                        toggle
                        // onChange={handleToggle}
                    />


                </form>
                

            </fieldset>
            
        </div>
    )
}

export default Add
