import React from 'react'
import styles from './ModalElement.module.scss'

const ModalElement = ({ isOpen, onClose, children }: any) => {
    const handleClose = () => {
        onClose();
    };
  return (
    <div>
        {isOpen && (
            <div className={styles.overlay} onClick={handleClose}>
                <div className={styles.modalbody} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
      )}
    </div>
  )
}

export default ModalElement