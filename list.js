// This code runs when the page loads
$(function() {

  $(".to-do").on("click", function(event) {
    var elementThatWasClicked = $(this)
    elementThatWasClicked.parent().remove()
  })

})
