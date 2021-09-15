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
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </div>
    );
}

export default LoginFormModal;