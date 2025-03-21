import { FaAngular, FaCss3Alt, FaFigma, FaGit, FaGithub, FaHtml5, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa"
import { handleClick, handleDownload } from "./dowloadElements"
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5"
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiMongodb, SiTypescript } from "react-icons/si"
import { PiReadCvLogoBold } from "react-icons/pi"

export const TECH =[
    [
        FaHtml5,FaCss3Alt,IoLogoJavascript,FaReact,FaAngular,FaNodeJs
    ],
    [
        IoLogoFirebase,SiMongodb,FaGit,FaGithub 
    ],
    [
        SiAdobephotoshop,SiAdobeillustrator,FaFigma,SiAdobepremierepro 
    ]
]

export const PERSONAL=[
    {
        name:'CV',
        img:PiReadCvLogoBold ,
        link:() => handleDownload('/assets/documents/CV-JuanGoncalves2025.pdf')
    },
    {
        name:'LINKEDIN',
        img:FaLinkedin ,
        link:() => handleClick('https://www.linkedin.com/in/juanantoniogoncalvesrodrigues/')
    },
    {
        name:'GITHUB',
        img:FaGithub,
        link:() => handleClick('https://github.com/jagoncalvesrodrigues')
    }
]