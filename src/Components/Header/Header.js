import React from 'react'
import "./Header.css"
function Header() {
    return (
        <div className='header'>
            <img src="/images/logo.svg" alt="" className='logo' />
            <div className="menu">
                <a>
                    <img src="/images/home-icon.svg" alt="" />
                    <span>Home</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>MOVIE</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </a>
            </div>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='pfpImg' />
        </div>
    )
}

export default Header
