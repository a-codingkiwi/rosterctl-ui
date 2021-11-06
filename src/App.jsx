import { useEffect, useState } from "react";
import {Roster} from "./components";
import "tailwindcss/tailwind.css"

export function App() {
    const [rosters,setRosters] = useState([]);
    const [selected,setSelected] = useState();
    
    useEffect(()=>{
        (async ()=> {
                    try {
                        const resp = await fetch("api/rosters");
                        const content = await resp.json();
                        setRosters(content?.map((roster) => ({id:roster.id, name:roster.name}))
                        || []);
                    }
                    catch (err) {
                        console.error(err);
                    }
                }
        )();
    },[]);

    return (
        <div>
            <select defaultValue="none" name="available-rosters" id="arost" onChange={(e)=>setSelected(e.target.value)}>
                <option value="none" disabled>---Select Roster---</option>
                {rosters?.map((r)=><option key={r.id} value={r.id}>{r.name}</option>)}
            </select>
            <Roster show={selected}/>
        </div>
    )
}