import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';

const GetAllstudents = () => {
    const[data, setData] = useState([])
    useEffect(()=>{
        //const token = sessionStorage.getItem("accessToken")
        //setLoading(true);

        axios.get(`http://localhost:4000/getAllStudents`,{
           /* headers:{
                Authorization:`Bearer ${token}`,
                'Content-Type':'application/json',
            },*/
        })
        .then(res=>{setData(res.data)})
        /*.catch(err=>{
            if(err.response.status===403){
                setUnathorised(true);
            }
        }).finally(()=>{
            setLoading(false);
        })*/

    },[])
    


    return(
       <div className='table-responsive'>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d, i)=>(
                    <tr key={i}>
                        <td> {d.firstname} </td>
                        <td> {d.lastname} </td>
                        <td> {d.gender} </td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="default" id="dropdown-basic" size="sm">
                                    Perform Actions
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                     <Link to={`/updateStudent/${d._id}`} className="dropdown-item">
                                    Edit Student
                                    </Link> 
                                    <Link to={`/deleteStudent/${d._id}`} className="dropdown-item">
                                    Delete Student
                                    </Link>    
                                </Dropdown.Menu>
                               
                            </Dropdown>
                        </td>
                    </tr>

                ))}
            </tbody>

        </table>

       </div>
    );
}

export default GetAllstudents;