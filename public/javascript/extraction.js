$.get('/centaur.txt', function(data) {

  var output = [];

  for (var i = 0; i < data.length; i++) {
    switch(data[i]) {
      case 'D':
        output.push('x');
        break;
      case ' ':
        output.push('o');
        break;
      case '\n':
        output.push('|');
    }
  }
  $('textarea').text(output.join(','));

});

