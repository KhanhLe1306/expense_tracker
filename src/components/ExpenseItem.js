import Card from './Card';
import { useState } from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const date = props.date;     //month is from 0-index
    const day = date.toLocaleString(date, { day: '2-digit' })
    const month = date.toLocaleString(date, { month: 'long' })
    const year = date.toLocaleString(date, { year: 'numeric' })
    const price = props.price

    const [title, setTitlle] = useState(props.title)

    const clickHandler = () => {
        setTitlle('Clicked!!!')
        console.log(title)
    }

    return (
        <Card className='expense__item'>
            <Card className="date_purchased">
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </Card>
            <div className="title">
                {title}
            </div>
            <Card className="price">
                $ {price}
            </Card>
            <button onClick={clickHandler}>Change Text!</button>
        </Card>
    )
}

export default ExpenseItem;