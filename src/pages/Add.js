import React, { useState } from "react";

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
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
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
          <h4>Please Add Details Below</h4>
        </legend>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={newForm.fridge_name}
              name="fridge_name"
              className="name-field"
              placeholder="Enter Fridge Name"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={newForm.image}
              name="image"
              className="image-field"
              placeholder="Enter Image URL"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
                type="checkbox"
                value={newForm.produce_needed}
                name="produce_needed"
                className="produce-box"
                toggle
                // onChange={handleToggle}
            />
            <span className="checkbox-text">Produce Needed?</span>
          </div>
          <div>
            <input
                type="checkbox"
                value={newForm.fruits_needed}
                name="fruits_needed"
                className="fruits-box"
                toggle
            />
            <span className="checkbox-text">Fruits Needed?</span>
          </div>
          <div >
            <input
                type="checkbox"
                value={newForm.canned_foods_needed}
                name="canned_foods_needed"
                className="canned-box"
                toggle
            />
            <span className="checkbox-text">Canned Foods Needed?</span>
          </div>
          <div>
            <input
                type="checkbox"
                value={newForm.needs_cleaning}
                name="needs_cleaning"
                className="cleaning-box"
                toggle
            />
            <span className="checkbox-text">Fridge Needs Cleaning?</span>
          </div>
          <div>
            <input
                    type="checkbox"
                    value={newForm.maintenance_needed}
                    name="maintenance_needed"
                    className="maintenance-box"
                    toggle
                />
                <span className="checkbox-text">Fridge Needs Repair?</span>
          </div>





        </form>
      </fieldset>
    </div>
  );
}

export default Add;
