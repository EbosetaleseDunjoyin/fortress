const password = document?.querySelector(".input-div.password input");
const showBtn = document?.querySelector(".login-form-container .show-password button");
const btnProposal = document?.querySelectorAll(".action-btn");
const actionDiv = document?.querySelectorAll(".action-div-modal");
let lastClickedIndex = null; // Keep track of the last clicked button

// MODAL

const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector("#create-proposal");
const closeModalBtn = document.querySelectorAll(".btn-close");
const open = document.querySelector("#open");

const feed = document.querySelectorAll("#send-feedback")

const feedBackForm = document.getElementById('feedback-form');
const selectProposalType = document.getElementById('proposal');
const proposalTitle = document.getElementById('feedback-textarea');
const type1Error = document.getElementById('proposal-error');
const titleError = document.getElementById('title-feed-error');


const width = window.innerWidth;
const slider = document.querySelector(".slider-container");
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector("#toogle-button")

showBtn?.addEventListener('click', (e) => {
  e.preventDefault()
  switch (password.type) {
    case "text":
      password.type = "password"
      showBtn.textContent = "Show"
      break;

    case "password":
      password.type = "text"
      showBtn.textContent = "Hide"
      break;

    default:
      break;
  }


})


// Function to validate email format
function isValidEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form fields
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const name = document.getElementById("name");
  const phone = document.getElementById("phone")

  // Get error elements
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");
  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");

  // Reset error messages
  usernameError.textContent = "";
  passwordError.textContent = "";
  name.textContent = "";
  phone.textContent = "";

  if (!name.value) {
    nameError.textContent = "Name is required"
  }

  if (!phone.value) {
    phoneError.textContent = "Phone number is required"
  } else if (phone.value.length < 11) {
    phoneError.textContent = "Enter a valid phone number"
  }

  // Validate username/email
  if (!usernameInput.value) {
    usernameError.textContent = "Email is required";
  } else if (!isValidEmail(usernameInput.value)) {
    usernameError.textContent = "Invalid email format";
  }

  // Validate password
  if (!passwordInput.value) {
    passwordError.textContent = "Password is required";
  } else if (password.value.length < 6) {
    passwordError.textContent = "Password too short"
  }

  // If no errors, submit the form
  if (!usernameError.textContent && !passwordError.textContent && phoneError.textContent) {
    // Perform form submission or other actions here
    console.log("Form submitted successfully");
    // You can add code to send the data to the server or perform other actions here
  }
});


btnProposal?.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    if (lastClickedIndex !== null && lastClickedIndex !== index) {
      // Hide the old button's actionDiv if it's not the same as the newly clicked button
      actionDiv[lastClickedIndex].classList.add("hidden");
    }

    // Toggle the "hidden" class for the new button's actionDiv
    actionDiv[index].classList.toggle("hidden");

    // Update the lastClickedIndex to the current index
    lastClickedIndex = index;
  });
});




// close modal function
const closeModal = function (index) {
  modal[parseInt(index)]?.classList.add("hidden");
  overlay?.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn[0]?.addEventListener("click", () => {
  closeModal(0)
});
overlay?.addEventListener("click", () => {
  closeModal(1)
  closeModal(0)
});

// close modal when the Esc key is pressed
document?.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal?.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal[0]?.classList.remove("hidden");
  overlay?.classList.remove("hidden");
};
// open modal event
openModalBtn?.addEventListener("click", openModal);
open?.addEventListener("click", () => {
  openModal();
});

document.getElementById("file-btn")?.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("myButton").click();
});

// Listen for changes in the file input
document.getElementById("myButton")?.addEventListener("change", (e) => {
  const fileInput = e.target;
  const fileLabel = document.getElementById("file-label");

  // Check if a file is selected
  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    fileLabel.textContent = fileName;
  } else {
    fileLabel.textContent = "Attach Proposal File here";
  }
});











