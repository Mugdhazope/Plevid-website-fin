/* ===( CODE AASHU )=== */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

let locoScroll = null;
let refreshHandler = null;

function has(selector) {
  return !!document.querySelector(selector);
}

function clearLandingScroll() {
  if (refreshHandler) {
    ScrollTrigger.removeEventListener('refresh', refreshHandler);
    refreshHandler = null;
  }

  if (has('#main')) {
    ScrollTrigger.scrollerProxy('#main', {
      scrollTop(value) {
        return arguments.length ? window.scrollTo(0, value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: 'fixed',
    });
  }
}

function loco() {
  const main = document.querySelector('#main');
  if (!main) return;

  gsap.registerPlugin(ScrollTrigger);

  locoScroll = new LocomotiveScroll({
    el: main,
    smooth: true,
  });

  locoScroll.on('scroll', ScrollTrigger.update);

  ScrollTrigger.scrollerProxy('#main', {
    scrollTop(value) {
      if (!locoScroll?.scroll?.instance?.scroll) {
        return arguments.length ? window.scrollTo(0, value) : window.scrollY;
      }

      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: main.style.transform ? 'transform' : 'fixed',
  });

  refreshHandler = () => {
    if (locoScroll) locoScroll.update();
  };
  ScrollTrigger.addEventListener('refresh', refreshHandler);

  ScrollTrigger.refresh();
}

function loader() {
  if (!has('.page1-roll-track')) return;

  var tl1 = gsap.timeline({})

  tl1
    .from(".page1-roll-track", {
      opacity: 0,
      duration: 1,
    }, "a")
    .from(".page1-brand__word", {
      y: 48,
      opacity: 0,
      duration: 0.9,
    }, "a")
    .from(".page1-meta--br", {
      opacity: 0,
      y: 10,
      duration: 0.5,
    }, "a")
}

function pgOne() {
  if (!has('#page1')) return;

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top top",
      end: "top -150%",
      scrub: 4,
      pin: true
    }
  })
  tl
    .to(".page1-left", {
      opacity: 0.12,
      y: -40,
    }, "a")
    .to(".page1-meta--br", {
      opacity: 0,
    }, "a")
    .to(".page1-right", {
      opacity: 0.85,
    }, "a")
}

function initMenuTheme() {
  const menu = document.querySelector(".plevid-staggered-menu")
  if (!menu || !has('#page2')) return

  menu.classList.add("plevid-staggered-menu--light")

  ScrollTrigger.create({
    trigger: "#page2",
    scroller: "#main",
    start: "top 90%",
    onEnter: () => {
      menu.classList.remove("plevid-staggered-menu--light")
      menu.classList.add("plevid-staggered-menu--dark")
    },
    onLeaveBack: () => {
      menu.classList.remove("plevid-staggered-menu--dark")
      menu.classList.add("plevid-staggered-menu--light")
    },
  })
}

export function scrollToSection(href) {
  const target = document.querySelector(href)
  if (!target || !locoScroll) return
  locoScroll.scrollTo(target)
}

function pgTwo(){
  if (!has('#page2')) return;

  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page2",
      scroller:"#main",
      // markers:true,
      start:"top 70%",
      end:"top 55%",
      scrub:2
    }
  })
  tl
  .from("#down #line1",{
    width:"0%"
  },"a")
  .from("#down #line2",{
    height:"0%"
  },"a")

  gsap.from("#page2 #line",{
    height:"0%",
    scrollTrigger:{
      trigger:"#page2",
      scroller:"#main",
      // markers:true,
      start:"top 10%",
      end:"top -10%",
      scrub:2
    }
  })
}

function page3(){
  if (!has('#page3')) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top top",
      end: "top -100%",
      scrub: 2,
      pin: true,
    },
  })

  tl.from("#page3 #l1", { width: "0%" }, 0)
    .from("#page3 #line3-vt", { height: "0%" }, 0)
    .fromTo("#page3 .igs", {
      width: "65%",
      height: "75%",
    }, {
      width: "100%",
      height: "100%",
      ease: "none",
    }, 0)
    .fromTo("#page3 .igs h2, #page3 .igs h5", {
      scale: 1,
      opacity: 0.7,
      marginTop: 0,
    }, {
      scale: 2,
      opacity: 1,
      marginTop: 10,
      ease: "none",
    }, 0)
    .from("#page3 #l2", { width: "0%" }, 0.85)
}

