import hero from "../../public/assets/man.jpg";

const FooterConpanent = () => {
  return (
    <div>
      <div>
        <div className="flex items-center sm:justify-center gap-11 p-10 flex-wrap">
          <div className="w-full max-w-96 flex flex-col gap-5">
            <h2 className="near-footer-title">
              <p>Bringing You The</p>
              <p className="flex">
                <p className="text-[#D87D4A]">Best </p> Audio Gear
              </p>
            </h2>
            <p className="p1 text-black">
              Located at the heart of New York City, Audiophile is the premier{" "}
              <br />
              store for high end headphones, earphones, speakers, and audio{" "}
              <br />
              accessories. We have a large showroom and luxury demonstration
              rooms <br />
              available for you to browse and experience a wide range of our{" "}
              <br />
              products. Stop by our store to meet some of the fantastic people
              who <br />
              make Audiophile the best place to buy your portable audio
              equipment <br />
            </p>
          </div>
          <img
            className="sm:mt-[150px] sm:ml-[160px] mt-[200px]"
            src={hero}
            width={550}
            height={350}
            alt="the man listening audio with headphones"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterConpanent;
