import React from "react";

const Questions = () => {
  return (
    <div className="py-5 md:py-9">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center ">
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-semibold pb-3" tabIndex={0}>
              Questions?
            </h2>
            <p className="pb-3 px-16 text-left ">
              We want to help in any way we can. You can ask your barista
              anytime or we’ve answered the most commonly asked terms{" "}
              <span className="mr-1 text-green-900">
                right over here{" "}
                <svg
                  aria-hidden="true"
                  className="w-[18px] h-[18px] align-middle"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.5003 3.30018C14.0861 3.30021 13.7503 3.63602 13.7504 4.05024C13.7504 4.46445 14.0862 4.80021 14.5004 4.80018L17.7958 4.79994L11.2981 11.2976C11.0052 11.5905 11.0052 12.0654 11.2981 12.3583C11.591 12.6512 12.0659 12.6512 12.3588 12.3583L18.8566 5.86046V8.99966C18.8566 9.41388 19.1924 9.74966 19.6066 9.74966C20.0208 9.74966 20.3566 9.41388 20.3566 8.99966V4.0498C20.3566 3.85088 20.2776 3.66011 20.1369 3.51945C19.9963 3.3788 19.8055 3.29979 19.6065 3.2998L14.5003 3.30018Z" />
                  <path d="M6 3.99966H12V5.49966H6C5.72386 5.49966 5.5 5.72352 5.5 5.99966V17.9997C5.5 18.2758 5.72386 18.4997 6 18.4997H18C18.2761 18.4997 18.5 18.2758 18.5 17.9997V11.2497H20V17.9997C20 19.1042 19.1046 19.9997 18 19.9997H6C4.89543 19.9997 4 19.1042 4 17.9997V5.99966C4 4.89509 4.89543 3.99966 6 3.99966Z" />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
