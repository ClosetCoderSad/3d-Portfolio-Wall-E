import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Heart,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isEeevah, setIsEeevah] = useState(false);


  return (
    <main className="w-full min-h-screen bg-black text-white p-6 md:p-12" id="contact">
      <div className="max-w-4xl mx-auto space-y-5">
      <h2 className="text-3xl md:text-5xl font-bold text-white mt-12 text-center font-oxanium">Call Home!</h2>
        <section className="space-y-6">
          <form className="space-y-4" action='https://getform.io/f/aejjkpob' method='POST'>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                name="message"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
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
              href="https://instagram.com/kab.rar/"
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
          <div className="bg-gray-900 p-6 rounded-lg text-center space-y-6">
            <button
              onClick={() => setIsEeevah(!isEeevah)}
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Heart
                size={20}
                className={`transition-transform ${
                  isEeevah ? "text-red-500 scale-125" : ""
                } group-hover:scale-110`}
                fill={isEeevah ? "currentColor" : "none"}
              />
              {isEeevah ? "You're my Eeeee-vah!" : "Be my Eeeee-vah?"}
            </button>
            {isEeevah && (
              <div className="space-y-6 animate-fade-in">
                <div className="relative aspect-video w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/NPW3mvAN0Rc"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Wall-E and EVE video"
                  />
                </div>
                <a
                  href="https://www.instagram.com/kab.rar/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Instagram size={20} />
                  Shoot me a DM 💌
                </a>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
