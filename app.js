// navigation
const navbar = document.querySelector(".nav");

//menu
const menuBtn = document.querySelector(".menu-btn");
const cover = document.getElementById("cover");
const crossImg = document.querySelector(".cross");
const menuList = document.querySelector(".menu-list");

//modal
const modalContainer = document.querySelector(".modal-container");
const welcomeBtn = document.querySelectorAll(".welcome-btn");
const closeModal = document.querySelector(".close-modal");

//radio
const radioInput = document.querySelectorAll(".radio-input");

const radioOne = document.querySelector(".radio-one");
const radioTwo = document.querySelector(".radio-two");
const radioThree = document.querySelector(".radio-three");

//chosen option variables
const choosenOptionOne = document.querySelector(".choosen-one");
const choosenOptionTwo = document.querySelector(".choosen-two");
const choosenOptionThree = document.querySelector(".choosen-three");

//adding border
var oneParentElement = choosenOptionOne.parentElement;
var twoParentElement = choosenOptionTwo.parentElement;
var threeParentElement = choosenOptionThree.parentElement;

// functions

function unChecking() {
  radioOne.checked = false;
  radioTwo.checked = false;
  radioThree.checked = false;
}

function unStyling() {
  //chosen option
  choosenOptionOne.classList.remove("choosen");
  choosenOptionTwo.classList.remove("choosen");
  choosenOptionThree.classList.remove("choosen");

  // border
  oneParentElement.classList.remove("clicked");
  threeParentElement.classList.remove("clicked");
  twoParentElement.classList.remove("clicked");
}

function handleModal() {
  modalContainer.classList.add("show-modal");
  cover.classList.add("covering");

  closeModal.addEventListener("click", () => {
    modalContainer.classList.remove("show-modal");
    cover.classList.remove("covering");
  });
  window.scrollTo(0, 250);

  // choosen option

  radioInput.forEach((radio) => {
    var radioValue = radio.value;

    radio.addEventListener("click", () => {
      unStyling();
      unChecking();

      switch (radioValue) {
        case "1":
          //chosen option
          choosenOptionOne.classList.add("choosen");
          //border
          oneParentElement.classList.add("clicked");
          //radio
          radioOne.checked = true;

          break;
        case "2":
          //chosen option
          choosenOptionTwo.classList.add("choosen");
          //border
          twoParentElement.classList.add("clicked");
          //radio
          radioTwo.checked = true;

          break;
        case "3":
          //chosen option
          choosenOptionThree.classList.add("choosen");
          //border
          threeParentElement.classList.add("clicked");
          //radio
          radioThree.checked = true;
          break;

        default:
          break;
      }
    });
  });

  const inputAmount = document.querySelectorAll(".amount-input");
  const submitBtns = document.querySelectorAll(".submit-btn");
  const modalCompleted = document.querySelector(".modal-completed");

  inputAmount.forEach((input) => {
    if (input.value == "") {
      return alert("It can't be empty");
    } else {
      submitBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          window.scrollTo(0, 250);

          modalCompleted.classList.add("submitted");
          cover.classList.add("covering");
          modalContainer.classList.remove("show-modal");

          const confirmBtn = document.querySelector(".completed-btn");

          confirmBtn.addEventListener("click", () => {
            modalCompleted.classList.remove("submitted");
            cover.classList.remove("covering");
            unChecking();
            unStyling();
          });
        });
      });
    }
  });
}

function handleMenu() {
  cover.classList.toggle("covering");
  menuBtn.classList.toggle("cross");
  menuList.classList.toggle("show-menu");
}

function onScroll() {
  // Get scroll value
  const scroll = document.documentElement.scrollTop;

  if (scroll > 200) {
    navbar.classList.add("scrolled");
    console.log("dziala");
  } else {
    navbar.classList.remove("scrolled");
  }
}

welcomeBtn.forEach((btn) => {
  btn.addEventListener("click", handleModal);
});

menuBtn.addEventListener("click", handleMenu);

window.addEventListener("scroll", onScroll);
