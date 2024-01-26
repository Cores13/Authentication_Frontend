import { MouseEventHandler, ReactNode, useEffect, useState } from 'react'

import './Modal.scss';
import x from '../../assets/images/icons/x.png';
import Button from '../Button/Button';


type Props = {
    isVisible: boolean
    children?: ReactNode
    onConfirmModal?: any
    onCloseModal?: any
    modalTitle: string
}

const Modal = ({isVisible, children, onConfirmModal, onCloseModal, modalTitle}: Props) => {

    const handleCloseModal = () => {
        onCloseModal(false);
    }

    return (
        <div className={`modal-container ${isVisible ? '': 'invisible'}`}>
            <div className='modal-wrapper'>
                <div className='modal-content'>
                    <img className='close-modal' src={x} onClick={handleCloseModal} alt='close' />
                    {children ? (
                        <>{children}</>
                    ): (
                        <>
                            <h3>{modalTitle}</h3>
                            <div className='modal-actions'>
                                {onConfirmModal && <Button buttonClass='danger' onClick={onConfirmModal}><p>YES</p></Button>}
                                {onCloseModal && <Button buttonClass='primary' onClick={onCloseModal}><p>NO</p></Button>}
                            </div>
                        </>
                    )}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal