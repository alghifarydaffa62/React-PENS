import pmb from '../img/pmb.jpg'
import bannerBG from '../img/BG-banner.svg'
import '../App.css'

function Banner () {
    return (
        <div className="banner">
            <img src={bannerBG} style={BG} alt="ohoh"></img>
            <img src={pmb} alt="pmb"></img>
        </div>
    )
}

export default Banner

const BG = {
 width: '120vw',
 height: '80vh'
}