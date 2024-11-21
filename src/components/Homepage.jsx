import React, { useState } from 'react'
import Modal from './Modal'
//import { motion } from 'framer-motion'
const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => {
        setIsOpen((prevState) => !prevState);  // Toggling state more explicitly
      };
  return (
    <div className=''>
        <div className='w-full h-screen flex justify-center items-center'>
            <button className='rounded-md w-32 h-10 bg-gradient-to-tr from-orange-600 to-black text-xl 
            font-semibold text-white hover:bg-blue-500 hover:text-white' onClick={toggleModal}>modal</button>

            
        </div>
        <Modal openOverlay={isOpen} onClose={toggleModal}>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil nulla eaque architecto itaque voluptates, reprehenderit, rerum tempora magni vel voluptatum? Atque omnis qui repudiandae sunt laborum dolor, cupiditate quisquam!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odio ullam cupiditate fugit. Eligendi odio rerum nulla omnis, quas pariatur odit incidunt repellat vitae unde, modi numquam non accusamus eum.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quos, repellendus sequi facere similique inventore labore magni harum corrupti repellat laborum, eum voluptatum ipsa repudiandae saepe! Natus nisi id voluptatum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptatum, hic atque, aspernatur itaque, omnis numquam temporibus libero minus reprehenderit possimus. Sequi, exercitationem! Consequatur iste impedit, sit nisi consequuntur quo!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maiores consequatur libero eveniet, dolor, architecto illo nulla quam cumque aspernatur ab voluptatem possimus omnis optio perferendis alias soluta deserunt reiciendis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati repudiandae eaque porro adipisci, ipsam nam, optio molestias quo at sed harum rem earum sint nostrum dolore alias vitae incidunt blanditiis.
                  
                </div>
            </Modal>
    </div>
  )
}

export default Homepage