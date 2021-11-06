import React, {useState, useEffect} from "react";
import "./Roster.css";

export default function(props) {
    const [roster, setRoster] = useState({src:props.src});

    useEffect(()=>{
        (async () => {
                try {
                    const resp = await fetch(roster.src);
                    const content = await resp.json();
                    setRoster(content);
                }
                catch(err){
                    console.error(err);
                }
            }
        )();
       
    },[]);



    return (
        <div className="border rounded border-gray-400 px-2">
            <h1>{roster.name}</h1>
        </div>
    );
}