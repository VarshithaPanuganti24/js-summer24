import React, { useState } from "react";
import Button from "../component/Button";

export default function FeedbackForm1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
    gender: "",
    subscribe: false,
    rating: "",
  });
  const [submittedData,setSubmittedData]= useState(null);

  const handleChange = (e) => {
    const { name, value,type, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: type === "checkbox" ? checked :value }));
  };

  const handleSubmit = (e) => {
    e.preventDault();
    setSubmittedData(formData);
  };

  return (
    <div className="flex flex-col items-center p-6  bg-blue-100 min-h-screen gap-3 w-7/12 md:w-4/12 lg:w-3/12 mx-auto ">
       <h2 className="text-xl font-bold" >FeedbackForm1</h2>
       <form onSubmit={handleSubmit} className="space-y-2">

        <div className="flex flex-col mb-4 ">
        <label  id="name"  > Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        
        </div>

        <div className="flex flex-col">
        <label id="email" className="block font-medium"> Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
        <label className="block font-medium"> Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender==="male"}
            onChange={handleChange}
          />{""}
          Male 
          </label>
          <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender==="female"}
            onChange={handleChange}
          />{""}
          Female  
          </label>
          <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender ==="other"}
            onChange={handleChange}
          />{""}
          Other  
          </label>
        </div>

        <div className="flex flex-col">
        <label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />{""}
          SubscribeNewsletter 
          </label>
        </div>

        <div className="flex flex-col" >
            
            <label>Rating</label>
            <input
            type="radio"
            name="rating"
            value=""
            checked={formData.rating}
            onChange={handleChange}
            />{""}
            
        </div>

        <div className="flex flex-col">
        <label className="block font-medium" > Comments: </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div>

        <Button color="primary" type="submit">Submit </Button>
        </form>

        //submittedData?

    </div>
  )
}
