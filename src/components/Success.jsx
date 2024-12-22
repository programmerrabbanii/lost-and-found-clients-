const Success = () => {
  return (
    <div>
      <div className="bg-gray-800 py-16 text-white">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card bg-gray-700 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-bold">John's Wallet</h3>
                <p className="text-gray-300">
                  "I lost my wallet at a park. Thanks to this platform, I got it
                  back within a day!"
                </p>
              </div>
            </div>
            <div className="card bg-gray-700 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-bold">Anna's Pet</h3>
                <p className="text-gray-300">
                  "My cat went missing last week. Someone found it and contacted
                  me through this site!"
                </p>
              </div>
            </div>
            <div className="card bg-gray-700 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-bold">David's Phone</h3>
                <p className="text-gray-300">
                  "Lost my phone at a cafe. The finder posted it here, and I
                  recovered it within hours!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
