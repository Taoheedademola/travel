import React from "react";
import Head from "./Header";
import Real from "./real";
import CompElem from "./cont";

const CompComp = CompElem.map(Items=>{
    return  <Real 
    {...Items}
     />
})

function App() {
    return(
        <div className="parent">
        <Head/>
        <div className="idkk">
        {CompComp}
        </div>
        </div>
    )
}

export default App