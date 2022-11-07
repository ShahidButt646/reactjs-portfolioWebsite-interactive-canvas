import "./Projects.css"
import Card from './Card.js'
import music from '../music.PNG'
import trav from '../trave.PNG'
function Projects(){
   // console.log(music);
   // console.log(trav);
    return(
        <>
            <div id="projectDiv1">
                <h1 id="title">My Projects</h1>
                <div id="cardHolder">
                    <Card className="card" name="Concert Org" img={music} link="https://shahidbutt646-css-project.netlify.app/"/>
                    <Card className="card" name="Travling Agency" img={trav} link="https://shahidbutt646-bootstrap-project.netlify.app/"/>
                   
                
                    
                </div>
            </div>
        </>
    );
}
export default Projects