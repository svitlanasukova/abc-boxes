import React, { useState } from 'react';
import styles from './app.module.scss';

function App() {
	const [fields, setFields] = useState(['a', 'b', 'c']);

	const changeFieldTextHandler = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const id = +event.target.id;
		const value = event.target.value;

		setFields(prevFields => {
			const currentFieldIndex = prevFields.findIndex(
				(item, index) => index === id,
			);
			const newValue = value.charAt(value.length - 1);
			const newFields = [...prevFields];
			newFields[currentFieldIndex] = newValue;
			return newFields;
		});
	};

	const addFieldHandler = (index: number) => {
		setFields(prevFields => {
			const newFields = [...prevFields];
			newFields.splice(index + 1, 0, '');
			return newFields;
		});
	};

	return (
		<div className={styles.app}>
			<div className={styles.boxes}>
				{fields.map((item, index, list) => {
					const field = (
						<React.Fragment key={index}>
							<input
								type='text'
								value={item}
								id={`${index}`}
								onChange={changeFieldTextHandler}
							/>
							{index !== list.length - 1 ? (
								<span onClick={addFieldHandler.bind(null, index)}></span>
							) : (
								''
							)}
						</React.Fragment>
					);

					return field;
				})}
			</div>
			<div className={styles.text}>{fields.map(item => item)}</div>
		</div>
	);
}

export default App;
