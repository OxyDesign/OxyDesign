window.onload = function(){
  var toggles = Array.prototype.slice.apply(document.querySelectorAll('.toggle')),
      wrapper = document.querySelector('.wrapper');

  toggles.forEach(function(toggle){
    toggle.classList.add('closed');
  });

  document.querySelector('.global-object').addEventListener('click',function(e){
    var currentElt = e.target;

    if(currentElt.classList.contains('toggle')){
      currentElt.classList.toggle('closed');
    }else if(currentElt.parentElement.classList.contains('toggle')){
      currentElt.parentElement.classList.toggle('closed');
    }
  });

  document.querySelector('.bt-toggle').addEventListener('click',function(){
    var toggleMehtod = this.classList.contains('closed') ? 'remove' : 'add';
    this.classList[toggleMehtod]('closed');
    toggles.forEach(function(toggle){
      toggle.classList[toggleMehtod]('closed');
    });
  });

  document.querySelector('.toggle-links').addEventListener('click',function(){
    wrapper.classList.toggle('show-links');
  });

  document.querySelector('.toggle-twitter').addEventListener('click',function(){
    wrapper.classList.toggle('show-twitter');
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