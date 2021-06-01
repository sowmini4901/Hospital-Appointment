import ExpenseItem from './ExpenseItem';
import './ExpenseItem.css';
import {Link, withRouter} from "react-router-dom"
function Specialize() {
    //in traditional java script
    // const para=document.getCreateElement('p');
    // para.textContent='This is';
    // document.getElementById('root').append(para);
  
    const category = [
      {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
      {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
      },
    ];
    return (
      //desired target/end state
      <div>
        <h2>Let's get started!</h2>
        <p>This is also visible...</p>
        {category.map((item, index) => {
        return (
          <ExpenseItem
            key={index}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
      </div>
    );
  }
  
  export default withRouter(Specialize);