import { workExperience } from '@/data'
import { Button } from './ui/MovingBorders'
import React from 'react'

const Experience = () => {
    return (
        <div className='py-20' id="Experience">
            <h1 className="heading">
                My {' '}
                <span className='text-purple'>work experience
                </span>
            </h1>
            <div className='w-full mt-12 grid lg:grid-cols-1 grid-cols-1 gap-10 '>
                {workExperience.map((card) => (
                   <Button
                    key={card.id}
                    duration={Math.floor(Math.random()*10000) +10000}
                    borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                   >
                        <div className='flex flex-row items-center p-3 py-6 md:p-5 lg:p-10 '>
                            <img 
                            src={card.thumbnail} 
                            alt={card.thumbnail}
                            className='lg:w-32 mg:w-20 w-16'
                             />
                             <div className='lg:ms-5 ms-4'>
                                <h1 className='text-start text-xl ms:text-2xl font-bold'>
                                    {card.title}
                                </h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>
                                    {card.desc}
                                </p>
                             </div>
                        </div>
                   </Button>
                ))}
            </div>
        </div>
    )
}

export default Experience