import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CVRequestModalProps {
  onClose: () => void;
}

const CVRequestModal: React.FC<CVRequestModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);

    fetch('https://formspree.io/f/mnnpbdzv', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Raymond will respond by replying with his CV information.');
        onClose(); // Close the modal
      } else {
        alert('Error sending message. Please try again.');
      }
    }).catch(() => {
      alert('Error sending message. Please try again.');
    });
  };

  return (
    <div className="modal-overlay">
      <motion.div className="modal-content" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
        <h2>Request CV</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Your email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Send</button>
        </form>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </div>
  );
};

export default CVRequestModal;
