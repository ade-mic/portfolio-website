'use strict';

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetPage = link.getAttribute("data-nav-link");

    pages.forEach((page) => {
      if (page.getAttribute("data-page") === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    navigationLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    link.classList.add("active");

    // Optional: Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


// Filter button and select dropdown elements
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");
const selectValueFilter = document.querySelector("[data-select-value]"); // Renamed variable

// Function to apply filter based on selected value
const filterFunc = (selectedValue) => {
  filterItems.forEach((item) => {
    const itemCategory = item.dataset.category;
    if (selectedValue === "all" || selectedValue === itemCategory) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Event listener for filter buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const selectedValue = this.getAttribute("data-filter-btn");
    
    // Update select dropdown to reflect selected button
    selectValueFilter.innerText = this.innerText; // Updated variable name
    
    // Apply filter logic
    filterFunc(selectedValue);

    // Update active state of buttons
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

// Function to handle dropdown toggle
function toggleDropdown(event) {
  event.stopPropagation(); // Prevent the event from propagating further
  selectList.classList.toggle("active");
}

// Function to close the dropdown when clicking outside
function closeDropdown(event) {
  if (!selectBox.contains(event.target) && !selectList.contains(event.target)) {
    selectList.classList.remove("active");
  }
}

// Function to handle dropdown item selection
function handleSelectItemClick(event) {
  const selectedValue = event.target.getAttribute("data-select-item");

  // Apply filter logic
  filterFunc(selectedValue);

  // Update the displayed selected value
  selectValueFilter.innerText = event.target.innerText;

  // Close the dropdown after selection
  selectList.classList.remove("active");
}

// DOM Element References
const selectBox = document.querySelector("[data-select]");
const selectList = document.querySelector(".select-list");
const selectValueItems = document.querySelectorAll("[data-select-item]");

// Ensure dropdown toggle functionality
if (selectBox && selectList) {
  selectBox.addEventListener("click", toggleDropdown);

  // Add event listener for each dropdown item
  selectValueItems.forEach((item) => {
    item.addEventListener("click", handleSelectItemClick);
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", closeDropdown);
} else {
  console.error("Dropdown elements not found");
}


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// // custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-selecct-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// // add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);

//   });
// }




// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}
