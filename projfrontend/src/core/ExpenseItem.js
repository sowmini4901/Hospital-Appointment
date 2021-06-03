import './ExpenseItem.css';
function ExpenseItem(props) {
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const date=props.date.toLocaleString('en-US',{day:'2-digit'});
    const year=props.date.getFullYear();


  return (
  <div className="cards">
    <div className="expense-item">
     <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__day">{date}</div>
          <div className="expense-date__year">{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
       </div>
  </div>
  );
}

export default ExpenseItem;