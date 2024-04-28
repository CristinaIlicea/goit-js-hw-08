const save = (feedbackForm, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem("feedback-form-state", serializedState);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };
  
  const load = feedbackForm => {
    try {
      const serializedState = localStorage.getItem("feedback-form-state");
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };
  
  export default {
    save,
    load,
  };
  

  const button = document.getElementsByClassName("button");

  const handleClick = () => {
    localStorage.clear();
    console.log(localStorage.getItem("feedback-form-state"));
    console.log("email", "message");
  };
  
  button.addEventListener("click", handleClick);
  

  
  