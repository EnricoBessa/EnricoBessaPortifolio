import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section>
            <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="cta-text">Have a project in mind? <br className="sm:block hidden" /> Let's build something together!</p>
                <Link to="/contact" className="btn-cta">Contact</Link>
            </div>
        </section>
    )
}

export default CTA