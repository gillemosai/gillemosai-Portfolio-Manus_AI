import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, MapPin, Linkedin, Instagram, Youtube, Facebook, ExternalLink, Brain, Palette, Code, Megaphone } from 'lucide-react'
import { motion } from 'framer-motion'
import logoImage from './assets/logocheiatransp.png'
import profileImage from './assets/gil_profile_professional.png'
import aiSectionImage from './assets/ai_section_image.png'
import amoNutelaImage from './assets/nutela-redu-optimized.png'
import logoDraJulianaImage from './assets/juliana-redu-optimized.png'
import logoUqMarketingImage from './assets/uqmarketing-redu-optimized.png'
import wallpaperWindowsAiImage from './assets/windows-redu-optimized.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const portfolioItems = [
    {
      title: "Amo Nutela",
      description: "Projeto de design e ilustração para a marca Nutela, explorando diferentes abordagens visuais.",
      category: "Design",
      image: amoNutelaImage,
      link: "https://www.behance.net/gallery/201490029/Amo-Nutela"
    },
    {
      title: "Logo Dra. Juliana",
      description: "Criação de identidade visual e logotipo para a Dra. Juliana, com foco em profissionalismo e reconhecimento.",
      category: "Branding",
      image: logoDraJulianaImage,
      link: "https://www.behance.net/gallery/199633947/Apresentacao-Logo"
    },
    {
      title: "Logo UQ Marketing",
      description: "Desenvolvimento de logotipo e identidade visual para a UQ Marketing, refletindo inovação e profissionalismo.",
      category: "Branding",
      image: logoUqMarketingImage,
      link: "https://www.behance.net/gallery/65748737/uqmarketing"
    },
    {
      title: "Windows AI Wallpaper",
      description: "Wallpaper temático sobre inteligência artificial, combinando elementos futuristas e a logo do Windows.",
      category: "Design",
      image: wallpaperWindowsAiImage,
      link: "https://www.behance.net/gallery/200039415/Wallpaper-Windows-AI"
    }
  ]

  const skills = [
    { name: "Marketing Digital", icon: Megaphone, level: 95 },
    { name: "Inteligência Artificial", icon: Brain, level: 90 },
    { name: "Design Gráfico", icon: Palette, level: 85 },
    { name: "Criação de Conteúdo", icon: Code, level: 92 }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <img src={logoImage} alt="Gil Lemos Logo" className="h-10 w-auto" />
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' ? 'Início' : 
                   section === 'about' ? 'Sobre' :
                   section === 'portfolio' ? 'Portfólio' : 'Contato'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Foto à esquerda */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.img
                src={profileImage}
                alt="Gil Lemos"
                className="w-80 h-auto object-cover animate-glow rounded-2xl shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </motion.div>
            
            {/* Conteúdo à direita */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Gil Lemos
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Criador de Conteúdo Digital | Especialista em IA
              </motion.p>
              
              <motion.p
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Profissional com formação em Marketing e Pós-graduação em Inteligência Artificial, 
                atuo há mais de cinco anos na área de comunicação digital, criando conteúdo 
                inovador e estratégias eficazes para o mundo digital.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Badge variant="secondary" className="text-lg py-2 px-4">
                  Marketing
                </Badge>
                <Badge variant="secondary" className="text-lg py-2 px-4">
                  Inteligência Artificial
                </Badge>
                <Badge variant="secondary" className="text-lg py-2 px-4">
                  Conteúdo Digital
                </Badge>
              </motion.div>
              
              <motion.div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('portfolio')}
                  className="animate-glow"
                >
                  Ver Portfólio
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Entrar em Contato
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Sobre Mim</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Profissional com formação em Marketing e Pós-graduação em Inteligência Artificial, 
              atuo há mais de cinco anos na área de comunicação digital, criando conteúdo 
              inovador e estratégias eficazes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Formação & Experiência</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg">Graduado em Marketing</h3>
                      <p className="text-muted-foreground">Base sólida em estratégias de comunicação e marketing digital</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg">Pós-graduado em Inteligência Artificial</h3>
                      <p className="text-muted-foreground">Especialização em IA aplicada ao marketing e criação de conteúdo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg">Criador de Conteúdo Digital</h3>
                      <p className="text-muted-foreground">Mais de 5 anos criando conteúdo sobre tecnologia e IA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">Habilidades</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full gradient-bg"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Portfólio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alguns dos meus trabalhos mais recentes em design, IA e criação de conteúdo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover absolute inset-0" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6">

                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Vamos Conversar?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estou sempre aberto a novos projetos e oportunidades de colaboração
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-6">Informações de Contato</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">gillemosai@email.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Localização</h3>
                        <p className="text-muted-foreground">Vitória da Conquista, BA</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-6">Redes Sociais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/gillemosai" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a 
                        href="https://www.youtube.com/@gillemosai" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <Youtube className="w-6 h-6" />
                      </a>
                      <a 
                        href="https://www.facebook.com/gillemosai" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/gillemosai/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gil Lemos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App


