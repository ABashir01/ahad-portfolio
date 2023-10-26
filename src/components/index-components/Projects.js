import abilityle from '../../Dota 2 Abilityle Screenshot 2.png'
import simpl from '../../Simpl News Screenshot.png'

function Projects() {
    return (
        <section id="projects-section">
            <h2>Projects</h2>
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
                    <p>Built using Python, Flask, Frozen Flask, and BeautifulSoup. A stripped down HTML-only website that aims to make news content more easily accessible by being more easily loadable in slow-internet areas where more complicated modern websites might take a while to load in. Inspired by Brutalist Web Design principles in terms of design and accessibility.</p>
                </div>
            </div>
        </section>
    )
}

export default Projects;