$(document).ready(function(){
    $("button#new").click(function(){
    $(".container1").hide();
    $(".container2").show();


var name =$('#namee').val();
console.log(name)
 $('#dg').text(name);
 var maman =$('#initial').val();
console.log(maman)
 $('#mg').text(maman);
 

 });


});