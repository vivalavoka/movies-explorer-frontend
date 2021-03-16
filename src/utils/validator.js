export const isNameValid = (name) => {
    return /^[A-Za-z- ]+$/.test(name);
}