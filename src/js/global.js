// var title = document.getElementById('title');
var title = document.querySelectorAll('li');
console.log(title);
var classMove = 'move';

title.forEach(function(item, i) {
  item.addEventListener('mouseover', function() {
    item.classList.add(classMove);

    setTimeout(function(){
      item.classList.remove(classMove);
    }, 4000);
  });
});

// title.addEventListener('mouseover', function() {
//   title.classList.add(classMove);
//
//   setTimeout(function(){
//     title.classList.remove(classMove);
//   }, 3000);
// });
