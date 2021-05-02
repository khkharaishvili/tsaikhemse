let addb = document.getElementsByClassName('add');
let len = addb.length;
for (let i = 0; i < len; i++) {
  addb[i].addEventListener('click', function() {
    this.classList.toggle('added');
    if (this.classList.contains('added')) {
      this.textContent = "დამატებულია";
    } else {
          this.textContent = "დამატება";
    }
  });
}

// burger menu 
const	burger = document. getElementById('burger');
const menu = document.getElementById('menu')
burger.addEventListener('click',function(){
	this.classList.toggle('active');
	menu.classList.toggle('open');

})

  function scrollToBottom() {
    let element = document.getElementById('contact-info');

    element.scrollIntoView();
    element.scrollIntoView(false);
    element.scrollIntoView({block: "end"});
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

  }
