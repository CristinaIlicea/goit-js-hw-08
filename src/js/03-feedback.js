
  const form = document.querySelector(".feedback-form");
  const button = document.querySelector(".button");
  const saved_value_key = "feedback-form-state";
  
  const handleClick = () => {
    handleClick.preventDefault();
    localStorage.setItem(saved_value_key, form.value);
    localStorage.removeItem(saved_value_key);
    form.reset();
    console.log(saved_value_key);
  };

  button.addEventListener("click", handleClick);
  


 
  

  
  