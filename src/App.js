import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navbar";
//import Dashboard from "./components/Dashboard";
import Clients from "./components/Clients";
// import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Clients />
      </div>
    );
  }
}

export default App;

// const SubtitleWrapper = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
// `;

// const Placeholder = styled.div`
//   margin: 50px auto 0 auto;
//   height: 200px;
//   width: 300px;
//   border: 1px solid black;
// `;

// const Arrow = styled.a`
//   &:before {
//     content: "arrow";
//     /*     background: url('chevron-up-dark.png') no-repeat; */
//     font-family: serif;
//     border: 0.25px solid #0b2f37;
//     padding: 2px;
//   }
// `;

// const Navigation = styled.nav`
//   background-color: #0b2f37;
//   height: 5vh;
//   color: #ebede1;
//   padding: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;

//   ul {
//     list-style-type: none;
//     display: flex;
//     justify-content: flex-end;

//     li {
//       display: inline-block;
//       margin-right: 15px;
//       padding-right: 5px;
//       font-weight: bold;
//       border-right: 2px solid #ebede1;

//       /* &:hover {
//         border-bottom: 2px solid #ebede1;
//       } */
//     }
//   }
// `;

// const Title = styled.h1`
//   color: rgba(11, 47, 55, 0.9);
//   font-size: 2.5rem;
//   text-shadow: 0px 4px rgba(64, 135, 56, 0.75), 0px 8px rgba(255, 166, 0, 0.75);
// `;

// const Section = styled.section`
//   height: 60vh;
//   border-bottom: 5px solid #0b2f37;
//   padding: 50px;
//   background-color: #ebede1;

//   .time-icon {
//     border: 0.25px solid #0b2f37;
//     margin: 0 auto;
//   }
// `;
// const Subtitle = styled.h2``;
// const Footer = styled.footer`
//   height: 10vh;
// `;
