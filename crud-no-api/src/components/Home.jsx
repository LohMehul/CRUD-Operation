import React, { Fragment } from 'react';
import {Button,Table} from 'react-bootstrap';
import Employee from "./Employee";
const Home = () => {
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
                                                <Button onClick={()=> alert(item.id) }>Delete</Button>
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