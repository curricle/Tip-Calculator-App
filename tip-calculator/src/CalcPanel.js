import './CalcPanel.css';

function NumInput({ title, amount }) {
    return(
        <div className="Num-Input-Container">
            <h3>{title}</h3>
            <input></input>
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
            <NumInput title="Bill" amount="142.55" />
            <TipButtons />
            <NumInput title="Number of People" amount="5" />
        </div>
    );
}

export default CalcPanel;