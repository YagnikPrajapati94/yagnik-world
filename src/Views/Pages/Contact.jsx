import React from 'react';
import Layout from './Layout';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const result = await emailjs.send(
                'service_uh7qzuf',
                'template_xj9ac2k',
                {
                    name: data.name,
                    message: data.message,
                    time: new Date().toLocaleString(),
                    email: data.email
                },
                'VRrG-J8HQ1EP_r4Qn'
            );


            toast.success("Message sent successfully!");
            reset();
        } catch (error) {
            console.error(error);
            toast.error("❌ Failed to send message. Try again.");
        }
    };

    return (
        <Layout>
            <div className="row">
                <div className="col-12">
                    <div className="card p-4 bg-black rounded-4 overflow-hidden shadow-lg" data-aos="fade-up" data-aos-duration="1200">
                        <div className="card-body">
                            {/* Heading */}
                            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                <p className="fs-2 text-light fw-bold mb-2">
                                    Let's👋 Work Together
                                </p>
                                <p className="text-secondary fs-5">
                                    I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.
                                </p>
                            </div>

                            {/* Contact Form */}
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="form-control mt-4 border-0 p-4 rounded-3 "
                                data-aos="zoom-in-up"
                                data-aos-delay="200"
                                data-aos-duration="1200"
                            >
                                <div className="row">
                                    <div className="col-12 my-2 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="form-control bg-black text-light "
                                            {...register("name", { required: "Name is required" })}
                                        />
                                        {errors.name && <small className="text-danger">{errors.name.message}</small>}
                                    </div>

                                    <div className="col-12 my-2 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="form-control bg-black text-light "
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^\S+@\S+$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                        />
                                        {errors.email && <small className="text-danger">{errors.email.message}</small>}
                                    </div>

                                    <div className="col-12 my-2" data-aos="fade-up" data-aos-delay="500">
                                        <textarea
                                            rows="3"
                                            placeholder="Your Message"
                                            className="form-control bg-black text-light "
                                            {...register("message", { required: "Message is required" })}
                                        />
                                        {errors.message && <small className="text-danger">{errors.message.message}</small>}
                                    </div>

                                    <div className="col-12 my-2" data-aos="fade-up" data-aos-delay="600">
                                        <button
                                            type="submit"
                                            className="btn btn-primary form-control py-3 fw-semibold"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
