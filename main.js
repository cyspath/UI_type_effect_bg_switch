var texts = [
  "Stroll upon a rocky mountain pass",
  "In the shire of ‘Nowhere’",
  "To a world so green, so very full of grass... Actually the purpose of this line is to be long.",
  "In a town called ‘Someplace’."
]

var imgs = [".img-1", ".img-2", ".img-3", ".img-4"]

function type(i) {
  $(imgs[i]).fadeIn(1000);

  var arr = texts[i].split("");
  var text = ""
  var idx = 0

  var interval = setInterval(function () {
    if (idx == arr.length - 1) {
      clearInterval(interval)
      if (i < imgs.length - 1) {
        setTimeout(function() {
          var selector = imgs[i]+":visible"
          $(selector).fadeOut(2000, type(i + 1))
        }.bind(this), 1700)
      }
    }
    text += arr[idx]
    idx += 1
    $("p").html(text)
  }.bind(this), 50)

}

$(document).ready(function () {

  type(0)

  $('button').click(function() {
    location.reload();
  })

})
