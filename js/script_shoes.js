const linkText = document.querySelector('.link-text');
const linkImage = document.querySelector('.link-image');

function showImgContent(e) {
  x = e.clientX;
  y = e.clientY;
  if(linkImage && linkText){
   linkImage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
	  linkText.style.setProperty('--x',(x)+'px');
	  linkText.style.setProperty('--y',(y)+'px');
  }
}

document.addEventListener('mousemove', showImgContent);



// $(document).ready(function(){
//   $(".small_img").hover(function(){
//     $("#main_img").src();
//   });

// })


// function bigger(){ 
//   id.syle.src="5.jpg";
// }



$(document).ready(function (){
  $(".small_inner_link").click(function(){
    $("#showBox"). attr("src", $(this).attr('href'));
      return false;
  });
})


// $(function (){
//   var $showImage = $("#showBox");

//   $(".display_small_box ul li a").mouseover(function(){
//     $sjowImage.attr("src", $(this).attr("href"));
//   }).click(function(){
//     return false;});

//   });
