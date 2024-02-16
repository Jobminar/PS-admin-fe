import React from "react";

const Karyakarthaform = (
  name,
  phone,
  email,
  address,
  setName,
  setPhone,
  setEmail,
  setAddress,
  handleSubmit
) => {
  return (
    <form className="flex flex-col space-y-4 mt-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-lg text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-200 p-2 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-lg text-gray-600">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border-2 border-gray-200 p-2 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-lg text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-200 p-2 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="address" className="text-lg text-gray-600">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border-2 border-gray-200 p-2 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-primary-500 text-white px-4 py-2 rounded mt-4 hover:bg-primary-600"
      >
        Add Karyakartha
      </button>
    </form>
  );
};

export default Karyakarthaform;
