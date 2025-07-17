import React, { useState } from 'react';
import Layout from './Layout';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Work = () => {
    const [filter, setFilter] = useState("All");

    const projects = [
        { id: 1, title: "Airline", category: "Web Design", link: "https://yagnikprajapati94.github.io/airline/" },
        { id: 2, title: "Gaming", category: "Web Design", link: "https://yagnikprajapati94.github.io/zelda/" },
        { id: 3, title: "Restaurant", category: "Web Design", link: "https://yagnikprajapati94.github.io/restaurant/" },
        { id: 4, title: "Admin Template", category: "Web Design", link: "https://yagnikprajapati94.github.io/admintemplate/" },
        { id: 5, title: "Cars Decar", category: "Web Design", link: "https://yagnikprajapati94.github.io/carsdecar/" },
        { id: 6, title: "Js All Projects", category: "JavaScript", link: "https://yagnikprajapati94.github.io/js-projects/" },
        { id: 7, title: "Asus - E-Commerce Site", category: "Full App", link: "https://asus-react-app.vercel.app/" },
        { id: 8, title: "Todo App", category: "React JS", link: "https://todoapp-2ha9m7vjc-yagniks-projects-b40eabcb.vercel.app/" }
    ];

    const filters = ["All", "Web Design", "JavaScript", "React JS", "Full App"];

    const filteredProjects = filter === "All" ? projects : projects.filter(project => project.category === filter);

    return (
        <Layout>
            <div className="row">
                <div className="col-12">
                    <div data-aos="fade-up" className="card bg-black rounded-4 overflow-hidden p-4">
                        <div className="card-body">
                            {/* Header */}
                            <div className="mb-4">
                                <h2 className="text-light fs-2 fw-bold">🚀 Projects Showcase</h2>
                                <p className="text-secondary">Designed like a real code editor 🧑‍💻</p>
                            </div>

                            {/* Filters */}
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                {filters.map(f => (
                                    <button
                                        key={f}
                                        onClick={() => setFilter(f)}
                                        className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-outline-secondary'}`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>

                            {/* Projects like Code Snippets */}
                            <div
                                className=" rounded-3  bg-dark bg-opacity-25 p-3 text-light overflow-y-scroll"
                                style={{
                                    fontFamily: 'monospace',
                                    fontSize: '0.9rem',
                                    maxHeight: '350px',

                                }}
                            >
                                <pre className="m-0">
                                    {`// ${filter === "All" ? "All Projects" : `${filter} Projects`}
const projects = [
`}
                                    {filteredProjects.map((project, index) => (
                                        <div key={project.id}>
                                            {`  {
    id: ${project.id},
    title: "${project.title}",
    category: "${project.category}",
    link: "`}
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-info text-decoration-none"
                                            >
                                                {project.link} <FaExternalLinkAlt size={12} />
                                            </a>
                                            {`"
  },`}
                                        </div>
                                    ))}
                                    {`
];`}
                                </pre>
                            </div>

                            {/* Optional: No projects found */}
                            {filteredProjects.length === 0 && (
                                <div className="text-center text-warning mt-3">⚠ No projects found.</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Work;
