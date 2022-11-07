import CanvasHeader from './Components/CanvasHeader'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Search from './reactTask/Search'
import "./App.css"


function App(){
    return(
        <>        
                   
            <CanvasHeader />
            <Projects />
            <Contact />
            <Footer />
            
            {/* React Task Starts 
            <Search />*/}

        
        </>

    );
}
export default App