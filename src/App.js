import React from 'react';
import Todo from './Todo';
import Button from '@material-ui/core/Button';
import Modal1 from './Modal1';
import Description from './Descritpion'
import './App.css';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  }
  return (
    <div className="app">
      <div className="app__header">
        <Modal1 open={open} close={handleClose} />
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Task
        </Button>
      </div>
      <div className="app__container">
        <Todo />
        <Description />
      </div>
    </div>
  );
}

export default App;
