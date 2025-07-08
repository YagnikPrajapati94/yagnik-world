import React from 'react'
import Layout from './Layout'
import { Player } from '@lottiefiles/react-lottie-player'

const Service = () => {
    return (
        <Layout>
            <div className="row">
                <div className="col-12">
                    <div data-aos="fade-up" data-aos-duration="1500" className="card bg-black rounded-4  overflow-hidden">
                        <div className="card-body">
                            <div className="col-xl-8  align-content-center">
                                <p data-aos="slide-left" data-aos-duration="1500" data-aos-delay="200" className='m-0 text-light fs-2 fw-medium'>Services I <span className='text-primary'>Offered</span></p>
                                <div className="">
                                    <p data-aos="slide-right" data-aos-duration="1500" data-aos-delay="300" className='text-secondary my-3 m-0 fs-4 '>Transforming Ideas into Innovative Reality, Elevate Your Vision with Our Expert <span className='text-light'>Product Design and Development</span> Services!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Service
