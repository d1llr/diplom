import React from 'react'

const Modal = ({active, setActive,children}) => {
  return (
    <div className={active ? 'modal modal_active':'modal'} onClick={()=>setActive(false)}>
        <div className={active ? 'modal__contant modal__contant_active':'modal__contant'} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default Modal

