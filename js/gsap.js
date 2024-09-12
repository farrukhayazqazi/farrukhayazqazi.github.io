const tl = gsap.timeline()

tl.from("#navbar-logo",{
  y:-90,
  opacity: 0,
});

tl.from("#navbarNav .nav-item", {
  y:-40,
  opacity: 0,
  stagger: 0.3,
  duration: 0.1,
});

tl.from("#about-text", {
  x:-1200,
  opacity: -2,
});
gsap.utils.toArray("#projects .project-div").forEach((project) => {
  gsap.from(project, {
    opacity: 0,
    y: 40,
    duration: 1.5,
    scrollTrigger: {
      trigger: project,
      start: "top 100%",  // When the top of the element reaches 80% of the viewport
      toggleActions: "play none none none",
      once: true         // Only trigger once
    }
  });
});