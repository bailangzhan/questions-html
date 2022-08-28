/*====================================================
  TABLE OF CONTENT
  1. function declearetion
  2. Initialization
====================================================*/

/*===========================
 1. function declearetion
 ==========================*/
var themeApp = {
  highlighter: function() {
    $('pre').each(function(i, block) {
        hljs.highlightBlock(block);
      });
  },
  init: function() {
    themeApp.highlighter();
  }
}

/*===========================
2. Initialization
==========================*/
$(document).ready(function(){
  themeApp.init();
});