function isValidPhone(number) {
    return (
        number.match(
            `^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$`
        ) !== null
    );
}
