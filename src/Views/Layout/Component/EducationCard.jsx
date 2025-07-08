import React from 'react'

const EducationCard = ({ degree, year, university }) => {
    return (
        <>
            <div data-aos="fade-up" data-aos-delay="400" className="education-box d-flex align-items-center p-4 mt-3 rounded-3 shadow">
                <svg
                    className="rounded-3 text-primary flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>

                <div className="ps-4">
                    <h5 data-aos="fade-up" data-aos-delay="450" className="text-light mb-1">
                        {degree}
                    </h5>
                    <p data-aos="fade-up" data-aos-delay="500" className="text-secondary mb-1">
                        {year}
                    </p>
                    <p data-aos="fade-up" data-aos-delay="550" className="text-light mb-0">
                        {university}
                    </p>
                </div>
            </div>
        </>
    )
}

export default EducationCard
