import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className='backdrop' onClick={handleBackdropClick}>
      <div className='modal'>
        {title && <div className='modalHeader'><h2>{title}</h2></div>}
        <div className='modalContent'>{children}</div>
        {footer && <div className='modalFooter'>{footer}</div>}
        <button className='close' onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Modal;
