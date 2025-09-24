 const compHeader = document.getElementById("header-computer")
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
    console.log(header)

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
      if(index === -5 && i === -1){return};
      if(index === 5 && i === 1){return}
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const Rcarousel = document.getElementById("reviews-carousel");
  const Rcontrols = document.querySelectorAll(".rc");

  let Rindex = 0;
  const Rcards = carousel.children.length;

  function RupdateCarousel() {
    const cardWidth = 72;
    Rcarousel.style.transform = `translateX(${-Rindex * cardWidth}vw)`;
  }

  Rcontrols.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      if(Rindex === -2 && i === -1){return};
      if(Rindex === 2 && i === 1){return}
      if(i!==1){
        i = -1;
      }
      Rindex += i;
      const allBoxes = document.querySelectorAll(".reviews-box");
      allBoxes.forEach(box=>{
       box.style.scale = 0.9;
      box.style.opacity = 0.5;
      })
      document.getElementById(`rb${Rindex}`).style.scale = 1;
      document.getElementById(`rb${Rindex}`).style.opacity = 1;
      RupdateCarousel();
    });
  });


  RupdateCarousel();
  
   const target1 = document.querySelector(".triggerHeaderGoner")
 const observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          header.style.top = "-3.5rem"
        
        } else if(!entry.isIntersecting){
          header.style.top = "0"
           
        }
      });
    });

    observer1.observe(target1);
    const footer = document.getElementById('footer')
       const target12 = document.querySelector(".triggerFooterBigger")
 const observer12 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footer.style.scale = '1';
            compHeader.style.top = "-3.5rem";
        } else if(!entry.isIntersecting){
          footer.style.scale = "0.9";
          compHeader.style.top = "0"
        }
      });
    });

    observer12.observe(target12);

    let headerPoped = false;

    function headerPop(){
      if(!headerPoped){
        headerPoped = !headerPoped
      document.getElementById('header-popout').style.display = "flex"
      document.getElementById("blur").style.display = "block";
      document.getElementById('header-hamburger').src="assets/close.png"
      }else{
        headerPoped = !headerPoped
        document.getElementById('header-popout').style.display = "none"
      document.getElementById("blur").style.display = "none";
      document.getElementById('header-hamburger').src="assets/hamburger.png"
      }
    }