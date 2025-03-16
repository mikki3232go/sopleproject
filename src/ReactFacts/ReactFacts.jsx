import "./style.css";
import reactLogo from "./reactjs-icon.png";
import reactLogo2 from "./reactjs-icon2.png";
export default  function ReactFacts(){
    return(
    <div id = "container">
        <header >
            
                <div id ="icon"><img  src = {reactLogo}/></div>
                <h2>ReactFacts</h2>
          
            <div id = "title">React Course - Project 1</div>
        </header>
        <main >
            <h1>Fun facts about React</h1>
            <ul>
               <li>Was first released in 2013</li> 
               <li>Was originally created by Jordan Walke</li>
               <li>Has well over 100K stars on GitHub</li>
               <li>Is maintained by Facebook</li>
               <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <div id = "logo2"><img src ={reactLogo2} /></div>
        </main>

    </div>
    );
}
