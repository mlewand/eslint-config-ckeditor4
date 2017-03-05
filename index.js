module.exports = {
	"env": {
		"browser": true
	},
	"globals": {
		"CKEDITOR": true
	},
	"rules": {
		// Possible candidates:
		// "camelcase": [ "error" ],
		// "no-multiple-empty-lines": "error",
		// Things that should be introduced step-by-step:
		// "no-else-return": "warn",
		// "no-empty": "warn",
		// "no-implicit-coercion": [ "warn", { "boolean": false } ],
		"eol-last": [ "warn", "never" ],
		"wrap-iife": [ 2, "inside" ],
		"no-use-before-define": [
			2,
			{
				"functions": false
			}
		],
		"no-irregular-whitespace": 2,
		"no-undef": 2,
		"no-unused-vars": 2,
		"new-cap": 0,
		"no-empty": 0,
		"strict": [
			2,
			"function"
		],
		"no-cond-assign": [
			2,
			"except-parens"
		],
		"no-eq-null": 2,
		"no-eval": 2,
		"no-extra-semi": "error",
		"no-caller": "error" ,
		"no-duplicate-case": "error",
		"no-unused-expressions": 2,
		"block-scoped-var": 2,
		"brace-style": [ "error", "1tbs" ],
		"no-loop-func": 2,
		// "no-invalid-this": 2,
		"no-invalid-this": 0,
		"curly": [
			2,
			"all"
		],
		"keyword-spacing": [
			2,
			{}
		],
		"space-before-blocks": [
			2,
			"always"
		],
		"space-before-function-paren": [
			2,
			"never"
		],
		"no-spaced-func": 2,
		"array-bracket-spacing": [
			2,
			"always"
		],
		"space-in-parens": [
			2,
			"always"
		],
		"key-spacing": [
			2,
			{
				"beforeColon": false,
				"afterColon": true
			}
		],
		"comma-style": [
			2,
			"last"
		],
		"operator-linebreak": [
			2,
			"after"
		],
		"space-unary-ops": [
			2,
			{
				"words": false,
				"nonwords": false
			}
		],
		"space-infix-ops": 2,
		"no-with": 2,
		"no-multi-str": 2,
		"no-mixed-spaces-and-tabs": 2,
		"no-trailing-spaces": 2,
		"object-curly-spacing": [ "error", "always" ],
		"padded-blocks": [ "error", "never" ],
		"max-len": [
			2,
			200
		],
		"dot-notation": [
			2,
			{
				"allowKeywords": false
			}
		],
		"yoda": [
			2,
			"never"
		],
		"linebreak-style": [
			2,
			"unix"
		],
		"quotes": [
			2,
			"single",
			{
				"avoidEscape": true
			}
		],
		"indent": [
			1,
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"semi": [ "error", "always" ],
		"valid-typeof": "error"
	}
};