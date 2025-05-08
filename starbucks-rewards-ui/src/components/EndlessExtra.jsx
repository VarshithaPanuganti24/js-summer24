import React from "react";

const EndlessExtra = () => {
  return (
    <section className="py-7 md;py-15 pt-10">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center text-center py-9">
          <h2 className="text-lg font-semibold "> Endless Extras</h2>
          <p className="pt-5 ">
            Joining Starbucks® Rewards means unlocking access to benefits like{" "}
            <br />
            quick and easy ordering, tasty Rewards and—yes, free coffee.
          </p>
        </div>
        <div>
        <ol className="flex flex-col md:flex-row mt-10">
          {/* step1 */}
          <li className=" flex flex-col items-center text-center md:w-1/3 pb-9 md:pd-7 md:mr-4">
            <div className="pb-8 pt-8">
              <img src="/1-fun-freebies.jpg" alt="Step 1" width="112" />
            </div>
            <div>
              <h3 className="text-md font-semibold pb-3">
                {" "}
                Fun freebies{" "}
              </h3>
             <p className="pt-3 pb-3">
             Not only can you earn free food,<br /> drinks and more, look forward to a <br />birthday treat on us.
             </p>
             <span className=" pt-7 underline text-green-900">Learn more</span>
            </div>
          </li>
          {/* step2 */}
          <li className=" flex flex-col items-center text-center md:w-1/3 pb-5 md:pd-0 md:mr-4">
            <div className="pb-8 pt-8">
              <img src="/2-order-and-pay-ahead.jpg" alt="Step 1" width="112" />
            </div>
            <div>
              <h3 className="text-md font-semibold pb-3">
                Order and pay ahead
              </h3>
              <p className="pt-3 pb-3">
              Master the art of ordering ahead<br /> with saved favorites and payment <br />methods.
               
              </p>
              <span className="pt-7 underline text-green-900">Learn more</span>
            </div>
          </li>
          {/* step3 */}
          <li className=" flex flex-col items-center text-center md:w-1/3 pb-5 md:pd-0 md:mr-4">
            <div className="pb-8 pt-8">
              <img src="/3-get-to-free-faster.jpg" alt="Step 1" width="112" />
            </div>
            <div>
              <h3 className="text-md font-semibold pb-3">
                Get to free Faster
              </h3>
              <p className="pt-3 pb-3">
              Earn Stars even quicker with Bonus<br /> Star challenges, Double Star Days<br /> and exciting games.
              </p>
              <span className="pt-7 underline text-green-900">Learn more</span>
            </div>
          </li>
        </ol>
        </div>
      </div>
    </section>
  );
};

export default EndlessExtra;

{
  /* <section className="py-5 md:py-9 text-center">

<div className="pt-7 " bg-white>
  <div>
  <h2
    className="text-lg font-semibold pb-3 md:pb-7 "
    tabIndex="-1"
  >
    Endless Extras
  </h2>
  <p>
  Joining Starbucks® Rewards means unlocking access to benefits like <br />quick and easy ordering, tasty Rewards and—yes, free coffee.
  </p>
  </div>
  

  <div className="flex w-full md:w-1/3 md:pb-0 flex-row md:mr-4 pb-5">

  <div className="text-center flex-shrink-0 pb-4 cursor-pointer">
    <img
      className="transition-opacity duration-500 opacity-100"
      src="/1-fun-freebies.jpg"
      alt=""
      
      width="112"
    />
  </div>
  <div className="text-center">
    <h3
      className="text-sm font-semibold pb-1"
      tabIndex="0"
    >
      Fun freebies
    </h3>
    <p className="pt-3">
      Not only can you earn free food, drinks and more, look forward to a birthday treat on us.
    </p>
    <div className='underline text-green-900'>
      Learn More
    </div>
</div>
<div className="text-center flex-shrink-0 pb-4 cursor-pointer">
    <img
      className="transition-opacity duration-500 opacity-100"
      src="/2-order-and-pay-ahead.jpg"
      alt=""
      
      width="112"
    />
  </div>
  <div className="text-center">
    <h3
      className="text-sm font-semibold pb-1"
      tabIndex="0"
    >
      Fun freebies
    </h3>
    <p className="pt-3">
      Not only can you earn free food, drinks and more, look forward to a birthday treat on us.
    </p>
    <div className='underline text-green-900'>
      Learn More
    </div>
</div>
<div className="text-center flex-shrink-0 pb-4 cursor-pointer">
    <img
      className="transition-opacity duration-500 opacity-100"
      src="/3-get-to-free-faster.jpg"
      alt=""
      
      width="112"
    />
  </div>
  <div className="text-center">
    <h3
      className="text-sm font-semibold pb-1"
      tabIndex="0"
    >
      Fun freebies
    </h3>
    <p className="pt-3">
      Not only can you earn free food, drinks and more, look forward to a birthday treat on us.
    </p>
    <div className='underline text-green-900'>
      Learn More
    </div>
</div>


</div>
  
</div>
</section> */
}
