import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const Tables = (props) => {
    const data = props.sendGetApiData;

    return (
        <>
            <div className='mt-5'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{element.id}</td>
                                        <td>{element.name}</td>
                                        <td>{element.email}</td>
                                        <td>
                                            <Button variant="success" onClick={() => { props.getEditData(element) }}>Edit</Button> |
                                            <Button variant="danger" onClick={()=>props.deleteData(element.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>

            </div>

        </>
    )
}

export default Tables