import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const intialvalue = {
    name: '',
    email: ''
}
const Forms = (props) => {

    const [inputData, setInputData] = useState(intialvalue);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputData(() => {
            return {
                ...inputData,
                [name]: value
            }
        })
    }

    const SubmitHandle = (e) => {
        e.preventDefault();
        if(props.sendDataForEdit.name === "" && props.sendDataForEdit.email === ""){
            props.getInputData(inputData)
            setInputData(intialvalue)
        }else{
            props.updateEditData(inputData)
            setInputData(intialvalue)
        }
      
    }
    console.log(props.sendDataForEdit)
    useEffect(() => {
        setInputData(props.sendDataForEdit)
    }, [props.sendDataForEdit])
   
    
    return (
        <>
            <div className='mt-5'>

                <Form onSubmit={SubmitHandle}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            value={inputData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            value={inputData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {props.sendDataForEdit.isEdit ? 'Update': 'Submit' }
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Forms