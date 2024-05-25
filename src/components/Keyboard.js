import React from 'react';
import Key from './Key';
import './Keyboard.css'

const Keyboard = ({ notes, onPress, onRelease }) => {
    return (
        <div className="keyboard">
            {notes.map(({ note, color }) => (
                <Key
                    key={note}
                    note={note}
                    color={color}
                    onPress={onPress}
                    onRelease={onRelease}
                />
            ))}
        </div>
    );
};

export default Keyboard;
