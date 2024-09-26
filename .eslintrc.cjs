/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        "prettier"
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'no-param-reassign': 0,
        'import/first': 0,
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'vue/html-indent': ['warn', 4],
        'space-before-function-paren': [
            'error', {
                anonymous: 'always',
                named: 'always',
                asyncArrow: 'always',
            }],
        'global-require': 0,
        'prefer-destructuring': 0,
        'no-use-before-define': 0,
        'no-underscore-dangle': 0,
        'linebreak-style': 0,
        'import/prefer-default-export': 0,
        'no-console': 0,
        'class-methods-use-this': 0,
        'vue/no-v-model-argument': 0,
        'vue/no-v-html': 0,
        'func-names': 0,
    },
    
}
