import React from 'react'
import Button from '../components/Button'
import HandleImg from '../components/HandleImg'
import Project from '../components/Project'
import SocialBtn from '../components/SocialBtn'

const Home = () => {
    const hStyle = { color: 'white', 
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black' };
  return (
    <div className='dark:text-white px-5 py-4 md:px-20 md:py-6'>
        <div className='md:grid grid-cols-2 gap-2 relative my-10'>
        <div className='text-[#121212] dark:text-gray-300'>
            <p className='font-light text-2xl'>Hi there 👋🏾</p>
            <h1 className='text-6xl md:text-[90px] leading-none font-bold mt-8 mb-12'>I’m Adedamola <br /> Bamigboye</h1>
            <a href="mailto:adedamolabamigboye@yahoo.com" ><Button text="Reach out to me" py="4" /></a>

        </div>
        <div>
            <p className='text-lg md:text-2xl font-light dark:text-gray-300 text-[#282828] md:absolute top-[170px] mt-10 md:mt-0'>I’m an Experience Designer with 1+ years of experience interested in designing simple and usable digital experiences.</p>
        </div>
        </div>
        <div className='mt-10 md:mt-32'>
        <img className='w-full md:hidden' src='/images/Rectangle 1.png' />
            <HandleImg />
        </div>
        <div className='my-10'>
            <h1 className='border-b border-b-[#c4c4c4] font-bold py-10 text-4xl md:text-6xl'>Projects</h1>
            <Project link="https://luxurytravels.com/" title="Luxury Travels" desc="A travel website" />
            <Project link="https://13villages.com/" title="13Villages" desc="A coffee e-commerce website" />
            <Project link="https://afroutes.com/" title="Afroutes" desc="A tour and Safari website" />
            <Project link="#" title="Buni Consulting" desc="A consultancy website" />
            <Project link="#" title="Abdullah Mwinyi" desc="A politician's website" />
        </div>
        <div className='py-5 border-y-[#c4c4c4] my-7 md:my-10'>
            <h1 className={`text-6xl text-center text-white dark:text-black dark:text-shadow-dark text-shadow-light`}>Available for freelance work</h1>
        </div>
        <div className='text-center'>
            <a href="mailto:adedamolabamigboye@yahoo.com" ><Button text="Reach out to Me" py="4" /></a>
        </div>
        <div className='py-10 mt-10'>
            <h1 className='font-bold text-lg mb-9'>Connect with me:</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-5'>
                <a target="_blank" href="https://dribbble.com/Big-Saab" className='mb-4 md:mb-0'><SocialBtn text="Dribble" /></a>
                <a target="_blank" href="https://www.behance.net/bamigboyedcd3e"><SocialBtn text="Behance" /></a>
                <a target="_blank" href="https://twitter.com/Mrbamigboye" className='mb-4 md:mb-0'><SocialBtn text="Twitter" /></a>
                <a target="_blank" href="https://instagram.com/Mrbamigboye"><SocialBtn text="Instagram" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/bamigboye-adedamola-isaac-8866a4136"><SocialBtn text="Linkedin" /></a>
            </div>
            <h1 className='font-bold text-lg my-9'>Got a project?</h1>
            <a href='mailto:adedamolabamigboye@yahoo.com'><h1 className='text-[#FFC300] font-bold underline text-3xl md:text-5xl'>Lets talk <img className='w-5 md:w-7 inline ml-5' src='/images/Vectory.png' /></h1></a>
        </div>
        <div>
            <h1 className='text-lg text-center'>Designed by <a className='text-[#FFC300] underline' href='#'>Adedamola</a> built by <a className='text-[#FFC300] underline' href='https://twitter.com/divine_edeh1' target="_blank">Divine Edeh</a></h1>
        </div>
    </div>
  )
}

export default Home