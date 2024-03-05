import { Featured, Categories } from "../../components"
import "./home.scss"

export const Home = () => {

    return (
        <div className="homePage">
            <Featured />
            <Categories />
        </div>
    )
}
