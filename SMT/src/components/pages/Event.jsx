import React from 'react'

/* Components */
import Navbar from '../Navbar'
import Footer from '../Footer'

function Event() {
    return (
        <>
            <Navbar />
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis">Event</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Event