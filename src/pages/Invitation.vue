<template>
  <div v-if="isLoading">
    <div class="preloader">
      <div class="lds-heart">
        <div></div>
      </div>
    </div>
  </div>
  <div v-else id="oliven-page">
    <transition name="overlay-fade" appear>
      <div v-if="showModal" class="modal-overlay-custom">
        <transition name="modal-fade-scale" appear>
          <div class="modal-custom">
            <p>{{ modalMessage }}</p>
            <div class="modal-actions-custom">
              <button @click="confirmModal" class="btn btn-confirm">
                Confirm
              </button>
              <button @click="cancelModal" class="btn btn-cancel">
                Anulează
              </button>
            </div>
          </div>
        </transition>
      </div>
    </transition>

    <transition name="overlay-fade" appear>
      <div v-if="showLoading" class="modal-overlay-custom">
        <div class="lds-heart">
          <div></div>
        </div>
      </div>
    </transition>

    <transition name="overlay-fade" appear>
      <div v-if="showErrorModal" class="modal-overlay-custom">
        <transition name="modal-fade-scale" appear>
          <div class="modal-custom">
            <p>A apărut o eroare</p>
            <div class="modal-actions-custom">
              <button @click="showErrorModal = false" class="btn btn-confirm">
                OK
              </button>
            </div>
          </div>
        </transition>
      </div>
    </transition>

    <a
      @click="toggleMenu"
      class="js-oliven-nav-toggle oliven-nav-toggle"
      :class="{ active: menuToggle }"
      ><i></i
    ></a>
    <aside id="oliven-aside">
      <!-- Logo -->
      <div class="oliven-logo">
        <a href="#home">
          <img src="../assets/images/logo.png" alt="Logo" />
          <span>Andreea <small>&amp;</small> Andrei</span>
          <span class="secondary">Sara Ștefania</span>
          <h6>27 Iulie 2025</h6>
        </a>
      </div>
      <!-- Menu -->
      <nav class="oliven-main-menu">
        <ul>
          <li><a href="#home" @click="onAnchorClick">Acasă</a></li>
          <li><a href="#couple" @click="onAnchorClick">Noi doi</a></li>
          <li><a href="#story" @click="onAnchorClick">Eveniment</a></li>
          <li><a href="#whenwhere" @click="onAnchorClick">Unde și când</a></li>
          <li><a href="#rsvp" @click="onAnchorClick">Confirmare</a></li>
        </ul>
      </nav>
      <!-- Sidebar Footer -->
      <!-- <div class="footer1">
        <span class="separator"></span>
        <p>Andreea &amp; Andrei<br />Sara Ștefania<br />27 Iulie 2025</p>
      </div> -->
    </aside>
    <div id="oliven-main">
      <!-- Header & Slider -->
      <header
        id="home"
        class="header valign bg-img parallaxie"
        data-background="../assets/images/bg_celestial_homepage.jpeg"
        :style="{ backgroundImage: `url(${bgImage})` }"
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center caption">
              <h1
                class="animate-box fadeInUp animated"
                data-animate-effect="fadeInUp"
              >
                Andreea &amp; Andrei
              </h1>
              <h2
                class="animate-box fadeInUp animated"
                data-animate-effect="fadeInUp"
              >
                Sara Ștefania
              </h2>
              <h5
                class="animate-box fadeInUp animated"
                data-animate-effect="fadeInUp"
              >
                27 Iulie 2025 – Buzău
              </h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="arrow bounce text-center">
                <i class="ti-heart"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- Couple -->
      <div id="couple" class="bridegroom clear section-padding bg-pink">
        <div class="container">
          <div class="row mb-20">
            <div class="col-md-6">
              <div
                class="item toright mb-30 animate-box fadeInLeft animated"
                data-animate-effect="fadeInLeft"
              >
                <div class="img">
                  <img src="../assets/images/bride.jpg" alt="bride" />
                </div>
                <div class="info valign">
                  <div class="full-width">
                    <h6>Andreea Lupei <i class="ti-heart"></i></h6>
                    <span>Mireasă</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet tincidunt ante, id cursus ligula aliquet vel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="item mb-30 animate-box fadeInRight animated"
                data-animate-effect="fadeInRight"
              >
                <div class="img">
                  <img src="../assets/images/groom.jpg" alt="groom" />
                </div>
                <div class="info valign">
                  <div class="full-width">
                    <h6>Andrei-Florin Lupei <i class="ti-heart"></i></h6>
                    <span>Mire</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet tincidunt ante, id cursus ligula aliquet vel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-60 justify-content-center">
            <div class="col-md-4">
              <div
                class="item mb-30 animate-box fadeInLeft animated"
                data-animate-effect="fadeInLeft"
              >
                <div class="info valign daughter">
                  <div class="full-width display-flex justify-content-center">
                    <div class="img">
                      <img src="../assets/images/daughter.jpg" alt="daughter" />
                    </div>
                    <h6>Sara Ștefania Lupei <i class="ti-heart"></i></h6>
                    <span>Draga noastră fetiță</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-md-12 text-center animate-box fadeInUp animated"
              data-animate-effect="fadeInUp"
            >
              <h3 class="oliven-couple-title secondary">
                Alături de noi vor fi părinții noștri:
              </h3>
              <div class="d-flex justify-content-center couple-gap">
                <h4 class="oliven-couple-subtitle">Viorica și Ion</h4>
                <h4 class="oliven-couple-subtitle">Ioana și Marian</h4>
              </div>

              <h3 class="oliven-couple-title secondary-title mt-5 secondary">
                Cei care ne vor îndruma și vor fi alături de micuța noastră sunt
                nașii:
              </h3>
              <h4 class="oliven-couple-subtitle mt-4">
                Anghel Ștefania și Viorel
              </h4>
            </div>
          </div>
        </div>
      </div>
      <!-- Countdown -->
      <div
        id="countdown"
        class="section-padding bg-img bg-fixed-large"
        style="background-position: center center"
        :style="{ backgroundImage: `url(${bg1})` }"
        data-background="../assets/images/bg1.jpg"
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="section-head col-md-12">
              <h4>Vom deveni o familie în:</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <ul id="countdown-wrapper">
                <li>
                  <span>{{ days }}</span
                  >Zile
                </li>
                <li>
                  <span>{{ hours }}</span
                  >Ore
                </li>
                <li>
                  <span>{{ minutes }}</span
                  >Minute
                </li>
                <li>
                  <span>{{ seconds }}</span
                  >Secunde
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Our Story -->
      <div id="story" class="story section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-5 mb-30">
              <div
                class="story-img animate-box fadeInLeft animated"
                data-animate-effect="fadeInLeft"
              >
                <div class="img">
                  <img
                    src="../assets/images/story.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="col-md-7 animate-box fadeInRight animated"
              data-animate-effect="fadeInRight"
            >
              <h4 class="oliven-story-subtitle">Iubirea noastră.</h4>
              <h3 class="oliven-story-title">Împărtășită cu voi.</h3>
              <p>
                Sunt momente în viață pe care le aștepți cu sufletul la gură și
                cu fluturași în stomac, iar acesta, pentru noi, este unul dintre
                ele.
              </p>
              <p>
                Începând cu această zi vom păși spre viitor cu planuri
                ambițioase, cu visuri mărețe și cu forțe proaspete, unite.
              </p>
              <p>
                Avem deosebita plăcere de a vă invita să fiți alături de noi în
                ziua în care sufletele noastre se vor uni.
              </p>
              <p>Vă așteptăm cu drag!</p>
            </div>
          </div>
        </div>
      </div>
      <!-- See you -->
      <div
        id="seeyou"
        class="seeyou section-padding bg-img bg-fixed-large"
        style="background-position: center center"
        data-background="../assets/images/bg3.jpeg"
        :style="{ backgroundImage: `url(${bg3})` }"
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="section-head col-md-12 text-center">
              <span><i class="ti-heart"></i></span>
              <h4>Vă așteptăm să fiți alături de noi!</h4>
              <h3>27 Iulie 2025</h3>
            </div>
          </div>
        </div>
      </div>
      <!-- When & Where -->
      <div id="whenwhere" class="whenwhere section-padding bg-pink">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-30">
              <span class="oliven-title-meta">Locații</span>
              <h2 class="oliven-title">Unde și când</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="owl-theme row">
                <div class="item col-lg-6" style="margin-bottom: 20px">
                  <div class="whenwhere-img">
                    <img src="../assets/images/church.jpg" alt="church" />
                  </div>
                  <div class="content">
                    <h5>Cununia religioasă și Botezul</h5>
                    <p>
                      <i class="ti-location-pin mr-1"></i> Biserica "Sfinții
                      Împărați Constantin și Elena"<br />
                      <span class="ti-location-text"
                        >Pogonele, Buzău, România</span
                      >
                    </p>
                    <p>
                      <i class="ti-time mr-2"></i>
                      <span>27 Iulie 2025, 14:00</span>
                    </p>
                    <p>
                      <i class="ti-direction mr-1"></i>
                      <a
                        href="https://maps.app.goo.gl/4JRty8jkXpc2D9xSA"
                        target="_blank"
                        class="hover-arrow directionsButton hover-custom ml-1"
                        data-lat="44.4676237"
                        data-lng="26.0749093"
                        >Vezi hartă <span class="fa fa-arrow-right"></span
                      ></a>
                    </p>
                  </div>
                </div>
                <div class="item col-lg-6" style="margin-bottom: 20px">
                  <div class="whenwhere-img">
                    <img
                      src="../assets/images/victoriagrandhall.jpg"
                      alt="victoriagrandhall"
                    />
                  </div>
                  <div class="content">
                    <h5>Petrecerea</h5>
                    <p>
                      <i class="ti-direction-alt mr-1"></i> Victoria Grand Hall
                      <br />
                      <span class="ti-location-text">DN2B, Buzău, România</span>
                    </p>
                    <p>
                      <i class="ti-time mr-1"></i>
                      <span>27 Iulie 2025, 20:00</span>
                    </p>
                    <p>
                      <i class="ti-direction mr-1"></i>
                      <a
                        href="https://maps.app.goo.gl/XD43eBNkkDojixku6"
                        target="_blank"
                        class="hover-arrow directionsButton hover-custom ml-1"
                        data-lat="44.611788"
                        data-lng="25.664226"
                        >Vezi hartă <span class="fa fa-arrow-right"></span
                      ></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Confirmation -->
      <div
        id="rsvp"
        class="section-padding bg-img bg-fixed-large"
        style="background-position: center center"
        data-background="../assets/images/bg2.jpg"
        :style="{ backgroundImage: `url(${bg2})` }"
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-6 offset-md-3 bg-white p-40">
              <span class="oliven-title-meta text-center">Vei participa?</span>
              <h2 class="oliven-subtitle-small text-center">
                Te așteptăm cu drag!<br />
                Completează formularul pentru a ne anunța decizia ta.<br />
                Sau dă-ne un telefon:<br />
                <span style="margin-right: 50px">Andreea: 0729 925 786</span>
                <span>Andrei: 0768 875 797</span>
              </h2>
              <br />
              <form class="confirmation-wrapper row">
                <div class="col-md-12 personName">
                  <div class="form-group">
                    <label for="fname">Numele (al tău sau al familiei) ⃰</label>
                    <input
                      type="text"
                      id="fname"
                      class="form-control"
                      placeholder="Nume"
                      name="name"
                      enterkeyhint="next"
                      v-model="name"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="numberOfPersons">Câți adulți? ⃰</label>
                    <select
                      name="numberOfPersons"
                      id="numberOfPersons"
                      enterkeyhint="next"
                      v-model.number="adults"
                    >
                      <option value="1">O persoană</option>
                      <option value="2">Două persoane</option>
                      <option value="3">Trei persoane</option>
                      <option value="4">Patru persoane</option>
                      <option value="5">Cinci persoane</option>
                      <option value="6">Șase persoane</option>
                      <option value="7">Șapte persoane</option>
                      <option value="8">Opt persoane</option>
                      <option value="9">Nouă persoane</option>
                      <option value="10">Zece persoane</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="numberOfChildren">Câți copii?</label>
                    <select
                      name="numberOfChildren"
                      id="numberOfChildren"
                      enterkeyhint="next"
                      v-model.number="children"
                    >
                      <option value="0">Niciunul</option>
                      <option value="1">Un copil</option>
                      <option value="2">Doi copii</option>
                      <option value="3">Trei copii</option>
                      <option value="4">Patru copii</option>
                      <option value="5">Cinci copii</option>
                      <option value="6">Șase copii</option>
                      <option value="7">Șapte copii</option>
                      <option value="8">Opt copii</option>
                      <option value="9">Nouă copii</option>
                      <option value="10">Zece copii</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="food"
                      >Ce preferințe aveți pentru mâncare?</label
                    >
                    <textarea
                      name="food"
                      id="food"
                      cols="30"
                      rows="7"
                      class="form-control"
                      placeholder="Vegetarian, vegan, etc."
                      enterkeyhint="enter"
                      v-model="food"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="message">Mesaj</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      class="form-control"
                      placeholder="Alte dorințe, urări..."
                      enterkeyhint="enter"
                      v-model="message"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12 mt-3">
                  <div class="form-group">
                    <button
                      type="button"
                      @click="goToConfirm"
                      class="btn confirmation buttono"
                      :disabled="!name || adults === 0"
                      :class="{ disabled: !name || adults === 0 }"
                    >
                      Voi fi prezent
                    </button>
                    <button
                      type="button"
                      @click="goToReject"
                      class="btn confirmation buttono float-right"
                      :disabled="!name || adults === 0"
                      :class="{ disabled: !name || adults === 0 }"
                    >
                      Nu pot participa
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer2">
        <div class="oliven-narrow-content">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="mb-3">
                <a href="#home"
                  ><img src="../assets/images/logo.png" alt="footer" /><span
                    >Andreea <small>&amp;</small> Andrei</span
                  ><span class="secondary">Sara Ștefania</span></a
                >
              </h2>
              <p class="copyright">27 Iulie 2025 – Buzău</p>
              <p class="mb-0">Andreea: 0729 925 786</p>
              <p class="mt-0">Andrei: 0768 875 797</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "../assets/images/bg_celestial_homepage.jpeg";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpeg";

