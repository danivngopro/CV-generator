import { useState } from "react";
import { useNavigate } from "react-router";
import "./Details.css";

function Details() {
  const [body, setBody] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
    github: "",
    website: "",
    objective: "",
    education: "",
    experience: "",
    skills: "",
    activities: "",
  });

  const handleNameChange = (event) =>
    setBody({ ...body, fullName: event.target.value });
  const handleAddressChange = (event) =>
    setBody({ ...body, address: event.target.value });
  const handlePhoneChange = (event) =>
    setBody({ ...body, phone: event.target.value });
  const handleEmailChange = (event) =>
    setBody({ ...body, email: event.target.value });
  const handleGithubChange = (event) =>
    setBody({ ...body, github: event.target.value });
  const handleWebsiteChange = (event) =>
    setBody({ ...body, website: event.target.value });
  const handleObjectiveChange = (event) =>
    setBody({ ...body, objective: event.target.value });
  const handleAductionChange = (event) =>
    setBody({ ...body, education: event.target.value });
  const handleExperienceChange = (event) =>
    setBody({ ...body, experience: event.target.value });
  const handleSkillsChange = (event) =>
    setBody({ ...body, skills: event.target.value });
  const handleActivitiesChange = (event) =>
    setBody({ ...body, activities: event.target.value });

  const router = useNavigate();

  const handleSubmit = () => {
    router("/generatedcv", { state: { body } });
  };

  return (
    <div className="headlineContainer">
      <h1>Welcome to CV creator!</h1>
      <h3>please fill in the details below for your cv to be created</h3>
      <div className="formContainer">
        <div className="shorInputsContainer">
          <div className="textNinputDiv">
            <h1>Enter Your full name:</h1>
            <input
              type="text"
              className="textInputs"
              onChange={handleNameChange}
            />
          </div>
          <div className="textNinputDiv">
            <h1>Enter Your address:</h1>
            <input
              type="text"
              className="textInputs"
              onChange={handleAddressChange}
            />
          </div>
          <div className="textNinputDiv">
            <h1>Enter Your Phone number:</h1>
            <input
              type="text"
              className="textInputs"
              onChange={handlePhoneChange}
            />
          </div>
          <div className="textNinputDiv">
            <h1>Enter Your email:</h1>
            <input
              type="text"
              className="textInputs"
              onChange={handleEmailChange}
            />
          </div>
          <div className="textNinputDiv">
            <h1>Enter Your github:</h1>
            <input
              type="text"
              className="textInputs"
              onChange={handleGithubChange}
            />
          </div>
          <div className="textNinputDiv">
            <h1>Enter Your website url:</h1>
            <input
              type="text"
              className="textInputs"
              onChange={handleWebsiteChange}
            />
          </div>
        </div>
        <div className="textNinputDiv">
          <h1>Enter Your objective:</h1>
          <textarea
            className="longTextInputs"
            cols="40"
            rows="5"
            onChange={handleObjectiveChange}
          />
        </div>
        <div className="textNinputDiv">
          <h1>Enter Your Education:</h1>
          <textarea
            className="longTextInputs"
            cols="40"
            rows="5"
            onChange={handleAductionChange}
          />
        </div>
        <div className="textNinputDiv">
          <h1>Enter Your experience:</h1>
          <textarea
            className="longTextInputs"
            cols="40"
            rows="5"
            onChange={handleExperienceChange}
          />
        </div>
        <div className="textNinputDiv">
          <h1>Enter Your skills:</h1>
          <textarea
            className="longTextInputs"
            cols="40"
            rows="5"
            onChange={handleSkillsChange}
          />
        </div>
        <div className="textNinputDiv">
          <h1>Enter Your activities:</h1>
          <textarea
            className="longTextInputs"
            cols="40"
            rows="5"
            onChange={handleActivitiesChange}
          />
        </div>
        <div className="btnDiv">
          <button className="submitBtn" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
