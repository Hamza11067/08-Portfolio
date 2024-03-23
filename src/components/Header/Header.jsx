import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Cursor from "../Cursor/Cursor";
import Sidebar from "../Sidebar/Sidebar";

export default function Header() {
  return (
    <>
      <Cursor />
      <Sidebar />
      <header className="shadow sticky z-50 top-0">
        <nav className="bg-[#0c0c1d] px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <p
              to="/"
              className="text-2xl font-bold text-gray-100 hidden sm:block"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Hamza.
              </motion.span>
            </p>
            <motion.div
              className="sm:order-2 hidden sm:block"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Link
                to="/contact"
                className="text-white bg-[#ffa500] hover:bg-[#ff8409] focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Contact
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: -100, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div
                className="hidden justify-between items-center w-full sm:flex sm:w-auto order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 sm:flex-row sm:space-x-8 sm:mt-0 font-semibold">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-[#ffa500]" : "text-gray-100"
                        } border-b border-gray-100 hover:bg-gray-50 sm:hover:bg-transparent sm:border-0 hover:text-[#ffa500] sm:p-0`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-[#ffa500]" : "text-gray-100"
                        } border-b border-gray-100 hover:bg-gray-50 sm:hover:bg-transparent sm:border-0 hover:text-[#ffa500] sm:p-0`
                      }
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/portfolio"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-[#ffa500]" : "text-gray-100"
                        } border-b border-gray-100 hover:bg-gray-50 sm:hover:bg-transparent sm:border-0 hover:text-[#ffa500] sm:p-0`
                      }
                    >
                      Portfolio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/github"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-[#ffa500]" : "text-gray-100"
                        } border-b border-gray-100 hover:bg-gray-50 sm:hover:bg-transparent sm:border-0 hover:text-[#ffa500] sm:p-0`
                      }
                    >
                      Github
                    </NavLink>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </nav>
      </header>
    </>
  );
}
