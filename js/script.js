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

       // get a random post
       var post = data.response.posts[Math.floor(Math.random() * posts.length)]


      
      injectJson = function(){
        for (i = 0; i < posts.length; i++){
          
          if(i === 1){
            $('#slider ul li').css("display", "block");   
          } else {
             $('#slider ul li').css("display", "none"); 
          }

          $('#slider ul').append('<li><div><h1>"' + posts[i].text + '"</h1>' + "<h5>-" + posts[i].source + "</h5></div></li>");
          $("body").animate({ opacity: "1"}, 1000);
          

        }    
        // When done the loop do this:
        new Swipe(document.getElementById('slider'));
        $("#slider ul li h1").fitText(1.2);
        $("#slider ul li h5").fitText(3.4);
        $("#slider ul li h1").css("line-height", "1em");
        
      }
      injectJson(); 
      


       
      changeTitle = function(post){
        document.title = post.text;
      }
      changeTitle(post);
    
      
      // console.log(data.response.posts[0].type);
      // console.log(post.type)
     
      // If post is of type 'quote' then do something
      /*
      if(post.type === "quote"){
       // injectJson();      
      }
      */
      
      
      // Keyboard shortcuts
      $('body').bind('keydown', 'space', function(e){
        e.preventDefault();
            console.log('space');
            $("#slider h1").fadeOut(200, function(){
              injectJson();
            });
        });
      
      $('body').bind('keydown', 'left', function(e){
        e.preventDefault();
            console.log('left');
           // $("#quote-container").animate({ left: "100%"}, 300);
        });
      
      $('body').bind('keydown', 'right', function(e){
        e.preventDefault();
            console.log('right');
          //  $("#quote-container").animate({ right: "100%"}, 300);
        });
      
  }
  
 
 
}