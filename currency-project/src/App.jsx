import { useState, useEffect } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1); // Start with 1 instead of 0
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const currencyInfo = useCurrencyInfo(from);
  
  // Default currency options if API hasn't loaded yet
  const options = Object.keys(currencyInfo).length > 0 
    ? Object.keys(currencyInfo) 
    : ["usd", "inr", "eur", "gbp", "jpy"];
  
  // Auto-convert when currency data loads
  useEffect(() => {
    if (Object.keys(currencyInfo).length > 0) {
      setIsLoading(false);
      // Auto-convert initial amount
      if (currencyInfo[to]) {
        setConvertedAmount(amount * currencyInfo[to]);
      }
    }
  }, [currencyInfo, amount, to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
      console.log("Converting:", amount, from, "to", to, "=", amount * currencyInfo[to]);
    } else {
      console.log("Currency information not available yet");
      alert("Currency information not available yet. Please wait a moment and try again.");
    }
  };

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="app-wrapper">
        <div className="converter-box">
          {isLoading && <div className="loading-message">Loading currency data...</div>}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="input-wrapper">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="swap-button-wrapper">
              <button type="button" className="swap-button" onClick={swap}>
                swap
              </button>
            </div>
            <div className="input-wrapper">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="convert-button">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;