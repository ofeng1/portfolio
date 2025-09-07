"use client";

import {motion} from 'framer-motion';
import py_img from "../../public/images/python.png";
import r_img from "../../public/images/R_logo.png";
import js_img from "../../public/images/logo-javascript-logo.png";
import sql_img from "../../public/images/sql_img.png"
import react_img from "../../public/images/react_img.png"
import ts_img from "../../public/images/ts_img.png";
import c_plus_plus_img from "../../public/images/C++.png";
import github_img from "../../public/images/github_img.png";
import aws_img from "../../public/images/aws_img.png";
import docker_img from "../../public/images/docker_img.webp";
import java_img from "../../public/images/java_img.png";
import dj_img from "../../public/images/dj_img.png";
import pytorch_img from "../../public/images/pytorch_img.png";
import njs_img from "../../public/images/njs_img.gif";
import rust_img from "../../public/images/rust_img.png";
import go_img from "../../public/images/go_img.png";
import lua_img from "../../public/images/lua_img.png";

export default function Carousel() {
    return (
        <div className="w-[80%] flex">
            <motion.div
                variants={{
                    hidden:  { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.12 }
                    },
                    exit: { opacity: 0 }
                }}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-[140px] aspect-square flex items-center justify-center my-8 mx-4"
            >
                <motion.img src={py_img.src} 
                    className="w-[100px] h-[100px] object-cover rounded-full"
                    variants={{
                        hidden:  { scale: 0, opacity: 0 },
                        visible: {
                          scale: 1,
                          opacity: 1,
                          transition: { type: "spring", stiffness: 500, damping: 30}
                        }
                    }}
                />
                <Circle images={[r_img.src, sql_img.src, react_img.src, ts_img.src, go_img.src, js_img.src]} radius={110} size={70}/>
                <Circle images={[c_plus_plus_img.src, java_img.src, aws_img.src, docker_img.src, dj_img.src, pytorch_img.src, github_img.src, njs_img.src, lua_img.src, rust_img.src]} radius={200} size={50}/>
            </motion.div>
        </div>
    )
}

type CircleProps = {
    images: Array<string>;
    radius?: number;
    size?: number;
    className?: string;
  };
  

function Circle({ images, radius = 50, size = 60 }:CircleProps) {
    const step = 360 / images.length; 
  
    return (
        <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible"
          style={{
            width: radius * 2 + size,
            height: radius * 2 + size,
          }}
          variants={{
            hidden:  { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { type: "spring", stiffness: 500, damping: 30}
            }
          }}
        >
          {images.map((src, i) => {
            const angle = step * i;
            const transform =
              `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
    
            return (
              <motion.img
                key={i}
                src={src}
                alt=""
                className="absolute top-1/2 left-1/2 object-cover rounded-full"
                style={{
                    width: size,
                    height: size,
                    transform,
                    transformOrigin: "50% 50%",
                }}
              />
            );
          })}
        </motion.div>
    );
}

