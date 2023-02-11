import React, { useState } from 'react'
import LogoWhite from '../assets/img/logo-white.png'
export default function Menu() {
    const [toggle, setToggle] = useState(true)
    return (
    <div class="menu-wrapper container-fluid">
        <div class="row">
        <div class="logo-wrapper col-sm-3">
            <a href="/">
                <img src={LogoWhite} alt="Logo" />
            </a>
        </div>
        <div class="nav col-sm-9">
            <div class="col">
                <ul>
                <li><a href="/#">The Adult Chair</a></li>
                <li><a href="/#">Courses</a></li>
                <li><a href="/#">2023 Journaling Challenging</a></li>
                <li><a href="/#">Find A TAC Coach</a></li>
                <li><a href="/#">Courses</a></li>
                <li><a href="/#">Contact</a></li>
                <li class="search" onClick={() => setToggle(!toggle)}><img alt="" src="https://theadultchair.com/careers-new/icons/search-icon.png" /></li>
                {!toggle && (
                <div class="form-overlay">
                    <button class="exit" onClick={() => setToggle(!toggle)}>
                        X
                    </button>
                    <form action="/" method="get">
                        <label>Search: </label>
                <input type="text" name="s"></input>
                <button type="submit"><img alt="" src="https://theadultchair.com/careers-new/icons/search-icon.png" /></button>
            </form>
            </div> )}
            </ul>
            </div>
            
        </div>
        </div>
    </div>
);}