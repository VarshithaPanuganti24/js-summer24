import { useEffect } from "react";
import { useFormContext } from "../state";
import { useNavigate } from "react-router-dom";

const Step5 = () => {
  const { isSubmitted, setStep } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSubmitted) {
      setStep(1);
      //navigate("/step1");
    }
  }, []);

  return (
    <form class="col-span-full row-start-2 row-end-[10] grid grid-rows-container sm:col-span-1 sm:row-start-auto sm:row-end-auto">
      <div class="row-span-full mx-4 grid self-start rounded-xl bg-white px-6 py-10 sm:mx-0 sm:self-auto sm:px-20">
        <div class="grid place-items-center gap-3 self-center">
          <div class="my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
            >
              <g fill="none">
                <circle cx="40" cy="40" r="40" fill="#F9818E"></circle>
                <path
                  fill="#E96170"
                  d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"
                ></path>
                <path
                  fill="#FFF"
                  d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"
                ></path>
              </g>
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-secondary sm:text-4xl">
            Thank you!
          </h1>
          <p class="my-2 text-center text-foreground">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            to support@loremgaming.com
          </p>
        </div>
      </div>
    </form>
  );
};

export default Step5;

//  <div className="
//   col-span-full
//   row-start-2
//   row-end-[10]
//   grid
//   grid-rows-[1fr_auto]
//   sm:col-span-1
//   sm:row-start-auto
//   sm:row-end-auto
//   min-h-[500px]
// ">
//     <h2 className="text-2xl font-bold">Thank you!</h2>
//     <p>We appreciate you confirming your subscription. Have a great day!</p>
//   </div>
//);

{
  /* <form class="col-span-full row-start-2 row-end-[10] grid grid-rows-container sm:col-span-1 sm:row-start-auto sm:row-end-auto"><div class="row-span-full mx-4 grid self-start rounded-xl bg-white px-6 py-10 sm:mx-0 sm:self-auto sm:px-20"><div class="grid place-items-center gap-3 self-center"><div class="my-4"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><g fill="none"><circle cx="40" cy="40" r="40" fill="#F9818E"></circle><path fill="#E96170" d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"></path><path fill="#FFF" d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"></path></g></svg></div><h1 class="text-2xl font-bold text-secondary sm:text-4xl">Thank you!</h1><p class="my-2 text-center text-foreground">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us to support@loremgaming.com</p></div></div></form>

<form
    onSubmit={handleSubmit(onSubmit)}
    className="
    col-span-full 
    row-start-2 
    row-end-[10] 
    grid 
    grid-rows-[1fr_auto] 
    sm:col-span-1 
    sm:row-start-auto 
    sm:row-end-auto
    min-h-[500px]  
  "
  >
      <div className="mx-4 self-start rounded-xl bg-white px-6 py-8 sm:mx-0 sm:self-auto sm:px-20 sm:py-10 ">
      <h1 className="text-2xl font-bold text-[hsl(var(--secondary))] sm:text-3xl">
          Thank you
        </h1>
        <p className="my-2 text-base text-[hsl(var(--foreground))] ">
        We appreciate you confirming your subscription. Have a great day!
        </p>

        </div>
        </form> */
}
