::
::The JS source using the Google Closure Compiler to optimize.
::
@echo off
::Point to your self location, the worda are self explain.
java -jar c:/cc/compiler.jar --js js/jquery-come-translate.js --js_output_file js/jquery-come-translate.min.js
pause