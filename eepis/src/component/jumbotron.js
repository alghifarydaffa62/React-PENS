import wisuda from '../img/wisuda2.jpg'
// import Carousel from 'react-bootstrap/Carousel';

function Jumbotron() {
    return(
        <div className="jumbotron">
            <img src={wisuda} alt="ojoj"></img>
            <div className="jumbotron-content">
                <div className="title">
                    <h1>PENS Cetak Generasi Unggul dengan Mengukuhkan 773 Wisudawan 
                        dalam Wisuda ke 23
                    </h1>
                    <h3>Surabaya, pens.ac.id - Pada Sabtu (5/10), Politeknik Elektronika Negeri Surabaya
                        (PENS) usai menggelar Sidang Terbuka Senat dalam rangka wisuda...
                    </h3>
                </div>
                
                <button>Selengkapnya</button>
            </div>
        </div>
    )
}

export default Jumbotron