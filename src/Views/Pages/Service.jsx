import React from 'react';
import Layout from './Layout';
import { Player } from '@lottiefiles/react-lottie-player';
import { Code, Database, MonitorSmartphone, ShieldCheck } from 'lucide-react'; // Icons from lucide-react (already in shadcn setup or install separately)

const services = [
    {
        icon: <Code className="text-primary" size={32} />,
        title: "Frontend Development",
        description: "Crafting pixel-perfect UI with ReactJS, Tailwind CSS, Bootstrap, and smooth animations using AOS.",
    },
    {
        icon: <Database className="text-success" size={32} />,
        title: "Backend Integration",
        description: "Developing robust backend using Node.js, Express.js, and MongoDB. Efficient APIs & RESTful architecture.",
    },
    {
        icon: <MonitorSmartphone className="text-info" size={32} />,
        title: "Responsive Design",
        description: "Ensuring full responsiveness across all devices with mobile-first approach and media queries.",
    },
    {
        icon: <ShieldCheck className="text-warning" size={32} />,
        title: "Firebase Services",
        description: "Authentication, Firestore DB, and Realtime features — all integrated with Firebase and EmailJS.",
    },
];

const Service = () => {
    return (
        <Layout>
            <div className="row">
                <div className="col-12">
                    <div data-aos="fade-up" data-aos-duration="1500" className="card bg-black rounded-4 overflow-hidden">
                        <div className="card-body">
                            {/* Heading */}
                            <div className="col-xl-8 align-content-center">
                                <p data-aos="slide-left" data-aos-duration="1500" data-aos-delay="200" className='m-0 text-light fs-2 fw-medium'>
                                    Services I <span className='text-primary'>Offer</span>
                                </p>
                                <p data-aos="slide-right" data-aos-duration="1500" data-aos-delay="300" className='text-secondary my-3 fs-4'>
                                    Transforming Ideas into Innovative Reality — Elevate Your Vision with Expert
                                    <span className='text-light'> Full Stack Development</span> Services!
                                </p>
                            </div>

                            {/* Services Grid */}
                            <div className="row mt-4">
                                {services.map((service, index) => (
                                    <div key={index} className="col-md-6 col-xl-6 mb-4" data-aos="zoom-in" data-aos-delay={index * 100}>
                                        <div className="p-4 bg-dark bg-opacity-50 rounded-4 h-100 shadow-lg text-light">
                                            <div className="mb-3">{service.icon}</div>
                                            <h5 className="fw-bold">{service.title}</h5>
                                            <p className="text-secondary">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Service;
