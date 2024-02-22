import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CommentList from "./CommentList";
import Counter from "./07Hooks/Counter";
import Toggle from "./08Event/Toggle";
import Accomodate from "./07Hooks/Accomodate";
import LandingPage from "./09ConditionalR/LandingPage";
import AttendanceBook from "./10List&Key/AttendanceBook";
import NameForm from "./11Form/NameForm";
import SignUp from "./11Form/SignUp";
import Calculator from "./12ShareState/Calcurator";
import SignupDialog from "./13Composition/SignupDialog";
import ProfileCard from "./13Composition/ProfileCard";
import DarkOrLight from "./14ContextAPI/DarkOrLight";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CommentList />

    {/* <Accomodate></Accomodate> */}
    {/* <Toggle> </Toggle> */}
    {/* <LandingPage /> */}
    {/* <AttendanceBook /> */}
    {/* <NameForm /> */}
    {/* <SignUp /> */}
    {/* <Calculator /> */}
    {/* <SignupDialog></SignupDialog> */}
    {/*<ProfileCard />*/}
    {/* <DarkOrLight /> */}
  </React.StrictMode>,
);
