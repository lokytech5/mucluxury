import React from "react";
import Link from "next/link";
import { RiRegisteredLine } from "react-icons/ri";
import { MdOutlineInventory } from "react-icons/md";
import { FaUserPlus, FaShoppingBag, FaStore  } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";

const Drawer = () => {
  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-screen bg-accent text-base-content space-y-5 no-underline rounded-box">
        {/* Link items */}

        <div className="mt-4"></div>

        <div className="bg-gradient-to-br from-blue-600 to-purple-500 rounded-lg p-8 shadow-xl transform transition duration-500 hover:scale-105">
          <h2 className="text-xl font-bold text-white">MUCLUXURY Dashboard!</h2>
          <p className="text-sm text-gray-100 mt-1">
            Manage your Products here.
          </p>
          <div className="flex items-center justify-start mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0 6a4 4 0 100-8 4 4 0 000 8zm0 5c5.523 0 10-4.477 10-10S17.523 3 12 3 2 7.477 2 12s4.477 10 10 10z"
              />
            </svg>
            Admin Dashboard
          </div>
        </div>

        <li>
          <h2 className="menu-title text-md font-semibold mt-5 mb-2">
            Admin Sections
          </h2>

          <ul className="menu space-y-5 rounded-box">


            <li>
              <details className="flex items-center">
                <summary> <FaStore className="h-5 w-5 mr-3" /> Product</summary>

                <ul className="flex flex-col items-center mt-4 space-y-4">
                  <li>
              <Link
                href="/addProduct"
                className="w-full text-center">
                View Product
              </Link>

                  </li>

                  <li>
              <Link
                href="/addProduct"
                className="w-full text-center">
                Add Product
              </Link>

                  </li>

                  <li>
              <Link
                href="/addProduct"
                className="w-full text-center">
                Delete Product
              </Link>

                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="flex items-center">
                <summary> <FaShoppingBag className="h-5 w-5 mr-3" /> Order</summary>

                <ul className="flex flex-col items-center mt-4 space-y-4">
                  <li>
              <Link
                href="#"
                className="w-full text-center">
                View Order
              </Link>

                  </li>

                  <li>
              <Link
                href="#"
                className="w-full text-center">
                Delete Order
              </Link>

                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="flex items-center">
                <summary> <FaUserPlus className="h-5 w-5 mr-3" /> Customer</summary>

                <ul className="flex flex-col items-center mt-4 space-y-4">
                  <li>
              <Link
                href="#"
                className="w-full text-center">
                Customer Details
              </Link>

                  </li>

                  <li>
              <Link
                href="#"
                className="w-full text-center">
                Delete Customer
              </Link>

                  </li>
                </ul>
              </details>
            </li>

          

            <li>
              <Link
                href="#"
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center">
                  <MdOutlineInventory className="h-5 w-5 mr-5" />
                  <span>Inventory</span>
                </div>
                <span className="badge badge-sm badge-warning">NEW</span>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center">
                  <RiRegisteredLine className="h-5 w-5 mr-5" />
                  <span>Register</span>
                </div>
                <span></span>
              </Link>
            </li>


            <li>
              <Link
                href="#"
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center">
                  <IoLogIn className="h-5 w-5 mr-5" />
                  <span>LogIn</span>
                </div>
                <span></span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
