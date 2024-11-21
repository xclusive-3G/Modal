import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,  // Optionally scale the modal to make it feel like it’s zooming in
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3, // Adjust the duration of the animation
      type: 'spring',
      stiffness: 500, // Optionally control the stiffness for the spring animation
    },
  },
};

const Modal = ({ openOverlay, onClose, children }) => {
  return (
    <AnimatePresence>
      {/* Render the modal only if openOverlay is true */}
      {openOverlay && (
        <motion.div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden" // Make sure it animates out when the modal is closed
        >
          <div className="bg-white w-3/4 h-3/4 flex flex-col p-4 rounded-lg">
            <button
              className="self-end mb-4"
              onClick={onClose}
              aria-label="Close Modal"
            >
              ✖
            </button>
            <p className="text-center text-xl mb-4">Modal Content</p>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
