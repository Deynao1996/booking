import { useEffect, useLayoutEffect, useRef } from 'react'
import hero1 from '../assets/img/hero/hero-1.jpg'
import hero2 from '../assets/img/hero/hero-2.jpg'
import hero3 from '../assets/img/hero/hero-3.jpg'
import hero4 from '../assets/img/hero/hero-4.jpg'
import { gsap } from 'gsap'

const slidesArr = [hero4, hero2, hero3, hero1]
let current = 0
let slidesTotal = slidesArr.length

const ImageSlider = () => {
  let isAnimating = false

  const el = useRef()
  const slides = useRef([])
  const slidesInner = useRef([])

  useLayoutEffect(() => {
    slides.current[current].classList.add('slide--current')
  }, [])

  useEffect(() => {
    const timerId = setInterval(() => {
      handleNavigation(1)
    }, 5000)
    return () => {
      clearInterval(timerId)
    }
  }, [])

  function handleNavigation(direction) {
    if (isAnimating) return false
    isAnimating = true

    const previous = current
    current =
      direction === 1
        ? current < slidesTotal - 1
          ? ++current
          : 0
        : current > 0
        ? --current
        : slidesTotal - 1

    const currentSlide = slides.current[previous]
    const currentInner = slidesInner.current[previous]
    const upcomingSlide = slides.current[current]
    const upcomingInner = slidesInner.current[current]

    gsap
      .timeline({
        defaults: {
          duration: 1.5,
          ease: 'power4.inOut'
        },
        onStart: () => {
          slides.current[current].classList.add('slide--current')
        },
        onComplete: () => {
          slides.current[previous].classList.remove('slide--current')
          isAnimating = false
        }
      })
      .addLabel('start', 0)
      .to(
        currentSlide,
        {
          xPercent: -direction * 100
        },
        'start'
      )
      .to(
        currentInner,
        {
          xPercent: direction * 30
        },
        'start'
      )
      .fromTo(
        upcomingSlide,
        {
          xPercent: direction * 100
        },
        {
          xPercent: 0
        },
        'start'
      )
      .fromTo(
        upcomingInner,
        {
          xPercent: -direction * 30
        },
        {
          xPercent: 0
        },
        'start'
      )
  }

  return (
    <div className="slides" ref={el}>
      {slidesArr.map((slide, index) => (
        <div
          key={index}
          ref={(el) => (slides.current[index] = el)}
          className="slide"
        >
          <div
            className="slide__img"
            ref={(el) => (slidesInner.current[index] = el)}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        </div>
      ))}
    </div>
  )
}

export default ImageSlider
