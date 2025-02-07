import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import * as Icons from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import axios from "axios"
import { useParams } from "react-router"
import CustomLoading from "../Loading/CustomLoading"

export default function ProjectDetails() {
    const {id} = useParams()
  const [projectData, setProjectData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
    console.log(projectData)
  useEffect(() => {
    async function fetchProjectData() {
      setIsLoading(true)
      try {
        const {data} = await axios.get(`https://mahadi-portfolio-server.vercel.app/project-details/${id}`)
        setProjectData(data.project)
        console.log(data.project)
      } catch (error) {
        console.error("Failed to fetch project data:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProjectData()
  }, [id])
  

  if (isLoading) {
    return <div className="min-h-screen bg-[#1D232A] text-gray-100 flex items-center justify-center">
        <CustomLoading/>
    </div>
  }

  if (!projectData) {
    return (
      <div className="min-h-screen bg-[#1D232A] text-gray-100 flex items-center justify-center">Project not found</div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1D232A] text-gray-100">
      {/* Floating Navigation */}
      {/* <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#030304]/80 backdrop-blur-md rounded-full px-6 py-3"
      >
        <div className="flex gap-8">
          <a href="#overview" className="text-sm hover:text-blue-400">
            Overview
          </a>
          <a href="#tech" className="text-sm hover:text-blue-400">
            Tech Stack
          </a>
          <a href="#features" className="text-sm hover:text-blue-400">
            Features
          </a>
          <a href="#gallery" className="text-sm hover:text-blue-400">
            Gallery
          </a>
        </div>
      </motion.div> */}

      {/* Hero Section with 3D Card Effect */}
      <section id="overview" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 mix-blend-overlay" />
          <img
            src={projectData.backgroundImage || "/placeholder.svg"}
            alt={`${projectData.name} Background`}
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                {projectData?.name}
              </h1>
              <p className="text-xl text-gray-400 mb-8">{projectData?.description}</p>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a href={projectData?.links?.liveDemo} target="_blank" rel="noopener noreferrer">
                    <Icons.Globe className="w-5 h-5" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a href={projectData?.links?.sourceCode} target="_blank" rel="noopener noreferrer">
                    <Icons.Github className="w-5 h-5" />
                    Source Code
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="perspective-1000"
            >
              <div className="relative transform-3d rotate-y-12 rotate-x-12">
                <img
                  src={projectData?.heroImage || "/placeholder.svg"}
                  alt={`${projectData?.name} Dashboard`}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Carousel */}
      <section id="tech" className="py-32 bg-[#030304]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Crafted with the Latest Technology
          </motion.h2>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projectData?.techStack?.map((tech, index) => {
                const IconComponent = Icons[tech.icon]
                return (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm h-full"
                    >
                      <div className="flex flex-col items-center text-center">
                        <IconComponent className="w-10 h-10 text-blue-500" />
                        <h3 className="mt-4 text-xl font-semibold">{tech?.name}</h3>
                        <p className="mt-2 text-gray-400">{tech?.description}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Features Grid with Hover Effects */}
      <section id="features" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Features for {projectData?.name}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {projectData?.features?.map((feature, index) => {
              const IconComponent = Icons[feature.icon]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                  className="p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex flex-col h-full">
                    <IconComponent className="w-10 h-10 text-blue-500" />
                    <h3 className="mt-4 text-xl font-semibold">{feature?.title}</h3>
                    <p className="mt-2 text-gray-400 flex-grow">{feature?.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Dashboard Types */}
      {projectData?.dashboards && projectData?.dashboards?.length > 0 && (
        <section className="py-32 bg-[#030304]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center mb-16"
            >
              Tailored Dashboards for Every User
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectData?.dashboards?.map((dashboard, index) => {
                const IconComponent = Icons[dashboard.icon]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl"
                  >
                    <div className="text-center">
                      <IconComponent className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                      <h3 className="text-2xl font-semibold mb-4">{dashboard.title}</h3>
                      <p className="text-gray-400 mb-6">{dashboard.description}</p>
                      <ul className="text-left">
                        {dashboard.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center mb-2">
                            <Icons.Flame className="w-5 h-5 text-blue-500 mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Project Gallery */}
      <section id="gallery" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Project Gallery
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData?.gallery?.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden group"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

