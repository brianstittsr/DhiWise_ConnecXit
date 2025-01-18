import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This project was generated By{" "}
        <a href="https://www.dhiwise.com" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Dhiwise
        </a>
        . Quickly use below links to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/" style={{ color: "#87CEFA", textDecoration: "none" }}>
            CXTLanding
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/inbox" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Inbox
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/account" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Account
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/accountone" style={{ color: "#87CEFA", textDecoration: "none" }}>
            AccountOne
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/accounttwo" style={{ color: "#87CEFA", textDecoration: "none" }}>
            AccountTwo
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/frame" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Frame
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/frameone" style={{ color: "#87CEFA", textDecoration: "none" }}>
            FrameOne
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/frametwo" style={{ color: "#87CEFA", textDecoration: "none" }}>
            FrameTwo
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/framethree" style={{ color: "#87CEFA", textDecoration: "none" }}>
            FrameThree
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/cxtlogin" style={{ color: "#87CEFA", textDecoration: "none" }}>
            CXTLogin
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/cxtsignup" style={{ color: "#87CEFA", textDecoration: "none" }}>
            CXTSignUp
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/cxtsignupwizard" style={{ color: "#87CEFA", textDecoration: "none" }}>
            CXTSignUpWizard
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/cxtsignupprofileinfo" style={{ color: "#87CEFA", textDecoration: "none" }}>
            CXTSignUpProfileInfo
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/cxtsignupprofileinfoone" style={{ color: "#87CEFA", textDecoration: "none" }}>
            CXTSignUpProfileInfoOne
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/cxtaccountsettings" style={{ color: "#87CEFA", textDecoration: "none" }}>
            CXTAccountSettings
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/cxtbilling" style={{ color: "#87CEFA", textDecoration: "none" }}>
            CXTBilling
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/cxtlistpage" style={{ color: "#87CEFA", textDecoration: "none" }}>
            CXTListPage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/cxtdetailpage" style={{ color: "#87CEFA", textDecoration: "none" }}>
            CXTDetailPage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/search" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Search
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/resultlist" style={{ color: "#87CEFA", textDecoration: "none" }}>
            ResultList
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/cxtinbox" style={{ color: "#87CEFA", textDecoration: "none" }}>
            CXTInbox
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
