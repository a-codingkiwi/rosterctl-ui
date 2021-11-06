import React, { useState, useEffect } from "react";
import { Shift } from "..";

export default function (props) {
    const [roster, setRoster] = useState({ shifts: [] });
    const [shifts, setShifts] = useState([]);
    
    //TODO: consider extracting to some sort of "api" sdk for future?
    async function fetchRoster(id){
        try {
            const resp = await fetch(`api/rosters/${id}`);
            const content = await resp.json();
            setRoster(content);
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchRoster(props.show);
    }, [props.show]);

    useEffect(() => {
        setShifts(
            roster.shifts?.map((shift) => {
                return (
                    <Shift {...shift} />
                )
            })
            || []);
    }, [roster]);

    return (
        <div className="border rounded border-gray-400 px-2">
            <h1>{roster.name}</h1>
            {shifts}
        </div>
    );
}
