import * as motion from 'motion/react-client';
import { User, Code, Coffee } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">
              About <span className="text-[#bd0f0f]">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#bd0f0f] to-[#07bdfa] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#bd0f0f]/10 mb-4">
                <User className="w-8 h-8 text-[#bd0f0f]" />
              </div>
              <h3 className="mb-2">Creative Thinker</h3>
              <p className="text-gray-400">
                Approaching challenges from unique angles to find innovative solutions
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#07bdfa]/10 mb-4">
                <Code className="w-8 h-8 text-[#07bdfa]" />
              </div>
              <h3 className="mb-2">Clean Code</h3>
              <p className="text-gray-400">
                Writing maintainable, efficient code that stands the test of time
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#bd0f0f]/10 mb-4">
                <Coffee className="w-8 h-8 text-[#bd0f0f]" />
              </div>
              <h3 className="mb-2">Continuous Learner</h3>
              <p className="text-gray-400">
                Always exploring new technologies and best practices
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="prose max-w-none text-center"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With several years of experience in software development, I specialize in building
              scalable web applications and crafting delightful user experiences. My journey in tech
              has taken me from frontend development to full-stack engineering, with a particular
              passion for React, TypeScript, and modern web technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, writing
              technical articles, or exploring the latest advancements in AI and machine learning.
              I believe in the power of technology to solve real-world problems and make a positive
              impact on people's lives.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
