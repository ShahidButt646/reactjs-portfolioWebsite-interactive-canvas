import react from 'react'
import { useState } from 'react';
import ItemBody from './ItemBody'
export default function Search(){
    const [input, setInput] = useState("");
    const [checkFilter, setCheckFilter] = useState("");
    return(
    <>
        <h1>Shahid Butt</h1>
        <input type="text" placeholder="Search"/>
        <input type="checkbox" id='filter'/>
        <label htmlFor="filter"> Check This for Stocked Items</label>
        <ItemBody />

    </>
    );
}