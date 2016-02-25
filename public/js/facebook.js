function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }

  function changeUser(response) {
    $('#name').text(response.name);
    $('.facebookLogin').hide();
    $('#photo').attr('src', 'https://scontent.xx.fbcdn.net/hprofile-xtl1/v/t1.0-1/p480x480/1528462_10203497470467971_3938249349003251383_n.jpg?oh=9b40e648e1fe4dbdbc4ea22330ce6bbc&oe=5751D609');
    console.log(response);
  }
}