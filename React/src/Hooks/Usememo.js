import React, { useMemo, useState } from 'react';

function Usememo(props) {
    const [countOne, setcountOne] = useState(0)
    const [countTwo, setcountTwo] = useState(0)

    const increntOne = ()=>{
        setcountOne(countOne + 1)
    }
    const increntTwo = ()=>{
        setcountTwo(countTwo + 1)
    }
    const isEven = useMemo(()=>{
        let i =0
        while(i<2000000000) i++
        return countOne %2 ===0
    },[countOne])
    return (
        <div>
            <button onClick = {increntOne}>Count One - {countOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <div>
                <button onClick = {increntTwo}>Count two - {countTwo}</button>
            </div>
        </div>
       
    );
}

export default Usememo;