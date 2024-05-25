import React, { useEffect, useRef } from 'react';
import * as Tone from 'tone';
import Keyboard from './Keyboard';
import './Synth.css';

const Synth = ({ octaves }) => {
	const synthRef = useRef(null);

	useEffect(() => {
		synthRef.current = new Tone.Synth().toDestination();
	}, []);

	const handlePress = (note) => {
		console.log(`note: ${note} is press`)
		if (note && synthRef.current) {
			synthRef.current.triggerAttack(note);
		}
	};

	const handleRelease = (note) => {
		if (note && synthRef.current) {
			console.log(`note: ${note} is release`)
			synthRef.current.triggerRelease();
		}
	};

	const generateNotesForOctave = (octave) => {
		const notesOrder = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
		let notes = notesOrder.map(note => {
			const color = note.includes('#') ? 'black' : 'white';
			return { note: note + octave, color };
		});
		return notes;
	};

	return (
		<div className="synth">
			{Array.from({ length: octaves }, (_, i) => i + 3).map((octave) => (
				<Keyboard
					key={octave}
					notes={generateNotesForOctave(octave)}
					onPress={handlePress}
					onRelease={handleRelease}
				/>
			))}
		</div>
	);
};

export default Synth;
