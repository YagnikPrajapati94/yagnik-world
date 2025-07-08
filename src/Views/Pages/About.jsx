import React from 'react';
import Layout from './Layout';
import EducationCard from '../Layout/Component/EducationCard';

const About = () => {
    return (
        <>
            <Layout>
                <div className="row">
                    <div className="col-12">
                        <div data-aos="fade" data-aos-duration="3000" className="card bg-black rounded-4 overflow-hidden">
                            <div className="card-body">
                                <div className="d-flex justify-content-between text-light">
                                    <p data-aos="fade-up" data-aos-delay="0" className="m-0 fs-4">
                                        Hi, This Is <span className="text-primary">Yagnik Prajapati 👋</span>
                                    </p>
                                </div>

                                <div className="align-items-center">
                                    <div>
                                        <p data-aos="fade-up" data-aos-delay="100" className="text-light text-opacity-75 fs-5 mt-3 lh-lg">
                                            Hi, I’m a <strong className='text-light text-capitalize'>full-stack web developer</strong> skilled in creating modern and responsive web applications.
                                            I work with both front-end and back-end technologies to build clean, user-friendly, and efficient websites.
                                        </p>
                                    </div>

                                    {/* Education */}
                                    <div>
                                        <p data-aos="fade-up" data-aos-delay="300" className="text-light fs-4 fw-medium">
                                            Academic Journey
                                        </p>

                                        {/* Education Card 1 */}
                                        <EducationCard degree={"Bachelor of Computer Applications"} year={"2020 - 2024"} university={"KSV University"} />
                                        <EducationCard degree={"Master of Computer Applications"} year={"2024 - Present"} university={"Parul University"} />




                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default About;
