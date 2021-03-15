module.exports = (handler) => (err) => {
    console.log('err: ', err);

    const { code, message } = err;
    handler({
        type: 'error',
        code: code || null,
        message,
    });
};
