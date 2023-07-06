const firstArticle = document.querySelector(".first-article");
const secondArticle = document.querySelector(".second-article");
const thirdArticle = document.querySelector(".third-article");
const fourthArticle = document.querySelector(".fourth-article");

const firstArticleNextButton = document.querySelector(
  ".first-article-next-button"
);
const secondArticleNextButton = document.querySelector(
  ".second-article-next-button"
);
const thirdArticleNextButton = document.querySelector(
  ".third-article-next-button"
);
const submitButton = document.querySelector(".submit-button");

firstArticleNextButton.addEventListener("click", () => {
  firstArticle.classList.add("hidden");
  secondArticle.classList.remove("hidden");
});

secondArticleNextButton.addEventListener("click", () => {
  secondArticle.classList.add("hidden");
  thirdArticle.classList.remove("hidden");
});

thirdArticleNextButton.addEventListener("click", () => {
  thirdArticle.classList.add("hidden");
  fourthArticle.classList.remove("hidden");
});

// 유효성 검사 로직
// 이름 유효성 검사
const nameInput = document.querySelector(".name-input");
const nameWrong = document.querySelector(".name-wrong");
const nameIcon = document.querySelector(".name-icon");
let nameValidation = false;
nameInput.addEventListener("input", () => {
  if (nameInput.value.length != 0 && nameInput.value.length >= 2) {
    //nameInput 값이 0이 아니고, 2자 이상일 때
    nameInput.classList.remove("wrong");
    nameIcon.classList.remove("wrong");
    nameWrong.classList.add("hidden");
    nameValidation = true;
  } else {
    nameInput.classList.add("wrong");
    nameIcon.classList.add("wrong");
    nameWrong.classList.remove("hidden");
    nameValidation = false;
  }
  if (nameValidation && nicknameValidation && phoneValidation) {
    firstArticleNextButton.classList.add("validation-pass");
    firstArticleNextButton.disabled = false;
  } else {
    firstArticleNextButton.classList.remove("validation-pass");
    firstArticleNextButton.disabled = true;
  }
});

// 닉네임 유효성 검사

const nicknameInput = document.querySelector(".nickname-input");
const nicknameWrong = document.querySelector(".nickname-wrong");
const nicknameIcon = document.querySelector(".nickname-icon");
let nicknameValidation = false;
nicknameInput.addEventListener("input", () => {
  if (nicknameInput.value.length != 0 && nameInput.value.length >= 1) {
    nicknameInput.classList.remove("wrong");
    nicknameIcon.classList.remove("wrong");
    nicknameWrong.classList.add("hidden");
    nicknameValidation = true;
  } else {
    nicknameInput.classList.add("wrong");
    nicknameIcon.classList.add("wrong");
    nicknameWrong.classList.remove("hidden");
    nicknameValidation = false;
  }
  if (nameValidation && nicknameValidation && phoneValidation) {
    firstArticleNextButton.classList.add("validation-pass");
    firstArticleNextButton.disabled = false;
  } else {
    firstArticleNextButton.classList.remove("validation-pass");
    firstArticleNextButton.disabled = true;
  }
});

// 전화번호 유효성 검사
const phoneInput = document.querySelector(".phone-input");
const phoneWrong = document.querySelector(".phone-wrong");
const phoneIcon = document.querySelector(".phone-icon");
let phoneValidation = false;
phoneInput.addEventListener("input", () => {
  if (
    phoneInput.value.length != 0 &&
    /^(010|011|016|017|018|019)\d{3,4}\d{4}$/.test(phoneInput.value)
  ) {
    phoneInput.classList.remove("wrong");
    phoneIcon.classList.remove("wrong");
    phoneWrong.classList.add("hidden");
    phoneValidation = true;
  } else {
    phoneInput.classList.add("wrong");
    phoneIcon.classList.add("wrong");
    phoneWrong.classList.remove("hidden");
    phoneValidation = false;
  }
  if (nameValidation && nicknameValidation && phoneValidation) {
    firstArticleNextButton.classList.add("validation-pass");
    firstArticleNextButton.disabled = false;
  } else {
    firstArticleNextButton.classList.remove("validation-pass");
    firstArticleNextButton.disabled = true;
  }
});

// 주소 유효성 검사, 현재 상세주소만 유효성 검사 되있음, 주소 API 구현되면 zipcode, firstAddress에도 값이 있는지 검사해야 함
const zipcode = document.querySelector(".zipcode");
const firstAddress = document.querySelector(".first-address");
const lastAddress = document.querySelector(".last-address");
const addressWrong = document.querySelector(".address-wrong");
lastAddress.addEventListener("input", () => {
  if (lastAddress.value.length != 0) {
    //뭐든 입력됐다는 의미
    addressWrong.classList.add("hidden");
    secondArticleNextButton.classList.add("validation-pass");
    secondArticleNextButton.disabled = false;
    lastAddress.classList.remove("wrong");
  } else {
    addressWrong.classList.remove("hidden");
    secondArticleNextButton.classList.remove("validation-pass");
    secondArticleNextButton.disabled = true;
    lastAddress.classList.add("wrong");
  }
});

