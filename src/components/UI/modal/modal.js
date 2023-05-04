import React from 'react'
import './Modal.css'

export default function Modal(props) {

    if (!props.show) {
        return null
    }

    return (
        <div className='fixed top-0 left-0 h-screen w-screen bg-gray-700 flex items-center justify-center z-100' onClick={props.close}>
            <div className=' bg-gray-400 rounded-lg ' onClick= {event => event.stopPropagation()}>
                <div className='modal-header'>
                    <h1>{props.title}</h1>
                </div>
                <div className="modal-body">
                    {props.content}
                
                </div>
                <div className="modal-footer">
                    <p className="close-button" onClick={props.close}>Close</p>
                </div>
            </div>
        </div>
    )
}