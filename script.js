function homepageAnimation() {
  gsap.set(".slidesm", { scale: 8 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });
  tl.to(
    ".video",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  );
  tl.to(
    ".slidesm",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  ),
    tl.to(
      ".slidesm",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    );
  tl.to(
    ".lft",
    {
      xPercent: -10,
      stagger: 0.03,
      ease: Power4,
    },
    "b"
  );
  tl.to(
    ".rgt",
    {
      xPercent: 10,
      stagger: 0.03,
      ease: Power4,
    },
    "b"
  );
}
function realpageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom ",
      scrub: 1,
    },
    xPercent: -200,
    ease: Power4,
  });
}
function ourTeamAnimation() {
  document.querySelectorAll(".listelem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
    });
    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}
function loco(){
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function capsulesAnimation(){
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger:{
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1
    },
    y: 0,
    ease: Power4,
  })
}
function bodycolorChange(){

  document.querySelectorAll(".section").forEach(function(e){
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function(){
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function(){
        document.body.setAttribute("theme", e.dataset.color);
      },
  
    })
  })
}

loco();
homepageAnimation();
realpageAnimation();
ourTeamAnimation();
capsulesAnimation();
bodycolorChange();
