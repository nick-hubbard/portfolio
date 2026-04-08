import * as motion from 'motion/react-client';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'ecommerce website modern',
    github: '#',
    demo: '#',
    color: '#bd0f0f',
  },
  {
    title: 'AI Task Manager',
    description: 'Smart task management app with AI-powered prioritization, natural language processing, and productivity analytics.',
    tags: ['TypeScript', 'Next.js', 'OpenAI', 'Tailwind'],
    image: 'task management dashboard',
    github: '#',
    demo: '#',
    color: '#07bdfa',
  },
  {
    title: 'Real-Time Chat App',
    description: 'Secure messaging platform with end-to-end encryption, group chats, file sharing, and video calling capabilities.',
    tags: ['React', 'WebSocket', 'Express', 'MongoDB'],
    image: 'modern chat interface',
    github: '#',
    demo: '#',
    color: '#bd0f0f',
  },
  {
    title: 'Developer Portfolio Builder',
    description: 'No-code tool for developers to create stunning portfolios with pre-built templates and easy customization.',
    tags: ['Vue.js', 'Firebase', 'SCSS', 'Vercel'],
    image: 'portfolio website templates',
    github: '#',
    demo: '#',
    color: '#07bdfa',
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness tracker with workout plans, progress visualization, and social features for accountability.',
    tags: ['React Native', 'Redux', 'Firebase', 'Charts'],
    image: 'fitness tracking app',
    github: '#',
    demo: '#',
    color: '#bd0f0f',
  },
  {
    title: 'Code Snippet Manager',
    description: 'Organize and share code snippets with syntax highlighting, tagging system, and team collaboration features.',
    tags: ['React', 'GraphQL', 'Prisma', 'AWS'],
    image: 'code editor interface',
    github: '#',
    demo: '#',
    color: '#07bdfa',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Featured <span className="text-[#07bdfa]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#bd0f0f] to-[#07bdfa] mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building great software
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col overflow-hidden border-white/10 bg-white/5 hover:shadow-xl hover:shadow-[#bd0f0f]/20 transition-all duration-300">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(45deg, ${project.color} 25%, transparent 25%, transparent 75%, ${project.color} 75%, ${project.color}), linear-gradient(45deg, ${project.color} 25%, transparent 25%, transparent 75%, ${project.color} 75%, ${project.color})`,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 10px 10px',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="text-6xl opacity-20"
              style={{ color: project.color }}
            >
              {'</>'}
            </div>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="flex items-center justify-between text-gray-100">
            <span>{project.title}</span>
          </CardTitle>
          <CardDescription className="text-base text-gray-400">{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            style={{ borderColor: project.color, color: project.color }}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
          <Button
            size="sm"
            className="flex-1 text-white"
            style={{ backgroundColor: project.color }}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
