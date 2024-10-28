import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const DeleteStudent = () => {
    const { _id } = useParams();

    const [data, setData] = useState({
        _id: "",
        firstname: "",
        lastname: "",
        gender: ""
    });

    useEffect(() => {
        if (!_id) {
            console.error("No student _id provided");
            return;
        }

        console.log("Fetching student data for _id:", _id);

        axios.get(`http://localhost:4000/getStudent/${_id}`)
            .then(res => {
                setData({
                    _id: res.data._id,
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    gender: res.data.gender
                });
            })
            .catch(err => console.error("Error fetching student data:", err));
    }, [_id]);

    const handleDeleteStudent = () => {
        axios.delete(`http://localhost:4000/deleteStudent/${_id}`)
            .then(res => {
                toast.success('Student deleted successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            
            })
            .catch(err => {
                toast.error('An error occurred while deleting the student', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            });
    };

    return (
        <div>
            <h3>Delete Student</h3>
            <p>Are you sure you want to delete the following student?</p>
            <p><strong>First Name:</strong> {data.firstname}</p>
            <p><strong>Last Name:</strong> {data.lastname}</p>
            <p><strong>Gender:</strong> {data.gender}</p>
            <Button variant='success' onClick={handleDeleteStudent}>Delete</Button>
            <ToastContainer/>
        </div>
    );
};

export default DeleteStudent;
