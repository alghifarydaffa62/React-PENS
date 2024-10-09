import logo from '../img/logo.png'
import '../App.css'

// function dropdown() {
//     const menu = document.querySelectorAll(".menudrop")
// }

function Header() {
    return(
        <header className='navbar'>
            <img src={logo} alt='' style={imgstyle}></img>

            <nav>
                <ul>
                    <li><a href='#home'>BERANDA</a></li>
                    <div className='drop'>
                        <li id="trigger"><a href='#about'>TENTANG PENS</a></li>
                        <div className='dropdown'>
                            <ul className="menudrop">
                                <li><a href='#PENS'>Tentang PENS</a></li>
                                <li><a href='#PENS'>Visi Misi</a></li>
                                <li><a href='#PENS'>Struktur Organisasi</a></li>
                                <li><a href='#PENS'>Profil Direksi</a></li>
                                <li><a href='#PENS'>Susunan Senat</a></li>
                                <li><a href='#PENS'>Kalender Akademik</a></li>
                                <li><a href='#PENS'>Hymne PENS</a></li>
                                <li><a href='#PENS'>Peraturan Akademik</a></li>
                                <li><a href='#PENS'>Pedoman Sistem Identitas</a></li>
                                <li><a href='#PENS'>Akses ke PENS</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <li><a href='#academic'>AKADEMIK</a></li>
                    <li><a href='#services'>LAYANAN</a></li>
                    <li><a href='#ppid'>PPID</a></li>
                    <li><a href='#virtual'>VIRTUAL TOUR</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

const imgstyle = {
    width: '8vw',
    height: '8vh'
}