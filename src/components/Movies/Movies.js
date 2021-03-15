import React from 'react';
import MovieCardList from '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';
import { movieCardStates } from '../../utils/constants';
import './Movies.css';

import Button from '../Button/Button';

export default function Movies(props) {
  const [curCount, setCurCount] = React.useState(props.cardLimit.count);
  const [limitedCards, setLimitedCards] = React.useState([]);

  const { cardLimit, cards } = props;

  React.useEffect(() => {
    if (curCount) {
      setLimitedCards(cards.slice(0, curCount));
    }
  }, [curCount, cards]);

  if (!curCount && cardLimit.count) {
    setCurCount(cardLimit.count);
  }

  function moreCardsHandler() {
    setCurCount(curCount + cardLimit.more);
    setLimitedCards(cards.slice(0, curCount));
  }

  return (
    <section className="movies">
      <SearchForm className="movies__search-form" onSubmit={props.searchHandler} />
      <MovieCardList className="movies__card-list"
        isLoading={props.isLoading}
        cards={limitedCards.map((card) => ({
          id: card.id,
          name: card.nameRU,
          duration: card.duration,
          image: card.image,
          trailer: card.trailer,
          state: card.saved ? movieCardStates.saved : movieCardStates.to_save,
        }))}
        onSaveMovie={props.onSaveMovie}
        onDeleteMovie={props.onDeleteMovie}
      />
      {limitedCards.length >= curCount ? <Button className="movies__more-btn" color="dark-gray" borderRadius="6" onClick={moreCardsHandler}>Ещё</Button> : null}
    </section>
  )
};