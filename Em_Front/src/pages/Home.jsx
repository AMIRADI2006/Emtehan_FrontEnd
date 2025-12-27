import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1 className="text-orange-500">Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
            <NavLink to={'/test'}>test</NavLink>
        </>
    )
}