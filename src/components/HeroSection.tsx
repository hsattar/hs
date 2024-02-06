'use client'

import { useEffect, useState } from "react"

export default function HeroSection() {

    let typingPosition = 0
    const aboutMeText = 'I Am A Full Stack Developer'
    const typingSpeed = 50

    const [typeWriterText, setTypeWriterText] = useState('')

    const typeWriterEffect = () => {
        if (typingPosition < aboutMeText.length) {
            setTypeWriterText(prev => prev.concat(aboutMeText.charAt(typingPosition)))
            typingPosition++
            setTimeout(typeWriterEffect, typingSpeed)
        }
    }

    useEffect(() => {
        typeWriterEffect()
    }, [])

    return (
        <section className="flex flex-col lg:flex-row items-center my-4 select-none">
    
            <div className="flex-grow flex flex-col items-center justify-center">
                <h1 className="text-7xl p-4 font-semibold text-center"><span className="fancy-letter mr-3">H</span>asan <span className="fancy-letter mr-1">S</span>attar</h1>
                {/* <p className="text-3xl mb-12">{typeWriterText}</p> */}
                <p className="text-3xl mb-4 text-center">Full Stack Developer</p>
                <p className="text-3xl mb-12 text-center">Data Engineer</p>
                <div className="social-icons text-4xl mb-8 lg:mb-0">
                    <a className="mx-3" href="https://github.com/hsattar" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                    <a className="mx-3" href="https://www.linkedin.com/in/hasanrsattar/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>

            <div className="md:w-[35vw] flex justify-center">
                <img className="h-[50vh] rounded-lg" src="/assets/hasan.jpg" alt="Hasan Sattar" />
            </div>

        </section>
    )
}