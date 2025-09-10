import { motion } from "framer-motion";

const cardData = [
  { title: "Strategy", desc: "Smart product roadmaps & design thinking." },
  { title: "Design", desc: "Modern, clean, user-centric UI/UX." },
  { title: "Development", desc: "Scalable frontend & backend engineering." },
  { title: "Growth", desc: "SEO, analytics, and conversion optimization." },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-gradient-to-br from-white via-purple-50 to-white overflow-hidden flex items-center py-20"
    >
      {/* Background Decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-400 rounded-full blur-3xl opacity-30"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
        {/* Headline */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Build <span className="text-accent">Digital Products</span> That
            Inspire
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We help startups and enterprises design and develop world-class user
            experiences with cutting-edge technology and creative design
            thinking.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-accent text- rounded-xl shadow-lg hover:bg-accent/90 transition"
              href="#"
            >
              Get Started
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border border-accent text-accent rounded-xl hover:bg-purple-50 transition"
              href="#"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white shadow-xl rounded-2xl p-8 text-center border hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
