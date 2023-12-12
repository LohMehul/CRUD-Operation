import React, { Fragment } from 'react';
import {Button,Table} from 'react-bootstrap';
import Employee from "./Employee";
const Home = () => {
    return (
        <div>
            <Fragment>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
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