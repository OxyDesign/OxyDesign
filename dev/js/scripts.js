window.onload = function(){
  twitterFetcher.fetch({
    id:'659879377698729984',
    dataOnly: true,
    maxTweets: 5,
    customCallback: function(data){
      var html = ''
      data.forEach(function(tweet){
        html += '<li>'
          + (tweet.image ? '<img src="'+tweet.image+'" />' : '')
          + '<p class="tweet-content">' + tweet.tweet + '</p>'
          + '<p class="tweet-infos">' + tweet.time + '</p>'
        + '</li>';
      });
      document.getElementById('tweets').innerHTML = html;
    }
  });
};