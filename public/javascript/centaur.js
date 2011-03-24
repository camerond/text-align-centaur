$(function() {

  var centaur = 'ooox|ooxxx|ooxxx|ooxxx|ooxxx|ooxxx|ooxxx|xxxxxxxooooooxxxxx|ooxxxoooooooxxxxxxxoooooooxxx|ooxxxoooooooxxxxxxxoooooooxxx|ooxxxoooooooxxxxxxxoooooooxxx|ooxxxoooooooooxxxoooooooooxxx|ooxxxxoooooooxxxxxoooooooxxxx|ooooxxxxxxxxxxxxxxxxxxxxxxxx|oooooooooxxxxxxxxxxxxx|oooooooooooxxxxxxxxxx|oooooooooooxxxxxxxxxx|oooooooooooxxxxxxxxxx|oooooooooooxxxxxxxxxx|ooooooooooxxxxxxxxxxxxxxooooooooooooooxxxxxxxxxx|oooooooooxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|oooooooooxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|ooooooooxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|ooooooooxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|oooooooooxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxoxxxxx|ooooooooooxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxoooxxxx|oooooooooooxxxxxxxxoooooooooooooooooxxxxxxxxxxxxxoooooxxxx|ooooooooooooxxxxxxooooooooooooooooooooxxxxxxxxoooooooxxxx|oooooooooooooxxxxooooooooooooooooooooooxxxxxxooooooooxxx|ooooooooooooxxxxoooooooooooooooooooooooxxxxxoooooooooxx|oooooooooooxxxxoooooooooooooooooooooooxxxxxooooooooooxx|ooooooooooooxxxxoooooooooooooooooooooooxxxxxooooooooox|ooooooooooooxxxxoooooooooooooooooooooooxxxxx|oooooooooooooxxxxooooooooooooooooooooooxxxx|oooooooooooooxxxxooooooooooooooooooooooxxxx|ooooooooooooxxxxxxooooooooooooooooooooxxxxxx|ooooooooooooxxxxxxooooooooooooooooooooxxxxxx|';

  $("input[type='submit']").click(function() {
    var text = $("textarea").text().replace(/[^a-zA-Z0-9]/g, '').split('').reverse();
    var centaured_text = [];
    var character;
    for (var i =  0; i < centaur.length; i++) {
      var c = centaur[i];
      if (c === 'o') {
        centaured_text.push(' ');
      } else if (c === 'x') {
        centaured_text.push(text.pop());
      } else if (c === '|') {
        centaured_text.push('\n');
      }
    }
    $("textarea").text(centaured_text.join('') + text.reverse().join(''));
  });

});