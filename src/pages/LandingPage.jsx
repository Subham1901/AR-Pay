import React from "react";
import wave from "../assets/wave.png";
import Brand from "../components/Brand";
import { Button } from "rsuite";
import LoginModal from "../components/LoginModal";
const LandingPage = () => {
  const [open, setOpen] = React.useState(false);
  const [backdrop, setBackdrop] = React.useState("static");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="landingpage">
      <svg
        id="wave"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 400"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
            <stop stopColor="rgba(11.403, 12.934, 98.222, 1)" offset="0%" />
            <stop stopColor="rgba(74.723, 11.957, 98.222, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,120L24,160C48,200,96,280,144,273.3C192,267,240,173,288,140C336,107,384,133,432,160C480,187,528,213,576,240C624,267,672,293,720,286.7C768,280,816,240,864,193.3C912,147,960,93,1008,100C1056,107,1104,173,1152,226.7C1200,280,1248,320,1296,306.7C1344,293,1392,227,1440,186.7C1488,147,1536,133,1584,120C1632,107,1680,93,1728,113.3C1776,133,1824,187,1872,233.3C1920,280,1968,320,2016,300C2064,280,2112,200,2160,173.3C2208,147,2256,173,2304,206.7C2352,240,2400,280,2448,306.7C2496,333,2544,347,2592,326.7C2640,307,2688,253,2736,193.3C2784,133,2832,67,2880,73.3C2928,80,2976,160,3024,166.7C3072,173,3120,107,3168,106.7C3216,107,3264,173,3312,220C3360,267,3408,293,3432,306.7L3456,320L3456,400L3432,400C3408,400,3360,400,3312,400C3264,400,3216,400,3168,400C3120,400,3072,400,3024,400C2976,400,2928,400,2880,400C2832,400,2784,400,2736,400C2688,400,2640,400,2592,400C2544,400,2496,400,2448,400C2400,400,2352,400,2304,400C2256,400,2208,400,2160,400C2112,400,2064,400,2016,400C1968,400,1920,400,1872,400C1824,400,1776,400,1728,400C1680,400,1632,400,1584,400C1536,400,1488,400,1440,400C1392,400,1344,400,1296,400C1248,400,1200,400,1152,400C1104,400,1056,400,1008,400C960,400,912,400,864,400C816,400,768,400,720,400C672,400,624,400,576,400C528,400,480,400,432,400C384,400,336,400,288,400C240,400,192,400,144,400C96,400,48,400,24,400L0,400Z"
        />
      </svg>

      <div className="flex">
        <h1 className="landing-logo">AR PAY</h1>
        <p className="quote">
          Processing a AR invoice with a payment applied to it.
        </p>

        <Button
          onClick={handleOpen}
          appearance="primary"
          className="login-button"
        >
          Login
        </Button>
      </div>
      <LoginModal open={open} backdrop={backdrop} handleClose={handleClose} />
    </div>
  );
};

export default LandingPage;
