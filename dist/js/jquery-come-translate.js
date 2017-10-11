/*!
 * jquery-come-translate v1.0.0 (https://github.com/ssmak/jquery-come-translate)
 * Author: Steve Mak (https://github.com/ssmak)
 * Licensed under the MIT license
 */
(function ($) {

    $.translate = function (callback, options) {

        var debug = false;
        var translation = {};
        var language = 'enUS'; //default language
        var tag = '';

        //argvs check
        if(typeof options['debug'] == 'boolean') {

            debug = options['debug'];
        }
        if(typeof options['translation'] == 'object') {

            translation = options['translation'];
        }
        if(typeof options['language'] == 'string') {

            language = options['language'];
        }
        if(typeof options['tag'] == 'string') {

            tag = options['tag'];
        }

        //translate all data tag
        $('[' + tag + ']').each(function () {

            var dataid = $(this).attr(tag);

            //check if translation existed
            if(typeof translation[dataid] == 'object') {

                if(typeof translation[dataid][language] == 'string') {

                    //check translation type
                    if($(this).is("img")) {
                      //image translate
                      $(this).attr("src", translation[dataid][language]);
                    } else {
                      //text translate
                      $(this).html(translation[dataid][language]);
                    }
                } else {

                    if(debug) {

                        console.warn('No `' + language + '` translation for data id `'+ dataid + '`.');
                    }
                }
            } else {

                if(debug) {

                    console.warn('Translation for data id `'+ dataid +'` not found.');
                }
            }
        });

        //translation completed and callback
        callback();
    }

    $.language = function (default_lang) {

        var url = document.location.href;
        var lang = url.split('#');
        if(typeof lang[1] == "string") {

            return lang[1];
        }

        return default_lang;
    }
})(jQuery);
