import Image from 'next/image';
import * as motion from 'motion/react-client';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const workItems = [
  {
    title: 'Senior Software Engineer',
    company: 'Stack Sports',
    description: 'Leading development of multiple projects focused on Endurance sports for registration, volunteer management, providing results, racing calendars and more.',
    tags: ['PHP', 'Node.js', 'ExpressJS' , 'MYSQL'],
    image: '/gmr.png',
    website: 'https://getmeregistered.com',
    color: '#bd0f0f',
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Employment and <span className="text-[#07bdfa]">Previous Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#bd0f0f] to-[#07bdfa] mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A snapshot of the teams and products I&apos;ve helped build in production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workItems.map((work, index) => (
            <WorkCard key={work.title} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work, index }: { work: typeof workItems[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col overflow-hidden border-white/10 bg-white/5 hover:shadow-xl hover:shadow-[#bd0f0f]/20 transition-all duration-300">
        <div className="relative p-5 h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
          <Image
            src={work.image}
            alt={`${work.company} product screenshot`}
            width={100}
            height={100}
            className="w-full"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-24"
            style={{ background: `linear-gradient(to top, rgba(10, 10, 10, 0.95), transparent)` }}
          />
          <div className="absolute left-6 bottom-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">{work.company}</p>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="flex items-center justify-between text-gray-100 font-bold text-2xl">
            <span>{work.title}</span>
          </CardTitle>
          <CardDescription className="text-base text-gray-400">{work.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          <Button
            asChild
            size="sm"
            className="w-full text-white"
            style={{ backgroundColor: work.color }}
          >
            <a href={work.website} target="_blank" rel="noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Site
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
