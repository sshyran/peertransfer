var helpers = require('./helpers')

var events = function(){

  body = $('body')
  stage = $('#stage')
  back = $('a.back')
  var file = null
  var url = ''

  $('#step1 .button').css('cursor', 'default')
  $('#step1').on('change', '#send-input', function(e){
    helpers.sendOnIncoming(conn, e.target.files[0], password)
    body.attr('class', 'send')
    helpers.step(2)
  })
  back.click(function() { // The back button
    $('#send-input').replaceWith(function() {
      return $(this).clone() // Reinitialize the hidden file input
    })
    if (anchor) {
      window.location.hash = ''
      helpers.visualReadyStatus()
    }
    helpers.step(1)
  })

}
module.exports = events
