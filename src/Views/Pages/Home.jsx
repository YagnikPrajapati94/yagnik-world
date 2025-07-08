import React from 'react'
import Layout from './Layout'
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const Home = () => {
    const skills = [
        { name: 'HTML', icon: 'devicon-html5-plain colored' },
        { name: 'CSS', icon: 'devicon-css3-plain colored' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'React.js', icon: 'devicon-react-original colored' },
        { name: 'Next.js', icon: 'devicon-nextjs-plain' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'Express.js', icon: 'devicon-express-original' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
        { name: 'GitHub', icon: 'devicon-github-original' },
    ];
    const services = [
        {
            title: "Responsive Web Design",
            desc: "Creating mobile-friendly, clean UI using HTML, CSS, Bootstrap.",
            icon: "bi-display",
            delay: 100,
            color: "text-info",
        },
        {
            title: "React/Next.js Web Apps",
            desc: "Building fast, SEO-optimized SPAs and dynamic websites.",
            icon: "bi-code-slash",
            delay: 200,
            color: "text-success",
        },
        {
            title: "Backend API Development",
            desc: "Secure REST APIs using Node.js and Express.js.",
            icon: "bi-node-plus",
            delay: 300,
            color: "text-warning",
        },
        {
            title: "MongoDB Integration",
            desc: "Schema design and data handling for full-stack apps.",
            icon: "bi-database-check",
            delay: 400,
            color: "text-primary",
        },
        {
            title: "Full Stack App Development",
            desc: "End-to-end MERN stack application development.",
            icon: "bi-laptop",
            delay: 500,
            color: "text-danger",
        },
    ];

    return (
        <Layout>
            <div className="row">
                <div className="col-12">
                    <div
                        data-aos="fade"
                        data-aos-duration="3000"
                        className="card bg-black rounded-4 mb-4"
                    >
                        <div className="card-body">
                            {/* <p className="text-light fs-5 fw-bold mb-4 text-center">My Expert Area</p> */}
                            <div className="row">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="text-center    col-lg-1 col-3 my-2"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 150}

                                        data-aos-duration="3000"
                                    >
                                        <i className={`${skill.icon} fs-3 skill-icon `}></i>
                                        {/* <p className="text-light small mt-1 mb-0">{skill.name}</p> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 text-lg-start text-center">
                    <div data-aos="fade" data-aos-duration="3000" className="card  bg-black rounded-4   mb-4">
                        <div className="card-body overflow-hidden">
                            <p data-aos="slide-right" data-aos-delay="200" className='text-light justify-content-lg-start  justify-content-center d-flex mb-0 align-items-center '> <Player
                                autoplay
                                loop
                                src="/dot.json"
                                className=''
                                style={{ height: '50px', width: '100%' }}
                            />Available for Freelancing</p>
                            <p data-aos="slide-right" data-aos-delay="400" className='fs-3 text-light fw-bold ps-2 mb-2'>
                                Let's👋
                                Work Together
                            </p>
                            <Link data-aos="slide-right" data-aos-delay="700" to="/contact" className='ps-2 nav-link pb-2 text-primary text-decoration-underline '>Let's Talk <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <path d="M16 7h6v6" />
                                <path d="m22 7-8.5 8.5-5-5L2 17" />
                            </svg></Link>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div data-aos="fade" data-aos-duration="3000" className="card  bg-black rounded-4  mb-4">
                        <div className="card-body">

                            <div >
                                <Player
                                    autoplay
                                    loop
                                    src="/profile.json"
                                    className=''
                                    style={{ height: '125px', width: '100%' }}
                                />

                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="col-12">
                    <div data-aos="fade" data-aos-duration="3000" className="card bg-black rounded-4 mb-4">
                        <div className="card-body">
                            <p className='fs-3 text-light fw-bold ps-2 mb-4'>Services I Offered</p>

                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                {services.map((item, index) => (
                                    <div className="col" data-aos="zoom-in" data-aos-delay={item.delay} key={index}>

                                        <div className="bg-service text-light py-3 px-3 rounded-3  shadow-sm">
                                            <div className="bg-black text-center rounded-3 py-4">
                                                <i className={`bi ${item.icon} fs-1 mb-3  ${item.color}`}></i>
                                            </div>

                                            <p className='mb-0 text-center pt-2 text-secondary'>{item.title}</p>
                                            <p className="small">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </div> */}
            </div>
        </Layout>
    )
}

export default Home
