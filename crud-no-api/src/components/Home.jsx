import React, { Fragment } from 'react';
import {Button,Table} from 'react-bootstrap';
import Employee from "./Employee";
import {Link, useNavigate} from "react-router-dom"

const Home = () => {

    let history = useNavigate();


    const handelDelete = (id) => {
        var index = Employee.map(function(e){
            return e.id;

        }).indexOf(id);

        Employee.splice(index,1);

        history('/');
    } 

    return (
        <div>
            <Fragment>
                <div style={{margin:"10rem"}}>
                    <Table striped bordered hover size='sm'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Employee && Employee.length > 0
                                ?
                                Employee.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.Name}</td>
                                            <td>{item.Age}</td>
                                            <td>
                                                <Button onClick={()=> alert(item.id) }>Edit</Button> &nbsp;
                                                <Button onClick={()=> handelDelete(item.id) }>Delete</Button>
                                            </td>
                                        </tr>
                                    )

                                })
                                :
                                "no data found"
                            }

                        </tbody>
                    </Table>
                </div>
            </Fragment>

        </div>
    );
};

export default Home;