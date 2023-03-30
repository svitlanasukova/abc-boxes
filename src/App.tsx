import React, { useState } from 'react';
import styles from './app.module.scss';

function App() {
	const [fields, setFields] = useState(['a', 'b', 'c']);

	const changeFieldText = (event: React.ChangeEvent<HTMLInputElement>) => {
		const id = +event.target.id;
		const value = event.nativeEvent.data;

		setFields(prevFields => {
			const currentFieldIndex = prevFields.findIndex(
				(item, index) => index === id,
			);
			const newValue = value;
			const newFields = [...prevFields];
			newFields[currentFieldIndex] = newValue;
			return newFields;
		});
	};

	const addField = (index: number) => {
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
					return (
						<React.Fragment key={index}>
							<input
								type='text'
								value={item}
								id={`${index}`}
								onChange={changeFieldText}
							/>
							{index !== list.length - 1 ? (
								<span
									onClick={() => {
										addField(index);
									}}
								></span>
							) : (
								''
							)}
						</React.Fragment>
					);
				})}
			</div>
			<div className={styles.text}>{fields.map(item => item)}</div>
		</div>
	);
}

export default App;
