import eth from '../images/icon-ethereum.svg'
import timer from '../images/icon-clock.svg'

const Card = () => {
    return ( 
        <div className="card">
            <div className="container">
                <img src={require('../images/image-equilibrium.jpg')} alt="artwork" className='card-cover-image'/>
                <h1 className="card-header">Equilibrium #3429</h1>
                <span className="card-description">Our Equilibrium collection promotes balance and calm.</span>

                <div className="info">
                    <div className="pricing">
                        <img src={eth} alt="eth" className="eth-icon" />
                        <span className="price">0.041 ETH</span>
                    </div>

                    <div className="timing">
                        <img src={timer} alt="timer" className="eth-icon" />
                        <span className="time">3 days left</span>
                    </div>
                </div>
                
                <div className="authors">
                    <img src={require('../images/image-avatar.png')} alt="" className="author-icon" />
                    <span className="author-text">Creation of <b>Jules Wyvern</b></span>
                </div>
            </div>
        </div> 
    );
}
 
export default Card;