document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("proposal-form");

  form?.addEventListener("submit", function (event) {
    const fileInput = document.getElementById("myButton");
    const fileError = document.getElementById("file-label");
    const tabOne = document.querySelector(".tab-one")
    const tabTwo = document.querySelector(".tab-two")



    if (fileInput?.files.length === 0) {
      fileError.innerHTML = "Please select a file before submitting.";
      fileError.classList.toggle("error-file")
      event.preventDefault(); // Prevent form submission
    } else {
      fileError.textContent = ""; // Clear any previous error message
    }


    let isValid = true;

    // Reset error messages
    const errorElements = document.querySelectorAll(".error-text");
    errorElements.forEach(errorElement => {
      errorElement.textContent = "";
    });

    // Validation for Proposal Type 1
    const type1Select = document.getElementById("select-proposal-type-1");
    if (type1Select.value === "") {
      isValid = false;
      document.getElementById("type-1-error").textContent = "Select Proposal Type";
    }

    // Validation for Proposal Type 2
    const type2Select = document.getElementById("select-proposal-type-2");
    if (type2Select.value === "") {
      isValid = false;
      document.getElementById("type-2-error").textContent = "Select user";
    }

    // Validation for Proposal Title
    const titleInput = document.getElementById("proposal-title");
    const titleValue = titleInput.value.trim();
    if (titleValue === "") {
      isValid = false;
      document.getElementById("title-error").textContent = "Proposal Title is required.";
    }

    // Add more validations for other fields here...

    // Prevent form submission if validation fails
    if (!isValid) {
      event.preventDefault();
    }
    tabOne.classList.add("hidden")
    tabTwo.classList.remove("hidden")
  });
});






feed?.forEach((item) => {
  item?.addEventListener("click", () => {
    openModal();
  })
})




// PDF.JS


// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
var url = 'resume.pdf';

// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf'];

if (pdfjsLib) {

  // The workerSrc property shall be specified.
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';

}

var pdfDoc = null,
  pageNum = 1,
  pageRendering = false,
  pageNumPending = null,
  scale = 0.8,
  canvas = document?.getElementById('the-canvas'),
  ctx = (canvas ? canvas.getContext('2d') : "")

/**
 * Get page info from document, resize canvas accordingly, and render page.
 * @param num Page number.
 */