import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const isLoading = ref(true);

const router = useRouter();

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const targetDate = new Date("2025-07-27T11:00:00Z");

let countdownInterval = null;

const updateCountdown = () => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    clearInterval(countdownInterval);
    return;
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutes.value = Math.floor((diff / (1000 * 60)) % 60);
  seconds.value = Math.floor((diff / 1000) % 60);
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (countdownInterval) clearInterval(countdownInterval);
});

const name = ref("");
const adults = ref(1);
const children = ref(0);
const food = ref("");
const message = ref("");

const sendRSVP = async (status) => {
  showLoading.value = true;
  const payload = {
    name: name.value,
    adults: adults.value,
    children: children.value,
    food: food.value,
    message: message.value,
    status: status, // "confirmed" or "declined"
  };

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzp-Gw7jo0hJ6x6FeDZ81KJyf6byVjui-lxPatSEYi4XRc3iP2qbY0aH9Vknzh8ncs3/exec",
      {
        redirect: "follow",
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    if (result.result === "success") {
      if (status === "prezent") {
        showLoading.value = false;
        router.push("/confirm");
      } else {
        showLoading.value = false;
        router.push("/reject");
      }
    } else {
      showLoading.value = false;
      showErrorModal.value = true;
    }
  } catch (error) {
    showLoading.value = false;
    showErrorModal.value = true;
  }
};

