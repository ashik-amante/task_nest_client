import React from 'react';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import DeleteModal from './DeleteModal';

const PopUpmodal = () => {
     let [isOpen, setIsOpen] = useState(false)
     const closeModal = ()=>{
        setIsOpen(false)
     }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button 
                    onClick={()=> setIsOpen(true)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>


            {/* modal */}
            <DeleteModal isOpen={isOpen} closeModal={closeModal}></DeleteModal>
            
        </div>
    );
};

export default PopUpmodal;