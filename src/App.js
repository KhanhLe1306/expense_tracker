import { useState } from "react";

import Expenses from "./components/Expenses.js";
import FormInput from "./components/FormImput.js";


const array =
  [
    {
      'id': 1,
      'date': new Date(2022, 0, 2),
      'title': 'Logitech Keyboard',
      'price': 139.99
    },
    {
      'id': 2,
      'date': new Date(2021, 3, 18),
      'title': 'Allienware Monitor',
      'price': 1199.99
    },
    {
      'id': 3,
      'date': new Date(2021, 6, 22),
      'title': 'Motocycle',
      'price': 3999.99
    },
    {
      'id': 4,
      'date': new Date(2021, 5, 1),
      'title': 'Apple Watch',
      'price': 399.99
    },
    {
      'id': 5,
      'date': new Date(2020, 0, 1),
      'title': 'Robinhood',
      'price': 14000
    }
  ]

function App() {
  const [expenses, setExpenses] = useState(array)

  const addExpense = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    })

  }

  return (
    <div className="App">
      <FormInput onSaveExpense={addExpense} />
      <Expenses array={expenses} />
    </div>
  );
}

export default App;
