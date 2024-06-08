import { FooterConpanent, Shoplink } from "../components";
import { customFetch } from "../utils";
import { Link, useLoaderData } from "react-router-dom";

const url = "/products";

export const loader = async () => {
  const req = await customFetch(url);

  const products = req.data.data;

  return { products };
};

function Headphones() {
  const { products } = useLoaderData();
  return (
    <>
      <div>
        <div className="p-20 font-bold uppercase background-links">
          <h2 className="text-center text-white text-3xl">Headphones</h2>
        </div>
        <ul className="container flex flex-col mt-10 mb-10 gap-10 text-left items-center">
          {products.map((product) => {
            if (product.category === "headphones") {
              return (
                <div key={product.id}>
                  <li className="flex text-left items-center gap-24 justify-center flex-wrap w-full">
                    {product.id == 3 ? (
                      ""
                    ) : (
                      <img
                        src={product.categoryImage.desktop}
                        alt={product.name}
                        width={540}
                        height={560}
                      />
                    )}
                    <div className="text-left flex flex-col gap-5 text-start">
                      <p className="letter_space_2">NEW PRODUCT</p>
                      <h2 className="text-4xl">{product.slug}</h2>
                      <p className="w-96">{product.description}</p>
                      <div className="w-full flex gap-5 flex-wrap flex-col">
                        <Link to={`/products/${product.slug}`}>
                          <button className="btn1">See Product</button>
                        </Link>
                      </div>
                    </div>
                    {product.id == 3 ? (
                      <img
                        src={product.categoryImage.desktop}
                        alt={product.name}
                        width={540}
                        height={560}
                      />
                    ) : (
                      ""
                    )}
                  </li>
                </div>
              );
            }
          })}
        </ul>
        <footer className="mt-0 mb-20">
          <Shoplink />
          <FooterConpanent />
        </footer>
      </div>
    </>
  );
}

export default Headphones;
