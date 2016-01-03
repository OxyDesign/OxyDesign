window.onload = function(){
  var toggles = Array.prototype.slice.apply(document.querySelectorAll('.toggle'));
  toggles.forEach(function(toggle){
    toggle.classList.add('closed');
  });

  document.querySelector('.global-object').addEventListener('click',function(e){
    var looping = true,
        currentElt = e.target;

    for(; looping; ){
      if(currentElt.classList.contains('toggle')){
        currentElt.classList.toggle('closed');
        looping = false;
      } else if(currentElt.nodeName === 'A' ||  currentElt === this){
        looping = false;
      } else currentElt = currentElt.parentElement;
    }
  });

  document.querySelector('.bt-toggle').addEventListener('click',function(e){
    var toggleMehtod = this.classList.contains('closed') ? 'remove' : 'add';
    this.classList[toggleMehtod]('closed');
    toggles.forEach(function(toggle){
      toggle.classList[toggleMehtod]('closed');
    });
  });

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