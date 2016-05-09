/**
 * A language pack for jQuery plugin `Come Translate' - jquery-come-translate.min.js
 * 
 * The translation should be defined here and included before the `Come Translate` plugin.
 * e.g
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
var dict = {
    'apple' : {'enUS' : 'Apple', 'zhTW' : '蘋果', 'zhCN' : '蘋果'},
    'orange' : {'enUS' : 'Orange', 'zhTW' : '橙', 'zhCN' : '橙'},
    'banana' : {'enUS' : 'Banana', 'zhTW' : '香蕉', 'zhCN' : '香蕉'},
    'pear' : {'enUS' : 'Pear', 'zhTW' : '啤梨', 'zhCN' : '啤梨'},
    'tc' : {'enUS' : 'Traditional Chinese', 'zhTW' : '繁體中文', 'zhCN' : '繁体中文'},
    'en' : {'enUS' : 'English', 'zhTW' : '英文', 'zhCN' : '英文'},
    'sc' : {'enUS' : 'Simplified Chinese', 'zhTW' : '簡體中文', 'zhCN' : '简体中文'}
}