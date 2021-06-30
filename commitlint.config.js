module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'BREAKING CHANGE',
                'docs',
                'chore',
                'style',
                'refactor',
                'ci',
                'test',
                'perf',
            ],
        ],
    },
}
