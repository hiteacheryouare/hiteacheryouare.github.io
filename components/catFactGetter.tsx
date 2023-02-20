export async function getCatFact() {
    const res = await fetch("https://catfact.ninja/fact")
    const data = await res.json()
    return data.fact
}



export default async function catFactShower() {
    const cf = await getCatFact()
    return (
        <>
            <p className="text-center">
                Heres a fun cat fact: {cf}
            </p>
        </>
    )
}