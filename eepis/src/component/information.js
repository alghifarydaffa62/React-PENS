import prestasi from '../img/prestasi.jpg'
import dokumen from '../img/dokumen.jpg'

let dataBerita = [
    {
        id: 1,
        img: require('../img/berita3.png'),
        desc: "Optimalkan Pengajar PTV, PENS Gelar Program Non Degree Peningkatan Kompetensi Dosen Vokasi 2024",
        tanggal: "October 8, 2024"
    },
    {
        id: 2,
        img: require('../img/berita2.jpg'),
        desc: "Bangun Sikap Nasionalisme, PENS Gelar Upacara Peringatan Hari Kesaktian Pancasila",
        tanggal: "October 83, 2024"
    },
    {
        id: 3,
        img: require('../img/berita1.jpg'),
        desc: "Rangkul Seluruh Ormawa, Siap Berdayakan Desa melalui Workshop PENS Membangun Desa (PMD) 2024",
        tanggal: "October 3, 2024"
    },
    {
        id: 4,
        img: require('../img/prestasi.jpg'),
        desc: "Raih Prestasi Membanggakan, Mahasiswa PENS Sabet Juara Umum dan Dua Penghargaan pada CAD Competition 2024",
        tanggal: "October 8, 2024"
    },
]

function Information() {
    return(
        <div className="information">
            <div className="prestasi">
                <h2>PRESTASI</h2>
                <a href="#home"><img src={prestasi} alt="prestasi"></img></a>

                <div className="prestasi-content">
                    <a href="#hai"><h3>Raih Prestasi Membanggakan, Mahasiswa PENS \
                        Sabet Juara Umum dan Dua Penghargaan pada CAD Competition 2024</h3></a>
                    <p>Surabaya, pens.ac.id - Dua mahasiswa Program Studi Sarjana Terapan Teknik 
                        Mekatronika Politeknik Elektronika Negeri Surabaya (PENS) berhasil</p>
                </div>
            </div>
            <div className="berita">
                <h2>BERITA</h2>
                <div className="berita-content">
                    {
                        dataBerita.map(berita => {
                            return(
                                <div className="news" key={berita.id}>
                                    <img src={berita.img} alt="news1"></img>
                                    <div className="headline">
                                        <a href="#hhh"><h4>{berita.desc}</h4></a>
                                        <p>{berita.tanggal}</p>
                                    </div>
                                </div>      
                            )
                        })
                    }
                    
                </div>
            </div>
            <div className="lainnya">
                <h2>LAINNYA</h2>
                <div className="content">
                    <input type="text"></input>
                    <button type="submit">Search</button>

                    <div className="dok">
                        <div className="space"></div>
                        <img src={dokumen} alt="dok"></img>
                        <h4>D O K U M E N</h4>
                        <div className="space"></div>
                    </div>

                    <div className="links">
                        <div className="space"></div>
                        <ul>
                            <li><a href="#hhh">Rekap Data Mahasiswa 2024</a></li>
                            <li><a href="#hhh">Penelitian Robotika PENS</a></li>
                            <li><a href="#hhh">UTS / UAS 2024</a></li>
                            <li><a href="#hhh">Dokumen kelulusan 2024</a></li>
                            <li><a href="#hhh">UKM / Komunitas PENS</a></li>
                        </ul>
                        <div className="space"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information