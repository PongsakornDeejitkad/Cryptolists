import './style.css';
export default function Landing() {
  const goTo = event => {
    event.preventDefault();
    window.scrollTo({
      top: 950,
      behavior: 'smooth',
    });
  };
  return (
    <div className="header-title">
      <div>
        <h1>What is Cryptocurrency ?</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          quis odio.
        </h4>
        <button className="btn-text" onClick={goTo}>
          See More{' '}
        </button>
      </div>
      <div>
        <div>
          <img
            src="https://mma.prnewswire.com/media/1017533/CryptoCom_MCO_Visa_Card_Europe.jpg?p=publish"
            className="landing-image "
          ></img>
        </div>
      </div>
    </div>
  );
}
