import { motion, useScroll, useTransform } from "framer-motion"
import {
  Shield,
  Calendar,
  CreditCard,
  Github,
  Globe,
  Database,
  Server,
  Lock,
  Cpu,
  Flame,
  RefreshCcw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectDetails() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <div className="min-h-screen bg-[#1D232A] text-gray-100 overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <motion.div style={{ scale }} className="relative h-[80vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/placeholder.svg?height=800&width=1200"
            alt="Fitverse Preview"
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text"
          >
            Fitverse
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 mb-8"
          >
            Transform Your Fitness Journey
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://fitverse-bd.web.app/" target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://github.com/web-mahadihasan/Fitverse-client" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                Source Code
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Project Screenshots */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Fitverse Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/placeholder.svg?height=300&width=400" alt="Feature 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/placeholder.svg?height=300&width=400" alt="Feature 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/placeholder.svg?height=300&width=400" alt="Feature 3" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/placeholder.svg?height=300&width=400" alt="Feature 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <div className="py-20 bg-[#030304]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Technology Stack
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm"
              >
                {tech.icon}
                <h3 className="mt-4 font-semibold">{tech.name}</h3>
                <p className="text-sm text-gray-400 text-center mt-2">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features Tabs */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Tabs defaultValue="features" className="mb-16">
          <TabsList className="grid w-full max-w-[400px] mx-auto grid-cols-3 bg-[#030304]">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="roles">Roles</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>

          <TabsContent value="features">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm"
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                  <p className="text-gray-400 mt-2">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Add other TabsContent components for roles and details */}
        </Tabs>
      </div>
    </div>
  )
}

const techStack = [
  {
    name: "React",
    description: "Frontend Development",
    icon: <Flame className="w-8 h-8 text-blue-400" />,
  },
  {
    name: "MongoDB",
    description: "Database",
    icon: <Database className="w-8 h-8 text-green-400" />,
  },
  {
    name: "Express.js",
    description: "Backend Framework",
    icon: <Server className="w-8 h-8 text-purple-400" />,
  },
  {
    name: "Node.js",
    description: "Runtime",
    icon: <Cpu className="w-8 h-8 text-yellow-400" />,
  },
  {
    name: "Firebase",
    description: "Authentication",
    icon: <Lock className="w-8 h-8 text-orange-400" />,
  },
  {
    name: "TanStack Query",
    description: "Data Fetching",
    icon: <RefreshCcw className="w-8 h-8 text-red-400" />,
  },
  {
    name: "Stripe",
    description: "Payments",
    icon: <CreditCard className="w-8 h-8 text-pink-400" />,
  },
  {
    name: "JWT",
    description: "Authorization",
    icon: <Shield className="w-8 h-8 text-indigo-400" />,
  },
]

const features = [
  {
    icon: <Calendar className="w-6 h-6 text-blue-400" />,
    title: "Smart Booking",
    description: "Seamless class and trainer booking system",
  },
  // ... add more features
]