// 이메일, 인증번호 유효성 검사 나중에 구현하기

// 비밀번호, 비밀번호재입력 유효성 검사
const passwordInput = document.querySelector(".password-input");
const repasswordInput = document.querySelector(".repassword-input");
const passwordIcon = document.querySelector(".password-icon");
const repasswordIcon = document.querySelector(".repassword-icon");
const passwordWrong = document.querySelector(".password-wrong");
const passwordMatchWrong = document.querySelector(".password-match-wrong");
passwordInput.addEventListener("input", () => {
  if (
    /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(passwordInput.value) &&
    passwordInput.value === repasswordInput.value
  ) {
    passwordWrong.classList.add("hidden");
    passwordMatchWrong.classList.add("hidden");
    passwordInput.classList.remove("wrong");
    repasswordInput.classList.remove("wrong");
    passwordIcon.classList.remove("wrong");
    repasswordIcon.classList.remove("wrong");
    submitButton.disabled = false;
    submitButton.classList.add("validation-pass");
  } else if (
    /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(passwordInput.value) &&
    passwordInput.value !== repasswordInput.value
  ) {
    passwordWrong.classList.add("hidden");
    passwordMatchWrong.classList.remove("hidden");
    passwordInput.classList.add("wrong");
    repasswordInput.classList.add("wrong");
    passwordIcon.classList.add("wrong");
    repasswordIcon.classList.add("wrong");
    submitButton.disabled = true;
    submitButton.classList.remove("validation-pass");
  } else {
    passwordWrong.classList.remove("hidden");
    passwordMatchWrong.classList.add("hidden");
    passwordInput.classList.add("wrong");
    repasswordInput.classList.remove("wrong");
    passwordIcon.classList.add("wrong");
    repasswordIcon.classList.remove("wrong");
    submitButton.disabled = true;
    submitButton.classList.remove("validation-pass");
  }
});

repasswordInput.addEventListener("input", () => {
  if (
    /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(passwordInput.value) &&
    passwordInput.value === repasswordInput.value
  ) {
    passwordWrong.classList.add("hidden");
    passwordMatchWrong.classList.add("hidden");
    passwordInput.classList.remove("wrong");
    repasswordInput.classList.remove("wrong");
    passwordIcon.classList.remove("wrong");
    repasswordIcon.classList.remove("wrong");
    submitButton.disabled = false;
    submitButton.classList.add("validation-pass");
  } else if (
    /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(passwordInput.value) &&
    passwordInput.value !== repasswordInput.value
  ) {
    passwordWrong.classList.add("hidden");
    passwordMatchWrong.classList.remove("hidden");
    passwordInput.classList.add("wrong");
    repasswordInput.classList.add("wrong");
    passwordIcon.classList.add("wrong");
    repasswordIcon.classList.add("wrong");
    submitButton.disabled = true;
    submitButton.classList.remove("validation-pass");
  } else {
    passwordWrong.classList.remove("hidden");
    passwordMatchWrong.classList.add("hidden");
    passwordInput.classList.add("wrong");
    repasswordInput.classList.remove("wrong");
    passwordIcon.classList.add("wrong");
    repasswordIcon.classList.remove("wrong");
    submitButton.disabled = true;
    submitButton.classList.remove("validation-pass");
  }
});

const passwordToggleButton = document.querySelector(".password-toggle-button");
const repasswordToggleButton = document.querySelector(
  ".repassword-toggle-button"
);
passwordToggleButton.addEventListener("click", () => {
  if (passwordInput.type === "text") {
    passwordInput.type = "password";
    passwordToggleButton.classList.add("fa-eye-slash");
    passwordToggleButton.classList.remove("fa-eye");
  } else {
    passwordInput.type = "text";
    passwordToggleButton.classList.remove("fa-eye-slash");
    passwordToggleButton.classList.add("fa-eye");
  }
});

repasswordToggleButton.addEventListener("click", () => {
  if (repasswordInput.type === "text") {
    repasswordInput.type = "password";
    repasswordToggleButton.classList.add("fa-eye-slash");
    repasswordToggleButton.classList.remove("fa-eye");
  } else {
    repasswordInput.type = "text";
    repasswordToggleButton.classList.remove("fa-eye-slash");
    repasswordToggleButton.classList.add("fa-eye");
  }
});

//이메일 인증 로직
const certificationStartButton = document.querySelector(
  ".certification-start-button"
);
const emailInput = document.querySelector(".email-input");
certificationStartButton.addEventListener("click", () => {
  fetch("/login/mailAuthentication?email=" + emailInput.value, {
    method: "POST",
    body: JSON.stringify({
      email: emailInput.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log("response:", response);
    })
    .catch((error) => console.log("error:", error));
});

const certificationButton = document.querySelector(".certification-button");
const certificationNumber = document.querySelector(".certification-number");
certificationButton.addEventListener("click", () => {
  const url = `/login/mailConfirm?email=${emailInput.value}&code=${certificationNumber.value}`;
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: emailInput.value,
      certificationNumber: certificationNumber.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log("response:", response);
    })
    .catch((error) => console.log("error:", error));
});

