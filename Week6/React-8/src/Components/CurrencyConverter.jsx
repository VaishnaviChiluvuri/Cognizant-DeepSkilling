import { useState } from "react";

function CurrencyConverter() {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currency.toLowerCase() === "euro") {

            const result = amount * 80;

            alert(`Converting to Euro Amount is ${result}`);
        }
        else{
            alert("Enter Currency as Euro");
        }
    }

    return (
        <div>

            <h1 style={{color:"green"}}>Currency Convertor!!!</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)}
                    />
                </div>

                <br/>

                <div>
                    Currency:
                    <input
                        type="text"
                        value={currency}
                        onChange={(e)=>setCurrency(e.target.value)}
                    />
                </div>

                <br/>

                <button type="submit">
                    Submit
                </button>

            </form>

        </div>
    )
}

export default CurrencyConverter;