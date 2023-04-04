import Link from "next/link";
import { motion as m } from "framer-motion";
import { container, item } from "../animation";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();

  return (
    <m.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16"
    >
      <main className=" relative min-h-screen flex-col justify-center items-center  ">
        <div className="min-w-full h-40v mt-8 text-3xl font-playfair   ">
          <h1>
            Hello, I'm Matthieu, a front-end developer specialized, with modern
            technologies built around the Javascript framework.
          </h1>
        </div>

        <div className="min-w-full h-40v mt-8">
          <h2>
            As a front-end developer with expertise in React, Next.js, and
            TypeScript, I'm passionate about crafting user-friendly interfaces
            that bring ideas to life.
          </h2>
        </div>
        <div className="min-w-full h-10v flex items-end justify-end">
          <div className="">
            ©2023 <span>Available for work from July</span>
          </div>
        </div>
      </main>
      <Link href="/">
        <li
          className={`cursor-pointer ${
            router.pathname == "/" ? "underline" : ""
          }`}
        >
          Home
        </li>
      </Link>
      <Link href="/contact">
        <li
          className={`cursor-pointer ${
            router.pathname == "/contact" ? "underline" : ""
          }`}
        >
          Contact
        </li>
      </Link>
      <Link href="/home">
        <li
          className={`cursor-pointer ${
            router.pathname == "/home" ? "underline" : ""
          }`}
        >
          HomeTest
        </li>
      </Link>
      <div className="my-96 p-1 font-archivo overflow-hidden ">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="lg:text-9xl text-6xl lg:text-right text-center"
        >
          Let's Talk
        </m.h1>
      </div>
      <div className="flex gap-40">
        <div className="lg:text-2xl text-base">
          <h4>Find me:</h4>
        </div>
        <div className="font-latoBold  lg:text-6xl text-2xl underline">
          <m.ul variants={container} initial="hidden" animate="show">
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                <Link href="https://twitter.com">Twitter </Link>
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                <Link href="https://instagram.com">Instagram</Link>
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                <Link href="https://dribbble.com"> Dribbble</Link>
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                <Link href="https://gmail.com"> Email</Link>
              </m.li>
            </div>
          </m.ul>
        </div>
      </div>
    </m.main>
  );
}
