var langArray = [];
$('.vodiapicker option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><span>'+ text +'</span><img src="'+ img +'" alt="" value="'+value+'"/></li>';
  langArray.push(item);
})

$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'en');

//change button stuff on click
$('#a li').click(function(){
   var img = $(this).find('img').attr("src");
   var value = $(this).find('img').attr('value') + "233";
   var text = this.innerText;
   var item = '<li class="2323"><span class="itemadd">'+ text +'</span><img src="'+ img +'" alt="" /></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $(".b").toggle();
  //console.log(value);
});

// $(".btn-select").click(function(){
//         if ($(".b").css("display") == 'none') {
//           document.querySelector('.glll').style.transform = 'rotate(-90deg)';
//         } else {
//           document.querySelector('.glll').style.transform = 'rotate(90deg)';
//         }
//         $(".b").toggle();
// });

$(".btn-select").click(function() {
  if ($(".b").css("display") == 'none') {
    document.querySelector('.glll').style.transform = 'rotate(-90deg)';
  } else {
    document.querySelector('.glll').style.transform = 'rotate(90deg)';
  }
  $('.b').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".lang-select").length) {
    $('.b').hide();
  }
  if ($(".b").css("display") == 'none') {
    document.querySelector('.glll').style.transform = 'rotate(90deg)';
  } else {
    document.querySelector('.glll').style.transform = 'rotate(-90deg)';
  }
  e.stopPropagation();
});

// $(document).mouseup(function (e) {
//   var container = $(".b");
//   if (container.has(e.target).length === 0){
//       container.hide();
//   }
//   document.querySelector('.glll').style.transform = 'rotate(90deg)';
// });

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select').html(langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
   var langIndex = langArray.indexOf('ch');
  $('.btn-select').html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}
let changeElement = document.querySelectorAll('.b #a li');
let elFirst = changeElement[0].children[0].textContent;
let elSecond = changeElement[1].children[0].textContent;
let link = '';
let link2 = '';
let pathName = document.location.pathname;
console.log(pathName.indexOf("about"));
if (elFirst == 'Ру') {
  link = document.createElement('a');
  if (pathName.indexOf("about") === 1) {
    link.href = 'about_ru.html';
  } else {
    link.href = 'main_ru.html';
  }
  link.appendChild(changeElement[0]);

  link2 = document.createElement('a');
  if (pathName.indexOf("about") === 1) {
    link2.href = 'about_en.html';
  } else {
    link2.href = 'index.html';
  }
  link2.appendChild(changeElement[1]);
}
else {
  link = document.createElement('a');
  if (pathName.indexOf("about")  === 1) {
    link.href = 'about_en.html';
  } else {
    link.href = 'index.html';
  }
  link.appendChild(changeElement[0]);

  link2 = document.createElement('a');
  if (pathName.indexOf("about")  === 1) {
    link2.href = 'about_ru.html';
  } else {
    link2.href = 'main_ru.html';
  }
  link2.appendChild(changeElement[1]);
}
document.querySelector('.b #a').appendChild(link)
document.querySelector('.b #a').appendChild(link2)

// var regexp = /limit=([^&]+)/i;
//     var GetValue = '';
//     if (!!regexp.exec(document.location.search)) 
//         GetValue = regexp.exec(document.location.search)[1];
$('.btn-select').append('<img src="img/icons/keyboard.svg" alt="youtube" class="glll">')
console.log(document.location.pathname);