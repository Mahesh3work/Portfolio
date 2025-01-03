
import project1 from "../assets/project1.png"
import project3 from "../assets/project3.png"
import project2 from "../assets/project2.png"

import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
// import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Project #1",
      description:"Full Stack Chat App Project with realtime messaging fuctionality with socket.io",
      links: {
        site: "https://mern-chat-dvbs.onrender.com/",
        github: "https://github.com/Mahesh3work/Mern_chat",
      },
    },
    {
      img: project2,
      title: "Project #2",
      description: " E-commerce shopping cart using React, Redux, and Redux Toolkit.",
      links: {
        github: "https://github.com/Mahesh3work/shopping-Cart",
        site: "https://ecommers-rtk.netlify.app/",
      },
    },
    {
      img: project3,
      title: "Project #3",
      description: "Developed a responsive GIPHY Clone using React JS 18 and Tailwind CSS, featuring GIF search, sharing, embedding, and related content recommendations with a user-friendly interface.",
      links: {
        site: "https://gif-sticker-text.onrender.com",
        github: "https://github.com/Mahesh3work/Gif-Sticker-Text.git",
      },
    },
   
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            // <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4 bg-red-500/20'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            // </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio