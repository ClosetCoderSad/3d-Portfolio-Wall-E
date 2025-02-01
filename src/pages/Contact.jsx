import React, { useState, useRef, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Heart,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isEeevah, setIsEeevah] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-5">
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-12 text-center font-oxanium">Call Home!</h2>
        <section className="space-y-6">
          <form className="space-y-4" action='https://getform.io/f/aejjkpob' method='POST'>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full h-[10vh] p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-white focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              Send Message
            </button>
          </form>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-oxanium">Connect With Me</h2>
          <div className="flex gap-6">
            <a
              href="https://github.com/ClosetCoderSad/" 
              className="hover:text-gray-300 transition-colors"
              target="_blank"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/md-abrar-al-zabir/"
              className="hover:text-gray-300 transition-colors"
                target="_blank"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com/ab.rark/"
              className="hover:text-gray-300 transition-colors"
                target="_blank"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/abrarroll2"
              className="hover:text-gray-300 transition-colors"
              target="_blank"
            >
              <Facebook size={24} />
            </a>
            <a
              href="mailto:abrarroll2@gmail.com"
              className="hover:text-gray-300 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-oxanium">Be my Eeeee-vah?</h2>
          <div className="relative inline-block">
            <button
              onClick={() => setShowPopover(!showPopover)}
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Heart
                size={20}
                className={`transition-transform ${isEeevah ? "text-red-500 scale-125" : ""} group-hover:scale-110`}
                fill={isEeevah ? "currentColor" : "none"}
              />
              {isEeevah ? "You're my Eeeee-vah!" : "Be my Eeeee-vah?"}
            </button>
            {showPopover && (
              <div ref={popoverRef} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-gray-900 text-white p-10 rounded-lg shadow-lg w-[500px] h-[400px] text-center relative flex flex-col items-center justify-center">
                  <button
                    onClick={() => setShowPopover(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4">
                    <iframe
                      src="https://www.youtube.com/embed/NPW3mvAN0Rc"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Wall-E and EVE video"
                    />
                  </div>
                  <a
                    href="https://www.instagram.com/ab.rark/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Instagram size={20} />
                    Shoot me a DM 💌
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
