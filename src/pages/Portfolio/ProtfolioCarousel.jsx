import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './CarouselDotButton'
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrowButton'
import './carousel.css'
import { useLoaderData } from 'react-router'
import ProjectCard from './ProjectCard'

const ProtfolioCarousel = () => {
  // const { slides, options } = props
  const options = {}
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const {allProject} = useLoaderData()
  console.log(allProject)  

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container mt-6">
          {allProject?.map((project, idx) => (
            
            <div className="embla__slide" key={project._id}>
              <div className="embla__slide__number min-h-[500px]"><ProjectCard key={project._id} projectData={project} idx={idx}/></div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls ">
       
        <div className="embla__dots ">
          {scrollSnaps?.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

      </div>
    </section>
  )
}

export default ProtfolioCarousel;