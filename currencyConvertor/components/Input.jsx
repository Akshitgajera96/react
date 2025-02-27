import React from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountdisable = false,
    currencyDisable = false,
    className = "",
}) {
    return (
        <div className={`bg-white p-4 rounded-lg text-sm flex flex-col space-y-4 ${className}`}>
            <div className="flex flex-col">
                <label className="text-black/60 mb-2">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-gray-100 py-1 px-1 rounded-md"
                    type="number"
                    placeholder="Amount"
                    disabled={amountdisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="flex flex-col">
                <label className="text-black/60 mb-2">
                    Currency Type
                </label>
                <select
                    className="rounded-md py-2 px-3 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOption.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;