import { useState } from "react"

import ExpenseItem from "./ExpenseItem"
import Card from './Card.js'
import ExpenseFilter from "./ExpenseFilter"
import Chart from "./Chart/Chart"

const Expenses = (props) => {
    const array = props.array
    const [selectedYear, setSelectedYear] = useState('all')

    const selectYear = (year) => {
        setSelectedYear(year)
    }

    let filteredArray = array

    if (selectedYear !== 'all') {
        // filteredArray = array.filter(expense => expense.date.toLocaleString(expense.date, { year: 'numeric' }) == selectedYear)

        filteredArray = array.filter(expense => {
            return expense.date.getFullYear().toString() === selectedYear
        })
    }

    let expenseContent = <p>No result found!!!</p>

    if (filteredArray.length > 0) {
        expenseContent = filteredArray.map(expense => <ExpenseItem key={expense.id} title={expense.title} date={expense.date} price={expense.price} />)
    }

    return (
        <div>
            <Card>
                <Chart expenseData={filteredArray} />
                <ExpenseFilter defaultYear={selectedYear} onSelect={selectYear} />
                {expenseContent}
            </Card>
        </div>
    )
}

export default Expenses