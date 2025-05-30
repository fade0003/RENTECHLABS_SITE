
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Rentech Labs</h1>
          <nav className="space-x-4">
            <a href="#hero" className="hover:underline">Home</a>
            <a href="#gallery" className="hover:underline">Labs</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-white p-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 text-center"
        >
          Welcome to Rentech Labs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-center"
        >
          Innovating Tomorrow
        </motion.p>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Labs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              label: "Bambu Labs 3D Printer",
              src: "/images/bambu_labs_3d_printer.jpg",
            },
            {
              id: 2,
              label: "Scale Model Workshop",
              src: "/images/scale_model_workshop.jpg",
            },
            {
              id: 3,
              label: "Electric Scooter Mod Station",
              src: "/images/scooter_mod_station.jpg",
            },
            {
              id: 4,
              label: "Electronics Lab",
              src: "/images/electronics_lab.jpg",
            },
            {
              id: 5,
              label: "AI Development Bay",
              src: "/images/ai_dev_bay.jpg",
            },
            {
              id: 6,
              label: "Mechanical Prototyping",
              src: "/images/mechanical_prototyping.jpg",
            }
          ].map(({ id, label, src }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={src}
                alt={label}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2 text-center font-semibold">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-12 px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">About Rentech Labs</h3>
        <p className="max-w-3xl mx-auto text-lg">
          Rentech Labs is at the forefront of scientific and technological innovation. Our state-of-the-art
          laboratories empower researchers and developers to explore cutting-edge solutions for a better future.
        </p>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 px-4 bg-white text-center">
        <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Rentech Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}
