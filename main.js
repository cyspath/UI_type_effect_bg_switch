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
    $(".caption-text").html(text)
  }.bind(this), 50)

}

$(document).ready(function () {

  type(0)

  $('button').click(function() {
    location.reload();
  })




  var slideCaptions = ["First Line", "Second Line", "Third Line", "Last Line will have this type effect"]
$('.typewriter-front').hide()


function titleCaptions(i) {
    console.log("n");
    if (i == 3) {
      var arr = slideCaptions[i].split("");
      var text = ""
      var idx = 0

      var interval = setInterval(function () {
        if (idx == arr.length - 1) {
          clearInterval(interval)
        }
        text += arr[idx]
        idx += 1
        $('.typewriter-front').html(text)
      }.bind(this), 100)
    }

    $('.typewriter-front').html(slideCaptions[i])
    $('.typewriter-front').fadeIn(500, function() {
      setTimeout(function() {
        if (i < 3) {
          $('.typewriter-front:visible').fadeOut(500, function() {
              titleCaptions(i + 1)
          }.bind(this))
        }
      }.bind(this), 2000)
    }.bind(this))
  }

   setTimeout(function() {
    titleCaptions(0)
   }.bind(this), 300)

})
