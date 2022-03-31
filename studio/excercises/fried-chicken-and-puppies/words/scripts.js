$(function(){

 $("select").on("change",function(){

  $("p").hide();
  $("."+this.value).show();

 });

});