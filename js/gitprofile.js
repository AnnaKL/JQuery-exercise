$(document).ready(function() {

  $('.gitprofile').on('submit', function(event) {

    event.preventDefault();

    var access_token = '4ee5410ff88557ba62ee3aad6ada0df0353176c6';
    var url = 'https://api.github.com/users/' + $('input.username').val() + '?access_token=' + access_token;

    var template = $('template').html();

    $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template, info));
    }).fail(function() {
      $('.container').prepend("User not found")
    }).always(function() {
      $('input.username').val('');
    });

  });

});