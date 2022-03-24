import React, { useState } from "react";

import "./ItemsForm.css";

const ItemsForm = () => {
  const [input, setInput] = useState({});

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert(
      JSON.stringify(input)
    );
  };

  return (
    <form onSubmit={submitHandler} className="items-form__controls">
      <ul>
        <div className="items-form__control">
          <label>
            {" "}
            Item Code:{" "}<br/>
            <input
              type="text"
              value={input.ItemCode}
              onChange={changeHandler}
              defaultValue=""
              name="Item Code"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            {" "}
            PLU Number:{" "}<br/>
            <input
              type="text"
              value={input.PLUNumber}
              onChange={changeHandler}
              defaultValue=""
              name="PLU Number"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            {" "}
            SupplierCode:{" "}<br/>
            <input
              type="text"
              value={input.SupplierCode}
              onChange={changeHandler}
              defaultValue=""
              name="Supplier Code"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            {" "}
            Name:{" "}<br/>
            <input
              type="text"
              value={input.Name}
              onChange={changeHandler}
              defaultValue=""
              name="Name"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            Priority:<br/>
            <input
              type="number"
              value={input.Priority}
              onChange={changeHandler}
              name="Priority"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            group:<br/>
            <input
              type="number"
              value={input.group}
              onChange={changeHandler}
              name="group"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            Type:<br/>
            <input
              type="number"
              value={input.Type}
              onChange={changeHandler}
              name="Type"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            BonusPoints:<br/>
            <input
              type="number"
              value={input.BonusPoints}
              onChange={changeHandler}
              name="Bonus Points"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            Average:<br/>
            <input
              type="number"
              value={input.Average}
              onChange={changeHandler}
              name="Average"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            {" "}
            Last:<br/>
            <input
              type="number"
              value={input.Last}
              onChange={changeHandler}
              name="Last"
            />{" "}
          </label>
        </div>
      </ul>
      <ul>
      <div className="items-form__control">
          <label>
            {" "}
            Unit:{" "}<br/>
            <input
              type="number"
              value={input.Unit}
              onChange={changeHandler}
              name="Unit"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            {" "}
            Price1:{" "}<br/>
            <input
              type="number"
              value={input.Price1}
              onChange={changeHandler}
              name="Price"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            {" "}
            PrevPrice:{" "}<br/>
            <input
              type="number"
              value={input.PrevPrice}
              onChange={changeHandler}
              name="Prev. Price"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            {" "}
            Vat Rate:{" "}<br/>
            <input
              type="number"
              value={input.VatRate}
              onChange={changeHandler}
              name="VatRate"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            {" "}
            Profit:{" "}<br/>
            <input
              type="number"
              value={input.Profit}
              onChange={changeHandler}
              name="Profit"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            {" "}
            Margin:{" "}<br/>
            <input
              type="number"
              value={input.Margin}
              onChange={changeHandler}
              name="Margin"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            {" "}
            Profit Amount:<br/>
            <input
              type="number"
              value={input.ProfitAmount}
              onChange={changeHandler}
              name="Profit Amount"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            Takeway:<br/>
            <input
              type="checkbox"
              value={input.Takeway}
              onChange={changeHandler}
              name="Takeway"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            Delivery:<br/>
            <input
              type="checkbox"
              value={input.Delivery}
              onChange={changeHandler}
              name="Delivery"
            />{" "}
          </label>
        </div>
        <div className="items-form__control">
          <label>
            Seat In:<br/>
            <input
              type="checkbox"
              value={input.SeatIn}
              onChange={changeHandler}
              name="Seat In"
            />{" "}
          </label>
        </div>
        <div className="items-form__action">
          <button type="submit">Submit</button>
        </div>
      </ul>
    </form>
);
};

export default ItemsForm;

