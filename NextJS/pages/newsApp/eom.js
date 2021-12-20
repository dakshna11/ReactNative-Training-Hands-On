import { Toolbar } from '../../components/toolbar'
import styles from '../../styles/EOM.module.css'


export const EOM = ({employee})=>{
    console.log(employee)
    return(
        <div className="page-container">
            <Toolbar/>
            <div className={styles.main}>
                <h1>Employee Of The Month</h1>
                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h6>{employee.postion}</h6>
                    <img src={employee.image}/>
                    <p>{employee.description}</p>
                </div>
            </div>

        </div>
    )
}

export default EOM

export const  getServerSideProps = async pageContext =>{
    const apiResponse = await fetch('http://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth')
    const employee = await apiResponse.json()
    
    return{
        props:{
            employee
        }
    }
}