import React from 'react'
import { Link } from 'react-router-dom';


const CTA_Profiles = () => {
    return (
        <section>
            <div className="w-full flex flex-col sm:flex-row items-center sm:justify-end mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-0 sm:space-x-6">
                <a className='mt-1' href="https://github.com/EnricoBessa" target="_blank" rel="noopener noreferrer">
                    <img src="/images/github-logo.svg" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/enricobessa/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/linkedin.svg" alt="Linkedin" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=enricobessa@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/mail.svg" alt="Email" />
                </a>
            </div>
        </section>
    )
}

export default CTA_Profiles