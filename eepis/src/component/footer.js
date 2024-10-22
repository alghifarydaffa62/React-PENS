import '../App.css'

const Departemen = [
    {
        id: 1,
        links: "Teknik Elektro"
    },
    {
        id: 2,
        links: "Teknik Informatika dan komputer"
    },
    {
        id: 3,
        links: "Teknik Mekanika dan Energi"
    },
    {
        id: 4,
        links: "Teknik Multimedia Kreatif"
    },
    {
        id: 5,
        links: "Pasca Sarjana"
    },
]

const Program = [
    {
        id: 1,
        links: "Teknik Elektronika"
    },
    {
        id: 2,
        links: "Teknik Telekomunikasi"
    },
    {
        id: 3,
        links: "Teknik Elektro Industri"
    },
    {
        id: 4,
        links: "Teknik Informatika"
    },
    {
        id: 5,
        links: "Teknik Mekatronika"
    },
    {
        id: 6,
        links: "Teknik Komputer"
    },
    {
        id: 7,
        links: "Teknik MMB"
    },
    {
        id: 8,
        links: "Sistem Pembangkit Energi"
    },
    {
        id: 9,
        links: "Teknologi Game"
    },
    {
        id: 10,
        links: "Teknologi Rekayasa Internet"
    },
    {
        id: 11,
        links: "Teknologi Rekayasa Multimedia"
    },
    {
        id: 12,
        links: "Sains Data Terapan"
    },
    {
        id: 13,
        links: "Pendidikan Jarak Jauh"
    },
]

const Dosen = [
    {
        id: 1,
        links: "Direktori Dosen"
    },
    {
        id: 2,
        links: "Email Dosen"
    },
    {
        id: 3,
        links: "Modul Ajar Video"
    },
    {
        id: 4,
        links: "Dosen Jaga"
    },
]

const Mahasiswa = [
    {
        id: 1,
        links: "website mahasiswa"
    },
    {
        id: 2,
        links: "email mahasiswa"
    },
    {
        id: 3,
        links: "Badan Eksekutif Mahasiswa"
    },
    {
        id: 4,
        links: "Hima Elektronika"
    },
    {
        id: 5,
        links: "Hima Telkom"
    },
    {
        id: 6,
        links: "Hima Elin"
    },
    {
        id: 7,
        links: "Hima IT"
    },
    {
        id: 8,
        links: "Hima Mekatronika"
    },
    {
        id: 9,
        links: "Hima MMB"
    },
    {
        id: 10,
        links: "Hima Computer Engineering"
    },
    {
        id: 11,
        links: "Hima Energi"
    },
]

const Unit = [
    {
        id: 1,
        links: "EEPIS Information System"
    },
    {
        id: 2,
        links: "Pusat Jaminan Mutu"
    },
    {
        id: 3,
        links: "Pusat Perencanaan dan"
    },
    {
        id: 4,
        links: "Unit Kemahasiswaan"
    },
    {
        id: 5,
        links: "Job Arrengement System"
    },
    {
        id: 6,
        links: "P3M"
    },
    {
        id: 7,
        links: "Pusat Bahasa"
    },
    {
        id: 8,
        links: "Jaringan Komputer"
    },
    {
        id: 9,
        links: "EDP"
    },
    {
        id: 10,
        links: "Inkubator Bisnis PENS"
    },
    {
        id: 11,
        links: "Perpustakaan"
    },
    {
        id: 12,
        links: "Satuan Pengawas Internal"
    },
]

const Pengaduan =[
    {
        id: 1,
        links: "Informasi Layanan dan Pengaduan"
    },
    {
        id: 2,
        links: "Pelaporan Gratifikasi"
    },
    {
        id: 3,
        links: "Whistle Blowing System"
    },
    {
        id: 4,
        links: "Layanan Aspirasi dan Pengaduan"
    },
]

const Informasi = [
    {
        id: 1,
        links: "Online mis"
    },
    {
        id: 2,
        links: "Penerimaan Mahasiswa Baru"
    },
    {
        id: 3,
        links: "Industry Electronics Seminar"
    },
    {
        id: 4,
        links: "EEpis Repository"
    },
    {
        id: 5,
        links: "Elearning PENS"
    },
    {
        id: 6,
        links: "EMITTER Int. Journal of Eng. Tech."
    },
    {
        id: 7,
        links: "Surat Menteri PAN RB RI"
    },
    {
        id: 8,
        links: "Koperasi KDH"
    },
    {
        id: 9,
        links: "Redaksiana PENS"
    },
]

function Footer() {
    return(
        <div className="footer">
            <div className="yellow"></div>

            <footer>
                <div className="col1">
                    <div>
                        <h3 className="highlight">DEPARTEMEN</h3>
                        <ul>
                            {
                                Departemen.map(depart => {
                                    return (
                                        <li key={depart.id}><a href="#dojo">{depart.links}</a></li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>

                    <div>
                        <h3 className="highlight">Program Studi</h3>
                        <ul>
                            {
                                Program.map(studi => {
                                    return(
                                        <li key={studi.id}><a href="#dojo">{studi.links}</a></li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                </div>
                <div className="col1">
                    <div>
                        <h3 className="highlight">DOSEN</h3>
                        <ul>
                            {
                                Dosen.map(dosen => {
                                    return(
                                        <li key={dosen.id}><a href="#dojo">{dosen.links}</a></li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>   

                     <div>
                        <h3 className="highlight">MAHASISWA</h3>
                        <ul>
                            {
                                Mahasiswa.map(mhs => {
                                    return(
                                        <li key={mhs.id}><a href="#dojo">{mhs.links}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>                 
                </div>
                <div className="col1">
                    <div>
                        <h3 className="highlight">UNIT</h3>
                        <ul>
                            {
                                Unit.map(unit => {
                                    return(
                                        <li key={unit.id}><a href="#dojo">{unit.links}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div>
                        <h3 className="highlight">PENGADUAN</h3>
                        <ul>
                            {
                                Pengaduan.map(cepu => {
                                    return(
                                        <li key={cepu.id}><a href="#dojo">{cepu.links}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className="col1">
                    <div>
                        <h3 className="highlight">INFORMASI</h3>
                        <ul>
                            {
                                Informasi.map(info => {
                                    return(
                                        <li key={info.id}><a href="#dojo">{info.links}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="highlight">LINK LUAR</h3>
                        <ul>
                            <li><a href="#dojo">KMIPN</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer