import { useEffect, useState } from 'react';
import InputBox from '../components/Input';
import useCurrencyConverter from '../hooks/currencyConverter'; 
import './App.css';

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [exchangeRates, setExchangeRates] = useState({});

  const fetchedRates = useCurrencyConverter(from);

  useEffect(() => {
    if (fetchedRates) {
      setExchangeRates(fetchedRates);
    }
  }, [fetchedRates]);

  const options = Object.keys(exchangeRates);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (exchangeRates[to]) {
      setConvertedAmount((amount * exchangeRates[to]).toFixed(2));
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?fm=jpg&q=60&w=3000')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-200 rounded-lg p-5 backdrop-blur-md bg-white/50 shadow-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From Input */}
          <div className="w-full mb-3">
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={setAmount}
              currencyOption={options}
              onCurrencyChange={setFrom}
              selectCurrency={from}
            />
          </div>

          {/* Swap Button */}
          <div className="relative w-full flex justify-center mb-3">
            <button
              type="button"
              className="border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1 transition-all hover:bg-blue-700"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* To Input */}
          <div className="w-full mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={setTo}
              selectCurrency={to}
              amountdisable
            />
          </div>

          {/* Convert Button */}
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
