
import { motion } from "framer-motion";

export default function Modal({ isVisible, onClose }) {
    if (!isVisible) return null; // Only render if visible

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
            }}
        >
            <p>This is a smooth modal!</p>
            <button onClick={onClose}>Close</button>
        </motion.div>
    );
}

