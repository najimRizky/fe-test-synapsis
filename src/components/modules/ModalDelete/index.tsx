import Button from '@/components/base/Button'
import Modal from '@/components/base/Modal'
import React from 'react'
import IModalDelete from './interface'
import Alert from '@/components/base/Alert'

const ModalDelete = (props: IModalDelete) => {
  const {
    message = 'Are you sure you want to delete this data?',
    onConfirm,
    onClose,
    isOpen,
    isSuccess,
  } = props

  const handleConfirm = () => {
    onConfirm()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Delete Data" >
        {isSuccess === true ? <Alert type="success" message="Data has been deleted successfully" className='mb-8' />
          : isSuccess === false ? <Alert type="error" message="Data failed to delete" className='mb-8' />
            : (
              <>
                <p>{message}</p>
                <div className="flex justify-end gap-4 mt-4">
                  <Button
                    onClick={onClose}
                    bgColor="bg-gray-500"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleConfirm}
                    bgColor="bg-red-500"
                  >
                    Delete
                  </Button>
                </div>
              </>
            )}
      </Modal>
    </>
  )
}

export default ModalDelete