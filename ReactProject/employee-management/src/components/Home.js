import React, { useEffect } from "react";

function Home()  {
    useEffect(()=> {
        document.title="Home || HRMS Portal"
    },[])
    return (
        <div>
            This is home page
        </div>
    )
}


export default Home;