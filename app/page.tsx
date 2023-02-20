import Button from "../components/heroButton";

export default function Hero(): JSX.Element {
    return (
        <div className="hero flex flex-col justify-center items-center h-screen">
            <h1 className="title text-5xl font-bold text-center">
                Pushing What&apos;s Possible
            </h1>
            <p className="subtitle text-2xl text-center text-gray-400 mb-8">
                I am web developer &amp; co-founder at @PorkyProductions, and the author and maintainer of UADetect, and (de)Motivator. Fan of giraffes &amp; hedgehogs 🦒🦔
            </p>
            <div className="buttons flex flex-row space-x-4">
                <Button href="/projects" className="bg-theme-primary text-gray-200">
                    See Our Projects
                </Button>
                <Button href="/blog" className="bg-theme-secondary text-gray-900">
                    Read Our Blog
                </Button>
            </div>
        </div>
    );
}
