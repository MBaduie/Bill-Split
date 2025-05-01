import React from "react";
import Button from "./Button";

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with x</h2>
      <label>💴 Bill value</label>
      <input type="number" name="bill value" id="bill" />
      <label>🕴️Your expenses</label>
      <input type="number" name="expenses" id="expenses" />
      <label>👯 X expenses</label>
      <input
        type="number"
        name="friend expenses"
        id="friendExpenses"
        disabled
      />
      <label>🤞who paying the bill?</label>
      <select value="you" onChange={(e) => console.log(e.target.value)}>
        <option value="you">you</option>
        <option value="X">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
