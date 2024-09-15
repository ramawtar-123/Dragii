import React, { useRef, useState } from 'react';
import Card from './Card';

function Forground() {
    const ref = useRef(null)
    
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. This is the great ipsum ",
            filesize: ".37mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Download",
                tagColor: "green",
            }
        },

        {
            desc: " Lorem ipsum dolor sit amet  elit. Ullam enim laudantium nam sunt iure?" ,
            filesize: ".36mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Uploading",
                tagColor: "green",
            }
        },

        {
            desc: "Animi blanditiis labore. Eius eveniet obcaecati quisquam aliquam!" ,
            filesize: ".63mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Download",
                tagColor: "green",
            }
        },

        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. This is the great ipsum ",
            filesize: ".345mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download",
                tagColor: "green",
            }
        },

        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. This is the great ipsum ",
            filesize: ".3mb",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "Running",
                tagColor: "green",
            }
        },

        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. This is the great ipsum ",
            filesize: ".8mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Loading",
                tagColor: "green",
            }
        },

        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. This is the great ipsum ",
            filesize: ".6mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download",
                tagColor: "green",
            }
        }
    ];

    

    

  return (
    <>
    
    <div ref={ref} className='fixed z-[3] top-0 left-0 h-screen w-full flex p-5 gap-5 flex-wrap flex-shrink-0'>
        {data.map((item, index)=>(
               <Card data ={item} reference = {ref}/>
        ))}
    </div>
       
    
    </>
    
  )
}

export default Forground

