import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Award, BookOpen, Globe, Check, Shield, Users2, GraduationCap } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"

interface AboutSectionProps {
  dict: {
    about: {
      title: string
      description: string
      content: {
        paragraph1: string
        paragraph2: string
        paragraph3: string
      }
      cta: string
      axes: {
        title: string
        democratic: {
          title: string
          description: string
        }
        participation: {
          title: string
          description: string
        }
        rights: {
          title: string
          description: string
        }
        capacity: {
          title: string
          description: string
        }
      }
      quote: string
      stats: {
        participants: {
          value: string
          label: string
        }
        members: {
          value: string
          label: string
        }
        learners: {
          value: string
          label: string
        }
        communities: {
          value: string
          label: string
        }
      }
    }
  }
}

export default function AboutSection({ dict }: AboutSectionProps) {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      value: dict.about.stats.participants.value,
      label: dict.about.stats.participants.label,
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      value: dict.about.stats.members.value,
      label: dict.about.stats.members.label,
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      value: dict.about.stats.learners.value,
      label: dict.about.stats.learners.label,
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      value: dict.about.stats.communities.value,
      label: dict.about.stats.communities.label,
    },
  ]

  const strategicAxes = [
    {
      icon: <Check className="h-8 w-8 text-primary" />,
      title: dict.about.axes.democratic.title,
      description: dict.about.axes.democratic.description,
    },
    {
      icon: <Users2 className="h-8 w-8 text-primary" />,
      title: dict.about.axes.participation.title,
      description: dict.about.axes.participation.description,
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: dict.about.axes.rights.title,
      description: dict.about.axes.rights.description,
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: dict.about.axes.capacity.title,
      description: dict.about.axes.capacity.description,
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 bg-pattern-dots">
      <div className="container">
        <AnimatedElement animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{dict.about.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">{dict.about.description}</p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedElement animation="fade-in" className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg card-hover">
              <Image
                src="/images/africtivistes-members.jpeg"
                alt="Membres d'AfricTivistes"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-xl bg-primary/20"></div>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={200} className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{dict.about.content.paragraph1}</p>

              <p>{dict.about.content.paragraph2}</p>

              <p>{dict.about.content.paragraph3}</p>
            </div>

            <Button className="btn-hover-effect mt-4">{dict.about.cta}</Button>
          </AnimatedElement>
        </div>

        <AnimatedElement animation="fade-up" delay={300} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">{dict.about.axes.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicAxes.map((axis, index) => (
              <AnimatedElement
                key={index}
                animation="fade-up"
                delay={100 * index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md card-hover glass"
              >
                <div className="flex justify-center mb-4 bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto">
                  {axis.icon}
                </div>
                <h4 className="text-xl font-bold text-center mb-3">{axis.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-center">{axis.description}</p>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={400} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gray-700 dark:text-gray-300 italic">{dict.about.quote}</p>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedElement
              key={index}
              animation="fade-up"
              delay={100 * index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center card-hover glass"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h4 className="text-3xl font-bold text-primary mb-2">{stat.value}</h4>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
