export default function Singers({singers}) {
    const {name, age} = singers;
    return (
        <>
            <li>name: {name}</li>
            <li>age: {age}</li>
        </>
    )
}