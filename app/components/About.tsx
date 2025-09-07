"use client";

import image11 from "../../public/images/IMG_1062_2.jpg"
import ZoomEffect from "./effects/ZoomEffect"

export default function About() {
    return(
        <section className="h-[500vh] z-20 bg-white w-full items-center flex flex-col">
            <ZoomEffect text="what's this guy all...">
                <div
                    style={{
                    background: `url(${image11.src}) center/cover`,
                    height: "100%",
                    width: "100%"
                    }}
                >
                </div>
            </ZoomEffect>
        </section>
    )
}