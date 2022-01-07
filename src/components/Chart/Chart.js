import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {

    // const priceDataArray = props.expenseData.map(expense => expense.price)

    // console.log(priceDataArray)

    const totalExpenseEachMonth = [
        { 'month': 'Jan', 'total': 0 },
        { 'month': 'Feb', 'total': 0 },
        { 'month': 'Mar', 'total': 0 },
        { 'month': 'Apr', 'total': 0 },
        { 'month': 'May', 'total': 0 },
        { 'month': 'Jun', 'total': 0 },
        { 'month': 'Jul', 'total': 0 },
        { 'month': 'Aug', 'total': 0 },
        { 'month': 'Sep', 'total': 0 },
        { 'month': 'Oct', 'total': 0 },
        { 'month': 'Nov', 'total': 0 },
        { 'month': 'Dec', 'total': 0 }
    ]

    // for (let expense of props.expenseData) {
    //     totalExpenseEachMonth[expense.date.getMonth()].total += expense.price
    // }

    props.expenseData.forEach(expense => {
        totalExpenseEachMonth[expense.date.getMonth()].total += expense.price
    });
    //getMonth() return indexes start with Jan = 0 and coincedency match with indexes of totalExpenseEachMonth

    console.log(totalExpenseEachMonth)

    const totalExpenseArray = totalExpenseEachMonth.map(expense => expense.total)

    const maxExpense = Math.max(...totalExpenseArray)
    console.log(maxExpense)

    return (
        <div className='chart__container container'>
            {totalExpenseEachMonth.map(expense => <ChartBar key={expense.month} total={expense.total} max={maxExpense} label={expense.month} />)}
        </div>
    )
}

export default Chart