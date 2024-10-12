import pmb from '../img/pmb.jpg'
import penstv from '../img/penstv.jpg'
import '../App.css'

function Banner () {
    return (
        <div className="banner">
            <img src={pmb} alt="pmb"></img>

            <div className="pens-tv">
                <h2>P E N S T V</h2>
                <img src={penstv} alt="ojoj"></img>
            </div>
        </div>
    )
}

export default Banner
