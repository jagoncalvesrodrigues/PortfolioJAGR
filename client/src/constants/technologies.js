import { handleClick, handleDownload } from "./dowloadElements"

export const TECH =[
    [
        '/assets/images/icons/html.svg',
        '/assets/images/icons/css.svg',
        '/assets/images/icons/js.svg',
        '/assets/images/icons/typescript.svg',
        '/assets/images/icons/angular.svg',
        '/assets/images/icons/react.svg',
        '/assets/images/icons/node.svg',
    ],
    [
        '/assets/images/icons/firebase.svg',
        '/assets/images/icons/git.svg',
        '/assets/images/icons/mysql.svg',
        '/assets/images/icons/mongo.svg',
        '/assets/images/icons/github.svg'
    ],
    [
        '/assets/images/icons/figma.svg',
        '/assets/images/icons/ps.svg',
        '/assets/images/icons/illustrator.svg',
        '/assets/images/icons/premiere.svg'
    ]
]

export const PERSONAL=[
    {
        name:'CV',
        img:'/assets/images/icons/cv.svg',
        link:() => handleDownload('public/assets/documents/CV-JuanGoncalves2025.pdf')
    },
    {
        name:'LINKEDIN',
        img:'/assets/images/icons/linkedin.svg',
        link:() => handleClick('https://www.linkedin.com/in/juanantoniogoncalvesrodrigues/')
    },
    {
        name:'GITHUB',
        img:'/assets/images/icons/github2.svg',
        link:() => handleClick('https://github.com/jagoncalvesrodrigues')
    }
]