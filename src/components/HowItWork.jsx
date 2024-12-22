import {motion} from "framer-motion";
const HowItWork = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-yellow-50 via-white to-gray-100 py-16">
        <motion.div
          className="w-11/12 mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Discover how our platform makes it easy to find or report lost items
            with just a few simple steps.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Report Your Item",
                desc: "Submit detailed information about your lost or found item.",
                icon: "📝",
              },
              {
                step: "02",
                title: "Connect",
                desc: "Find and communicate with the rightful owner or finder.",
                icon: "🤝",
              },
              {
                step: "03",
                title: "Recover",
                desc: "Easily coordinate and retrieve your lost belongings.",
                icon: "🎉",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="flex items-center justify-center text-5xl text-yellow-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      ;
    </div>
  );
};

export default HowItWork;
