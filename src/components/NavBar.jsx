import React from "react";

export const NavBar = () =>{
    return(
<div className="container">
    <nav className="nav">
        <div className="nav_brand">
            <a className="nav_link" href="a">Mi Marca</a>
        </div>
        <ul className="nav_list">
            <li>
                <a className="nav_link" href="#">Categoria uno</a>
            </li>
            <li>
                <a className="nav_link" href="#">Categoria dos</a>
            </li>
            <li>
                <a className="nav_link" href="#">Carrito</a>
            </li>
        </ul>
    </nav>
</div>
    );

}


export default NavBar;