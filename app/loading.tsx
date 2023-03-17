export default function Loading(): JSX.Element {
    return(
        <div className="flex content-center justify-center">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}