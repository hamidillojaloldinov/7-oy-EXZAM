import { useState } from "react";
import Logo from "../../public/assets/home/desktop/audiophile.png";
import Shop from "../../public/assets/home/desktop/Combined-Shape.png";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { changeAmount, removeAll, removeProduct } from "../counterSlice";
import { formatPrice } from "../utils";
import { BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";

function Navbar() {
  const { amount, products, price } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [shop, setshop] = useState(false);
  const [nav, setnav] = useState(true);
  const dollarAmount2 = formatPrice(price);

  return (
    <>
      <div>
        <nav className="border-b-2 border-slate-600 pt-8 pb-9 flex items-center justify-between h-7 sm:w-[1110px] w-[600px] mx-auto">
          <div className="flex flex-col">
            <button
              onClick={() => setnav(!nav)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className="modal-wrapper sm:hidden flex">
              <div className={`${nav ? "hidden" : "flex"} overlay3`}>
                <ul className="font-medium modal flex-col p-4 sm:p-0 absolute left-10 border border-gray-100 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 rtl:space-x-reverse sm:mt-0 sm:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
                  <li className="text-black py-2">
                    <Link to="/" className="text-black hover:text-[#d87D4A]">
                      HOME
                    </Link>
                  </li>
                  <li className="text-black py-2">
                    <Link
                      to="/headphones"
                      className="text-black hover:text-[#d87D4A]"
                    >
                      HEADPHONES
                    </Link>
                  </li>
                  <li className="text-black py-2">
                    <Link
                      to="/speakers"
                      className="text-black hover:text-[#d87D4A]"
                    >
                      SPEAKERS
                    </Link>
                  </li>
                  <li className="text-black py-2">
                    <Link
                      to="/earphones"
                      className="text-black hover:text-[#d87D4A]"
                    >
                      EARPHONES
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>

          <div className="links sm:flex hidden gap-8">
            <Link to="/" className="hover:text-[#d87D4A] link">
              HOME
            </Link>
            <Link to="/headphones" className="hover:text-[#d87D4A] link">
              HEADPHONES
            </Link>
            <Link to="/speakers" className="hover:text-[#d87D4A] link">
              SPEAKERS
            </Link>
            <Link to="/earphones" className="hover:text-[#d87D4A] link">
              EARPHONES
            </Link>
          </div>
          {shop ? (
            <div className="modal-wrapper">
              <div className="overlay">
                {amount == 0 ? (
                  <div className="modal	shadow-2xl text-2xl text-center text-slate-400">
                    NO product
                  </div>
                ) : (
                  <div className="modal shadow-2xl">
                    <div className="flex justify-between">
                      <h4>cart ({products.length})</h4>
                      <button onClick={() => dispatch(removeAll([]))}>
                        Remove all
                      </button>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-2">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                          {products.map((product) => {
                            const dollarAmount = formatPrice(product.price);
                            return (
                              <tr
                                key={product.id}
                                className="items-center flex bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                              >
                                <td className="p-4">
                                  <img
                                    src={`.${product.categoryImage.desktop}`}
                                    className="w-5 md:w-20 rounded-lg"
                                    alt="Apple Watch"
                                  />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white block">
                                  <p className="w-32">{product.slug}</p>
                                  <p className="text-[#808080]">
                                    {dollarAmount}
                                  </p>
                                </td>

                                <td className="px-4 py-2">
                                  <div className="flex items-center py-2 px-4 rounded-lg bg-[#F1F1F1] justify-center text-xl">
                                    <button
                                      onClick={() =>
                                        dispatch(
                                          changeAmount({
                                            id: product.id,
                                            type: "decrease",
                                          })
                                        )
                                      }
                                      disabled={
                                        product.amount <= 1 ? true : false
                                      }
                                      className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                      type="button"
                                    >
                                      <span className="sr-only">
                                        Quantity button
                                      </span>
                                      <svg
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 2"
                                      >
                                        <path
                                          stroke="currentColor"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M1 1h16"
                                        />
                                      </svg>
                                    </button>
                                    <div>
                                      <p className="text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {product.amount}
                                      </p>
                                    </div>
                                    <button
                                      onClick={() =>
                                        dispatch(
                                          changeAmount({
                                            id: product.id,
                                            type: "increase",
                                          })
                                        )
                                      }
                                      className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                      type="button"
                                    >
                                      <span className="sr-only">
                                        Quantity button
                                      </span>
                                      <svg
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                      >
                                        <path
                                          stroke="currentColor"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M9 1v16M1 9h16"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex justify-between">
                      <h4>TOTAL</h4>
                      <h4>{dollarAmount2}</h4>
                    </div>
                    <Link to="/checkout">
                      <button
                        onClick={() => setshop(!shop)}
                        className="btn text-white w-full mt-4 hover:bg-orange-300 w-40 h-12 bg-orange-500 border-none"
                      >
                        checkout
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            ""
          )}

          <button
            type="button"
            className="relative inline-flex items-center text-sm font-medium text-center text-white rounded-lg navbar-center"
          >
            <img
              className="hover:text-[#d87D4A] w-5 h-5 me-2"
              onClick={() => setshop(!shop)}
              src={Shop}
              alt="Shop"
            />
            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-whith rounded-full -top-3 -end-2">
              {amount}
            </div>
          </button>
        </nav>
      </div>
    </>
  );
}

export default Navbar;