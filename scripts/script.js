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

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select').html(langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
   var langIndex = langArray.indexOf('ch');
  $('.btn-select').html(langArray[langIndex]);
}
let changeElement = document.querySelectorAll('.b #a li');
let elFirst = changeElement[0].children[0].textContent;
let elSecond = changeElement[1].children[0].textContent;
let link = '';
let link2 = '';
let pathName = document.location.pathname;
// console.log(pathName.indexOf("team") !== -1);
if (elFirst == 'Ру') {
  link = document.createElement('a');
  if (pathName.indexOf("team") !== -1) {
    link.href = 'team';
  } else {
    link.href = '/ru';
  }
  link.appendChild(changeElement[0]);

  link2 = document.createElement('a');
  if (pathName.indexOf("team") !== -1) {
    link2.href = '/team';
  } else {
    link2.href = '/';
  }
  link2.appendChild(changeElement[1]);
}
else {
  link = document.createElement('a');
  if (pathName.indexOf("team")  !== -1) {
    link.href = 'team';
  } else {
    link.href = '/';
  }
  link.appendChild(changeElement[0]);

  link2 = document.createElement('a');
  if (pathName.indexOf("team")  !== -1) {
    link2.href = 'ru/team';
  } else {
    link2.href = 'ru';
  }
  link2.appendChild(changeElement[1]);
}
document.querySelector('.b #a').appendChild(link)
document.querySelector('.b #a').appendChild(link2)

$('.btn-select').append('<img src="/img/icons/keyboard.svg" alt="youtube" class="glll">')


document.querySelector('.wrapper-burder-menu').addEventListener('click', function() {
  // document.querySelector('.burger-menu-display').style.display = 'block';
  document.querySelector('.burger-menu-display').style.left = 0;
});

document.querySelector('.wrapper-close').addEventListener('click', function() {
  // document.querySelector('.burger-menu-display').style.display = 'none';
  document.querySelector('.burger-menu-display').style.left = "100%";
});

document.querySelector('.burger-menu-display').addEventListener('click', function() {
  if (e.target.tagName === 'A') {
    // document.querySelector('.burger-menu-display').style.display = 'none';
    document.querySelector('.burger-menu-display').style.left = "100%";
  }
});