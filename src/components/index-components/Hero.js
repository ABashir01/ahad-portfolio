import profile from '../../Copy of Ahad Profile Pic.jpg'

function Hero() {
    return (
        <section id="hero-section">
            <div className="intro-section">
                <div className="text-block">
                    <h1>Hey, I'm Ahad Bashir</h1>
                    <p>I'm a Computer Science and Development Studies student at Brown interested in using my skills to either directly help people or create new knowledge. I love learning and want to do work that ultimately changes the world for the better. </p>
                    <p>I'm currently interested in and searching for roles where I can do the above.</p>
                </div>
                <div className="icons-bar">
                    <a className="button-link" href="https://www.linkedin.com/in/ahad-bashir-b5382b1b7/" target="_blank" rel="noreferrer" ><button className="linkedin">View LinkedIn</button></a>
                    <a className="button-link" href="https://github.com/ABashir01" target="_blank" rel="noreferrer" ><button  className="linkedin">View GitHub</button></a>
                    
                </div>
            </div>
            <img src={profile} alt="" className="profile-image"></img>
        </section>
    )
}

export default Hero;