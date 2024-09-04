import { Product } from '../../types/product';
import Card from '../card/card';

type CardsProps = {
 cards: Product[];
}

function Cards({cards}: CardsProps): JSX.Element {
  return (
    <div className="catalog-cards">
      <ul className="catalog-cards__list">
        {cards.map((card: Product) => (
          <Card
            key={card.id}
            card={card}
          />)
        )}
      </ul>
    </div>
  );
}

export default Cards;
