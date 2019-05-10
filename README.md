<h1 align="center">jquery-come-translate</h1>

<h5 align="center">jQuery plugin for translation (manually define difference translations).</h5>
<br />
<div align="center">
  <a href="https://github.com/ssmak/jquery-come-translate">
    <img src="https://img.shields.io/badge/version-v1.0.0-blueviolet.svg" />
  </a>
  <a href="https://www.npmjs.com/package/jquery-come-translate">
    <img src="https://img.shields.io/badge/env-web-orange.svg" />
  </a>
</div>
<br />
<div align="center">
<a href="https://nodei.co/npm/jquery-come-translate/"><img src="https://nodei.co/npm/jquery-come-translate.png?compact=true"></a>
</div>
<br />

## History
One way solution to convert text between Traditional Chinese and Simplified Chinese in browser. No any dependencies required.
<br />
<div align="center">
  <a href="https://paypal.me/ssmak">
    <img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="PayPal Donation" />
  </a>
  <br />
  <a href="https://paypal.me/ssmak">
    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="PayPal" />
  </a>
</div>

## Installation + Use
1. Install the npm
``` bash
npm install jquery-come-translate --save
```

2. Import the script tag after the jQuery
```javascript
<!-- jQuery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!-- JQuery extension `Come Translate` -->
<script src="js/languages.pack.js"></script>
<script src="dist/js/jquery-come-translate.js"></script>
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

## Test
``` bash
npm install -g lite-server
lite-server
```

## License
MIT
