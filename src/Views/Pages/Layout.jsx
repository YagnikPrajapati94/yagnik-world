import React from 'react'
import Navbar from '../Layout/navbar/Navbar'

const Layout = ({ children }) => {
    const GitHubIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className="lucide lucide-github" viewBox="0 0 24 24" style={{ verticalAlign: 'middle' }}>
            <path d="M12 1C5.924 1 1 5.924 1 12c0 4.867 3.16 8.986 7.548 10.437.552.102.752-.24.752-.532 0-.263-.01-1.14-.014-2.065-3.073.67-3.722-1.48-3.722-1.48-.502-1.274-1.226-1.613-1.226-1.613-1.002-.685.076-.67.076-.67 1.108.078 1.69 1.138 1.69 1.138.985 1.688 2.586 1.2 3.216.917.1-.714.385-1.2.7-1.476-2.452-.28-5.032-1.226-5.032-5.455 0-1.205.43-2.188 1.136-2.958-.113-.28-.493-1.408.108-2.94 0 0 .927-.296 3.036 1.13a10.542 10.542 0 0 1 2.766-.37c.938.004 1.884.126 2.766.37 2.107-1.426 3.032-1.13 3.032-1.13.604 1.532.226 2.66.112 2.94.708.77 1.134 1.753 1.134 2.958 0 4.24-2.584 5.17-5.04 5.443.396.342.75 1.018.75 2.053 0 1.484-.014 2.68-.014 3.045 0 .296.196.64.76.532C19.844 20.98 23 16.863 23 12c0-6.076-4.924-11-11-11Z" />
        </svg>
    );

    const LinkedinIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className="lucide lucide-linkedin" viewBox="0 0 24 24" style={{ verticalAlign: 'middle' }}>
            <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );

    const TwitterIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className="lucide lucide-twitter" viewBox="0 0 24 24" style={{ verticalAlign: 'middle' }}>
            <path d="M22 4.01c-.77.35-1.6.59-2.46.69a4.22 4.22 0 0 0 1.85-2.33 8.44 8.44 0 0 1-2.67 1.02 4.22 4.22 0 0 0-7.18 3.85A12 12 0 0 1 3.14 3.15 4.22 4.22 0 0 0 4.1 9.7a4.18 4.18 0 0 1-1.91-.53v.05a4.22 4.22 0 0 0 3.39 4.14 4.26 4.26 0 0 1-1.9.07 4.22 4.22 0 0 0 3.94 2.93A8.46 8.46 0 0 1 2 19.55a11.92 11.92 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.69l-.01-.53A8.4 8.4 0 0 0 22 4.01Z" />
        </svg>
    );
    return (
        <div>
            {/* <video
                autoPlay
                muted
                loop
                playsInline
                className="video-bg w-100 position-fixed"
            >
                <source src="/bg3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            {/* data-aos="fade-down" data-aos-duration="2000" */}
            <header className='sticky-top' >
                <Navbar />
            </header>
            <main>
                <div className="container  ">
                    <div className="row g-4 ">
                        <div className="col-lg-4 my-data ">
                            <div className="card overflow-hidden bg-black border-0 rounded-4 shadow-lg">
                                <div className="card-body p-4 d-flex flex-column gap-4">

                                    {/* ABOUT ME with AOS fade-up delay */}
                                    <div className="text-light rounded-3 shadow-sm" style={{ fontFamily: 'monospace', fontSize: '19px', lineHeight: '1.8' }}>
                                        <code>
                                            <div data-aos="fade-up" data-aos-delay="0"><span className="text-primary">const</span> <span className="text-info">aboutMe</span> <span className="text-light">=</span> {'{'}</div>
                                            <div data-aos="fade-up" data-aos-delay="100">&nbsp;&nbsp;<span className="text-success">name</span>: <span className="text-warning">'Yagnik Prajapati'</span>,</div>
                                            <div data-aos="fade-up" data-aos-delay="200">&nbsp;&nbsp;<span className="text-success">role</span>: <span className="text-warning">'Full Stack Developer'</span>,</div>
                                            <div data-aos="fade-up" data-aos-delay="300">&nbsp;&nbsp;<span className="text-success">skills</span>: [</div>
                                            <div data-aos="fade-up" data-aos-delay="400">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-warning">'HTML'</span>, <span className="text-warning">'CSS'</span>, <span className="text-warning">'Bootstrap'</span>,</div>
                                            <div data-aos="fade-up" data-aos-delay="500">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-warning">'JavaScript'</span>, <span className="text-warning">'React.js'</span>, <span className="text-warning">'Next.js'</span>,</div>
                                            <div data-aos="fade-up" data-aos-delay="600">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-warning">'Node.js'</span>, <span className="text-warning">'Express.js'</span>, <span className="text-warning">'MongoDB'</span></div>
                                            <div data-aos="fade-up" data-aos-delay="700">&nbsp;&nbsp;]</div>
                                            <div data-aos="fade-up" data-aos-delay="800">{'}'};</div>
                                        </code>
                                    </div>

                                    {/* SOCIAL MEDIA section (optional – same technique can be used here) */}
                                    <div className="text-light rounded-3 shadow-sm" style={{ fontFamily: 'monospace', fontSize: '16px', lineHeight: '1.8' }}>
                                        <code>
                                            <div data-aos="fade-up" data-aos-delay="900"><span className="text-primary">const</span> <span className="text-info">socialLinks</span> <span className="text-light">=</span> [</div>
                                            <div data-aos="fade-up" data-aos-delay="1000">&nbsp;&nbsp;&#123; platform: 'GitHub', url: <a href="https://github.com/YagnikPrajapati94" target="_blank" rel="noopener noreferrer" className="text-warning text-decoration-none">"https://.....🧐"</a> &#125;,</div>
                                            <div data-aos="fade-up" data-aos-delay="1100">&nbsp;&nbsp;&#123; platform: 'LinkedIn', url: <a href="https://linkedin.com/in/yagnik" target="_blank" rel="noopener noreferrer" className="text-warning text-decoration-none">"https://..🧐"</a> &#125;,</div>
                                            <div data-aos="fade-up" data-aos-delay="1200">&nbsp;&nbsp;&#123; platform: 'Twitter', url: <a href="https://twitter.com/yagnik" target="_blank" rel="noopener noreferrer" className="text-warning text-decoration-none">"https://..🧐"</a> &#125;</div>
                                            <div data-aos="fade-up" data-aos-delay="1300">];</div>
                                        </code>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8  " >

                            {children}


                        </div>
                    </div>
                </div>

            </main >
            <footer></footer>
        </div >
    )
}

export default Layout
