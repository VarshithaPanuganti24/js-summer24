import React from "react";

const KeepTheRewards = () => {
  return (
    <div className="p-[40px] " style={{ backgroundImage:"url('/bgimage.png')" }}>
    <section
      class="text-center px-4 py-8 pt-10 md:pt-6"
      style={{ backgroundColor: "var(--bgkrc)" }}
    >
      <div className=" p-4 max-w-screen-xl mx-auto px-4 py-14">
      
        <h2 class="text-lg font-semibold pt-3">Keep the Rewards Coming</h2>
        <p class="pt-6 pb-6">
          The Rewards don't stop at your morning coffee. Join Starbucks® Rewards
          and unlock perks from our partners, all while earning more Stars.
        </p>

        <div class="flex flex-col md:flex-row justify-center items-center gap-8 mt-8 pt-10 pb-10 ">
          <div class="text-center justify-center max-w-sm">
            <img src="/delta-skymiles.png" alt="Delta Skymiles" width="190"  />
            <p class="pt-4">
              <span className="underline text-green-900"> Link your Delta SkyMiles® </span>Link your Delta SkyMiles® and Starbucks® Rewards accounts to earn
              miles on Starbucks Card reloads of $25 or more, plus Double Stars
              on travel days.<sup>1</sup>
            </p>
          </div>

          <div class="text-center max-w-sm">
            <img src="/bank-of-america.png" alt="Bank of America" width="190" />
            <p class="pt-4">
            <span className="underline text-green-900">Link your Bank of America</span> eligible card and Starbucks® Rewards
              account to earn 2% Cash Back and Bonus Stars on qualifying
              Starbucks in-app purchases.<sup>2</sup>
            </p>
          </div>

          <div class="text-center max-w-sm">
            <img src="/marriott-logo.png" alt="Marriott Bonvoy®" width="190" />
            <p class="pt-4">
            <span className="underline text-green-900">Link your Marriott Bonvoy® </span>and Starbucks® Rewards accounts to earn
              Double Stars during eligible stays, points during any Marriott
              Bonvoy Week and more.<sup>3</sup>
            </p>
          </div>
        </div>
        <div>
          <button className="bg-green-900 text-white rounded-lg pt-5">
            Join Starbucks® Rewards
          </button>
        </div>
        
      </div>
    </section>
    </div>
  );
};

export default KeepTheRewards;

//   style={{
//     border: '20px solid transparent',
//     backgroundImage: 'url("/bgimage.png")',
//     backgroundOrigin: 'border-box',
//     backgroundClip: 'border-box',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: '100% 100%',
//   }}>
