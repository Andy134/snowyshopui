import React from 'react';
export default function Offcanvas(props) {

    const active = (props.status ? 'active' : '');

    function handleCloseCanvas() {
        props.handleCloseCanvas()
    }

    function handleChangeSearch() {
        props.handleChangeSearch(1)
    }

    return (
        <>
            {/* <!-- Offcanvas Menu Begin --> */}
            <div className={`offcanvas-menu-overlay ${active}`} onClick={handleCloseCanvas}></div>
            <div className={`offcanvas-menu-wrapper ${active}`}>
                <div className="offcanvas__close" onClick={handleCloseCanvas}>+</div>
                <ul className="offcanvas__widget">
                    <li><span className="icon_search search-switch" onClick={handleChangeSearch}></span></li>
                    <li><a href="/"><span className="icon_heart_alt"></span>
                        <div className="tip">2</div>
                    </a></li>
                    <li><a href="/"><span className="icon_bag_alt"></span>
                        <div className="tip">2</div>
                    </a></li>
                </ul>
                <div className="offcanvas__logo">
                    <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div className="offcanvas__auth">
                    <a href="/">Login</a>
                    <a href="/">Register</a>
                </div>
            </div>
            {/* <!-- Offcanvas Menu End --> */}
        </>
    );
}