function renderPage(num) {
  pageRendering = true;
  // Using promise to fetch the page
  pdfDoc.getPage(num).then(function (page) {
    var viewport = page.getViewport({ scale: scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    var renderTask = page.render(renderContext);

    // Wait for rendering to finish
    renderTask.promise.then(function () {
      pageRendering = false;
      if (pageNumPending !== null) {
        // New page rendering is pending
        renderPage(pageNumPending);
        pageNumPending = null;
      }
    });
  });

  // Update page counters
  // document.getElementById('page_num').textContent = num;
}

/**
 * If another page rendering in progress, waits until the rendering is
 * finised. Otherwise, executes rendering immediately.
 */
function queueRenderPage(num) {
  if (pageRendering) {
    pageNumPending = num;
  } else {
    renderPage(num);
  }
}

/**
 * Displays previous page.
 */
function onPrevPage() {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
}
document.getElementById('prev')?.addEventListener('click', onPrevPage);

/**
 * Displays next page.
 */
function onNextPage() {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
}
document.getElementById('next')?.addEventListener('click', onNextPage);

/**
 * Asynchronously downloads PDF.
 */
pdfjsLib?.getDocument(url).promise.then(function (pdfDoc_) {
  pdfDoc = pdfDoc_;
  // document.getElementById('page_count').textContent = pdfDoc.numPages;

  // Initial/first page rendering
  renderPage(pageNum);
});




feedBackForm?.addEventListener('submit', function (e) {
  // Reset error messages
  type1Error.textContent = '';
  titleError.textContent = '';

  let isValid = true;

  // Proposal Type validation
  if (selectProposalType.value === '') {
    type1Error.textContent = 'Please select a proposal type.';
    isValid = false;
  }

  // Proposal Title validation
  if (proposalTitle.value.trim() === '') {
    titleError.textContent = 'Please enter a proposal title.';
    isValid = false;
  }

  // If any validation fails, prevent form submission
  if (!isValid) {
    e.preventDefault();
  } else {
    e.preventDefault();
    // Only if the form is valid, hide tabOne and show tabTwo
    const tabOne = document.querySelector("#tabOne");
    const tabTwo = document.querySelector("#tabTwo");
    tabOne.classList.add("hidden");
    tabTwo.classList.remove("hidden");
  }
});



const proBtn = document.querySelectorAll("#view-proposal");

proBtn.forEach((item) => {
  item.addEventListener("click", () => {
    openModalPro();
  })
})

// open modal function
const openModalPro = function () {
  modal[1]?.classList.remove("hidden");
  overlay?.classList.remove("hidden");
};


// close modal function

// close the modal when the close button and overlay is clicked
closeModalBtn[1]?.addEventListener("click", () => {
  closeModal(1)
});




if (width <= 768) {
  slider?.classList.remove("slider-item-show3")
  slider?.classList.add("slider-item-show2")
}

toggleBtn?.addEventListener("click", (e) => {
  sidebar?.classList.toggle("show")
})






const inputs = document.getElementById("inputs");
const title = document.getElementById("mobile-title");

inputs?.addEventListener("input", function (e) {
  const target = e.target;
  const val = target.value;

  if (isNaN(val)) {
    target.value = "";
    return;
  }

  if (val != "") {
    const next = target.nextElementSibling;
    if (next) {
      next.focus();
    }
  }
});

inputs?.addEventListener("keyup", function (e) {
  const target = e.target;
  const key = e.key.toLowerCase();

  if (key == "backspace" || key == "delete") {
    target.value = "";
    const prev = target.previousElementSibling;
    if (prev) {
      prev.focus();
    }
    return;
  }
});




document?.addEventListener('DOMContentLoaded', function () {
  const otpForm = document.querySelector('#otp-form');
  const otpInputs = otpForm?.querySelectorAll('.input');
  const err = document?.querySelector(".otp-error")

  otpForm?.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    err.textContent = ""

    otpInputs?.forEach((input, index) => {
      const value = input.value.trim();

      if (!/^\d$/.test(value)) {
        isValid = false;
        err.textContent = "Enter a valid otp"
      }

      if (value === '') {
        isValid = false;
        err.textContent = "Enter a valid otp"
      }

      setTimeout(() => {
        err.textContent = ""
      }, 5000);
    });

    if (isValid) {
      // Continue with form submission or other actions
      alert('OTP is valid. Proceed with form submission.');
      otpForm.reset(); // Optionally, reset the form after successful validation.
    }
  });
});






document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("profile-form");

  form.addEventListener("submit", function (e) {
    // Remove any previously displayed error messages
    const errorSpans = document.querySelectorAll(".error");
    errorSpans.forEach((span) => {
      span.textContent = "";
    });

    let isValid = true;

    // Validation for First Name
    const firstNameInput = document.getElementById("first-name");
    const firstNameError = document.getElementById("first-name-error");
    if (firstNameInput.value.trim() === "") {
      firstNameError.textContent = "First Name is required.";
      isValid = false;
    }

    // Validation for Last Name
    const lastNameInput = document.getElementById("last-name");
    const lastNameError = document.getElementById("last-name-error");
    if (lastNameInput.value.trim() === "") {
      lastNameError.textContent = "Last Name is required.";
      isValid = false;
    }

    // Validation for Phone Number
    const phoneNumberInput = document.getElementById("phone-number");
    const phoneNumberError = document.getElementById("phone-number-error");
    const phoneNumberPattern = /^\d{10}$/; // Assuming 10-digit phone number
    if (!phoneNumberPattern.test(phoneNumberInput.value)) {
      phoneNumberError.textContent = "Please enter a valid 10-digit phone number.";
      isValid = false;
    }

    // Validation for Email Address
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Validation for Address (optional)
    const addressInput = document.getElementById("address");
    const addressError = document.getElementById("address-error");

    if (addressInput.value.trim() === "") {
      addressError.textContent = "Enter a valid address"
    } else if (addressInput.value.length < 10) {
      addressError.textContent = "Address value too short"
    }

    if (!isValid) {
      e.preventDefault(); // Prevent form submission
    }
  });
});
