"use strict";

// Smooth scrolling
const smoothScroll = function () {
  document.querySelector(".navbar").addEventListener("click", function (e) {
    e.preventDefault();

    // Matching Strategy
    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
};
smoothScroll();

// Accommodation
const accommodationJS = function () {
  // Body
  const overlay = document.querySelector(".overlay");

  // Accommodation Boxes
  const tfhb = document.querySelector(".tfhb");
  const bushmills = document.querySelector(".bushmills");
  const sd = document.querySelector(".sd");
  const sperrin = document.querySelector(".sperrin");

  //Accommodation info
  const infoTFHB = document.querySelector(".info-tfhb");
  const infoBushmills = document.querySelector(".info-bushmills");
  const infoSD = document.querySelector(".info-sd");
  const infoSperrin = document.querySelector(".info-sperrin");

  // Accomodation info close button
  const btnTFHB = document.querySelector(".close-btn-tfhb");
  const btnBushmills = document.querySelector(".close-btn-bushmills");
  const btnSD = document.querySelector(".close-btn-sd");
  const btnSperrin = document.querySelector(".close-btn-sperrin");

  // The Fitwilliam Hotel Belfast
  const openInfoTFHB = function () {
    infoTFHB.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeInfoTFHB = function () {
    infoTFHB.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  tfhb.addEventListener("click", openInfoTFHB);
  overlay.addEventListener("click", closeInfoTFHB);
  btnTFHB.addEventListener("click", closeInfoTFHB);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!infoTFHB.classList.contains("hidden")) {
        closeInfoTFHB();
      }
    }
  });

  // Bushmills Inn
  const openInfoBushmills = function () {
    infoBushmills.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeInfoBushmills = function () {
    infoBushmills.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  bushmills.addEventListener("click", openInfoBushmills);
  overlay.addEventListener("click", closeInfoBushmills);
  btnBushmills.addEventListener("click", closeInfoBushmills);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!infoBushmills.classList.contains("hidden")) {
        closeInfoBushmills();
      }
    }
  });

  // Slieve Donard
  const openInfoSD = function () {
    infoSD.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeInfoSD = function () {
    infoSD.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  sd.addEventListener("click", openInfoSD);
  overlay.addEventListener("click", closeInfoSD);
  btnSD.addEventListener("click", closeInfoSD);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!infoSD.classList.contains("hidden")) {
        closeInfoSD();
      }
    }
  });

  // Sperrinview
  const openInfoSperrin = function () {
    infoSperrin.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeInfoSperrin = function () {
    infoSperrin.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  sperrin.addEventListener("click", openInfoSperrin);
  overlay.addEventListener("click", closeInfoSperrin);
  btnSperrin.addEventListener("click", closeInfoSperrin);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!infoSperrin.classList.contains("hidden")) {
        closeInfoSperrin();
      }
    }
  });
};
accommodationJS();

// Food
const foodJS = function () {
  // Body
  const overlay = document.querySelector(".overlay-2");

  // Food Boxes
  const soda = document.querySelector(".one");
  const fish = document.querySelector(".two");
  const stew = document.querySelector(".three");
  const fry = document.querySelector(".four");
  const drinks = document.querySelector(".five");

  //Food info
  const infosoda = document.querySelector(".info-soda");
  const infofish = document.querySelector(".info-fish");
  const infostew = document.querySelector(".info-stew");
  const infofry = document.querySelector(".info-fry");
  const infodrinks = document.querySelector(".info-drinks");

  // Food info close button
  const btnsoda = document.querySelector(".close-btn-soda");
  const btnfish = document.querySelector(".close-btn-fish");
  const btnstew = document.querySelector(".close-btn-stew");
  const btnfry = document.querySelector(".close-btn-fry");
  const btndrinks = document.querySelector(".close-btn-drinks");

  // Soda
  const openInfoSoda = function () {
    infosoda.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeInfoSoda = function () {
    infosoda.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  soda.addEventListener("click", openInfoSoda);
  overlay.addEventListener("click", closeInfoSoda);
  btnsoda.addEventListener("click", closeInfoSoda);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!infosoda.classList.contains("hidden")) {
        closeInfoSoda();
      }
    }
  });

  // Fish
  const openInfoFish = function () {
    infofish.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeInfoFish = function () {
    infofish.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  fish.addEventListener("click", openInfoFish);
  overlay.addEventListener("click", closeInfoFish);
  btnfish.addEventListener("click", closeInfoFish);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!infofish.classList.contains("hidden")) {
        closeInfoFish();
      }
    }
  });

  // Stew
  const openInfoStew = function () {
    infostew.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeInfoStew = function () {
    infostew.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  stew.addEventListener("click", openInfoStew);
  overlay.addEventListener("click", closeInfoStew);
  btnstew.addEventListener("click", closeInfoStew);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!infostew.classList.contains("hidden")) {
        closeInfoStew();
      }
    }
  });

  // Fry
  const openInfoFry = function () {
    infofry.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeInfoFry = function () {
    infofry.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  fry.addEventListener("click", openInfoFry);
  overlay.addEventListener("click", closeInfoFry);
  btnfry.addEventListener("click", closeInfoFry);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!infofry.classList.contains("hidden")) {
        closeInfoFry();
      }
    }
  });

  // Drinks
  const openInfoDrinks = function () {
    infodrinks.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeInfoDrinks = function () {
    infodrinks.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  drinks.addEventListener("click", openInfoDrinks);
  overlay.addEventListener("click", closeInfoDrinks);
  btndrinks.addEventListener("click", closeInfoDrinks);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!infodrinks.classList.contains("hidden")) {
        closeInfoDrinks();
      }
    }
  });
};

foodJS();
