'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Switch } from "@/components/ui/switch"
import { Youtube, Instagram, TwitterIcon as TikTok, Github, Music, Headphones, Sun, Moon } from 'lucide-react'

const webDevSkills = [
  { name: 'React', level: 90 },
  { name: 'Vue.js', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'PHP', level: 80 },
  { name: 'Laravel', level: 85 },
  { name: 'MySQL', level: 88 },
  { name: 'MongoDB', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'C++', level: 65 },
]

const editingSkills = [
  { name: 'Adobe After Effects', level: 80 },
  { name: 'Adobe Photoshop', level: 85 },
  { name: 'Adobe Illustrator', level: 75 },
  { name: 'Canva', level: 90 },
  { name: 'Blender', level: 70 },
]

const hackingSkills = [
  { name: 'Kali Linux', level: 75 },
  { name: 'Ubuntu', level: 85 },
]

const enableAnimations = process.env.NEXT_PUBLIC_ENABLE_ANIMATIONS === 'true'

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground transition-colors duration-300"
    >
      <div className="container mx-auto p-4">
        <div className="flex justify-end mb-4">
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4" />
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
              aria-label="Toggle dark mode"
            />
            <Moon className="h-4 w-4" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <motion.div 
            initial={enableAnimations ? { x: -50, opacity: 0 } : {}}
            animate={enableAnimations ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="p-4">
              <div className="text-center">
                <motion.div
                  whileHover={enableAnimations ? { scale: 1.1 } : {}}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Avatar className="h-32 w-32 mx-auto mb-4">
                    <AvatarImage src="/pp4.gif" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                </motion.div>
                <h2 className="text-2xl font-bold mb-2">Renn Baelish</h2>
                <p className="text-sm text-muted-foreground">Anime in my veins, code in my soul, pixels in my blood. Hacking, creating, and leveling up the game!</p>
              </div>
              
              <nav className="mt-6">
                <ul className="space-y-2">
                  {[
                    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
                    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                    { icon: TikTok, label: 'TikTok', href: 'https://tiktok.com' },
                    { icon: Github, label: 'GitHub', href: 'https://github.com' },
                    { icon: Music, label: 'Spotify', href: 'https://spotify.com' },
                    { icon: Headphones, label: 'SoundCloud', href: 'https://soundcloud.com' },
                  ].map((item, index) => (
                    <motion.li 
                      key={item.label}
                      initial={enableAnimations ? { opacity: 0, y: 20 } : {}}
                      animate={enableAnimations ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a 
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center gap-2 p-2 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            initial={enableAnimations ? { y: 50, opacity: 0 } : {}}
            animate={enableAnimations ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-6">
              <Tabs defaultValue="anime">
                <TabsList className="mb-4">
                  <TabsTrigger value="anime">Anime Stats</TabsTrigger>
                  <TabsTrigger value="manga">Manga Stats</TabsTrigger>
                </TabsList>
                
                <AnimatePresence mode="wait">
                  <TabsContent value="anime" key="anime">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid gap-4"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <StatCard label="Days Watched" value="33.1" />
                        <StatCard label="Mean Score" value="8.23" />
                        <StatCard label="Total Entries" value="162" />
                        <StatCard label="Episodes" value="2,039" />
                      </div>
                      
                      <ScrollArea className="h-[300px] rounded-md border p-4">
                        {Array.from({length: 10}).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={enableAnimations ? { opacity: 0, y: 20 } : {}}
                            animate={enableAnimations ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-4 p-2 hover:bg-accent rounded transition-colors"
                          >
                            <img className="h-16 w-12 object-cover rounded" src="/anime1.jpg" alt="" />
                            <div>
                              <h4 className="font-medium">Bleach: Thousand-Year Blood War {i + 1}</h4>
                              <p className="text-sm text-muted-foreground">Progress: 12/24</p>
                            </div>
                          </motion.div>
                        ))}
                      </ScrollArea>
                    </motion.div>
                  </TabsContent>
                  
                  <TabsContent value="manga" key="manga">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid gap-4"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <StatCard label="Days Read" value="45.7" />
                        <StatCard label="Mean Score" value="7.89" />
                        <StatCard label="Total Entries" value="98" />
                        <StatCard label="Chapters" value="3,542" />
                      </div>
                      
                      <ScrollArea className="h-[300px] rounded-md border p-4">
                        {Array.from({length: 10}).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={enableAnimations ? { opacity: 0, y: 20 } : {}}
                            animate={enableAnimations ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-4 p-2 hover:bg-accent rounded transition-colors"
                          >
                            <img className="h-16 w-12 object-cover rounded" src="/manga2.jpg" alt="" />
                            <div>
                              <h4 className="font-medium">Bleach Soul Resonance {i + 1}</h4>
                              <p className="text-sm text-muted-foreground">Progress: 56/120</p>
                            </div>
                          </motion.div>
                        ))}
                      </ScrollArea>
                    </motion.div>
                  </TabsContent>
                </AnimatePresence>
              </Tabs>
            </Card>

            <Card className="p-6">
              <Tabs defaultValue="characters">
                <TabsList className="mb-4">
                  <TabsTrigger value="characters">Favorite Characters</TabsTrigger>
                  <TabsTrigger value="anime">Favorite Anime</TabsTrigger>
                </TabsList>

                <AnimatePresence mode="wait">
                  <TabsContent value="characters" key="characters">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-2 md:grid-cols-5 gap-4"
                    >
                      {Array.from({length: 5}).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={enableAnimations ? { opacity: 0, scale: 0.8 } : {}}
                          animate={enableAnimations ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: i * 0.1 }}
                          className="group relative aspect-square rounded-md overflow-hidden hover:scale-105 transition-transform"
                        >
                          <img
                            className="object-cover w-full h-full"
                            src="/char1.jpg"
                            alt=""
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <p className="text-white text-sm">Character {i + 1}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="anime" key="anime">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-2 md:grid-cols-5 gap-4"
                    >
                      {Array.from({length: 5}).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={enableAnimations ? { opacity: 0, scale: 0.8 } : {}}
                          animate={enableAnimations ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: i * 0.1 }}
                          className="group relative aspect-video rounded-md overflow-hidden hover:scale-105 transition-transform"
                        >
                          <img
                            className="object-cover w-full h-full"
                            src="/fav2.jpg"
                            alt=""
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <p className="text-white text-sm">Anime {i + 1}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>
                </AnimatePresence>
              </Tabs>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">My Skills</h3>
              <Tabs defaultValue="webdev">
                <TabsList className="mb-4">
                  <TabsTrigger value="webdev">Web Development</TabsTrigger>
                  <TabsTrigger value="editing">Editing</TabsTrigger>
                  <TabsTrigger value="hacking">Hacking</TabsTrigger>
                </TabsList>

                <AnimatePresence mode="wait">
                  <TabsContent value="webdev" key="webdev">
                    <SkillList skills={webDevSkills} />
                  </TabsContent>

                  <TabsContent value="editing" key="editing">
                    <SkillList skills={editingSkills} />
                  </TabsContent>

                  <TabsContent value="hacking" key="hacking">
                    <SkillList skills={hackingSkills} />
                  </TabsContent>
                </AnimatePresence>
              </Tabs>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div 
      whileHover={enableAnimations ? { scale: 1.05 } : {}}
      className="p-4 rounded-lg bg-card hover:bg-accent transition-colors"
    >
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </motion.div>
  )
}

function SkillList({ skills }: { skills: { name: string; level: number }[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={enableAnimations ? { opacity: 0, x: -20 } : {}}
          animate={enableAnimations ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.1 }}
          className="space-y-2"
        >
          <div className="flex justify-between">
            <span className="font-medium">{skill.name}</span>
            <span className="text-muted-foreground">{skill.level}%</span>
          </div>
          <motion.div 
            className="h-2 bg-muted rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 0.5, delay: (index * 0.1) + 0.2 }}
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}

