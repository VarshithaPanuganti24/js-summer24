import React from "react";
import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools"

let renderCount =0;
export const YouTubeForm = () => {
  const form = useForm({
    defaultValues:{
    username : "Your Name",
    email: "user@gmail.com",
    channel : "channel name",
    }
});
  //register method helps for form  state
  const { register, control,handleSubmit,formState } = form;
  const{ errors } = formState;
  // const { name, ref, onChange, onBlur } = register("username");

  const onSubmit =(data) => {
    console.log('Form subitted',data)
  };

  renderCount++;
  return (
    <div>
      <h1>YouTube Form({renderCount/2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
        <label htmlFor="username">Username</label>
        {/* before  <input type="text" id="username" name="username" /> */}
        <input
          type="text"
          id="username"
          {...register("username",
            { required:
              { value:true,
               message: "Name is required",
              } ,
            })
          }
          // name={name}
          // ref={ref}
          // onChange={onChange}
          // onBlur={onBlur}
        />
        <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email",{
          pattern:{
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email format",

          },
        })}  />
        <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel",{ 
          required: { 
          value: true,
          message: "Channel is required",},
          })} />
        <p className="error">{errors.channel?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control = {control} />
    </div>
  );
};
