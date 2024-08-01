// components/HeroSection.js
import Link from 'next/link';
import AnimatedHeadline from './AnimatedHeadline';

export default function HeroSection() {
  return (
    <section className=" flex flex-row justify-center text-white w-full h-full">
      <div className="flex flex-wrap justify-center items-center text-center my-0 mx-[200px]">
        <div className='flex flex-col justify-start items-center gap-[18px]'>
          <div className='h-[100px] w-full'></div>
          <AnimatedHeadline />
          <p className="text-center text-[1.3rem] font-plex-sans font-[400] text-[#AFAFAF] w-full mb-8 px-20">
            <strong>Team-GPT</strong> guarantees ChatGPT adoption for teams between 2 and 20,000 people. Organize
            knowledge, collaborate, and master AI in one shared workspace.
          </p>
          <Link href="/signup" className="bg-[#F1DA44] font-plex-sans text-black text-[1.25rem] tracking-wide px-12 py-3 rounded-xl  inline-flex items-center transition-transform duration-300 hover:scale-90 focus:scale-90 active:scale-90">
            Start free
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div className='h-[50px] w-full'/>
          <p className='pb-[20px]'>👇 See how Team-GPT works. Click the ‘<strong>Continue</strong>‘ button below for a guided tour! 👇</p>
        </div>
      </div>
    </section>
  );
}