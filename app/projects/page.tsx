import ProjectsHeroText from '../../components/projectsHeroText'
import 'bootstrap/scss/bootstrap.scss'
import Image from 'next/image'
import Link from 'next/link'
interface Project {
    name: string
    pictureURL?: string
    pictureAlt: string
    excerpt: string
    href: string
}
export default function Page(): JSX.Element {
    const projects: Project[] = [
        {
            name: "(de)Motivator",
            pictureURL: "/dmv-logo.png",
            pictureAlt: "A large red button",
            excerpt: "The simple, push-button way of lowering your self esteem",
            href: "https://demotivator.web.app"
        }
    ]
    return (
        <>
            <ProjectsHeroText className='text-center font-bold text-9xl p-10'>
                <h1 className='p-10'>
                    Ryan&apos;s Projects
                </h1>
            </ProjectsHeroText>
            <div className='grid grid-cols-4 p-4'>
                {projects.map((project: Project) => (
                    <div key={project.name} className="card w-72">
                        <Image src={project.pictureURL ?? "/FullColorFavi.svg"} className="card-img-top m-auto p-4" width={100} height={100} style={{ width: "35%" }} alt={project.pictureAlt ?? "..."}></Image>
                            <div className="card-body">
                                <Link href={project.href} className="card-title font-bold">{project.name}</Link>
                                <p className="card-text">{project.excerpt}</p>
                            </div>
                    </div>
                ))}
            </div>
        </>
    )
}