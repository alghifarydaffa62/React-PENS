import '../App.css'
// import icon1 from '../img/pmb.png'
// import icon2 from '../img/gedung.png'
// import icon3 from '../img/elearning.png'
// import icon4 from '../img/innovation.png'
// import icon5 from '../img/job.png'
// import icon6 from '../img/nokorupsi.png'
import barisan from '../img/barisanlogo.png'

let iconData = [
    {
        id: 1,
        image: require('../img/pmb.png'),
        text: "Penerimaan Mahasiswa Baru"
    },

    {
        id: 2,
        image: require('../img/job.png'),
        text: "Job Arrengement System"
    },
    {
        id: 3,
        image: require('../img/gedung.png'),
        text: "International Cooperation"
    },
    {
        id: 4,
        image: require('../img/elearning.png'),
        text: "Layanan Elearning"
    },
    {
        id: 5,
        image: require('../img/innovation.png'),
        text: "Innovation & collaboration"
    },
    {
        id: 3,
        image: require('../img/nokorupsi.png'),
        text: "Zona berintegritas"
    }
]

function Icon () {
    return(
        <div className="iconsection">

            {
                iconData.map(icon => {
                    return(
                        <div className="icon"  key={icon.id} style={iconStyle}>
                            <div className="col">
                                <img src={icon.image} alt="img1"></img>
                                <h3>{icon.text}</h3>
                            </div>
                        </div>
                    )
                })
            }
            
            <img className="barislogo" src={barisan} alt="img"></img>
        </div>
        
    )
}

export default Icon

const iconStyle = {
    display: "flex",
    justifyContent: "center"
}