const showModal = ref(false);
const showErrorModal = ref(false);
const showLoading = ref(false);
const modalMessage = ref("");
let modalCallback = null;

const openModal = (message, callback) => {
  modalMessage.value = message;
  showModal.value = true;
  modalCallback = callback;
};

const confirmModal = () => {
  if (modalCallback) modalCallback(true);
  showModal.value = false;
};

const cancelModal = () => {
  if (modalCallback) modalCallback(false);
  showModal.value = false;
};

const goToConfirm = () => {
  openModal("Confirmi prezența?", async (confirmed) => {
    if (confirmed) {
      await sendRSVP("prezent");
    }
  });
};

const goToReject = () => {
  openModal("Sigur nu vei putea participa?", async (confirmed) => {
    if (confirmed) {
      await sendRSVP("absent");
    }
  });
};

const menuToggle = ref(false);

const toggleMenu = () => {
  menuToggle.value = !menuToggle.value;
  if (menuToggle.value) {
    document.body.classList.add("offcanvas");
  } else {
    document.body.classList.remove("offcanvas");
  }
};

function smoothScrollTo(element, duration = 1000) {
  const targetPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

const onAnchorClick = (event) => {
  const href = event.target.getAttribute("href");
  if (href && href.startsWith("#")) {
    event.preventDefault();

    closeMenu();

    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        smoothScrollTo(targetElement, 1500); // 1500ms = slower scroll
      }
    }, 100); // Wait 500ms before scrolling
  }
};

