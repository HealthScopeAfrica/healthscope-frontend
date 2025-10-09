import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import Button from "./button";
import { useState } from "react";
import { LuX } from "react-icons/lu";
import { href, Link } from "react-router";
const links = [
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Partners",
    href: "/partner/auth/login",
  },
  {
    title: "Contributors",
    href: "/contributor/auth/login",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
];
const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container flex items-center justify-between py-4 xl:py-6">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 xl:h-[58px] w-auto shrink-0"
            />
          </Link>
        </div>
        
        <div className="hidden lg:flex flex-1 justify-between items-center ml-8">
          <div className="flex items-center justify-evenly flex-1 max-w-2xl">
            {links.map((link) => (
              <Link
                to={link.href}
                key={link.title}
                className="text-lg xl:text-[20px] leading-[120%] -tracking-[2%] hover:text-gray-600 transition-colors whitespace-nowrap"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex gap-3 shrink-0">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setOpen(true)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none transition-colors p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-white transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 p-2 transition-colors"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <LuX aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="relative flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white/10">
                  <div className="px-4 sm:px-6 border-b border-gray-100 pb-4">
                    <DialogTitle className="text-base font-semibold text-black">
                      <img
                        src="images//logo.png"
                        alt="Logo"
                        className="h-[42px] w-auto"
                      />
                    </DialogTitle>
                  </div>
                  <div className="relative mt-6 flex-1 flex flex-col gap-4 px-4 sm:px-6">
                    {links.map((link) => (
                      <Link
                        to={link.href}
                        key={link.title}
                        onClick={() => setOpen(false)}
                        className="text-[20px] border-b border-b-neutral-300 px-4 py-2 leading-[120%] -tracking-[2%] min-w-[100px] hover:bg-gray-50 transition-colors"
                      >
                        {link.title}
                      </Link>
                    ))}
                    <div className="flex flex-col gap-3 mt-6 px-4">
                      <Button variant="outline" className="w-full">Sign In</Button>
                      <Button className="w-full">Get Started</Button>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Navigation;
