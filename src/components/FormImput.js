import "./FormInput.css";
import { useState } from "react";

const FormInput = (props) => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [date, setDate] = useState("");

	const [toggledClassHeader, setToggleClassHeader] = useState("head hide");
	const [toggleCancel, setToggleCancel] = useState("hide");

	// const [userInputs, setUserInputs] = useState({
	//     title: '',
	//     price: '',
	//     date: ''
	// })

	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
		// setUserInputs({
		//     ...userInputs,
		//     title: event.target.value
		// })
	};

	const priceOnChangeHandler = (event) => {
		setPrice(event.target.value);
		// setUserInputs({
		//     ...userInputs,
		//     price: event.target.value
		// })
	};

	const dateOnChangeHandler = (event) => {
		setDate(event.target.value);
		// setUserInputs({
		//     ...userInputs,
		//     date: event.target.value
		// })
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (price && date && title) {
			const newExpense = {
				date: new Date(date),
				price: price,
				title: title,
				id: Math.floor(Math.random() * 10000),
			};
			//console.log(userInputs)
			setTitle("");
			setDate("");
			setPrice("");

			props.onSaveExpense(newExpense); //Call addExpense function in App
		} else if (toggledClassHeader.includes("hide")) {
			setToggleClassHeader("head active");
			setToggleCancel("cancel__button");
		}
	};

	const cancelHandler = () => {
		setToggleClassHeader("head hide");
		setToggleCancel("hide");
	};

	return (
		<form onSubmit={submitHandler} className="form__input card">
			<div className={toggledClassHeader}>
				<div>
					<label>Title</label>
					<input
						type="text"
						name="name"
						id="name"
						value={title}
						onChange={titleChangeHandler}
					></input>
				</div>
				<div>
					<label>Price</label>
					<input
						type="text"
						name="price"
						id="price"
						value={price}
						onChange={priceOnChangeHandler}
					></input>
				</div>
				<div>
					<label>Date</label>
					<input
						type="date"
						id="date"
						name="date"
						value={date}
						onChange={dateOnChangeHandler}
					></input>
				</div>
				<div></div>
			</div>
			<div className="bottom">
				<span onClick={cancelHandler} className={toggleCancel}>
					Cancel
				</span>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default FormInput;
