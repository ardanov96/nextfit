"use client";

import {FaUsers} from 'react-icons/fa';
import {IoIosPricetags} from 'react-icons/io';
import {FaDumbbell} from 'react-icons/fa6';

import {motion} from 'framer-motion';
import {fadeIn} from '@/lib/variants';

const featured = [
    {
        icon: <FaUsers />,
        title: 'award-winning trainers',
        subtitle: 
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti tempore 
            quibusdam suscipit, nulla consectetur eos dignissimos porro sapiente ipsam.`,
    },
    {
        icon: <IoIosPricetags />,
        title: 'excellent prices',
        subtitle: 
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti tempore 
            quibusdam suscipit, nulla consectetur eos dignissimos porro sapiente ipsam.`,
    },
    {
        icon: <FaDumbbell />,
        title: 'modern equipment',
        subtitle: 
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti tempore 
            quibusdam suscipit, nulla consectetur eos dignissimos porro sapiente ipsam.`,
    },
];

const About = () => {
    return (
        <section className='pt-8 pb-14 lg:pt-16 lg:pb-28' id='about'>
            <div className="container mx-auto">
               <div className='flex flex-col items-center gap-2 mb-8'>
                  <h2 className='h2 text-center'>About Us</h2>
                    <p className='max-w-[600px] mx-auto text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Minus perferendis atque voluptas? Nesciunt, quo velit?
                    </p>
               </div>
            </div>
            {/* featured items*/}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16'>
                {featured.map((feature, index) => {
                    return (
                        <div 
                            className='flex flex-col justify-center items-center gap-4 border p-10'
                            key={index}
                        >
                            <div className='text-4xl bg-primary-300 text-white w-[80px] h-[80px]
                            rounded-full flex justify-center items-center'>
                                {feature.icon}
                            </div>
                            <div className='flex flex-col justify-center items-center
                            gap-2 text-center'>
                                <h4 className='h4 text-accent'>{feature.title}</h4>
                                <p>{feature.subtitle}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            
        </section>
    );
};

export default About;
  