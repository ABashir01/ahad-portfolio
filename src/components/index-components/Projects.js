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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="project-card">
                <img className="project-image" alt=" Simpl News website" src={simpl}></img>
                <div className="project-description">
                    <a href="https://github.com/ABashir01/simpl-news" target="_blank" rel="noreferrer" >Simpl News➔</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </section>
    )
}

export default Projects;