import * as motion from 'motion/react-client';

const skills = [
  {
    category: 'Frontend',
    color: '#bd0f0f',
    items: [
      { name: 'TypeScript', level: 90 },
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'NestJS', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 85 },
    ],
  },
  {
    category: 'Backend',
    color: '#07bdfa',
    items: [
      { name: 'PHP', level: 95 },
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'Ruby on Rails', level: 70 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MYSQL', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    category: 'Tools & Others',
    color: '#bd0f0f',
    items: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 85 },
      { name: 'Jest', level: 80 },
      { name: 'Playwright', level: 70 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            My <span className="text-[#bd0f0f]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#bd0f0f] to-[#07bdfa] mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="bg-white/5 rounded-lg p-6 border border-white/10"
            >
              <h3
                className="text-xl mb-6 pb-3 border-b-2"
                style={{ borderColor: skillGroup.color, color: skillGroup.color }}
              >
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skillGroup.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
