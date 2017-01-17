# jquery-come-translate
jQuery plugin for translation (manually define difference translations).

Usage:
```javascript
<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<!-- JQuery extension `Come Translate` -->
<script src="js/languages.pack.js"></script>
<script src="js/jquery-come-translate.min.js"></script>
<script>
$(function () {

    $.translate(function() {}, {debug: true, translation: dict, language: 'zhTW', attribute: 'my-data'});
    //$.translate(function() {}, {debug: true, translation: dict, language: $.language('enUS'), attribute: 'my-data'});
});
</script>
<body>
<div><my-data id="test"></my-data></div>
</body>
```
