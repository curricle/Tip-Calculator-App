import './CalcPanel.css';
import dollar from './images/icon-dollar.svg';
import person from './images/icon-person.svg'

function NumInput({ title, amount, icon }) {
    const inputIconBackground = {
        backgroundImage: `url(${icon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '16px center',
    };

    return(
        <div className="Num-Input-Container">
            <h3>{title}</h3>
            <div className="Num-Input">
                <input type="text" style={inputIconBackground} />
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
    return(
        <div className="Tip-Buttons">
            <h3>Select Tip %</h3>
            <div className="Buttons-List">
                <Button amount="5%" />
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
            <NumInput title="Bill" amount="142.55" icon={dollar} />
            <TipButtons />
            <NumInput title="Number of People" amount="5" icon={person} />
        </div>
    );
}

export default CalcPanel;