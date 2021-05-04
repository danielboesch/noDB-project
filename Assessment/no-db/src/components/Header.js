import React, {Component} from 'react'

function Header(){
    return(
            <div className="header">
                <div className="headerInput">
                    <input placeholder='  Search...'></input>
                    <button>➤</button>
                </div>
                <div className="headerBox2And3">
                    <div className="headerBox2">
                        <ul className="headerLinks">
                            <li><b><a>Home</a></b></li>
                            <li><b>new</b></li>
                            <li><b>profile</b></li>
                            <li><b>about</b></li>
                        </ul>
                    </div>
                    <div className="headerBox3">
                        <img src = 'https://cdn2.iconfinder.com/data/icons/user-avatars-3/100/Boy_headphones-512.png'></img>
                    </div>
                </div>
            </div>
    )
}

export default Header