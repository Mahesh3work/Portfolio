// import React from 'react'
import { motion } from 'framer-motion'
// import Reveal from './Reveal'

const experiences = [
    {
        company: 'Tech Mahindra',
        period: 'Mar-2022 to Sep-2024',
        description: "Performed server patching and maintenance to ensure optimal system security and functionality.Monitored system performance and resolved technical issues to minimize downtime.Managed Linux-based systems, implementing best practices for security and efficiency.Collaborated with cross-functional teams to plan and execute system updates and improvements.",
      },
    
     
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                // <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                // {/* </Reveal> */}
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience