 var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
setTimeout(ml3, 5000);
function ml3(){
    anime.timeline()
      .add({
        targets: '.ml3 .letter',
        opacity: [0,1],
        delay: (el, i) => 150 * (i+1)
      }).add({
        targets: '.ml3',
        duration: 500
      });
}
jQuery(document).ready(function(){
//carousel 
    jQuery("#products-carousel").owlCarousel({
        items: 3,
        responsiveClass: true,
        responsive: {
            0:{
              items: 1
            },
            480:{
              items: 1
            },
            769:{
              items: 2
            },
            1200:{
              items: 3
            }
            
        },
        margin: 15,
        loop: false, 
        nav:true,
        navText : ["",""]
    });
    // products read more/less 
    $('.read-more-btn').click(function() {
      if ($(this).text() == "Read more") {
        $(this).text("Read less")
      } else {
        $(this).text("Read more")
      }
    });

});