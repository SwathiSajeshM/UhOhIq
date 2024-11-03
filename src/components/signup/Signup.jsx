import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    agreeToInsults: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User bravely signed up!', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-400 to-yellow-500">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-4xl font-extrabold text-center text-red-600 mb-4">🧠 Welcome to UhOhIq! 🤯</h2>
        <p className="text-center text-gray-700 mb-8">Sign up if you think you can handle some savage humor. 😜</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Choose a name worthy of mockery"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border-2 rounded-lg focus:border-red-400"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="We might roast you... but we don’t spam!"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border-2 rounded-lg focus:border-red-400"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Make it good, we’ll test your IQ 🔐"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border-2 rounded-lg focus:border-red-400"
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 font-semibold">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Yep, you’re really going for it!"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border-2 rounded-lg focus:border-red-400"
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="text-red-600 focus:ring-red-500"
              />
              <span className="ml-2 text-gray-700">I agree to endure funny roasts and ego checks.</span>
            </label>
          </div>
          <div className="mb-8">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agreeToInsults"
                checked={formData.agreeToInsults}
                onChange={handleChange}
                className="text-red-600 focus:ring-red-500"
              />
              <span className="ml-2 text-gray-700">I won’t cry over savage videos. Bring it on! 😂</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-all"
            title="Ready for the UhOh IQ Challenge!"
          >
            Sign Me Up for the Roasts! 🎬
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          By signing up, you accept that your IQ may be challenged, questioned, and maybe roasted. Proceed at your own risk! 🔥
        </p>
      </div>
    </div>
  );
};

export default SignUp;