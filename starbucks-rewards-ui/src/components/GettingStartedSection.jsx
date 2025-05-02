import React from "react";

const GettingStartedSection = () => {
  return (
    <section className="py-5 md;py-9">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-lg font-semibold ">Getting Started is Easy</h2>
          <p className="pt-3">
            Earn Stars and get rewarded in a few easy steps.
          </p>
        </div>
        <ol className="flex flex-col md:flex-row mt-8">
          {/* step1 */}
          <li className=" flex flex-col items-center text-center md:w-1/3 pb-5 md:pd-0 md:mr-4">
            <div className="pb-4">
              <img src="/getting-started-1@2x.jpg" alt="Step 1" width="48" />
            </div>
            <div>
                <h3 className="text-sm font-semibold pb-1">Order and pay how you’d like</h3>
                <p>To get started, <span className="underline text-green-900">join now.</span>You can also <br /><span className="underline text-green-900"> join in the app </span>to get access to the <br />full range of Starbucks® Rewards<br /> benefits.</p>

            </div>
          </li>
          {/* step2 */}
          <li className=" flex flex-col items-center text-center md:w-1/3 pb-5 md:pd-0 md:mr-4">
            <div className="pb-4">
              <img src="/getting-started-2@2x.jpg" alt="Step 1" width="48" />
            </div>
            <div>
                <h3 className="text-sm font-semibold pb-1">Create an account</h3>
                <p>Use cash, credit/debit card or save<br /> some time and pay right through the <br />app. You’ll collect Stars all ways.<br /><span className="underline text-green-900">Learn How</span></p>
                

            </div>
          </li>
          {/* step3 */}
          <li className=" flex flex-col items-center text-center md:w-1/3 pb-5 md:pd-0 md:mr-4">
            <div className="pb-4">
              <img src="/getting-started-3@2x.jpg" alt="Step 1" width="48" />
            </div>
            <div>
                <h3 className="text-sm font-semibold pb-1">Earn Stars, get Rewards</h3>
                <p>As you earn Stars, you can redeem<br /> them for Rewards—like free food,<br /> drinks, and more. Start redeeming <br />with as little as 25 Stars!</p>
                
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default GettingStartedSection;
