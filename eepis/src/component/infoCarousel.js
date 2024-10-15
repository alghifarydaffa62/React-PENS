import pmb from '../img/pmb.jpg'
import '../App.css'

function Banner () {
    return (
        <div className="banner">
            <img src={pmb} alt="pmb"></img>

            <div className="pens-tv">
                <h2>P E N S T V</h2>
                <iframe width="1080" height="608" src="https://www.youtube.com/embed/wQ7IL19ZrxA" title="ZI WBK PENS 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Banner
