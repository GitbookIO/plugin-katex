var katex = require("katex");

module.exports = {
    book: {
        assets: "./book",
        js: [],
        hooks: {
            page: function(page) {
                for (var i in page.sections) {
                    section = page.sections[i];
                    if ( section.type != "normal" ) continue;

                    var $ = cheerio.load(section.content);
                    $("script[type='math/tex']").each(function() {
                        var math = $(this).html();
                        $(this).replaceWith(katex.renderToString(math));
                    });

                    // Replace by transform
                    section.content = $.html();
                }

                return page;
            }
        }
    }
};
