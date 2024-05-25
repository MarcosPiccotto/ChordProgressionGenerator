import React, { useState } from 'react';
import './Key.css';

const Key = ({ note, color, onPress, onRelease }) => {
	let [isPressed, setIsPressed] = useState(false)
	const handleMouseDown = () => {
		if (onPress) {
			onPress(note);
			setIsPressed(true);
		}
	};

	const handleMouseUp = () => {
		if (onRelease){
			onRelease(note);
			setIsPressed(false);
		} 
	};

	return (
		<button
			className={`key ${color} ${isPressed?'pressed':''}`}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
		>
			{note}
		</button>
	);
};

export default Key;
