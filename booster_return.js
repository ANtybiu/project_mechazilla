 const target = document.getElementById("triggerHeaderWhite")
 const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          header.style.background = "rgb(255,255,255,1)";
          header.style.boxShadow = "0rem 0rem 1rem rgba(0,0,0,0.5)"
        } else if(entry.isIntersecting){
          header.style.background = "rgb(255,255,255,0)";
          header.style.boxShadow = "0rem 0rem 0rem rgba(0,0,0,0.5)"
        }
      });
    });

    observer.observe(target);


      const carousel = document.getElementById("services-carousel");
  const controls = document.querySelectorAll(".cc");

  let index = 0;
  const cards = carousel.children.length;

  function updateCarousel() {
    // Each card is 45vw wide + 1vw gap (from your CSS gap: 1rem ≈ 1vw visually)
    const cardWidth = 50; // 45vw card + ~1vw gap
    carousel.style.transform = `translateX(${-index * cardWidth}vw)`;
  }

  controls.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      if(index === -4 && i === -1){return};
      if(index === 4 && i === 1){return}
      if(i!==1){
        i = -1;
      }
      index += i;
      console.log(i,index)
      const allBoxes = document.querySelectorAll(".services-box");
      allBoxes.forEach(box=>{
       box.style.scale = 0.9;
      box.style.opacity = 0.5;
      })
      document.getElementById(`sb${index}`).style.scale = 1;
      document.getElementById(`sb${index}`).style.opacity = 1;
      updateCarousel();
    });
  });

  // Align to the first card initially
  updateCarousel();