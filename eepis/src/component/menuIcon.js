import '../App.css'
import icon1 from '../img/pmb.png'
import icon2 from '../img/gedung.png'
import icon3 from '../img/elearning.png'
import icon4 from '../img/innovation.png'
import icon5 from '../img/job.png'
import icon6 from '../img/nokorupsi.png'
import barisan from '../img/barisanlogo.png'
function Icon () {
    return(
        <div className="iconsection">
            <div className="icon">
                <div className="col">
                    <img src={icon1} alt="img1"></img>
                    <h3>Penerimaan<br></br>Mahasiswa Baru</h3>
                </div>
                <div className="col">
                    <img src={icon5} alt="img2"></img>
                    <h3>Job Arrengement<br></br>System</h3>
                </div>
                <div className="col">
                    <img src={icon2} alt="img3"></img>
                    <h3>International<br></br>Cooperation</h3>
                </div>
                <div className="col">
                    <img src={icon3} alt="img4"></img>
                    <h3>Layanan<br></br>Elearning</h3>
                </div>
                <div className="col">
                    <img src={icon4} alt="img4"></img>
                    <h3>Innovation &<br></br>Collaboration</h3>
                </div>
                <div className="col">
                    <img src={icon6} alt="img4"></img>
                    <h3>Zona<br></br>Intergritas</h3>
                </div>
            </div>
            <img className="barislogo" src={barisan} alt="img"></img>
        </div>
        
    )
}

export default Icon