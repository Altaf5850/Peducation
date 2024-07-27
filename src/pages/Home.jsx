import React from "react";
import Hero from "../components/home/Hero";
import Learn from "../components/home/Learn";
import Ban from "../components/home/Ban";
import Our from "../components/home/Our";
import Courses from "../components/home/Courses";
import Carouse from "../components/home/Carouse";
import Teacher from "../components/home/Teacher";
import Video from "../components/home/Video";
import Contacts from "../components/home/Contacts";
import AutoPlay from "../components/home/AutoPlay";

function Home() {
  return (
    <div>
      <Hero />
      <Learn />
      <Ban />
      <Our />
      <Courses />
      <Carouse />
      <Video />
      <Teacher />
      <Contacts />
      <AutoPlay />
    </div>
  );
}

export default Home;
