import React from 'react'
import Glogo from '../assets/logo-shscholl.png'
import { Link } from 'react-router'
export const Home = () => {
    return (
        <div className='w-full m-auto p-4'>
            <div className='flex items-center justify-center min-h-screen p-6'>
                <div className='relative flex justify-center items-center flex-col max-w-[40rem] m-auto p-[2rem] border-2 rounded-[2rem] bg-white shadow-2xl'>
                    <div className='absolute -top-[5rem]'>
                        <a className='block max-w-[10rem] max-h-[10rem]' target="_blank">
                            <img src={Glogo} className="w-full object-center" alt="React logo" />
                        </a>
                    </div>
                    <h1 className='text-center font-semibold text-[3rem] leading-[3rem] text-gray-900 pt-[4rem] block'>
                        Empowering Grade 11 ICT Students in Cabiao Senior High School with Digital Module Access
                    </h1>
                    <div className="mt-10">
                        <Link to={'/modules'}>
                            <button>
                                GRADE 11
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
