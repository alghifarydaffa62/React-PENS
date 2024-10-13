import joss from '../img/JOSS.jpg'
import survey from '../img/survey.jpeg'
import akses from '../img/akses.jpeg'
import mila from '../img/mils.jpeg'
import ijazah from '../img/ijazah.jpeg'
import cpns from '../img/cpns.jpg'
import kampus from '../img/kam.jpg'
import pens from '../img/pens.png'

function Widget () {
    return(
        <div className="widget">
            <h1>W I D G E T & P E N S T O O N</h1>
            <div className="container">
                <div className="grid">
                    <img src={survey} alt="ojoj"></img>
                    <img src={akses} alt="hihi"></img>
                    <img src={mila} alt="hihi"></img>
                    <img src={ijazah} alt="hihi"></img>
                    <img src={cpns} alt="hihi"></img>
                    <img src={kampus} alt="hihi"></img>
                </div>
                <img src={joss} alt="hihi" className="joss"></img>
            </div>

            <div className="line"></div>

            <div className="temukan">
                <img src={pens} alt="ojojo"></img>
                <div className="sosmed">
                    <h4>TEMUKAN KAMI</h4>
                    <div className="media">
                        <h4>FB</h4>
                        <h4>TWT</h4>
                        <h4>YT</h4>
                        <h4>IG</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widget