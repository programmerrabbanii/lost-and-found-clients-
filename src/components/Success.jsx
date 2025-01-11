import { motion } from "framer-motion";

const Success = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-16 text-white">
        <motion.div
          className="w-11/12 mx-auto text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-shadow-md">
            Real Success Stories
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
            Read the inspiring experiences of people who successfully recovered
            their lost items using our platform.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lost Wallet Found",
                desc: "I lost my wallet at the park, and within hours, I got it back thanks to this amazing platform!",
                author: "— Rabbani Sarkar",
              },
              {
                title: "Reunited with Pet",
                desc: "My missing dog was found by a kind stranger, and this site helped us reconnect quickly!",
                author: "— Radib Buiyan",
              },
              {
                title: "Phone Recovered",
                desc: "Lost my phone at a cafe, and the finder posted it here. Got it back in no time!",
                author: "— Jhankar Mahmud",
              },
            ].map((story, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white bg-opacity-90 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-500 mb-4">{story.desc}</p>
                <span className="text-gray-500 font-semibold">
                  {story.author}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Success;
