"use client"
import Spacer from "./Spacer";
import SpacerCustomColor from "./SpacerCustomColor";
import SpacerMain from "./SpacerMain";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Faqs = () => {
    const faqItems = [
        {
          question: "Can I try Team-GPT for free?",
          answer: "Absolutely, Team-GPT is free for up to 2 people. Sign up and try it with another person to explore all the possibilities for collaboration. The platform is designed to facilitate collaboration for teams of any size."
        },
        // Add more FAQ items here
      ];
    return (
        <div className="bg-[#F8F8FF] flex flex-col">
            <div className="flex flex-col flex-wrap justify-center items-center basis-auto flex-grow flex-shrink self-auto relative mx-auto gap-[15px] pt-[4rem] pb-[6rem] pl-[1rem] pr-[1rem]">
                <div className="max-w-full relative h-full">
                    <div className="flex flex-col bg-[#f8f8ff] pb-[2rem] px-[1rem] pt-[1rem] basis-auto flex-shrink flex-grow-0 text-center">
                        <SpacerMain height={30}/>
                        <div className="flex flex-col gap-[20px] py-[15px]">
                            <h2 className="text-[#052727] font-plex-sans text-[2.5rem] font-[700] leading-[2.6rem] text-center">
                                Frequently Asked Questions
                            </h2>
                            <p className="mb-[0.9rem] mt-0 font-plex-sans">Can&apos;t find what you&apos;re looking for here? Feel free to reach out: <a className="no-underline text-[#1cab83] font-plex-sans font-[500] text-[1rem]" href="mailto:humans@team-gpt.com" target="_blank" rel="noopener">humans@team-gpt.com</a></p>
                        </div>
                        <SpacerMain height={35}/>
                        <div className="w-[1000px]">
                            {faqItems.map((item, index) => (
                                <FAQItem key={index} question={item.question} answer={item.answer} />
                            ))}
                        </div>
                        <SpacerMain height={35}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
const FAQItem = ({ question, answer }:{question: string; answer:string;}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <div className="bg-white max-w-4xl rounded-xl mb-4 w-full mx-auto">
            <button
                className="flex justify-between items-center w-full py-[19px] px-6 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium">{question}</span>
                <FontAwesomeIcon
                    icon={isOpen ? faMinus : faPlus}
                    className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-6 pb-4 text-start">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
export default Faqs;