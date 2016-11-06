$(document).ready(function(){
	"use strict";

  // Twitter Feed

  $('.tweets-feed').each(function(index) {
      $(this).attr('id', 'tweets-' + index);
  }).each(function(index) {

      function handleTweets(tweets) {
          var x = tweets.length;
          var n = 0;
          var element = document.getElementById('tweets-' + index);
          var html = '<ul class="slides">';
          while (n < x) {
              html += '<li>' + tweets[n] + '</li>';
              n++;
          }
          html += '</ul>';
          element.innerHTML = html;
          return html;
      }

      twitterFetcher.fetch($('#tweets-' + index).attr('data-widget-id'), '', 5, true, true, true, '', false, handleTweets);

  });
});
