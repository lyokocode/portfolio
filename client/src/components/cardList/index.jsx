import { Card } from ".."
import "./cardList.scss"
export const CardList = () => {
    return (
        <div className="cardList">
            <h1 className="cardTitle">Recent Post</h1>
            <Card />
            <Card />
        </div>
    )
}
