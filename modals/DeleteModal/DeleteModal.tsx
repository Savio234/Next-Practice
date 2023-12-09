import React, { useState, useEffect } from 'react'
import ModalElement from '@/shared/ModalElementAsProp'

const DeleteDrinkModal = ({ isOpen, onClose}: any) => {
  return (
    <ModalElement isOpen={isOpen} onClose={onClose}>
        <h3>Hello there</h3>
    </ModalElement>
  )
}

export default DeleteDrinkModal