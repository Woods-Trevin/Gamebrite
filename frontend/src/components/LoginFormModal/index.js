import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import "./login.css"

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="loginbtn-container">
            <button className="loginbtn" onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal className="loginModal" onClose={() => setShowModal(false)}>
                    <div className="modal-container">
                        <LoginForm />
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default LoginFormModal;