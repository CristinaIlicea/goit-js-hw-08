
  const input = document.querySelector(".feedback-form");
  const button = document.querySelector(".button");
  const saved_value_key = "feedback-form-state";
  
  const handleClick = () => {
    e.preventDefault();
    localStorage.setItem(saved_value_key, input.value);
    localStorage.clear();
    console.log("email", "message");
  };

  button.addEventListener("click", handleClick);
  


 
  

  
  