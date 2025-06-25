'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircleIcon, 
  ExclamationCircleIcon, 
  XMarkIcon 
} from '@heroicons/react/24/outline';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.8,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.8,
      rotateX: -90
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          className="fixed top-24 right-4 z-[60] max-w-sm"
        >
          <div className={`
            relative p-4 rounded-2xl shadow-2xl backdrop-blur-xl border
            ${type === 'success' 
              ? 'bg-green-50/90 dark:bg-green-900/90 border-green-200 dark:border-green-700' 
              : 'bg-red-50/90 dark:bg-red-900/90 border-red-200 dark:border-red-700'
            }
          `}>
            {/* Background glow effect */}
            <div className={`
              absolute inset-0 rounded-2xl blur-xl opacity-30
              ${type === 'success' ? 'bg-green-400' : 'bg-red-400'}
            `} />
            
            <div className="relative flex items-start space-x-3 rtl:space-x-reverse">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className={`
                  flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                  ${type === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                  }
                `}
              >
                {type === 'success' ? (
                  <CheckCircleIcon className="h-5 w-5" />
                ) : (
                  <ExclamationCircleIcon className="h-5 w-5" />
                )}
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`
                    text-sm font-medium leading-relaxed
                    ${type === 'success' 
                      ? 'text-green-800 dark:text-green-200' 
                      : 'text-red-800 dark:text-red-200'
                    }
                  `}
                >
                  {message}
                </motion.p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className={`
                  flex-shrink-0 p-1 rounded-full transition-colors duration-200
                  ${type === 'success' 
                    ? 'text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200' 
                    : 'text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200'
                  }
                `}
              >
                <XMarkIcon className="h-4 w-4" />
              </motion.button>
            </div>
            
            {/* Progress bar */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
              className={`
                absolute bottom-0 left-0 h-1 rounded-b-2xl
                ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}
              `}
              onAnimationComplete={onClose}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
