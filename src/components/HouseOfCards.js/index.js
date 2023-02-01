import React from "react";

export const DescCard = (props) => {
    return ( 
    <div class="desc-block" id="">
        <span class="desc-heading" id="">{props.card.title}</span>
        <hr />
        <p class="desc-content" id="">
        </p>
    </div>
    );
}

const HouseOfCards = (props) => {
    return ( 
        props.cards.map(card=><DescCard card={card} />)
     );
}
 
export default HouseOfCards;