import React,{useState,useCallback} from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';

function ParentComponent() {
    const [age, setAge] = useState(21)
    const [salary, setSalary]= useState(40000)

    const incrementAge = useCallback(()=>{
        setAge(age + 1)
    },[age])
    const incrementSalary = useCallback(()=>{
        setSalary(salary + 1000)
    },[salary])
    
    return (
        <div>
            <Title />
            <Count text='Age' value={age} />
            <Button handleClick = {incrementAge}>Increment Age</Button>
            <Count text='Salary' value ={salary} />
            <Button handleClick = {incrementSalary}>Increment Salary</Button>
        </div>
    );
}

export default ParentComponent;