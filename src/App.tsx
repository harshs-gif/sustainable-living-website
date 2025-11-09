import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import SustainableGuide from "./components/SustainableGuide";
import ProductivityTools from "./components/ProductivityTools";
import MentalHealth from "./components/MentalHealth";
import Community from "./components/Community";
import Blog from "./components/Blog";
import ResourceHub from "./components/ResourceHub";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's preferred color scheme
    const isDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main>
        <Hero />
        <SustainableGuide />
        <ProductivityTools />
        <MentalHealth />
        <Community />
        <Blog />
        <ResourceHub />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}