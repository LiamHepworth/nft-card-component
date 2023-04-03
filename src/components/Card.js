import eth from '../images/icon-ethereum.svg'
import timer from '../images/icon-clock.svg'

const Card = ({data}) => {

    return ( 

        data.map(data => (
            <div className="card" key={data.id}>
                <div className="container">
                    <img src={data.cardImage} alt="artwork" className='card-cover-image'/>
                    <h1 className="card-header">{data.cardName}</h1>
                    <span className="card-description">{data.cardDesc}</span>

                    <div className="info">
                        <div className="pricing">
                            <img src={eth} alt="eth" className="eth-icon" />
                            <span className="price">{data.cardPrice}</span>
                        </div>

                        <div className="timing">
                            <img src={timer} alt="timer" className="eth-icon" />
                            <span className="time">{data.cardTimeRemaining}</span>
                        </div>
                    </div>
                    
                    <div className="authors">
                        <img src={data.cardAuthorImage} alt="" className="author-icon" />
                        <span className="author-text">Creation of <b>{data.cardAuthorName}</b></span>
                    </div>
                </div>
            </div> 
        ))
    );
}
 
export default Card;