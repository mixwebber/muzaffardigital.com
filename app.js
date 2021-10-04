let btnOpen = document.querySelectorAll('button');


btnOpen.forEach(function(el){
    el.addEventListener('click', () => {
    window.open ("https://www.google.com", '_blank');
});
});



//* document.getElementById("eventClick").onclick = function () {location.replace ("biz.html")};
//* document.getElementById("but").onclick = function () {window.open ("http://google.com", '_blank')}
