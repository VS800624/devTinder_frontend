const Premium = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Premium Membership
        </h1>
        <p className="text-gray-600 mt-2 text-sm">
          Upgrade your experience with our premium plans
        </p>
      </div>

      {/* Plans */}
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {/* Silver Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full md:w-[300px] hover:-translate-y-1 transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Silver Membership
          </h2>
          <p className="text-3xl font-bold text-gray-900 mb-1">
            ₹99
            <span className="text-sm font-medium text-gray-500">
              /month
            </span>
          </p>
          <p className="text-gray-600 text-sm mb-6">
            Best for beginners
          </p>

          <ul className="space-y-3 text-sm text-gray-700 mb-8">
            <li>✔ Access to chat with other people</li>
            <li>✔ 100 connection requests per day</li>
            <li>✔ Standard customer support</li>
            <li>✔ Community access</li>
            <li>✔ Blue Tick</li>
          </ul>

          <button className="w-full py-2 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-700 transition">
            Choose Silver
          </button>
        </div>

        {/* Gold Plan */}
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full md:w-[300px] border-2 border-yellow-400 relative hover:-translate-y-1 transition">
          <span className="absolute -top-3 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Gold Membership
          </h2>
          <p className="text-3xl font-bold text-gray-900 mb-1">
            ₹199
            <span className="text-sm font-medium text-gray-500">
              /month
            </span>
          </p>
          <p className="text-gray-600 text-sm mb-6">
            Best for professionals
          </p>

          <ul className="space-y-3 text-sm text-gray-700 mb-8">
            <li>✔ All Silver features included</li>
            <li>✔ Infinite connection requests per day</li>
            <li>✔ Priority support</li>
            {/* <li>✔ Unlimited access</li> */}
            <li >✔ Premium exclusive content</li>
          </ul>

          <button className="w-full py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition">
            Choose Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
