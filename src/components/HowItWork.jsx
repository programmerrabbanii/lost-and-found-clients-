const HowItWork = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Post an Item</h3>
              <p className="text-gray-600">
                Create a post for your lost or found item with detailed
                information.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Connect with Others
              </h3>
              <p className="text-gray-600">
                Find matches for lost or found items and connect with the
                owners.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Recover Your Items</h3>
              <p className="text-gray-600">
                Coordinate and retrieve your belongings safely and easily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
