import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

// Create a React context called a ModalContext
const ModalContext = React.createContext();


// Create a functional component called ModalProvider that renders
// the ModalContext.Provider component with all the children from
// the props as a child. Render a div element as a sibling and right
// after the ModalContext.Provider.
export function ModalProvider({ children }) {
    // Create a React ref called modalRef
    const modalRef = useRef();
    // Create a component state variable called value that will be
    // set to modalRef.current after the initial render
    const [value, setValue] = useState();

    useEffect(() => {
        // modalRef.current will be set to the actual HTML DOM element
        // that gets rendered from the div
        setValue(modalRef.current);
    }, [])

    return (
        <>
            {/*Pass value as the value prop to the ModalContext.Provider component.*/}
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            {/* Set the ref prop on the rendered div element to this modalRef*/}
            <div ref={modalRef} />
        </>
    );
}

export function Modal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={onClose} />
            <div id="modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}