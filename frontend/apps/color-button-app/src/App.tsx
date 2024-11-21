import { useState } from 'react';
import { kebabCaseToTitleCase } from './helpers/kebabCaseToTitleCase';
const App = () => {
    const [disabled, setDisabled] = useState(false);
    const [buttonColor, setButtonColor] = useState('medium-violet-red');
    const nextColorClass = buttonColor === 'medium-violet-red' ? 'midnight-blue' : 'medium-violet-red';

    const nextColorTitleCase = kebabCaseToTitleCase(nextColorClass);
    const className = disabled ? 'gray' : buttonColor;

    const handleClick = () => {
        setButtonColor(nextColorClass);
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDisabled(e.target.checked);
    };
    return (
        <div>
            <button className={className} disabled={disabled} onClick={handleClick}>
                Change to {nextColorTitleCase}
            </button>
            <br />
            <input
                type="checkbox"
                id="disable-button-checkbox"
                defaultChecked={disabled}
                onChange={(e) => handleCheckboxChange(e)}
            />
            <label htmlFor="disable-button-checkbox">Disable button</label>
        </div>
    );
};

export default App;
