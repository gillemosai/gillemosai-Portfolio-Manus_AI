import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, MapPin, Linkedin, Instagram, Youtube, Facebook, ExternalLink, Brain, Palette, Code, Megaphone } from 'lucide-react'
import { motion } from 'framer-motion'
import logoImage from './assets/logocheiatransp.png'
import profileImage from './assets/gil_profile_tech_clean.png'
import aiSectionImage from './assets/ai_section_image.png'
import amoNutelaImage from './assets/nutela-redu-optimized.png'
import logoDraJulianaImage from './assets/juliana-redu-optimized.png'
import logoUQMarketingImage from './assets/uqmarketing-redu-optimized.png'
import wallpaperWindowsAIImage from './assets/windows-redu-optimized.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'contact']
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
      image: amoNutelaImage
    },
    {
      title: "Logo Dra. Juliana",
      description: "Criação de identidade visual e logotipo para a Dra. Juliana, com foco em profissionalismo e reconhecimento.",
      image: logoDraJulianaImage
    },
    {
      title: "Logo UQ Marketing",
      description: "Desenvolvimento de logotipo e identidade visual para a UQ Marketing, refletindo inovação e profissionalismo.",
      image: logoUQMarketingImage
    },
    {
      title: "Windows AI Wallpaper",
      description: "Wallpaper temático sobre inteligência artificial, combinando elementos futuristas e a logo do Windows.",
      image: wallpaperWindowsAIImage
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <img src={logoImage} alt="Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-white">Gil Lemos</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex space-x-8"
            >
              {[
                { id: 'home', label: 'Início' },
                { id: 'portfolio', label: 'Portfólio' },
                { id: 'contact', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-white/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Foto à esquerda - ocupa 2 colunas */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 flex justify-center"
            >
              <motion.img
                src={profileImage}
                alt="Gil Lemos - Especialista em IA e Marketing Digital"
                className="w-full max-w-sm h-auto object-cover animate-glow rounded-2xl shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </motion.div>
            
            {/* Conteúdo à direita - ocupa 3 colunas */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-3 text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
              >
                Gil Lemos
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl md:text-3xl text-white/90 mb-8 font-light"
              >
                Criador de Conteúdo Digital | Especialista em IA
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-white/70 mb-8 leading-relaxed max-w-2xl"
              >
                Profissional com formação em Marketing e Pós-graduação em Inteligência Artificial, 
                atuo há mais de cinco anos na área de comunicação digital, criando conteúdo inovador 
                e estratégias eficazes para o mundo digital.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
              >
                <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                  Marketing
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  Inteligência Artificial
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  Conteúdo Digital
                </Badge>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  onClick={() => scrollToSection('portfolio')}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                >
                  Ver Portfólio
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
                >
                  Entrar em Contato
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Portfólio</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
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
          
          {/* Botão Behance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="https://www.behance.net/gillemosai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="flex-shrink-0"
                >
                  <path d="M6.5 4.5h3c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5h-3v-13zm0 2v9h3c2.49 0 4.5-2.01 4.5-4.5S11.99 6.5 9.5 6.5h-3zm11.5 2c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"/>
                </svg>
                Para ver mais clique aqui
              </Button>
            </a>
          </motion.div>
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
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Estou sempre aberto a novos projetos e oportunidades de colaboração
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/5 border-white/10">
                <CardHeader className="text-center">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl text-white">Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/70 text-lg">gillemos@gmail.com</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/5 border-white/10">
                <CardHeader className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl text-white">Localização</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/70 text-lg">Vitória da Conquista, BA</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mt-12"
          >
            <a
              href="https://www.instagram.com/gillemosai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@gillemosai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/gillemosai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/gillemosai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App
