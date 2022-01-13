import React, { useState } from "react";

function Add(props) {
  const [newForm, setNewForm] = useState({
    fridge_name: "",
    street_address: "",
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
    props.createFridges(newForm);
    setNewForm({
      fridge_name: "",
      image: "",
    });

    //   const handleToggle = (event) => {
    //     event.preventDefault();
    //     props.createFridges(newForm);
    //     setNewForm(({ needs_cleaning, ...prevState }) => ({
    //       ...prevState,
    //       needs_cleaning: !needs_cleaning,
    //     }));
    //   };
  };

  return (
    <div className="add-form-border">
      <div className="add-titles">
        <h1 id="add-main-text">Add a Fridge</h1>
        <h2 id="add-paragraph">
          If you’d like to contribute to the Community Fridge App’s map and
          create a local fridge, please add the following details.
        </h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-box">
            <label className="label-text" for="fridge-name">
              Fridge Name
            </label>
            <input
              type="text"
              value={newForm.fridge_name}
              name="fridge_name"
              id="fridge-name"
              className="input-control"
              // placeholder="Please enter the main street"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-box">
            <label className="label-text" for="street-address">
              Street Address
            </label>
            <input
              type="text"
              value={newForm.street_address}
              name="street_address"
              id="street-address"
              className="input-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-box">
            <label className="label-text" for="image">
              Fridge Image
            </label>
            <input
              type="url"
              value={newForm.image}
              name="image"
              id="image"
              className="input-control"
              // placeholder="Enter link address"
              onChange={handleChange}
              required
            />
          </div>
          <label id="checklist-header">Checklist:</label>
          <div className="checklist-boxes">
            <input
              type="checkbox"
              value={newForm.produce_needed}
              name="produce_needed"
              className="checkboxes"
              toggle
              // onChange={handleToggle}
            />
            <span className="checkbox-text">Produce Needed</span>
          </div>
          <div className="checklist-boxes">
            <input
              type="checkbox"
              value={newForm.fruits_needed}
              name="fruits_needed"
              className="checkboxes"
              toggle
              // onChange={handleToggle}
            />
            <span className="checkbox-text">Fruits Needed</span>
          </div>
          <div className="checklist-boxes">
            <input
              type="checkbox"
              value={newForm.canned_foods_needed}
              name="canned_foods_needed"
              className="checkboxes"
              toggle
              // onChange={handleToggle}
            />
            <span className="checkbox-text">Canned Foods Needed</span>
          </div>
          <div className="checklist-boxes">
            <input
              type="checkbox"
              value={newForm.needs_cleaning}
              name="needs_cleaning"
              className="checkboxes"
              toggle
              // onChange={handleToggle}
            />
            <span className="checkbox-text">Fridge Needs Cleaning</span>
          </div>
          <div className="checklist-boxes">
            <input
              type="checkbox"
              value={newForm.maintenance_needed}
              name="maintenance_needed"
              className="checkboxes"
              toggle
              // onChange={handleToggle}
            />
            <span className="checkbox-text">Fridge Needs Repair</span>
          </div>
          <div id="submit-container">
            <input className="submitButton" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
