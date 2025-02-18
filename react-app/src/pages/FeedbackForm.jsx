import React, { useState } from "react";



export default function  FeedbackForm()  {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "Male",
    subscribe: false,
    rating: "",
    comments: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Feedback Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block font-medium">Gender:</label>
            <div className="flex gap-4">
              {["Male", "Female", "Other"].map((gender) => (
                <label key={gender} className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {gender}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                className="mr-2"
              />
              Subscribe to Newsletter
            </label>
          </div>
          <div>
            <label className="block font-medium">Rating:</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    value={num}
                    checked={formData.rating === String(num)}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  {num}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-medium">Additional Comments:</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      {submittedData && (
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mt-6">
          <h3 className="text-lg font-bold">Submitted Feedback</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Gender:</strong> {submittedData.gender}
          </p>
          <p>
            <strong>Subscribed:</strong>{" "}
            {submittedData.subscribe ? "Yes" : "No"}
          </p>
          <p>
            <strong>Rating:</strong> {submittedData.rating}
          </p>
          <p>
            <strong>Comments:</strong> {submittedData.comments}
          </p>
        </div>
      )}
    </div>
  );
}
