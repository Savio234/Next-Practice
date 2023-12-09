import React, { useState, useEffect } from 'react'
import styles from './ModalElement.module.scss'

const ModalElement = ({ isOpen, onClose, children }: any) => {
    // const [isModalOpen, setIsModalOpen] = useState(isOpen); // To handle opening across diff components
    const [isModalOpen, setIsModalOpen] = useState(false); // To handle opening the modal of locally

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setIsModalOpen(false);
        onClose();
    };

    const handleOpen = () => {
        setIsModalOpen(true);
        isOpen();
    }

    const handleModalClick = ({e}: any) => {
        e?.stopPropagation();
    };

    const handleBodyClick = () => {
        handleClose();
    };
  return (
    <div>
        <button onClick={handleOpen}>Open Modal</button>
        {isModalOpen && (
            <div className={styles.overlay} onClick={handleClose}>
                <div className={styles.modalbody} onClick={(e) => e.stopPropagation()}>
                    {/* <div className={styles.closeButton} onClick={handleClose}>
                        Close
                    </div> */}
                    {children}
                </div>
            </div>
      )}
    </div>
  )
}

export default ModalElement