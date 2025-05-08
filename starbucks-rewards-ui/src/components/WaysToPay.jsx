import React from "react";

const WaysToPay = () => {
  return (
    <section className="pt-10 md:pt-6" id="ways-to-pay" 
    style={{backgroundColor:'var(--bgcoc)'}}>
      <div className="max-w-screen-xl mx-auto px-4 py-14">
        <div className="mb-12 pb-28 md:pb-13 text-center md:mx-auto md:w-8/12 lg:w-6/12">
          <h2 className="text-lg font-semibold pt-4 md:pt-0 pb-3">
            Cash or card, you earn Stars
          </h2>
          <p>
            No matter how you pay, you can earn Stars with your morning coffee.
            Those Stars add up to (really delicious) Rewards.
          </p>
        </div>

        {/* 1 Star per dollar */}
        <div className="grid gap-8 lg:grid-cols-12 pb-6 md:pb-6">
          <div className="lg:col-span-2 pb-5 lg:pb-0">
            <p className="font-semibold text-md">
              1
              <span aria-hidden="true" className="text-black text-sm">
                ★
              </span>{" "}
              per dollar
            </p>
            <p>Pay as you go</p>
          </div>

          <div className="md:col-span-6 lg:col-span-5 xl:col-span-4 pb-5 md:pb-0">
            <div className="flex md:pr-2 lg:px-4">
              <div className="flex-shrink-0 text-center pr-3">
                <img
                  src="/1A.png"
                  alt=""
                  width="112"
                />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold pb-1">
                  Scan and pay separately
                </h3>
                <p className="pt-3">
                  Use cash or credit/debit card at the register.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-5 xl:col-span-4 pb-5 md:pb-0">
            <div className="flex md:pr-2 lg:px-4">
              <div className="flex-shrink-0 text-center pr-3">
                <img
                  src="/1B.png"
                  alt=""
                  width="112"
                />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold pb-1">
                  Save payment in the app
                </h3>
                <p className="pt-3">
                  Check-out faster by saving a credit/debit card or PayPal to
                  your account. You’ll be able to order ahead or scan and pay at
                  the register in one step.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-300 pt-3 pb-6 md:pt-4 md:pb-7" />

        {/* 2 Stars per dollar */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-2 pb-5 lg:pb-0">
            <p className="font-semibold text-md">
              2
              <span aria-hidden="true" className="text-black text-sm">
                ★
              </span>{" "}
              per dollar
            </p>
            <p>Add funds in the app</p>
          </div>

          <div className="md:col-span-6 lg:col-span-5 xl:col-span-4 pb-5 md:pb-0">
            <div className="flex md:pr-2 lg:px-4">
              <div className="flex-shrink-0 text-center pr-3">
                <img
                  src="/2A.png"
                  alt=""
                  width="112"
                />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold pb-1">Preload</h3>
                <p className="pt-3">
                  To save time and earn Stars twice as fast, add money to your
                  digital Starbucks Card using any payment option. Scan and pay
                  in one step or order ahead in the app.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-5 xl:col-span-4 pb-5 md:pb-0">
            <div className="flex md:pr-2 lg:px-4">
              <div className="flex-shrink-0 text-center pr-3">
                <img
                  src="/2B.png"
                  alt=""
                  width="112"
                />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold pb-1">
                  Register your gift card
                </h3>
                <p className="pt-3">
                  Then use it to pay through the app. You can even consolidate
                  balances from multiple cards in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaysToPay;
