import logo from '../img/logo.png'
import '../App.css'
import React, { useState } from 'react';
// function dropdown() {
//     const menu = document.querySelectorAll(".menudrop")
// }

const departemen = [
  {
    id: 1,
    link: "Departemen Teknik Elektro"
  },
  {
    id: 2,
    link: "Departemen Teknik Informatika dan Komputer"
  },
  {
    id: 3,
    link: "Departemen Teknik Mekanika Energi"
  },
  {
    id: 4,
    link: "Departemen Teknologi Multimedia Kreatif"
  },
  {
    id: 5,
    link: "Departemen Tekik Elektro"
  }
]

const diploma3 = [
  {
    id: 1,
    link: "Teknik Elektronika"
  },
  {
    id: 2,
    link: "Teknik Telekomunikasi"
  },
  {
    id: 3,
    link: "Teknik Elektro Industri"
  },
  {
    id: 4,
    link: "Teknik Informatika"
  },
  {
    id: 5,
    link: "Teknik Muktimedia Broadcast"
  },
  {
    id: 6,
    link: "Teknik Informatika kampus lamongan"
  },
  {
    id: 7,
    link: "Teknik Informatika kampus sumenep"
  },
  {
    id: 8,
    link: "PJJ Teknik Informatika"
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

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt='logo' style={imgstyle}></img>
      <ul className="navbar-menu">
        <li className="navbar-item">BERANDA</li>
        <li 
          className="navbar-item dropdown" 
          onMouseEnter={toggleDropdown} 
          onMouseLeave={toggleDropdown}
        >
          TENTANG PENS
          {dropdownOpen && (
            <ul className="dropdown-menu" style={dropnav}>
              <li className="dropdown-item">Tentang PENS</li>
              <li className="dropdown-item">Visi Misi</li>
              <li className="dropdown-item">Struktur Organisasi</li>
              <li className="dropdown-item">Profil Direksi</li>
              <li className="dropdown-item">Susunan Senat</li>
              <li className="dropdown-item">Kalender Akademik</li>
              <li className="dropdown-item">Hymne PENS</li>
              <li className="dropdown-item">Peraturan Akademik</li>
              <li className="dropdown-item">Pedoman sistem identitas</li>
              <li className="dropdown-item">Akses ke PENS</li>
            </ul>
          )}
        </li>

        <li 
          className="navbar-item dropdown" 
          onMouseEnter={toggleDropdown} 
          onMouseLeave={toggleDropdown}
        >
          AKADEMIK
          {dropdownOpen && (
            <ul className="dropdown-menu" style={drop}>
              <div className="departemen">
                <h3>DEPARTEMEN</h3>
                {
                  departemen.map(dprt => {
                    return(
                      <li className="dropdown-item" key={dprt.id}>{dprt.link}</li>
                    )
                  })
                }
              </div>

              <div className="d3">
                <h3>Diploma 3</h3>
                {
                  diploma3.map(d3 => {
                    return(
                      <li className="dropdown-item" key={d3.id}>{d3.link}</li>
                    )
                  })
                }
              </div>
              <div className="sarjana">
                <h3>SARJANA TERAPAN</h3>
                {
                  Program.map(Str => {
                    return(
                      <li className="dropdown-item" key={Str.id}>{Str.links}</li>
                    )
                  })
                }
              </div>
            </ul>
          )}
        </li>
        <li className="navbar-item">LAYANAN</li>
        <li className="navbar-item">PPID</li>
        <li className="navbar-item">KONTAK</li>
        <li className="navbar-item">VIRTUAL TOUR</li>
        
        
        
        <li className="navbar-item">CONTACT</li>
      </ul>
    </nav>
  );
}

export default Header

const imgstyle = {
    width: '8vw',
    height: '8vh'
}

const drop = {
  display: "flex",
  gap: '1rem',
  // right: '100px'
}

const dropnav = {
  width: '10rem'
}