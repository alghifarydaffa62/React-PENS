import prestasi from '../img/prestasi.jpg'
import berita1 from '../img/berita1.jpg'
import berita2 from '../img/berita2.jpg'
import berita3 from '../img/berita3.png'
import dokumen from '../img/dokumen.jpg'

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
                    <div className="news">
                        <img src={berita3} alt="news1"></img>
                        <div className="headline">
                            <a href="#hhh"><h4>Optimalkan Pengajar PTV, PENS Gelar Program Non Degree 
                                Peningkatan Kompetensi Dosen Vokasi 2024</h4></a>
                            <p>October 8, 2024</p>
                        </div>
                    </div>
                    <div className="news">
                        <img src={berita2} alt="news2"></img>
                        <div className="headline">
                            <a href="#hhh"><h4>Bangun Sikap Nasionalisme, PENS Gelar Upacara
                                 Peringatan Hari Kesaktian Pancasila</h4></a>
                            <p>October 3, 2024</p>
                        </div>
                    </div>
                    <div className="news">
                        <img src={berita1} alt="news3"></img>
                        <div className="headline">
                            <a href="#hhh"><h4>Rangkul Seluruh Ormawa, Siap Berdayakan 
                                Desa melalui Workshop PENS Membangun Desa (PMD) 2024</h4></a>
                            <p>October 3, 2024</p>
                        </div>
                    </div>
                    <div className="news">
                        <img src={prestasi} alt="news4"></img>
                        <div className="headline">
                            <a href="#hhh"><h4>Raih Prestasi Membanggakan, Mahasiswa PENS \
                            Sabet Juara Umum dan Dua Penghargaan pada CAD Competition 2024</h4></a>
                            <p>October 8, 2024</p>
                        </div>
                    </div>
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