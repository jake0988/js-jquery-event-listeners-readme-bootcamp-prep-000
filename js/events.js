function getIt() {

  $('p').on('click', function(){
      //console.log(e)
      alert("Hey!")
  })


}

function frameIt() {
  $('img').on('load', function() {
    $("img").addClass("tasty");
     //'img'.class ='tasty'
  })

}

// function pressIt() {
// //'#typing'
//     $('input').on('keydown', function(e)) {
//       console.log(e);
//   if $('e' == '71') {
//     alert('You pressed a G key')
//
//   }
//   return
// })
// }
// function submitIt() {
//   $("form").on("submit", function() {
//     alert("Your form is going to be submitted now.")
//     return
//   })
// }

$(document).ready(function(){

  $('p').on('click',getIt())

  $('img').on('load', frameIt())

  $("input").on('keydown', pressIt())


  $("form").on("submit", submitIt())

});
