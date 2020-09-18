import React from 'react';
import './Description.css';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import DonutLargeSharpIcon from '@material-ui/icons/DonutLargeSharp';
import DoneSharpIcon from '@material-ui/icons/DoneSharp';

function Descritpion() {
    return (
        <div className="description">
            <div className="description__details">
                <CancelOutlinedIcon className="remove" />
                <p>You can remove todo item from list</p>
            </div>
            <div className="description__details">
                <DonutLargeSharpIcon className='progress' />
                <p>You can make todo item as in progress</p>
            </div>
            <div className="description__details">
                <DoneSharpIcon className="done" />
                <p>You can make tick the completeed todo item</p>
            </div>
        </div>
    )
}

export default Descritpion;
