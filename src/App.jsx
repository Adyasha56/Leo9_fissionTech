// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import  "./index.css";

function App() {
  return (
  <div className="min-h-screen flex flex-col bg-primary text-light dark:bg-primary dark:text-light transition-colors duration-300">
    <Navbar />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
   <Footer />
  </div>

  );
}

export default App;
