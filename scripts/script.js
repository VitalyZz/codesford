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

$(".btn-select").click(function(){
        $(".b").toggle();
    });

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
if (elFirst == 'Ру') {
  link = document.createElement('a');
  link.href = 'index.html';
  link.appendChild(changeElement[0]);

  link2 = document.createElement('a');
  link2.href = 'main_en.html';
  link2.appendChild(changeElement[1]);
}
else {
  link = document.createElement('a');
  link.href = 'main_en.html';
  link.appendChild(changeElement[0]);

  link2 = document.createElement('a');
  link2.href = 'index.html';
  link2.appendChild(changeElement[1]);
}
document.querySelector('.b #a').appendChild(link)
document.querySelector('.b #a').appendChild(link2)

// console.log(document.querySelector('.b #a'));