var katex = require("katex");

module.exports = {
    book: {
        assets: "./static",
        js: [],
        css: [
            "katex.min.css"
        ]
    },
    ebook: {
        assets: "./static",
        css: [
            "katex.min.css"
        ]
    },
    blocks: {
        math: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "$$",
                end: "$$"
            },
            process: function(blk) {
                return katex.renderToString(blk.body);
            }
        }
    }
};
