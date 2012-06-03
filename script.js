window.onload = function() {

  // get quote container
  var quote = document.getElementById("quote-container");

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
    
     // function to insert the quote itself
     injectJson = function(){
        quote.innerHTML = '<h1>"' + post.text + '"</h1>' + "<h5>-" + post.source + "</h5>";
        $("body").animate({ opacity: "1"}, 1000);
        $("#quote-container h1").fitText(1.2);
        $("#quote-container h5").fitText(3.4);
        
      }
      


      // get all posts
      var posts = data.response.posts
      
      // get a random post
      var post = data.response.posts[Math.floor(Math.random() * posts.length)]
      
      
      changeTitle = function(post){
        document.title = post.text;
      }
      changeTitle(post);
    
      
      // console.log(data.response.posts[0].type);
      // console.log(post.type)
     
      // If post is of type 'quote' then do something
      if(post.type === "quote"){
        injectJson();      
      }
      
      
      // Keyboard shortcuts
      $('body').bind('keydown', 'space', function(e){
        e.preventDefault();
            console.log('space');
            $("#quote-container h1").fadeOut(200, function(){
              injectJson();
            });
        });
      
      $('body').bind('keydown', 'left', function(e){
        e.preventDefault();
            console.log('left');
            $("#quote-container").animate({ left: "100%"}, 300);
        });
      
      $('body').bind('keydown', 'right', function(e){
        e.preventDefault();
            console.log('right');
            $("#quote-container").animate({ right: "100%"}, 300);
        });
      
  }
  
 
}