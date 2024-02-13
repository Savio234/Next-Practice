import React, { useEffect } from 'react'
import styles from './ModalElement.module.css'

const ModalElement = ({ isOpen, onClose, children }: any) => {
    const handleClose = () => {
      onClose();
    };
    useEffect(() => {
      document.body.style.overflowY === isOpen ? 'hidden' : 'scroll'
    }, [isOpen])

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