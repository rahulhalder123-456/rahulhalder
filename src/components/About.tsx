"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AtomicModel = dynamic(() => import('@/components/AtomicModel'), {
  ssr: false,
  loading: () => <div className="w-full h-full" />
});

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    }
  };


  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-background flex items-start md:items-center overflow-y-auto no-scrollbar">
      <div className="absolute inset-0 opacity-5 lg:opacity-10 pointer-events-none">
        <AtomicModel />
      </div>
      <div className="container relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="flex justify-center order-first md:order-last"
            variants={itemVariants}
          >
            <div className="group relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px]">
              <div className="absolute inset-0 rounded-full bg-primary opacity-20 blur-2xl transition-all duration-300 group-hover:opacity-30"></div>
              <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden">
                <Image
                  src="/mine.png"
                  alt="Rahul Halder"
                  width={420}
                  height={420}
                  className="object-cover w-fit h-fit"
                  style={{ objectPosition: 'center', transform: 'scale(1.2)' }}
                  priority
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center space-y-4"
            variants={containerVariants}
          >
            <motion.div
              className="space-y-4 text-center md:text-left"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">About Me</h2>
              <p className="text-muted-foreground text-base/relaxed md:text-lg/relaxed xl:text-xl/relaxed">
                I'm a full-stack developer with a hacker mindset, passionate about building beautiful, functional, and secure web applications. My expertise spans across the stack, from crafting intuitive front-end experiences with React and Next.js to architecting robust back-end systems with Node.js. I thrive on solving complex problems, exploring system intricacies, and continuously learning new technologies to push the boundaries of what's possible.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-2 justify-center md:justify-start"
              variants={containerVariants}
            >
              <motion.div variants={skillVariants} className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">React</motion.div>
              <motion.div variants={skillVariants} className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">Next.js</motion.div>
              <motion.div variants={skillVariants} className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">Node.js</motion.div>
              <motion.div variants={skillVariants} className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">TypeScript</motion.div>
              <motion.div variants={skillVariants} className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">Cybersecurity</motion.div>
              <motion.div variants={skillVariants} className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">AI/ML</motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
