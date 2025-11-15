import './CalcPanel.css';
import dollar from './images/icon-dollar.svg';
import person from './images/icon-person.svg'
import { useState } from 'react';

function NumInput({ title, amount, icon, inputId }) {
    const inputIconBackground = {
        backgroundImage: `url(${icon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '16px center',
    };

    function setInputPattern(inputId) {
        if(inputId == "Bill-Total") {
            return '^\\d+\\.\\d{2}$';
        }
        else if(inputId == "Party-Size") {
            return '[1-9]+';
        }
    }

    function setInputMode(inputId) {
        if(inputId == "Bill-Total") {
            return "decimal";
        }
        else {
            return "numeric";
        }
    }

    function checkInputValidity(inputContent) {
        if(ValidityState) {
            return;
        }
        else {
            return;
        }
    }

    return(
        <div className="Num-Input-Container">
            <h3>{title}</h3>
            <div className="Num-Input">
                <input 
                    inputMode={setInputMode(inputId)} 
                    pattern={setInputPattern(inputId)}
                    placeholder="0"  
                    style={inputIconBackground} 
                    />
            </div>
        </div>
    );
}

function Button({ amount, canBeSet }) {
    return(
        <button>{ canBeSet ? canBeSet : amount }</button>
    );
}

function TipButtons() {
    const isSelected = useState(false);
    const setIsSelected = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
        console.log("I Got Clicked");
    }

    return(
        <div className="Tip-Buttons">
            <h3>Select Tip %</h3>
            <div className="Buttons-List">
                {/* <!-- these are react components that haven't been created, not regular html buttons --> */}
                <Button amount="5%" onClick={handleClick} className={isSelected ? '.Selected' : ''} />
                <Button amount="10%" />
                <Button amount="15%" />
                <Button amount="25%" />
                <Button amount="50%" />
                <Button amount="Custom" canBeSet="Custom" />
            </div>
        </div>
    );
}

function CalcPanel() {
    return(
        <div className="Calc-Panel">
            <NumInput title="Bill" amount="142.55" icon={dollar} inputId="Bill-Total" />
            <TipButtons />
            <NumInput title="Number of People" amount="5" icon={person} inputId="Party-Size" />
        </div>
    );
}

export default CalcPanel;