module.exports = {
    moviesUrl: 'https://api.nomoreparties.co',
    mainUrl: 'https://api.nechitaylo.students.nomoredomains.work',
    cardLimit: {
        small: {
            minSize: 320,
            count: 5,
            more: 2,
        },
        medium: {
            minSize: 480,
            count: 8,
            more: 2,
        },
        big: {
            minSize: 768,
            count: 12,
            more: 3,
        },
    },
    movieCardStates: {
        saved: 'saved',
        delete: 'delete',
        to_save: 'to_save',
    },
};
