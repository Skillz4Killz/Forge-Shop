import React from "react";
import Image from "next/image";
import Fab from "@mui/material/Fab";

const Hero = () => {
  return (
    <div className="relative">
      <div className="relative w-full h-96">
        <Image
          src="/images/Banner.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="relative" style={{ width: "100px", height: "50px" }}>
          <Image src="/images/Logo.jpg" alt="Logo" layout="fill" objectFit="contain" />
        </div>
        <div className="mt-1">
          <a
            href="https://discord.gg/forgeshop"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-1"
          >
            <Fab
              size="small"
              variant="extended"
              color="primary"
              style={{
                fontSize: "12px",
                boxShadow: "none",
                marginRight: "5px",
              }}
            >
              Official Discord
            </Fab>
          </a>
          <a
            href="https://discord.gg/rWMuMdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fab
              size="small"
              variant="extended"
              color="secondary"
              style={{
                fontSize: "12px",
                boxShadow: "none",
                margin: 0,
                background: "orange",
              }}
            >
              Contact Us
            </Fab>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