function eightAnime(){
  if (!has('#page4 img')) return;

  gsap.to("#page4 img",{
    scale:20,
    rotate:90,
    y:"-500%",
    x:"40%",
    scrollTrigger:{
      trigger:"#page4",
      scroller:"#main",
      // markers:true,
      start:"16% 0%",
      end:"top -150%",
      scrub:1,
      pin:true
    }
  })
}

function pg5(){
  if (!has('#page5')) return;

  var tl5 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page5",
      scroller:"#main",
      // markers:true,
      start:"top 0%",
      end:"top -300%",
      scrub:2,
      pin:true
    }
  })
  tl5
  .to("#pt1",{
    clipPath: "ppolygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
  },"a")
  .to("#pt2",{
    clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
  },"a")
  .to("#pt3",{
    clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
  })
}

function pg6(){
  if (!has('#page6')) return;

  var tl6 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      // markers:true,
      start:"top 65%",
      end:"top 40%",
      scrub:2,
    }
  })
  tl6
  .from("#line6-vt",{
    height:"0"
  },"h")
  .from("#line6",{
    width:"0"
  },"h")
  .from("#line6-h",{
    width:"0",
  },"h")

  var tl7 = gsap.timeline({
    scrollTrigger:{
      trigger:"#elem3",
      scroller:"body",
      // markers:true,
      start:"top 80%",
      end:"top 70%",
      scrub:2,
    }
  })
  tl7
  .from("#linee",{
    width:"0",
  })
  .from("#para p",{
    transform:"translateY(100%)"
  })
}

function initPage9Overlays() {
  var over = document.querySelectorAll("#page9 .over")
  if (!over.length) return;

  over.forEach(function(ov){
    gsap.to(ov,{
      width:"0%",
      scrollTrigger:{
        trigger:ov,
        scroller:"#main",
        // markers:true,
        start:"top 45%",
        end:"top -20%",
        scrub:true
      }
    })
  })
}

function initPage13() {
  if (!has('#page13')) return;

  var tl13 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page13",
      scroller:"#main",
      // markers:true,
      start:"top 45%",
      end:"top -30%",
      scrub:2
    }
  })
  tl13
  .from("#page13 #one",{
    y:"25%"
  },"a")
  .from("#page13 #two",{
    y:"45%",
  },"a")
  .from("#page13 #three",{
    y:"36%"
  },"a")
}

function initPage10() {
  if (!has('#page10')) return;

  var tl10 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page10",
      scroller:"#main",
      // markers:true,
      start:"top 70%",
      end:"top 40%",
      scrub:2,
    }
  })
  tl10
  .from("#li2",{
    height:"0"
  },"h")
  .from("#li1",{
    width:"0"
  },"h")
}

function initPage14() {
  if (!has('#page14')) return;

  var tl14 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page14",
      scroller:"#main",
      // markers:true,
      start:"top 30%",
      end:"top 10%",
      scrub:2,
    }
  })
  tl14
  .from("#line14-v",{
    height:"0"
  },"h")
  .from("#line14",{
    width:"0"
  },"h")
}

function initAnchorLinks() {
  document.querySelectorAll('a[href^="#"]:not(.sm-panel-item):not(.sm-logo-link)').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target || !locoScroll) return;

      event.preventDefault();
      locoScroll.scrollTo(target);
    });
  });
}

export function initAnimations() {
  if (!has('#main')) return;

  loco()
  initAnchorLinks()
  initMenuTheme()
  loader()
  pgOne()
  pgTwo()
  page3()
  eightAnime()
  pg5()
  pg6()
  initPage9Overlays()
  initPage13()
  // initPage10() — page10 commented out
  initPage14()
}

export function destroyAnimations() {
  ScrollTrigger.getAll().forEach((t) => t.kill());

  if (locoScroll) {
    locoScroll.destroy();
    locoScroll = null;
  }

  clearLandingScroll();
}
