import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormError from "../../../../component/FormError";
import Button from "../../../../component/Button";
import Input from "../../../../component/Input";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const schema = yup.object({
  email: yup
    .string()
    .max(50, "max charater is 50.")
    .email()
    .matches(EMAIL_REGEX)
    .required("email is required"),
  password: yup.string().min(8, "Must be atleast characters.").required(),
});

const LoginFormB = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label id="email">Email: </label>
          <Input id="email" type="email" {...register("email")} />
          {errors?.email && <FormError>{errors.email.message}</FormError>}
        </div>

        {/* password field  */}
        <div>
          <label id="password">Password: </label>
          <Input id="password" type="password" {...register("password")} />
          {errors?.password && <FormError>{errors.password.message}</FormError>}
        </div>

        <Button type="submit" color="primary" disabled={!watch("email")}>
          Log In
        </Button>

        <Button type="submit" color="" onClick={handleGoBack}>
          Go Back
        </Button>
      </form>
    
  );
};

export default LoginFormB;
