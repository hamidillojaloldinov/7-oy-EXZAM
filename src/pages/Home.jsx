import { Link, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import HeadPhone from "../../public/assets/shared/desktop/Bitmap.png";
import speakers from "../../public/assets/home/desktop/image-speaker.png";
import speaker from "../../public/assets/home/desktop/image-speaker-zx7.jpg";
import earphones from "../../public/assets/home/desktop/image-earphones-yx1.jpg";
import { FooterConpanent, Shoplink } from "../components";

const url = "/products";

export const loader = async () => {
  const req = await customFetch(url);

  const products = req.data.data;

  return { products };
  
};

function Home() {
  const { products } = useLoaderData();
  return (
    <>
      <header>
        <div className="h-[632px] sm:w-[1110px] flex sm:justify-between justify-center mx-auto  items-center sm:bg-none bg-[url(../../public/assets/shared/desktop/Bitmap.png)]">
          <div>
            <h2 className="mb-6 text-gray-400">NEW PRODUCT</h2>
            <h1 className="h1 text-slate-100 sm:text-center text-center sm:w-full w-96">
              XX99 Mark II Headphones
            </h1>
            <p className="PPP my-10 sm:w-full w-96">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="btn text-white hover:bg-orange-300 w-40 h-12 bg-orange-500 border-none">
              <Link to="/products/xx99-mark-two-headphones">SEE PRODUCT</Link>
            </button>
          </div>
          <img
            className="ml-28 text-white sm:flex hidden"
            src={HeadPhone}
            alt="HeadPhone"
          />
        </div>
      </header>
      <main>
        <Shoplink />
      </main>
      <footer className="mt-10 mb-10">
        <div className="container">
          <ul className="flex flex-col gap-16">
            <li className="rounded-lg my_img bg-orange-400 sm:flex block justify-between flex-wrap gap-11 p-16 items-center ">
              <img
                src={speakers}
                alt="speaker"
                className="absolute sm:mt-20 sm:ml-48  sm:w-[400px] sm:h-[490px] w-48 h-60"
              />
              <div className="sm:hidden flex sm:mt-0 mt-60 flex-col gap-11 items-start ">
                <h2 className="sm:h2 flex btn uppercase text-white">
                  zx9 <br />
                  <span>speaker</span>
                </h2>
                <p className="sm:p btn text-gray-600">
                  Upgrade to premium speakers that are <br /> phenomenally built
                  to deliver truly remarkable <br /> sound.
                </p>
                <button className="btn sm:p btn text-white hover:bg-[#4C4C4C] w-40 h-12 bg-black border-none">
                  <Link to="/speakers" className="btn">
                    See Products
                  </Link>
                </button>
              </div>
              <div className="sm:flex hidden sm:mt-0 mt-60 flex-col gap-11 items-start ">
                <h2 className="h2 btn uppercase text-white">
                  zx9 <br />
                  <span>speaker</span>
                </h2>
                <p className="p btn text-gray-600">
                  Upgrade to premium speakers that are <br /> phenomenally built
                  to deliver truly remarkable <br /> sound.
                </p>
                <button className="btn p btn text-white hover:bg-[#4C4C4C] w-40 h-12 bg-black border-none">
                  <Link to="/speakers" className="btn">
                    See Products
                  </Link>
                </button>
              </div>
            </li>
            <li className="rounded-lg relative">
              <div className="rounded-lg absolute rounded-lg sm:top-36 sm:left-16 top-4 left-4 flex flex-col gap-5">
                <h2 className="text-4xl">ZX7 SPEAKER</h2>
                <button className="btn text-black  hover:text-white hover:bg-black w-40 h-12 bg-nane border-2 border-black">
                  <Link to="/speakers">See Products</Link>
                </button>
              </div>
              <img
                className="rounded-lg"
                width={1900}
                height={600}
                src={speaker}
                alt=""
              />
            </li>
            <li className="rounded-lg flex items-center justify-center flex-wrap gap-10">
              <img
                width={640}
                height={320}
                src={earphones}
                alt="speaker"
                className="img_ rounded-lg"
              />
              <div
                className="rounded-lg flex items-center p-10 gap-5 justify-center text-center flex-col"
                style={{
                  width: "620px",
                  height: "380px",
                  background: "#F1F1F1",
                }}
              >
                <h2 className="text-3xl">YX1 EARPHONES</h2>
                <button className="btn text-black  hover:text-white hover:bg-black w-40 h-12 bg-nane border-2 border-black">
                  <Link to="/earphones">See Products</Link>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <FooterConpanent />
      </footer>
    </>
  );
}
export default Home;

//
