import React, { Fragment, useState, useRef } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorMessage from '../UI/ErrorModel'
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault()
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.length === 0 || enteredAge.length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter your name and age.',
      })
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Input',
        message: "Age can't be less than 0.",
      })
      return
    }
    props.onAddUser(enteredName, enteredAge)
   nameInputRef.current.value = "";
   ageInputRef.current.value = "";
  }
  const errorHandler = () => {
    setError(null);
  }
  return (
    <Fragment>
      {error && <ErrorMessage title={error.title} message={error.message} onConfirm={errorHandler}/>}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            ref = {nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            ref = {ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  )
}

export default AddUser;
