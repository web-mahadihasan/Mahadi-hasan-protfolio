import { motion } from "framer-motion"
import { Users, Shield, Calendar, MessageSquare, CreditCard, BarChart, Award, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function ProjectDetails() {
  return (
    <div className="min-h-screen bg-[#1D232A] text-gray-100 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              Fitverse
            </h1>
            <p className="text-xl text-gray-400 mb-8">A Comprehensive Fitness Tracking Platform</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm">
              React
            </Badge>
            <Badge variant="secondary" className="text-sm">
              MongoDB
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Express.js
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Node.js
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Firebase
            </Badge>
          </div>

          <div className="flex justify-center gap-4">
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
          </div>
        </div>

        {/* Features Section */}
        <Tabs defaultValue="features" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 max-w-[400px] mx-auto">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="roles">User Roles</TabsTrigger>
            <TabsTrigger value="tech">Tech Stack</TabsTrigger>
          </TabsList>

          <TabsContent value="features">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        {feature.icon}
                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                      </div>
                      <p className="text-gray-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="roles">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            >
              {roles.map((role, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        {role.icon}
                        <h3 className="font-semibold text-lg">{role.title}</h3>
                      </div>
                      <ul className="text-gray-400 space-y-2">
                        {role.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-400 text-lg">•</span>
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="tech">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
            >
              {technologies.map((tech, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardContent className="pt-6 text-center">
                      <h3 className="font-semibold mb-2">{tech.name}</h3>
                      <p className="text-sm text-gray-400">{tech.purpose}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

const features = [
  {
    icon: <Calendar className="w-6 h-6 text-blue-400" />,
    title: "Smart Booking",
    description: "Book fitness classes and trainers with integrated Stripe payments for secure transactions.",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-green-400" />,
    title: "Community Forum",
    description: "Engage with the fitness community through posts, comments, and voting system.",
  },
  {
    icon: <BarChart className="w-6 h-6 text-purple-400" />,
    title: "Progress Tracking",
    description: "Monitor your fitness journey with detailed progress tracking and analytics.",
  },
  {
    icon: <Shield className="w-6 h-6 text-red-400" />,
    title: "Secure Access",
    description: "JWT authentication ensures secure access to personalized features and data.",
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    title: "Achievement System",
    description: "Earn badges and track achievements as you progress in your fitness journey.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-pink-400" />,
    title: "Payment Integration",
    description: "Seamless payment processing with Stripe for class and trainer bookings.",
  },
]

const roles = [
  {
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    title: "Admin Dashboard",
    capabilities: [
      "Manage trainers and applications",
      "Monitor transactions",
      "Control forum content",
      "Newsletter management",
      "Class administration",
    ],
  },
  {
    icon: <Award className="w-6 h-6 text-green-400" />,
    title: "Trainer Dashboard",
    capabilities: [
      "Manage time slots",
      "Track bookings",
      "Create forum posts",
      "Update profile",
      "View student progress",
    ],
  },
  {
    icon: <Users className="w-6 h-6 text-purple-400" />,
    title: "User Dashboard",
    capabilities: [
      "Book classes & trainers",
      "Track fitness progress",
      "Participate in forums",
      "View transaction history",
      "Apply for trainer role",
    ],
  },
]

const technologies = [
  {
    name: "React",
    purpose: "Frontend Development",
  },
  {
    name: "MongoDB",
    purpose: "Database Management",
  },
  {
    name: "Express.js",
    purpose: "Backend Framework",
  },
  {
    name: "Node.js",
    purpose: "Runtime Environment",
  },
  {
    name: "Firebase",
    purpose: "Authentication",
  },
  {
    name: "Stripe",
    purpose: "Payment Processing",
  },
  {
    name: "JWT",
    purpose: "Authorization",
  },
  {
    name: "TanStack Query",
    purpose: "Data Fetching",
  },
]

