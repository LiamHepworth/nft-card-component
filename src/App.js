import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">

        <img src="./images/image-equilibrium.jpg" alt="card-cover-image" />
        <h1 className="card-header">Equilibrium #3429</h1>
        <span className="card-description">Our Equilibrium collection promotes balance and calm</span>

        <div className="info">

          <div className="icon-price">
            <img src="images/icon-etherium.svg" alt="eth-icon" className="eth-icon" />
            <span className="price"></span>
          </div>

          <div className="icon-timer">
            <img src="images/icon-clock.svg" alt="timer-icon" className="eth-icon" />
            <span className="time"></span>
          </div>

        </div>
        
        <div className="icon-author">
          <img src="" alt="" className="autor-icon" />
          <span className="author-text">Creation of Jules Wyvern</span>
        </div>
        
      </div>
    </div>
  );
}

export default App;
