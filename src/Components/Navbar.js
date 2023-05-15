import React from 'react'

const Navbar = () => {
    const toggle = () => {
        if (document.getElementById('menu').style.transform === 'rotate(90deg)') {
            document.getElementById('menu').style.transform = 'rotate(0deg)';
            document.getElementById('menu_list').style.display = 'none'
            document.getElementById('menu_list2').style.display = 'none'
    
        }
        else {
            document.getElementById('menu').style.transform = 'rotate(90deg)'
            document.getElementById('menu_list').style.display = 'flex'
            document.getElementById('menu_list2').style.display = 'flex'
    
        }
    }




  return (
    <nav>

        <div className="nav_left">
            <div className="logo">
               <span> EDYODA </span> <i className="fa-solid fa-bars" id="menu" onClick={toggle}></i>
            </div>
            <div className="nav_list" id="menu_list">
                <div className="dropdown">
                    <button className="dropbtn">Courses <i className="fa-solid fa-chevron-down"></i></button>
                    <div className="dropdown-content">
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Programs <i className="fa-solid fa-chevron-down"></i></button>
                    <div className="dropdown-content">
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="nav_right" >
            <div className="nav_list" id="menu_list2">
                <i className="fa-solid fa-magnifying-glass"></i>
                <button className="dropbtn">Log In</button>
                <button className="btn_nav">JOIN NOW</button>
            </div>

        </div>

    </nav>
  )
}

export default Navbar
