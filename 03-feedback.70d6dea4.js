const e=document.querySelector(".feedback-form"),t=document.querySelector(".button"),o=()=>{o.preventDefault(),localStorage.setItem("feedback-form-state",e.value),localStorage.removeItem("feedback-form-state"),e.reset(),console.log("feedback-form-state")};t.addEventListener("click",o);
//# sourceMappingURL=03-feedback.70d6dea4.js.map
