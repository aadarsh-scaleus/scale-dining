"use client";;
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdFastfood } from "react-icons/md";

import { BiSolidFoodMenu } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
// Custom hook for window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    return {
      width: 0,
      height: 0,
    };
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    // Updated section for theme colors
    <section
      className="p-4 bg-white text-black dark:bg-black dark:text-white w-full h-full md:px-0 px-8">
      <div
        className="flex flex-col lg:flex-row h-fit lg:h-[550px] w-full max-w-6xl mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description} />
          );
        })}
      </div>
    </section>
  );
};

const Panel = ({
  open,
  setOpen,
  id,
  Icon,
  title,
  imgSrc,
  description
}) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        // Updated button for theme colors
        className="bg-white hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-900 transition-colors p-3 border-r-[1px] border-b-[1px] border-gray-200 dark:border-gray-800 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
       
        onClick={() => setOpen(id)}>
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          // Explicit text color
          className="hidden lg:block text-2xl font-light rotate-180 text-black dark:text-white">
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light text-black dark:text-white">{title}</span> {/* Explicit text color */}
        <div
          className="w-6 lg:w-full aspect-square   grid place-items-center"> {/* Icon background and color flip */}
          {Icon}
        </div>
        <span
          // Updated diamond shape for theme colors
          className="w-4 h-4 bg-white group-hover:bg-gray-100 dark:bg-black dark:group-hover:bg-gray-900 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-gray-200 dark:border-gray-800 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
            // Background is always black for the image overlay for better readability
            className="w-full h-full overflow-hidden relative bg-black flex items-end">
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              // Text is always white for readability over image
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-xl text-white">
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
},
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "What is ScaleDining?",
    Icon: <IoFastFood className="text-purple-400 w-8 h-8"/>,
    imgSrc:
      "/public/assets/pos1.jpeg",
    description:"ScaleDining is a cloud-based POS and restaurant management software designed for restaurants, cafes, and QSRs of all sizes. It helps you streamline orders, manage tables, track reservations, handle staff, and more — all from a single, easy-to-use platform."  },
  {
    id: 2,
    title: "Need Hardware to Use ?",
    Icon: <MdFastfood className="text-purple-400 w-8 h-8"/>,
    imgSrc:
      "/public/assets/pos8.jpg",
    description:
      "No! ScaleDining is a web-based SaaS platform that works on any modern device — desktop, tablet, or smartphone. Optional hardware like receipt printers, cash drawers, or kitchen displays can be integrated if you prefer.",
  },
  {
    id: 3,
    title: "Support Online Payments?",
 Icon: <MdOutlinePayment className="text-purple-400 w-8 h-8"/>,
   imgSrc:
      "/public/assets/pos7.jpg",
    description:
      "Yes, ScaleDining integrates with popular payment gateways like Stripe and Razorpay to enable secure, fast, and flexible payment options for your customers.",
  },
  {
    id: 4,
    title: "Free Trial Available?",
  Icon: <BiSolidFoodMenu className="text-purple-400 w-8 h-8"/>,
    imgSrc:
      "/public/assets/pos10.jpg",
    description:
      "Absolutely! We offer a 30-day free trial so you can explore all features and see how ScaleDining helps your restaurant grow — no credit card required.",
  },
   {
    id: 5,
    title: "Manage multiple branches or locations?",
 Icon: <FaLocationDot className="text-purple-400 w-8 h-8"/>,
   imgSrc:
      "/public/assets/pos5.jpg",
    description:
      "Yes, you can manage and monitor multiple branches from a single dashboard, with separate menus, staff roles, and reports for each location.",
  },
   {
    id: 6,
    title: "Offer Support?",
     Icon: <BiSolidOffer className="text-purple-400 w-8 h-8"/>,
  imgSrc:
      "/public/assets/pos1.jpeg",
    description:
      "Our dedicated support team is here to help you every step of the way. You can reach us via email at contact@scaleus.in for assistance with setup, training, or troubleshooting.",
  },
];