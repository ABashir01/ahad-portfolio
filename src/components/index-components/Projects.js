import abilityle from '../../Dota 2 Abilityle Screenshot 2.png';
import simpl from '../../Simpl News Screenshot.png';
import calc from '../../Artist Similarity Calculator Screenshot.png';
import two_houses from '../../Two Houses Screenshot.png';

function Projects() {
    return (
        <section id="projects-section">
            <h2>Projects</h2>
            <div className="project-card">
                <img className="project-image" alt=" Two Houses website" src={two_houses}></img>
                <div className="project-description">
                    <a href="https://github.com/ABashir01/2-houses-and-a-plague" target="_blank" rel="noreferrer" >Two Houses➔</a>
                    <p>Built using the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO. An online implementation of <a className="in-text-link" href="https://www.tuesdayknightgames.com/tworoomsandaboom" target="_blank" rel="noreferrer">Two Rooms and a Boom➔</a> where you can use your phone instead of the cards.</p>
                </div>
            </div>
            <div className="project-card">
                <img className="project-image" alt="Artist Similarity Calculator website" src={calc}></img>
                <div className="project-description">
                    <a href="https://github.com/ABashir01/artist-similarity-calculator" target="_blank" rel="noreferrer" >Artist Similarity Calculator➔</a>
                    <p>Built using React and the Spotify API. A simple calculator I made to give an idea of how closely related 2 music artists are based on genres and similar artists. I made this to help with music matchmaking between the members of my club, Music Connect.</p>
                </div>
            </div>
            <div className="project-card">
                <img className="project-image" alt="Dota 2 Abilityle website" src={abilityle}></img>
                <div className="project-description">
                    <a href="https://github.com/ABashir01/dota-abilityle" target="_blank" rel="noreferrer" >Dota 2 Abilityle➔</a>
                    <p>Built using Python, Javascript, PostgreSQL, Django, and React. A wordle-inspired game based around trying to guess the name of a hero’s ability in Dota 2 from hints such as the mana cost, cooldown, or damage of an ability. I made it for my friends because we all play Dota 2 together.</p>
                </div>
            </div>
            <div className="project-card">
                <img className="project-image" alt=" Simpl News website" src={simpl}></img>
                <div className="project-description">
                    <a href="https://github.com/ABashir01/simpl-news" target="_blank" rel="noreferrer" >Simpl News➔</a>
                    <p>Built using Python, Flask, Frozen Flask, and BeautifulSoup. A stripped down HTML-only website that aims to make news content more easily accessible by being more easily loadable in slow-internet areas where more complicated modern websites might take a while to load in. Inspired by <a className="in-text-link" href="https://brutalist-web.design/" target="_blank" rel="noreferrer">Brutalist Web Design➔</a> principles in terms of design and accessibility.</p>
                </div>
            </div>
        </section>
    )
}

export default Projects;