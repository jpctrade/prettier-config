// reference: https://github.com/prettier/prettier#options

module.exports = {
    printWidth: 100,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
