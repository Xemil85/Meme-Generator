import React from "react";
import logo from "./kuvat/pngkey.com-thinking-meme-png-3152007.png"

function Header() {
    return(
        <header className="container">
            <img
                src={logo}
                alt='Problem?'
            />
            <p>Meemigeneraattori</p>
        </header>
    )
}

export default Header;