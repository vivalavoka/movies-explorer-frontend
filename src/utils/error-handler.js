module.exports = (handler) => (err) => {
    const { message, data } = err;
    handler({
        type: 'error',
        message,
        data,
    });
};
