"use client"; // This demo also needs to be a client component

import { VerticalAccordion } from "@/components/vertical-accordion"; // Убедитесь, что путь к вашему компоненту корректен

const DemoVerticalAccordion = () => {


  

  return (
   <>
     <p className="mb-4 px-8 md:px-0 font-heading font-semibold text-sm text-[var(--para)]  text-center uppercase tracking-px"  id="FAQs">
        FAQ
        </p>
        <h2 className=" mb-10 px-8 md:px-0  md:mb-16 font-heading font-semibold text-3xl text-[var(--heading)] sm:text-4xl text-center">
        Your questioned, Our answered
        </h2>
    <div className="flex md:h-screen w-full justify-center items-center bg-white dark:bg-black relative">
       
      <VerticalAccordion />

    </div>
   </>
  );
};

export { DemoVerticalAccordion };