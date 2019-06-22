/**
 * Created by Aram on 22.06.2019.
 */
import React from 'react';
import './Modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})}>Open Modal</button>
                {this.state.isOpen ? (
                    <div className="Modal">
                        <div className="Modal-body">
                            <h1>Modal Title</h1>
                            <p>I am awesome modal!</p>
                            <button onClick={() => this.setState({isOpen: false})}>Close Modal</button>
                        </div>
                    </div>) : null}

            </React.Fragment>
        )
    }
}

export default Modal;