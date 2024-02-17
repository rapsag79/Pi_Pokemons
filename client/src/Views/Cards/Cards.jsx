import Card from "../Card/Card";
import Styles from "./Cards.styles.css"

const Cards = () => {
  return (
    <div className={Styles.divSp}>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
    </div>
  )
}

export default Cards;