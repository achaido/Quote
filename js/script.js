window.onload = function() {


  // get quote container
  var quote = document.getElementById("slider");

  // get title meta of page
  var title = document.getElementsByTagName("title");
  
  // create the JSON requestion 
  var request = $.ajax({
      type: "GET",
      url : "http://api.tumblr.com/v2/blog/whatthefuckshouldiquotetoday.tumblr.com/posts",
      dataType: "jsonp",
      data: {
          api_key : "MWRsidDJQ9xVFHErnDvFA4uENUIdMWNb5IHNs7bTE8StRuswh6",
          jsonp : "myJsonpCallback"
      }
  });

  // with the data, you get from the JSON, do something
  myJsonpCallback = function(data)
  {

      // get all posts
       var posts = data.response.posts

      injectJson = function(){
        for (i = 0; i < posts.length; i++){
          
          // get a random post (generate here to make it random)
          var post = data.response.posts[Math.floor(Math.random() * posts.length)]
          
          if(i === 1){
            $('#slider ul li').css("display", "block");   
          } else {
             $('#slider ul li').css("display", "none"); 
          }

          $('#slider ul').append('<li><div><h1>&#8220;' + post.text + '&#8221;</h1>' + '<h5>-' + post.source + '</h5></div></li>');
          
          

        }    
        // When done the loop do this:
        new Swipe(document.getElementById('slider'));
        $("body").animate({ opacity: "1"}, 1000);
        $("#slider ul li h1").fitText(1.2);
        $("#slider ul li h5").fitText(2.8);
        $("#slider ul li h1").css("line-height", "1em");
        
      }
      injectJson(); 

      // needs to be changed with the slide effect
      changeTitle = function(post){
       // document.title = post.text;
      }
//      changeTitle(post);
      
      // Keyboard shortcuts
      $('body').bind('keydown', 'space', function(e){
        e.preventDefault();
        console.log('space');
        newPos = newPos + $(window).width();  
        $("#slider ul").css('-webkit-transform', 'translate3d(-'+ newPos +'px, 0px, 0px)');
        $("#slider ul").css('-webkit-transition', '1000ms');
        console.log(newPos);
        });
      
      var newPos = 0;
      $('body').bind('keydown', 'left', function(e){
        e.preventDefault();
        console.log('left');
        newPos = newPos - $(window).width();
        $("#slider ul").css('-webkit-transform', 'translate3d(-'+ newPos +'px, 0px, 0px)');
        console.log(newPos);
      });
      
      
      $('body').bind('keydown', 'right', function(e){
        e.preventDefault();
        console.log('right');
        newPos = newPos + $(window).width();  
        $("#slider ul").css('-webkit-transform', 'translate3d(-'+ newPos +'px, 0px, 0px)');
        $("#slider ul").css('-webkit-transition', '1000ms');
        console.log(newPos);
                        
      });
    
  }
  
 
 
}