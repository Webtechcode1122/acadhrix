document.addEventListener("DOMContentLoaded", () => {
    // GSAP Scramble Text Effect
    gsap.registerPlugin(TextPlugin, ScrollTrigger);

    gsap.to(".scramble-text", {
        duration: 2,
        text: {
            value: "Are you ready to explore the fascinating worlds of Metallurgy, Material Science, Geography, Biosciences, and more with AcaDhrix ?!!",
            scrambleText: true
        },
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: ".scramble-text",
            start: "top 75%",
        }
    });

    // GSAP Scroll Reveal Animations
    gsap.utils.toArray(".fade-in-up").forEach((element) => {
        gsap.fromTo(element, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
});
