import Hero from '@/components/sections/projectJourney/Hero'
import FrameworkIntro from '@/components/sections/projectJourney/FrameworkIntro'
import StageSection from '@/components/sections/projectJourney/StageSection'
import { journeyStages } from '@/data/journey'

const ProjectJourney = () => {
  return (
    <>
      <Hero />
      <FrameworkIntro />
      {journeyStages.map((stage, index) => (
        <StageSection
          key={stage.id}
          stage={stage}
          isLast={index === journeyStages.length - 1}
        />
      ))}
    </>
  )
}

export default ProjectJourney
