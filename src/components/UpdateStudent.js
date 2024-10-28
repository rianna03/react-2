import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const UpdateStudent = () => {
    const { _id } = useParams();
    //const history = useHistory();
    const [data, setData] = useState({
        _id: "",
        firstname: "",
        lastname: "",
        gender: ""
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (!_id) {
            console.error("No student _id provided");
            return;
        }
        
        console.log("Fetching student data for _id:", _id);
        
        axios.get(`http://localhost:4000/getStudent/${_id}`)
            .then(res => {
                // console.log("Student data fetched:", res.data);
                setData({
                    _id: res.data._id,
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    gender: res.data.gender
                });
            })
            .catch(err => console.error("Error fetching student data:", err));
    }, [_id]);

    const handleEditStudent = (e) => {
        e.preventDefault();

        axios.patch(`http://localhost:4000/updateStudent/${_id}`, data)
            .then(res => {
                toast.success('Student updated successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
                //history.push('/students');
            })
            .catch(err => {
                // console.error("Error updating student data:", err);
                toast.error('An error occurred while updating the student', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            });
    };

    return (
        <div>
            <h3>Edit Student</h3>
            <Form onSubmit={handleEditStudent}>
                <Form.Group className="mb-3" control_id="firstname">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control name="firstname" type="text" onChange={handleChange} value={data.firstname}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" control_id="lastname">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control name="lastname" type="text" onChange={handleChange} value={data.lastname}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" control_id="gender">
                    <Form.Label>Gender:</Form.Label>
                    <Form.Select onChange={handleChange} name="gender" value={data.gender}>
                        <option value="" disabled>Choose gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                </Form.Group>

                <Button variant='success' type="submit">Update Student</Button>
                <ToastContainer />
            </Form>
        </div>
    );
};

export default UpdateStudent;