"use client";

import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['CS Student', 'Web Developer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentIndex];

      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentIndex((current) => (current + 1) % words.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, currentIndex, isDeleting, words]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-blue-900/20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Koushik Mondal
            </span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="border-r-2 border-blue-500 pr-1 animate-pulse">
              {text}
            </span>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-centered digital experiences.
            I bring ideas to life through code and design.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-center sm:text-left">
  {/* CTA Button */}
  <Button
    size="lg"
    onClick={() => scrollToAbout()}
    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
  >
    View My Work
  </Button>

  {/* Meme Text */}
  <p className="text-gray-400 text-base sm:text-lg max-w-md">
    <span className="inline-block animate-wiggle">
      🐛
    </span>{" "}
    If it works, it’s not a bug — it’s a feature.
  </p>
</div>


        <div className="flex justify-center space-x-6 mb-12">
          {[
            { icon: Github, href: 'https://github.com/Koushikmondal06', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/koushik-mondal-011308329/', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' },
          ].map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              className="p-3 rounded-full bg-slate-800/50 text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;