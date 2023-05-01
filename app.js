window.onload = function() {
    Particles.init({
     selector: ".background",
     speed: ".9",
     connectParticles: true,
     color: ["#21fffc", "#404B69", '#2d303a'],
     responsive: [
      {
       breakpoint: 800,
       options: {
        color: "#DA0463",
        maxParticles: 80,
        connectParticles: false
       }
      }
     ]
    });
   };
   