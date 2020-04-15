function getIt() {
  alert("Hey!")
}

function frameIt() {
 $("img").addClass("tasty");
  'img'.class ='tasty'
}

function pressIt() {

  if ('G') {
    alert('You pressed a G key')
    return
  }
  else {
    return
  }


}
function submitIt() {
  alert("Your form is going to be submitted now.")
  return
}

$(document).ready(function(){

  $('p').on('click',getIt())

  $('img').on('load', frameIt())

  $("input").on('keypress', pressIt())


  $("form").on("submit", submitIt())

});