const closeMenu = () => {
  menuToggle.value = false;
  document.body.classList.remove("offcanvas");
};
</script>

<style>
@import "../assets/css/animate.css";
@import "../assets/css/bootstrap.css";
@import "../assets/css/magnific-popup.css";
@import "../assets/css/owl-carousel.min.css";
@import "../assets/css/owl.theme.default.min.css";
@import "../assets/css/style.css";
@import "../assets/css/themify-icons.css";

main {
  padding: 0 !important;
}

.modal-overlay-custom {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-custom {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 400px;
  width: 90%;
  text-align: center;
  z-index: 10000;
  border: 2px solid #bd945a;
}

.modal-actions-custom {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

/* Overlay fade */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.4s ease;
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}
.overlay-fade-enter-to,
.overlay-fade-leave-from {
  opacity: 1;
}

/* Modal fade + scale */
.modal-fade-scale-enter-active,
.modal-fade-scale-leave-active {
  transition: all 0.4s ease;
}
.modal-fade-scale-enter-from,
.modal-fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.modal-fade-scale-enter-to,
.modal-fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}

.hover-custom {
  font-weight: bold;
  color: #bd945a;
}

.ti-location-pin {
  padding-top: 0.5rem;
}

.ti-location-text {
  margin-left: 1.5rem;
  font-family: "Nunito Sans", sans-serif !important;
}

.couple-gap {
  gap: 5rem;
}

.btn.disabled {
  opacity: 0.35 !important;
  cursor: default;
}

.btn.disabled:hover {
  color: white;
  background-color: #bd945a !important;
}

.daughter {
  text-align: center;
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.daughter .img {
  float: none !important;
  margin: 0 auto !important;
  display: block !important;
  margin-bottom: 1rem !important;
}

.daughter .img img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}
</style>
