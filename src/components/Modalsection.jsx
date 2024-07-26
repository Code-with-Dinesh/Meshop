import React from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from 'react-hot-toast';
const Modalsection = () => {
     
        const [openModal, setOpenModal] = useState(true);
        const [orderdetail, setorderdetail] = useState({fullname:"",address:"",pin:""});
      
        function onCloseModal() {
          setOpenModal(false);
          setorderdetail('');
        }
        function orderconfrim(){
         

            toast.success("order confirm")
            onCloseModal()
          
        }
  return (
   <>
   <Button onClick={() => setOpenModal(true)}>Checkout</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className='text-xl font-semibold text-gray-900'>Confim Your Order</h3>
            <div>
              <div className="mb-2 block">
                <Label  value="Yourname" />
              </div>

              <TextInput
                placeholder="FullName"
                value={orderdetail.fullname}
                onChange={(event) => setorderdetail(event.target.value)}
                required
              />
            </div>
            
            <div>
              <div className="mb-2 block">
                <Label  value="Your Address" />
              </div>
              <TextInput        value={orderdetail.address}
                onChange={(event) => setorderdetail(event.target.value)} type="text" required placeholder='Enter Your Address' />
            </div>
            <div>
              <div className="mb-2 block">
                <Label  value="Your Pin code" />
              </div>
              <TextInput
                id="pin"
                placeholder="Enter Your pin"
                value={orderdetail.pin}
                onChange={(event) => setorderdetail(event.target.value)}
                required
              />
            </div>
            
            <div className="w-full">
              <Button onClick={orderconfrim} className='w-full'>Order Now</Button>
            </div>
         
          </div>
        </Modal.Body>
      </Modal>
   </>
  )
}

export default Modalsection