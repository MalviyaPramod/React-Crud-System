import React, { useEffect, useReducer } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Forms from './forms/Forms';
import Tables from './tables/Tables';
import axios from 'axios';
/* Logic Start */
const intialvalue = {
  id:'',
  name: '',
  email: '',
  apiStore: []
}

const logicReducer = (state, action) => {
  switch (action.type) {
    case "GET_API_DATA":
      return {
        ...state,
        apiStore: action.payload
      }

    case "EDIT_DATA_UPDATE":
      return {
        ...state,
        id:action.payload.id,
        name: action.payload.name,
        email: action.payload.email
      }
    
      case 'SET_IS_EDIT':
        return {
          ...state,
          isEdit : action.payload
        }
    default:
      return state
  }

}
const ReducerOne = () => {

  const [logicUpdate, dispathActions] = useReducer(logicReducer, intialvalue)

  /*=====CallBack Functions======*/

  const getInputAndPostDataHandle = (data) => {
    const {apiStore, ...items} = data;
    axios.post(`https://643133313adb159651675889.mockapi.io/crud/crud-system`, items)
      .then((response) => {
        console.log(response.data)
        getApiDataHandle();
      }).catch((error) => { error })

  }

  const getApiDataHandle = () => {
    axios.get(`https://643133313adb159651675889.mockapi.io/crud/crud-system`)
      .then((response) => {
        const result = response.data;
        dispathActions({
          type: 'GET_API_DATA',
          payload: result
        })
      }).catch((error) => {
        console.log(error)
      })
  }

  const getEditDataHandle = (data) => {
    dispathActions({
      type: 'EDIT_DATA_UPDATE',
      payload: data
    })
    dispathActions({
      type: 'SET_IS_EDIT',
      payload:  true
    })
  }

  const setIsEdit = (data) =>{
    dispathActions({
      type: 'SET_IS_EDIT',
      payload:  data
    })
  }
  
  const updateEditDataHandle = (data) =>{
    const {apiStore, ...items} = data;
    axios.put(`https://643133313adb159651675889.mockapi.io/crud/crud-system/${data.id}`, items)
    .then((response) => {
      console.log(response.data)
      dispathActions({
        type: 'EDIT_DATA_UPDATE',
        payload: intialvalue
      })
      getApiDataHandle();
    }).catch((error) => { error })
  }

  const deleteDataHandle = (id) =>{
    axios.delete(`https://643133313adb159651675889.mockapi.io/crud/crud-system/${id}`)
        .then((response)=>{
            console.log(response.data)
            getApiDataHandle();
        }).catch((error)=>{
            console.log(error)
        })
  }
  useEffect(() => {
    getApiDataHandle();
  }, [])

  console.log(logicUpdate)
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col>
            <Forms
              setIsEdit = {setIsEdit} 
              getInputData={getInputAndPostDataHandle}
              sendDataForEdit={logicUpdate}
              updateEditData = {updateEditDataHandle}
            />
          </Col>
          <Col>
            <Tables
              sendGetApiData={logicUpdate.apiStore}
              getEditData={getEditDataHandle}
              deleteData = {deleteDataHandle}
            />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default ReducerOne