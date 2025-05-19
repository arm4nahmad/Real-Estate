import React from 'react'
import CountUp from 'react-countup'
import { assets } from '../assets/assets'
import { useInView } from 'react-intersection-observer'

const About = () => {

    const { ref, inView } = useInView({
        triggerOnce: true, // only trigger once when comes into view
        threshold: 0.3,     // 30% of element should be visible
      })

  return (

    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties,Dedicated to Your Vision </p>
        <div ref={ref} className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                   <div>
                   <p className='text-4xl font-medium text-gray-800'>{inView && <CountUp end={10} duration={2} />}+</p>
                   <p>Years of Excellence</p>
                   </div>

                   <div>
                   <p className='text-4xl font-medium text-gray-800'> {inView && <CountUp end={12} duration={2} />}+</p>
                   <p>Projects Completed</p>
                   </div>

                   <div>
                   <p className='text-4xl font-medium text-gray-800'> {inView && <CountUp end={20} duration={2} />}+</p>
                   <p>Mn. Sq. Ft.Delivered</p>
                   </div>

                   <div>
                   <p className='text-4xl font-medium text-gray-800'> {inView && <CountUp end={25} duration={2} />}+</p>
                   <p>Ongoing Projects</p>
                   </div>

                   

                </div>
                <p className='my-10 max-w-lg'>
  Where elegance meets excellence. We craft extraordinary living experiences through bespoke properties designed for those who expect nothing less than perfection. With a legacy built on trust, craftsmanship, and vision, we curate exclusive residences and commercial spaces that redefine sophistication. Welcome to a world where your aspirations find a home.
</p>
<button className='bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white px-8 py-2 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300'>
  Learn More
</button>



            </div>

        </div>
        </div>
  )
}

export default About