import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
// import * as motion from "framer-motion/client"


function Card({data, reference}) {
    return (
        <>

            <motion.div drag dragConstraints={reference} className='relative h-72 w-60 bg-zinc-900/90 rounded-[40px] text-white-500 text-white px-7 py-10 overflow-hidden'>
                <FaRegFileAlt />
                <p className='text-sm leading-tight font-semibold mt-5'>{data.desc}</p>
                <div className='flex mt-16 item-center justify-between'>
                    <h5>{data.filesize}</h5>
                    <span className='w-6 h-6 bg-zinc-600 rounded-full flex item-center justify-center'>
                        {data.close ? <IoIosClose size={25} /> : <LuDownload size={20} /> }
                        
                    </span>
                </div>
                {
                    data.tag.isOpen &&(
                    <div className={`footer absolute bottom-0 bg-green-500 w-full h-12 py-3 left-0`}>
                       <h3 className='text-sm font-semibold text-center justify-center  '>{data.tag.tagTitle}</h3>
                    </div>
                    )
                }

            </motion.div >

        </>
    )
}

export default Card