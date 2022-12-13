// *
import React, { useState, useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { sliderData } from './Slider-data';
import "./Slider.scss"
const Slider = () => {
    const [currentSlider, setCurrentSlider] = useState(0)
    const slideLength = sliderData.length
    console.log(slideLength);
    // autoScroll
    const autoScroll = true
    let sliderInterval;
    const intervalTime = 5000;

    const prevSlide = () => {
        setCurrentSlider(
            currentSlider === 0 ? slideLength - 1 : currentSlider - 1
        )
    }
    const nextSlide = () => {
        setCurrentSlider(
            currentSlider === slideLength - 1 ?
                0 : currentSlider + 1)
    }
    useEffect(() => {
        if (autoScroll) {
            const auto = () => {
                sliderInterval = setInterval(nextSlide, intervalTime)
            }
            auto();
        }
        // 不懂，但如果不用的話會一直跳針
        return () => clearInterval(sliderInterval)

    }, 
    // 不懂為麼這裡後面要多那麼多東西
    [currentSlider, sliderInterval, autoScroll])

    return (
        <div className='slider'>
            <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
            <AiOutlineArrowRight className='arrow next' onClick={nextSlide} />
            {sliderData.map((slide, index) => {
                const { image, heading, desc } = slide
                return (
                    <div className={index === currentSlider ? "current slide" : 'slide'}
                    >
                        {index === currentSlider &&
                            (
                                <>
                                    <img src={image} alt='HomeImage' />
                                    <div className='content'>
                                        <h2>{heading}</h2>
                                        <p>{desc}</p>
                                        <hr />
                                        <a href className='--btn --btn-primary'>
                                            Shop Now
                                        </a>
                                    </div>
                                </>
                            )
                        }
                    </div>
                )
            })
            }
        </div>
    )
}

export default Slider