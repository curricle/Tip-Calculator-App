import "./DisplayPanel.css";

function AmountDisplay({ title, amount }) {
    return(
        <div className="Amount-Display">
            <div className="Title">
                <h3>{title}</h3>
            <br />/ person
            </div>
            <div className="Amount">
                {amount}
            </div>
        </div>
    );
}

function DisplayPanel() {
  return (
    <div className="Display-Panel">
        <AmountDisplay title="Tip Amount" amount="$4.29" />
        <AmountDisplay title="Total" amount="$32.79" />

        <button className="Disabled">Reset</button>
    </div>
  );  
}

export default DisplayPanel;