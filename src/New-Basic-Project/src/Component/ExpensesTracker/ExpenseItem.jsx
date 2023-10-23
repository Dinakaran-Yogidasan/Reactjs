import React from "react";

const ExpenseItem = () => {
  return (
    <div className="expenses">
      Expense Tracker
      <div className="expense-item">
        <div className="expense-date">March 28 2021</div>
        <div className="expense-date__month">March 28 2021</div>
        <div className="expense-date__year">March 28 2021</div>
        <div className="expense-date__day">March 28 2021</div>
        <div className="expense-item__description">
          <h2>Car Insurance</h2>
          <div>424124</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
