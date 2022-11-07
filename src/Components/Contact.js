
import './Contact.css';
function Contact(){
    return(
        <>
            <form id="contactMe">
                <h1>Contact Me</h1>
                
            
                <div className="form__group field">
                    <input required="" placeholder="Name" className="form__field" type="input"/>
                    <label className="form__label" htmlFor="name">Full Name</label>
                </div>
                <div className="form__group field">
                    <input required="" placeholder="Name" className="form__field" type="input"/>
                    <label className="form__label" htmlFor="name">Email</label>
                </div>
                <div id="msg" className="form__group field">
                    <textarea required="" placeholder="Name" className="form__field" type="input">
                        </textarea>
                    <label className="form__label" htmlFor="name">Messege</label>
                </div>
                <button className="btn formBtn" type="submit">Send.. </button>
            
                    
                
            </form>
            <div id='contactIntro'>
                <h1>Thoughts</h1>
                <p>
                I will add more stuff in this Portfolio and will update it with the latest technology that I'll learn. And will add more projects too :P <br/>Any Suggestions are highly appreciated, I know the color scheme is kinda cliché, will change it soon :D.



                </p>
                <ul>
                    <li>Email: <span> shahidbutt646@gmail.com </span></li>
                </ul>

            </div>
        </>    
        
    );
}
export default Contact