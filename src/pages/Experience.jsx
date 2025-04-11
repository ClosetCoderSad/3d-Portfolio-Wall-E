import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import hz from '../assets/hz.jpg'
import yards from '../assets/99yards.jpg'
import bs from '../assets/buildspace.jpg'
import vh from '../assets/vh.png'
import nc from '../assets/nc.jpg'
import ais from '../assets/ais_utd_logo.jpg'

export default function Experience() {
    const listExperience = [
        {id:1, image:ais, title:'Machine Learning Engineer', name:'AIS UTD', description:'February 2025 - Present'},
        {id:2, image:hz, title:'Full-Stack Developer', name:'Himmels Zenith', description:'December 2024 - February 2025'},
        {id:3, image:bs, title:'Python Developer', name:'Buildspace', description:'June 2024 - July 2024 '},
        {id:4, image:vh, title:'Teaching Assistant', name:'Vertical Horizon', description:'September 2023 - July 2024'},
        {id:5, image:nc, title:'Executive Secretary', name:'MLIS Nutrition Club', description:'August 2023 - March 2024'},
    ];
    const settings = {
        dots: false, // Set to false to disable dots for time being
        infinite: true,
        slidesToShow:3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 780,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    };
  return (
    <section className='relative overflow-hidden flex flex-col text-white body-font bg-black w-[100vw] h-[100vh] pt-[100px]'>
         <h2 className='text-3xl md:text-5xl font-bold text-white my-12 text-center font-oxanium'>Tracks of Progress</h2>
        <div className='container px-8 pt-8 mx-auto' data-aos='fade-up' data-aos-delay='400'> 
            <Slider {...settings}>
                {
                    listExperience.map((experience)=>{
                        return(
                        <div key={experience.id} className='p-4'>
                            <div className='h-full border-2 border-orange-300 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden hover:border-orange-400 hover:translate-y-[-8px] hover:cursor-pointer ease-in-out duration-300'>
                                <img src={experience.image} alt={experience.title} className='w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center' />
                                <div className='p-6'>
                                    <h2 className='text-lg title-font font-medium text-gray-400 mb-1'>{experience.title}</h2>
                                    <p className='leading-relaxed mb-1 font-semibold text-sm text-white'>{experience.name}</p>
                                    <p className='leading-relaxed mb-3 text-sm text-gray-300'>{experience.description}</p>
                                </div>
                            </div>
                        </div>
                        )
                       
                    })
                }
            </Slider>
        </div>
    </section>
  )
}
