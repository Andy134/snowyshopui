import React, { useState } from 'react';
import Offcanvas from './_components/Offcanvas';
import PagePreloder from './_components/PagePreloder';
import Header from './_components/Header';
import Footer from './_components/Footer';

import HomePage from './_page/Homepage/_Homepage';
import Search from './_components/Search';

function SinglePage() {

    const [search, setSearch] = useState(0);
    const [canvas, setCanvas] = useState(false);

    function handleChangeSearch(stCode) {
        setSearch(stCode);
    }

    function handleCanvas() {
        setCanvas(!canvas);
    }

    return (
        <div className="App">
            <PagePreloder />
            <Offcanvas status={canvas} handleCloseCanvas={handleCanvas} handleChangeSearch={handleChangeSearch}/>
            <Header handleChangeSearch={handleChangeSearch} handleOpenCanvas={handleCanvas} />
            <HomePage />
            <Footer />
            <Search status={search} handleChangeSearch={handleChangeSearch} />
        </div>
    );
}

export default SinglePage;
