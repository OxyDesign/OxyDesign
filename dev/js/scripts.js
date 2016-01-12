window.onload = function(){
  var charts = Array.prototype.slice.call(document.querySelectorAll('.dynamic-chart')),
      toggles = Array.prototype.slice.apply(document.querySelectorAll('.toggle')),
      wrapper = document.querySelector('.wrapper');

  charts.forEach(function(chart){
    var container = chart.querySelector('.chart'),
        fragment = document.createDocumentFragment('div'),
        items = Array.prototype.slice.call(chart.querySelectorAll('li')).map(function(item){
          var value = item.querySelector('span');
          value.style.display = 'none';
          return parseInt(value.textContent,10);
        }),
        total = items.reduce(function(prev,cur){return prev+cur},0),
        progression = 0;

    container.classList.add('inactive');

    items = items.map(function(cur,idx,arr){
      return {
        circle : document.createElement('div'),
        angle : progression = (cur * 360 / total) + progression
      };
    });

    items.reduceRight(function(prev,cur){
      var angle = cur.angle;
      var circle = cur.circle;
      var newLeftAngle;

      circle.classList.add('circle');

      var halfRight = circle.appendChild(document.createElement('div'));
      var halfCircleRight = halfRight.appendChild(document.createElement('div'));

      halfRight.classList.add('half-right');
      halfCircleRight.classList.add('half-circle');

      if (angle > 180){
        newLeftAngle = 180;

        var halfLeft = circle.insertBefore(document.createElement('div'),halfRight);
        var halfCircleLeft = halfLeft.appendChild(document.createElement('div'));

        halfLeft.classList.add('half-left');
        halfCircleLeft.classList.add('half-circle');

        halfCircleLeft.style.webkitTransform = halfCircleLeft.style.MozTransform = halfCircleLeft.style.msTransform = halfCircleLeft.style.transform = 'rotate('+(angle-180+45)+'deg)';
      }

      halfCircleRight.style.webkitTransform = halfCircleRight.style.MozTransform = halfCircleRight.style.msTransform = halfCircleRight.style.transform = 'rotate('+((newLeftAngle || angle)+45)+'deg)';

      fragment.appendChild(circle);

      return angle;
    },0);

    container.appendChild(fragment);

    setTimeout(function(){
      container.classList.remove('inactive');
    },500);

    container.addEventListener('click',function(){
      this.classList.toggle('inactive');
    });
  });

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