import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { addTodo } from './actions';
import { v4 as uuidv4 } from 'uuid';



function Modal1(props) {
    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            height: '160px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
    }));
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const handeTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo({ id: uuidv4(), title: title, completed: false });
        setTitle('');
        alert('Todo added successfully');
    }
    return (
        <div className="modal">
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={props.close}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <form className={classes.paper} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Task" value={title} onChange={handeTitleChange} />
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            <AddIcon />
                        </Button>
                    </form>
                </Fade>
            </Modal>
        </div>
    )
}

export default connect(null, { addTodo })(Modal1);
