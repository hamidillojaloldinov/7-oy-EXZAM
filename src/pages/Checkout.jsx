import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utils";
import { RiDeleteBin5Line } from "react-icons/ri";
import { removeAll, removeProduct } from "../counterSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";

function Checkout() {
  const { products, price } = useSelector((state) => state.counter);
  const [input, setinput] = useState(false);
  const [input1, setinput1] = useState(true);
  const dispatch = useDispatch();

  const dollarAmount2 = formatPrice(price);
  const amount2 = Number(price / 100 + 1.129);

  const handleSubmit = (e) => {
    e.preventDefault();
    setinput(!input);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="form_site"
        className="relative overflow-x-auto shadow-md sm:rounded-lg bg-[#F1F1F1] sm:flex block justify-end px-20 py-20 items-start pb-20 gap-10"
      >
        <div>
          <div className="container form_site gap-11 bg-white p-10 rounded-lg">
            <h1 className="mb-10 mt-10 text-4xl font-bold">CHECKOUT</h1>
            <div className="form-wrapper">
              <h3 className="letter_space_3">Billing Details</h3>
              <div className="flex w-full gap-5 flex-wrap">
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <h4>Name</h4>
                  <input
                    type="text"
                    placeholder="Alexei Ward"
                    required
                    className="rounded-lg	h-16"
                  />
                </div>
                <div className="flex flex-col items-start w-1/3 gap-2">
                  <h4>Email Address</h4>
                  <input
                    className="rounded-lg	h-16"
                    type="email"
                    placeholder="alexei@gmail.com"
                    required
                  />
                </div>
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <h4>Phone Number</h4>
                  <input
                    className="rounded-lg	h-16"
                    type="number"
                    placeholder="+1 202-555-0136"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-wrapper">
              <h3 className="letter_space_3">shipping info</h3>
              <div className="flex w-full gap-5 flex-wrap">
                <div className="flex flex-col items-start w-full gap-2">
                  <h4>Address</h4>
                  <input
                    className="rounded-lg	h-16"
                    type="text"
                    placeholder="1137 Williams Avenue"
                    required
                  />
                </div>
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <h4>ZIP Code</h4>
                  <input
                    className="rounded-lg	h-16"
                    type="number"
                    placeholder="10001"
                    maxLength={5}
                    required
                  />
                </div>
                <div className="flex flex-col items-start w-1/3 gap-2">
                  <h4>City</h4>
                  <input
                    className="rounded-lg	h-16"
                    type="text"
                    placeholder="New York"
                    required
                  />
                </div>
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <h4>Country</h4>
                  <input
                    className="rounded-lg	h-16"
                    type="text"
                    placeholder="United States"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-wrapper">
              <h3 className="letter_space_3">payment details</h3>
              <div className="flex w-full gap-5 flex-wrap">
                <div className="flex items-start justify-between w-full">
                  <h3>Payment Method</h3>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center rounded-lg	h-16 w-full radio_site">
                      <input
                        type="radio"
                        onChange={(e) => setinput1(false)}
                        required
                        name="gender"
                        value="male"
                      />
                      <h4 className="w-full">e-Money</h4>
                    </div>
                    <div className="gap-0 rounded-lg	h-16 flex items-center w-full radio_site">
                      <input
                        type="radio"
                        onChange={(e) => setinput1(true)}
                        required
                        name="gender"
                        value="female"
                      />
                      <h4 className="w-full">Cash on Delivery</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-5 items-center flex-wrap mt-5">
                <div className="flex flex-col items-start w-1/2 gap-2">
                  <h4>e-Money Number</h4>
                  <input
                    className="rounded-lg	h-16"
                    type="number"
                    placeholder="238521993"
                    maxLength={9}
                    required
                  />
                </div>
                <div className="flex flex-col items-start w-1/3 gap-2">
                  <h4>e-Money PIN</h4>
                  <input
                    className="rounded-lg	h-16"
                    type="number"
                    placeholder="6891"
                    maxLength={4}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {products.length == 0 ? (
          <div className="bg-white p-10 rounded-lg sm:pt-0 mt-10">
            <table className="w-96 text-md bg-white p-2 text-left rtl:text-right text-black dark:text-white">
              <h1 className="text-3xl text-center">no products</h1>
              <Link to="/">
                <button className="w-full mt-4 btn w-full text-white w-full hover:bg-orange-300 w-40 h-12 bg-orange-500 border-none">
                  BACK TO HOME
                </button>
              </Link>
            </table>
          </div>
        ) : (
          <div className="bg-white p-10 rounded-lg sm:pt-0 mt-10">
            <table className="w-96 text-md p-2 text-left rtl:text-right text-black dark:text-white">
              <thead className="text-4xl pb-6">
                <th className="texr-4xl pb-6">summary</th>
              </thead>
              <tbody className="p-20">
                {products.map((product) => {
                  const dollarAmount = formatPrice(product.price);
                  return (
                    <tr
                      key={product.id}
                      className=" items-center border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600"
                    >
                      <td className="sm:p-4 w-24">
                        <img
                          src={product.categoryImage.desktop}
                          className="w-24 rounded-lg"
                          alt="Apple Watch"
                        />
                      </td>
                      <td className="px-6 py-4 my-auto font-semibold text-gray-900 dark:text-white block">
                        <p className="w-32">{product.slug}</p>
                        <p className="text-[#808080]">{dollarAmount}</p>
                      </td>
                      <td className="px-4 py-2">
                        <p className="">{product.amount}x</p>
                      </td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => dispatch(removeProduct(product.id))}
                          className="font-medium text-red-600 dark:text-red-500 border-2 p-2 rounded-lg"
                        >
                          <RiDeleteBin5Line />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="pt-5">
              <div className="flex justify-between">
                <h4>TOTAL</h4>
                <h4 className=" font-semibold">{dollarAmount2}</h4>
              </div>
              <div className="flex justify-between">
                <h4>SHIPPING</h4>
                <h4 className=" font-semibold">$ 50</h4>
              </div>
              <div className="flex justify-between">
                <h4>VAT (INCLUDED)</h4>
                <h4 className=" font-semibold">$ 1,079</h4>
              </div>
            </div>
            <div className="flex justify-between py-5">
              <h4>GRAND TOTAL</h4>
              <h4 className="text-orange-600">${amount2}</h4>
            </div>
            <div>
              {input ? (
                <div className="modal-wrapper">
                  <div className="overlay2" onClick={() => setinput(false)}>
                    <div className="modal shadow-2xl">
                      <div className="text-start p-5 block">
                        <div className="bg-orange-500 rounded-full w-20 h-20 mb-5">
                          <BsCheckLg className="w-20 h-20 text-white flex justify-center items-center" />
                        </div>
                        <h1 className="text-3xl font-semibold">
                          THANK YOU <br /> FOR YOUR ORDER
                        </h1>
                        <p className="py-5">
                          You will receive an email confirmation shortly.
                        </p>
                        <div className="py-5 flex">
                          <div className="bg-[#F1F1F1] rounded-s-lg">
                            <div
                              key={products[0].id}
                              className="items-center flex rounded-s-lg bg-[#F1F1F1] border-b border-black dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600"
                            >
                              <div className="p-4">
                                <img
                                  src={products[0].categoryImage.desktop}
                                  className="w-5 md:w-20 rounded-lg"
                                  alt="Apple Watch"
                                />
                              </div>
                              <div className="px-6 py-4 font-semibold text-gray-900 dark:text-white block">
                                <p className="w-32">{products[0].slug}</p>
                                <p className="text-[#808080]">
                                  {dollarAmount2}
                                </p>
                              </div>

                              <div className="px-4 py-2">
                                {products[0].amount}x
                              </div>
                            </div>
                            <h4 className="pt-4">
                              {products.length <= 1
                                ? ""
                                : `and ${products.length - 1}other item(s)`}
                            </h4>
                          </div>
                          <div className="bg-black text-white rounded-r-lg px-5 content-center">
                            <h3>GRAND TOTAL</h3>
                            <p>{dollarAmount2}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => dispatch(removeAll([]))}
                          className="btn w-full text-white w-full hover:bg-orange-300 w-40 h-12 bg-orange-500 border-none"
                        >
                          BACK TO HOME
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <button className="btn text-white w-full hover:bg-orange-300 w-40 h-12 bg-orange-500 border-none">
                CONTINUE & PAY
              </button>
            </div>
          </div>
        )}
      </form>
    </>
  );
}

export default Checkout;
