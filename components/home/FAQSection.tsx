'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How do I redeem codes in Roblox Rivals?',
    answer: 'To redeem codes, launch Roblox Rivals and look for the "Rewards" or "Codes" button on the main lobby screen (usually near the bottom left). Click it, type the active code exactly as shown, and press Enter to claim your free keys or cosmetics.'
  },
  {
    question: 'How often are new Rivals codes released?',
    answer: 'New codes are typically released during major game updates, significant milestones (like 200M visits), or holidays. We check for new codes daily and update our active list immediately.'
  },
  {
    question: 'Is there a free code generator?',
    answer: 'No. Any website or tool claiming to generate free Roblox Rivals codes is a scam. Codes are only created and distributed by the official game developers. We only share legit, developer-issued codes.'
  },
  {
    question: 'How do I get Mythic skins?',
    answer: 'Mythic skins can be obtained through the in-game crate system using Keys, or occasionally purchased directly during special events. The drop rate for Mythics is extremely low (usually < 1%).'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mb-24 relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center gap-2 mb-4">
          <HelpCircle className="w-6 h-6 text-slate-400" />
          <h2 className="font-display font-bold text-3xl text-white">Frequently Asked Questions</h2>
        </div>
        <p className="text-slate-400">Everything you need to know about game codes and mechanics.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="glass-card overflow-hidden transition-colors hover:bg-surface border-white/5"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-medium text-white pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-lightning-blue' : ''}`} 
                />
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 pt-0 text-slate-400 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
