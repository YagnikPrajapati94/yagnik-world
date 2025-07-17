
import React from 'react';
import { NavLink } from 'react-router-dom';
import SideMenuBar from '../Component/SideMenuBar';
import { FaWhatsapp } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className="container nav-box  py-4">
            <nav className="navbar navbar-expand-lg py-3 px-2     bg-black rounded-4">
                <div className="container-fluid ">
                    <a className="navbar-brand fw-bold  text-white" href="#">YAGN⚡K</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-tabs mx-auto gap-4 fw-medium">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `nav-link d-flex gap-2 rounded-3 ${isActive ? "active" : "noActive"}`
                                    }
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-house">
                                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                                        <path d="M3 10a2 2 0 0 1 .7-1.5l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    </svg>
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `nav-link d-flex gap-2 rounded-3 ${isActive ? "active" : "noActive"}`
                                    }
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-square-user-round">
                                        <path d="M18 21a6 6 0 0 0-12 0" />
                                        <circle cx="12" cy="11" r="4" />
                                        <rect width="18" height="18" x="3" y="3" rx="2" />
                                    </svg>
                                    About
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/service"
                                    className={({ isActive }) =>
                                        `nav-link d-flex gap-2 rounded-3 ${isActive ? "active" : "noActive"}`
                                    }
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-layers">
                                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
                                    </svg>
                                    Services
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/work"
                                    className={({ isActive }) =>
                                        `nav-link d-flex gap-2 rounded-3 ${isActive ? "active" : "noActive"}`
                                    }
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-briefcase-business">
                                        <path d="M12 12h.01" />
                                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                        <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                                        <rect width="20" height="14" x="2" y="6" rx="2" />
                                    </svg>
                                    Works
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `nav-link d-flex gap-2 rounded-3 ${isActive ? "active" : "noActive"}`
                                    }
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-message-square-text">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        <path d="M13 8H7" />
                                        <path d="M17 12H7" />
                                    </svg>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <a
                        href="https://wa.me/916354864623?text=Hello%20Yagnik!%20I%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn d-lg-block d-none lets-talk d-flex align-items-center text-light ms-auto me-lg-0 me-2 whatsapp-btn"
                    >
                        <span className='d-xl-inline d-none'>Chat on WhatsApp</span>
                        <FaWhatsapp className="ms-xl-2 mb-1" size={20} />
                    </a>



                    <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" /></svg>
                    </button>
                </div>
            </nav>
            <SideMenuBar />

        </div>
    );
};

export default Navbar;
