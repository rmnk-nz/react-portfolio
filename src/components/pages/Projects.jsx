import React from 'react';
import '../../styles/Projects.css';
import image4 from '../../images/trackJournal.png';
import image3 from '../../images/codequiz.png';
import image2 from '../../images/weatherdashboard.png';
import image1 from '../../images/hawaikiShop.png'

const projectData = [
    {
        id: '1',
        title: 'Hawaiki Shop',
        description: 'Group project - e-commerce application for client to sell merchandise. Demostrates the use of Express/mySQL/sequelize/sessions/handlebars.',
        img: image1,
        link: 'https://hawaikishop.herokuapp.com/',
        github: 'https://github.com/anushaselvan/Hawaiki-Shop',
    },
    {
        id: '2',
        title: 'Weather Dashboard',
        description: 'Application to find weather conditions for a given city. Demostrates the use of HTML/CSS/Javascript/Web-API.',
        img: image2,
        link: 'https://rmnk-nz.github.io/weather-dashboard/',
        github: 'https://github.com/rmnk-nz/weather-dashboard',
    },
    {
        id: '3',
        title: 'Code Quiz',
        description: 'Timed coding quiz with multiple-choice questions. Features dynaically updated HTML and CSS powered by Javascript.',
        img: image3,
        link: 'https://rmnk-nz.github.io/code-quiz/',
        github: 'https://github.com/rmnk-nz/code-quiz',
    }, 
    {
        id: '4',
        title: 'Track Journal',
        description: 'Group project - application for users to search walking tracks or parks within 5km radius and document their experience. Technologies used include HTML/CSS/Javascript/Web-API',
        img: image4,
        link: 'https://annanguyen1.github.io/Track-Journal/homepage.html',
        github: 'https://github.com/AnnaNguyen1/Track-Journal',
    }
]

export default function Projects() {
    return (
        <>
        <h2 className="projectsTitle">@RM Projects</h2>
        <div className='projectsDiv'>
                {projectData.map((project) => {
                    return (
                        <div className='projectItems'>
                            <div className='itemTitle'>
                                <h3>{project.title}</h3>
                                <a href={project.github}><i class="bi bi-github"></i></a>
                            </div>
                            <a 
                            href={project.link}
                            key={project.id}>
                                <img className='projectImage' src={project.img} alt='projectImage' width={500} />
                            </a>
                            <p>{project.description}</p>
                        </div>
                    );
                })}
        </div>
        </>
    );
}
