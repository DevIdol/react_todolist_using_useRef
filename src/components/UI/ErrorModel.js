import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Card from './Card'
import classes from './ErrorModel.module.css'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />
}

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Ok</Button>
      </footer>
    </Card>
  )
}

const ErrorMessage = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root'),
      )}
    </Fragment>
  )
}
export default ErrorMessage;
