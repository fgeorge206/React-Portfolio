import React, {useState} from "react";
import './App.css'
import { Footer } from "./componets/Footer";
import { Header } from "./componets/Header";
import PortfolioContainer from "./componets/PortfolioContainer";

function App () {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [postText, setpostText] = useState('')
    const handleFormChange = (e) =>{
        const inputType = e.target.name;
        const inputValue = e.target.value

        if (inputType==="userName"){
            setUserName(inputValue)
        }
        if (inputType==="userEmail"){
            setUserEmail(inputValue)
        }
        if (inputType==="postText"){
            setpostText(inputValue)
        }
    }
    return (
        <div id="content">
            <Header/>
            <br/>
            <PortfolioContainer handleFormChange={handleFormChange} userName={userName} userEmail={userEmail} postText={postText}/>
            <br/>
            <div style={{flexGrow:1}}></div>
            <Footer/>
        </div>
    )
}
export default App;