"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <LazyMotion features={domAnimation}>
            <section id="about" className="section">
                <HeadingDivider title="About me" />
                <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
                    <div
                        tabIndex="0"
                        ref={ref}
                        className="text-xl font-light leading-relaxed"
                        style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        <p>
                            My name is Krishna. I hold a Master&apos;s degree in Computer Applications from Graphic Era University.
                        </p>
                        <p className="my-3.5">
                            In 2022, I dedicated myself to exploring technologies that sparked my interest, focusing on building a strong foundation in HTML, CSS, and JavaScript. This period marked the beginning of my journey into web development, where I invested significant time in mastering these core technologies and understanding the fundamentals of creating responsive and dynamic user interfaces.
                        </p>
                        <p>
                            One day, I decided to try something new, and I started learning React. I was so
                            excited to see how fast I can build a website with it, and how easy it is to maintain
                            it. Consequently, I quickly learnt Next.js and I used it to build some company
                            projects working in a team with a backend dev.
                        </p>
                        <p>
                            During my professional career, I have developed a strong passion for web development, consistently learning new technologies like React and Node.js. My technical stack also includes MongoDB, Express.js, and Bootstrap, among others.
                        </p>
                        <p>
                            I am a seasoned Full Stack Developer Intern with expertise in both front-end and back-end technologies. My programming journey officially began in 2023, and I have since dedicated myself to building high-quality, scalable web applications.
                        </p>
                        <p className="my-3.5">
                            I have worked on multiple live projects, such as e-commerce websites and real estate applications, showcasing my skills in creating responsive UIs, integrating RESTful APIs, and managing databases.
                        </p>
                        <p className="my-3.5">
                            In April 2024, I embarked on an exciting journey as a Full Stack Developer, transitioning into a role where I could fully immerse myself in the MERN stack. Although I was initially uncertain about this shift, it turned out to be one of the most rewarding decisions of my career. I now thoroughly enjoy leveraging the power of MongoDB, Express, React, and Node.js to build robust, scalable applications, and I continue to grow my expertise in creating innovative web solutions.
                        </p>
                    </div>
                </div>
                <TimeLine />
            </section>
        </LazyMotion>
    );
}
