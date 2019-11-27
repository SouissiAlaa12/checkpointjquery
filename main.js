document.getElementById("bold_button").addEventListener("click",function(){
    bold()
})

function bold()
{
 if(document.getElementById("modi").style.fontWeight=="bold") {
    (document.getElementById("modi").style.fontWeight="normal");
   
 }
 else 
 
    (document.getElementById("modi").style.fontWeight="bold")  ;
  


 
}
function italic()
{
    document.getElementById("modi").style.fontStyle="italic" ; 
}
function under()
{
    document.getElementById("modi").style.textDecoration="underline" ;
}
function selection()
{
    document.getElementById("modi").style.fontSize=document.getElementById("selection").value ;
 
}
function police()
{
    document.getElementById("modi").style.fontFamily=document.getElementById("font").value ;
 
}
$(document).ready(function(){

   
    $("img").mouseenter(function(){
      $(".btn").show();
      $(".coverimg").show() ; 
      
    });

    $("img").mouseleave(function(){
        $(".btn").hide();
        $(".coverimg").hide() ;
      });
 
    
   $(".btn").click(function(){
     
      $(".cover").fadeIn("slow") ; 
      $(".alert").fadeIn();
    });
    $("#close").click(function(){
      $(".alert").fadeOut();
      $(".cover").fadeOut("slow") ;
    });
  });

