<template>
  <div>
    <div class="card-container"></div>
    <div class="heart-container">
      <i class="fas fa-heart"></i>
    </div>
    <p id="loading-text">Loading...</p>
    <p id="line1">Wow, this is something special...</p>
    <p id="line2">Her favorite color is purple right?</p>
    <p id="line3">And she makes him smile a lot</p>
    <p id="line4">A little too much actually</p>
    <p id="line5">But that's okay, it's how he knows he likes her</p>
    <p id="line6">And even though she has a boba addiction...</p>
    <p id="line7">And terrible food allergies 😉</p>
    <p id="line8">He still wants to spend many more days with her</p>
    <p id="line9">And because of that he has a question to ask</p>
    <div class="card-container-special"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";

let containerTl = gsap.timeline();
let heartTl = gsap.timeline();
let loadingTl = gsap.timeline();
let specialTl = gsap.timeline();

function unfade(element) {
  var op = 0.1; // initial opacity
  element.style.display = "block";
  var timer = setInterval(function() {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 20);
}

function fade(element) {
  var op = 1; // initial opacity
  var timer = setInterval(function() {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}

export default {
  computed: {
    loading() {
      return this.$store.state.partnerForm.isLoading;
    }
  },
  watch: {
    loading(isLoading) {
      if (isLoading) {
        containerTl.add();
        containerTl.to(".card-container", {
          scaleY: 3,
          duration: 1.25,
          ease: "power4.out"
        });
        containerTl.to(".card-container", {
          scaleX: 1.3,
          duration: 1.5,
          ease: "power4.out"
        });

        heartTl.add();
        heartTl.to(".heart-container", {
          y: -250,
          duration: 1.5,
          ease: "back.out(1.7)"
        });
        heartTl.add();
        heartTl.to(".heart-container", {
          scaleX: 1.1,
          scaleY: 1.1,
          repeat: -1,
          duration: 1,
          yoyo: true
        });

        loadingTl.add();
        loadingTl.to("#loading-text", {
          opacity: 1,
          duration: 1.5,
          delay: 1
        });

        containerTl.play();
        heartTl.play();
        loadingTl.play();

        if (this.$store.state.partnerForm.isSpecial) {
          let that = this;
          specialTl.add();
          specialTl.to("#loading-text", {
            opacity: 0,
            duration: 1,
            delay: 10
          });
          specialTl.add();
          specialTl.to("#line1", {
            opacity: 1,
            duration: 1
          });
          specialTl.add();
          specialTl.to("#line1", {
            opacity: 0,
            duration: 1,
            delay: 3
          });
          specialTl.add();
          specialTl.to("#line2", {
            opacity: 1,
            duration: 1
          });
          specialTl.add();
          specialTl.to("#line2", {
            opacity: 0,
            duration: 1,
            delay: 3
          });
          specialTl.add();
          specialTl.to("#line3", {
            opacity: 1,
            duration: 1
          });
          specialTl.add();
          specialTl.to("#line3", {
            opacity: 0,
            duration: 1,
            delay: 3
          });
          specialTl.add();
          specialTl.to("#line4", {
            opacity: 1,
            duration: 1
          });
          specialTl.add();
          specialTl.to("#line4", {
            opacity: 0,
            duration: 1,
            delay: 3
          });
          specialTl.add();
          specialTl.to("#line5", {
            opacity: 1,
            duration: 1
          });
          specialTl.add();
          specialTl.to("#line5", {
            opacity: 0,
            duration: 1,
            delay: 3
          });
          specialTl.add();
          specialTl.to("#line6", {
            opacity: 1,
            duration: 1
          });
          specialTl.add();
          specialTl.to("#line6", {
            opacity: 0,
            duration: 1,
            delay: 3
          });
          specialTl.add();
          specialTl.to("#line7", {
            opacity: 1,
            duration: 1
          });
          specialTl.add();
          specialTl.to("#line7", {
            opacity: 0,
            duration: 1,
            delay: 3
          });
          specialTl.add();
          specialTl.to("#line8", {
            opacity: 1,
            duration: 1
          });
          specialTl.add();
          specialTl.to("#line8", {
            opacity: 0,
            duration: 1,
            delay: 3
          });
          specialTl.add();
          specialTl.to("#line9", {
            opacity: 1,
            duration: 1
          });
          specialTl.add();
          specialTl.to("#line9", {
            opacity: 0,
            duration: 1,
            delay: 3,
            onComplete: function() {
              setTimeout(() => {
                let specialCard = document.querySelector(
                  ".card-container-special"
                );
                fade(specialCard);
                heartTl.reverse(2.5);
                containerTl.reverse();
                that.$router.push("/special-results");
              }, 1000);
            }
          });

          specialTl.play();
          setTimeout(() => {
            let specialCard = document.querySelector(".card-container-special");
            unfade(specialCard);
          }, 15000);
        }
      } else {
        loadingTl.reverse();
        heartTl.reverse(2.5);
        containerTl.delay(2).reverse();
      }
    }
  }
};
</script>

<style scoped>
.card-container {
  background: linear-gradient(180deg, #db93b0 0%, rgb(248, 163, 197) 100%);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px 8px 0px 0px;
  position: absolute;
  width: 320px;
  height: 442px;
  left: 28px;
  top: 370px;
  z-index: 1;
}

.card-container-special {
  background: linear-gradient(180deg, #7e5784 0%, #3e0347 100%);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px 8px 0px 0px;
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  top: 0;
  left: 0;
  display: none;
  z-index: 2;
}

.heart-container {
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 128px;
  top: 531px;
  font-size: 120px;
  z-index: 3;
}

p {
  color: white;
  position: absolute;
  opacity: 0;
  z-index: 3;
}

#line1 {
  top: 454px;
  left: 20%;
}

#line2 {
  top: 454px;
  left: 20%;
}

#line3 {
  top: 454px;
  left: 22%;
}

#line4 {
  top: 454px;
  left: 28%;
}

#line5 {
  top: 454px;
  left: 9%;
}

#line6 {
  top: 454px;
  left: 10%;
}

#line7 {
  top: 454px;
  left: 24%;
}

#line8 {
  top: 454px;
  left: 7%;
}

#line9 {
  top: 454px;
  left: 10%;
}

#loading-text {
  position: absolute;
  font-weight: 600;
  font-size: 16px;
  text-shadow: none;
  top: 454px;
  left: 41%;
  opacity: 0;
  z-index: 3;
  color: white;
}
</style>
