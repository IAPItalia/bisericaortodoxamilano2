'use client';

import { motion } from 'motion/react';
import { MessageCircle, Mail } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      <motion.a
        href="https://wa.me/390000000000" // Replace with real number
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        title="Contact WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>
      
      <motion.a
        href="mailto:contact@parohiamilano2.it"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#5A5A40] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        title="Trimite Email"
      >
        <Mail size={28} />
      </motion.a>
    </div>
  );
}
