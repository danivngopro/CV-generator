import { useLocation } from "react-router-dom";
import "./GeneratedCv.css";
import HomeIcon from "@mui/icons-material/Home";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import ReorderIcon from "@mui/icons-material/Reorder";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ConstructionIcon from "@mui/icons-material/Construction";
import RowingIcon from "@mui/icons-material/Rowing";

function GeneratedCv() {
  const location = useLocation();

  let skills = location.state.body.skills;
  skills = skills.split(";");

  let education = location.state.body.education;
  education = education.split(";");
  const educationArr = [];

  for (let j = 0; j < education.length; j += 4) {
    educationArr.push({
      headline: education[j],
      place: education[j + 1],
      years: education[j + 2],
      context: education[j + 3],
    });
  }

  let experience = location.state.body.experience;
  experience = experience.split(";");
  const experienceArr = [];

  for (let k = 0; k < experience.length; k += 4) {
    experienceArr.push({
      headline: experience[k],
      place: experience[k + 1],
      years: experience[k + 2],
      context: experience[k + 3],
    });
  }

  let i = 0;
  let k = 100;
  let j = 200;

  return (
    <div className="body">
      <div className="cvContainer">
        <div className="headLine">
          <p className="privateName">
            {location.state.body.fullName.split(" ")[0]}
          </p>
          <p className="lastName">
            {
              location.state.body.fullName.split(" ")[
                location.state.body.fullName.split(" ").length - 1
              ]
            }
          </p>
        </div>
        <div className="smallDetailsContainer">
          <div className="iconNtextContainer">
            <HomeIcon />
            <p className="miniDetails"> {location.state.body.address}</p>
          </div>
          <div className="iconNtextContainer">
            <PhoneAndroidIcon />
            <p className="miniDetails">{location.state.body.phone}</p>{" "}
          </div>
          <div className="iconNtextContainer">
            <EmailIcon />{" "}
            <p className="miniDetails">{location.state.body.email}</p>
          </div>
          <div className="iconNtextContainer">
            <LinkedInIcon />
            <p className="miniDetails">{location.state.body.github}</p>{" "}
          </div>
          <div className="iconNtextContainer">
            <LinkIcon />{" "}
            <p className="miniDetails">{location.state.body.website}</p>
          </div>
        </div>
      </div>
      <div className="iconNtextContainer">
        <ReorderIcon className="bigIcons" />
        <p className="bigDetails">OBJECTIVE</p>
      </div>
      <hr></hr>
      <p className="bigDetailsList">{location.state.body.objective}</p>
      <div className="iconNtextContainer">
        <SchoolIcon className="bigIcons" />
        <p className="bigDetails">EDUCATION</p>
      </div>
      {educationArr.map((educ) => {
        k++;
        return (
          <div key={k}>
            <p className="bigDetailsListSpecial">
              {educ.headline} |{educ.place}
            </p>
            <p className="bigDetailsList">
              {educ.years}
            </p>
            <p className="bigDetailsList">
              {educ.context}
            </p>
          </div>
        );
      })}
      <div className="iconNtextContainer">
        <WorkIcon className="bigIcons" />
        <p className="bigDetails">EXPERIENCE</p>
      </div>
      {experienceArr.map((exp) => {
        j++;
        return (
          <div key={j}>
            <p className="bigDetailsListSpecial">
              {exp.headline} |{exp.place}
            </p>
            <p className="bigDetailsList">
              {exp.years}
            </p>
            <p className="bigDetailsList">
              {exp.context}
            </p>
          </div>
        );
      })}
      <div className="iconNtextContainer">
        <ConstructionIcon className="bigIcons" />
        <p className="bigDetails">SKILLS</p>
      </div>
      <ul>
        {skills.map((skill) => {
          i++;
          return (
            <li key={'skill' + i} className="bigDetailsList">
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="iconNtextContainer">
        <RowingIcon className="bigIcons" />
        <p className="bigDetails">ACTIVITIES</p>
      </div>
      <p className="bigDetailsList">{location.state.body.activities}</p>
    </div>
  );
}

export default GeneratedCv;
