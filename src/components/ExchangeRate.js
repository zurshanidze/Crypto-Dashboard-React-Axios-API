const ExchangeRate = ({exchangedData}) => {
  return (
    <div className="exchange-rate">
      <h3>Exchange Rate</h3>
      <h1>{parseFloat(exchangedData.exchangeRate).toFixed(5)}</h1>
      <div className="exchangeTo-wrapper">
        <p>{exchangedData.primaryCurrency}</p> <p>to</p> <p>{exchangedData.secondaryCurrency}</p>
      </div>
    </div>
  );
}

export default ExchangeRate;