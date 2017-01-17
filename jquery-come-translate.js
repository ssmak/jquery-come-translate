/**
 * jQuery plugin - `Come Translate` (v1.0.0)
 *
 * Author: Steve Mak
 * Last Modified: 2016-05-05 10:52
 * License: MIT
 *
 * Usage:
 * <!-- jQuery -->
 * <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
 * <!-- JQuery extension `Come Translate` -->
 * <script src="js/languages.pack.js"></script>
 * <script src="js/jquery-come-translate.min.js"></script>
 * <script>
 * $(function () {
 *
 *      $.translate(completed_callback() {}, {debug: true, translation: dict, language: 'zhTW', tag: 'my-data'});
 *      //$.translate(completed_callback() {}, {debug: true, translation: dict, language: $.language('enUS'), tag: 'my-data'});
 * });
 * </script>
 * <body>
 * <div><my-data id="test"></my-data></div>
 * </body>
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

                    $(this).html(translation[dataid][language]);
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
