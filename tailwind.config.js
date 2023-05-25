module.exports = {
    content: [
        './_drafts/**/*.html',
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.md',
        './*.html',
    ],
    theme: {
        extend: {
            typography: {
                quoteless: {
                    css: {
                        'blockquote p:first-of-type::before': { content: 'none' },
                        'blockquote p:first-of-type::after': { content: 'none' },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
}