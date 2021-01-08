import $ from 'jquery';
import React from 'react';

export default function Search(props) {

    // useEffect(() => {
    if (props.status === 1) {
        $('.search-model').fadeIn(400);
    }
    else if (props.status === -1) {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    }
    // }, [props.status]);

    function handleChangeSearch() {
        props.handleChangeSearch(-1)
    }

    function handleSubmit() {
        props.handleChangeSearch(-1)
    }

    return (
        <>
            {/* <!-- Search Begin --> */}
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch" onClick={handleChangeSearch}>+</div>
                    <form className="search-model-form" onSubmit={handleSubmit}>
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
            {/* <!-- Search End --></div> */}
        </>
    )
}