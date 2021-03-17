const SHORT_FILM_DURATION = 40;

export default function cardFilter(cards) {
    return ({ text, shortFilmsOnly }) => cards.filter(({ nameRU, duration }) => {
        let res = true;
        if (shortFilmsOnly && duration > SHORT_FILM_DURATION) {
            res = false;
        }
        if (text.length && !nameRU.toLowerCase().includes(text.toLowerCase())) {
            res = false;
        }
        return res;
    });
};
