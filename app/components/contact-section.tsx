"use client";

import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import Image from 'next/image';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! This is a demo form.');
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Get In <span className="text-[#07bdfa]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#bd0f0f] to-[#07bdfa] mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6">Let's talk about everything!</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your visions. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[#bd0f0f] transition-colors"
              >
                <div className="w-12 h-12 bg-[#bd0f0f]/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#bd0f0f]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-300">nick.hubbard@twebor.com</p>
                </div>
              </motion.a>
            </div>

            <div>
              <h4 className="mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://github.com/nick-hubbard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-[#bd0f0f] hover:text-[#bd0f0f] transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://www.linkedin.com/in/nick-hubbard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-[#07bdfa] hover:text-[#07bdfa] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://x.com/_nickhubbard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-[#bd0f0f] hover:text-[#bd0f0f] transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={"/contact-us-image.png"}
              alt={`contact us`}
              width={1536}
              height={1024}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
