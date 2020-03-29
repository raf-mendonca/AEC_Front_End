

/*
 $(".img-fluid").click(){
    var idImage = $(this).attr("id");

 });
*/

 $(".img-fluid").click(function() {
     var idImage = $(this).attr('id');
     if(idImage === "1.jpg"){
         $('.img-fluid').attr("src","2.jpg");
     }
     else{
         $('.img-fluid').attr("src","3.jpg");
     }
 });