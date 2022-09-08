import React,{useState} from "react";
import "./App.css";
import footer from "./Folder/footer";
import Header from "./Folder/Header"
import Navbar from "./Folder/Navbar";
import Section from "./Folder/Section";
import { Context} from "./context";
function App(){
    const[cartTotal,setCartTotal]=useState(0);
    return(
        <>
        <Context.Provider
         value={{
            cartTotal:cartTotal,
            setCartTotal:setCartTotal,
        }}>
        <div
           
            >
                <footer/>
                <Header/>
                <Navbar/>
                <Section/>
        </div>
        </Context.Provider>
        </>
    );
}
export default App;

