var centaur = '   x|  xxx|  xxx|  xxx|  xxx|  xxx|  xxx|xxxxxxx      xxxxx|  xxx       xxxxxxx       xxx|  xxx       xxxxxxx       xxx|  xxx       xxxxxxx       xxx|  xxx         xxx         xxx|  xxxx       xxxxx       xxxx|    xxxxxxxxxxxxxxxxxxxxxxxx|         xxxxxxxxxxxxx|           xxxxxxxxxx|           xxxxxxxxxx|           xxxxxxxxxx|           xxxxxxxxxx|          xxxxxxxxxxxxxx              xxxxxxxxxx|         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxx|          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxx|           xxxxxxxx                 xxxxxxxxxxxxx     xxxx|            xxxxxx                    xxxxxxxx       xxxx|             xxxx                      xxxxxx        xxx|            xxxx                       xxxxx         xx|           xxxx                       xxxxx          xx|            xxxx                       xxxxx         x|            xxxx                       xxxxx|             xxxx                      xxxx|             xxxx                      xxxx|            xxxxxx                    xxxxxx|            xxxxxx                    xxxxxx|';
var lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor, leo non varius cursus, sapien nulla fermentum nisl, sit amet faucibus lorem ligula a lorem. Vestibulum scelerisque sem tortor. Nulla dignissim mattis mattis. Proin tincidunt sapien non purus sagittis iaculis ac non urna. Cras sodales dapibus diam, at auctor neque cursus mattis. Vestibulum nec porta urna. Suspendisse eros erat, pulvinar vel facilisis id, gravida vel sapien. Donec aliquam ante sed leo egestas varius. Fusce imperdiet nulla lacinia massa feugiat a commodo justo ullamcorper. Aliquam tincidunt consequat ornare. Vestibulum tristique suscipit nibh eu dignissim. Donec nec elit elit, sit amet pellentesque dolor. Aenean volutpat odio vel turpis posuere eu feugiato.';

document.addEventListener("DOMContentLoaded", function() {
  var qs = function(sel) { return document.querySelector(sel); };
  var textarea = qs("textarea");
  var message = qs("#message");
  textarea.innerHTML = lipsum;
  qs("input[type=submit]").addEventListener("click", function() {
    var text = textarea.value.replace(/[^a-zA-Z0-9]/g, '');
    var centaured_text = [];
    if(text.length >= centaur.replace(/[^a-zA-Z0-9]/g, '').length) {
      text = text.split('').reverse();
      for (var i =  0; i < centaur.length; i++) {
        var c = centaur[i];
        if (c === '|') {
          centaured_text.push('\n');
        } else if (c === ' ') {
          centaured_text.push(c);
        } else {
          centaured_text.push(text.pop());
        }
      }
      textarea.value = centaured_text.join('') + text.reverse().join('');
    } else {
      message.innerHTML = "Cannot Centaur Text: Needs More Letters";
    }
  }, false);
}, false);
