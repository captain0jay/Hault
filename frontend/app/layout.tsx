"use client"
import React, { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const NavItem: React.FC<{ destination: string; children: React.ReactNode }> = ({ destination, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.location.href = destination;
  };

  return (
    <div
      className={`h-full w-[100px] sm:w-[150px] text-center flex justify-center items-center cursor-pointer ${isHovered ? 'bg-gray-400' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';
  const self_url = process.env.NEXT_PUBLIC_SELF_URL || '';
  return (
    <GoogleOAuthProvider clientId={client_id}>
      <html lang="en">
        <body className={inter.className}>
          <div className="fixed top-0 w-full h-[70px] bg-white border-b-2 border-black z-50">
            <img
              src={`${self_url}/Hault_logo_white.png`}
              alt="sf"
              className="absolute top-2 left-6 sm:left-8 w-[70px] h-[50px] object-cover"
            />
            <div className="h-full w-full flex justify-end items-end">
              <NavItem destination="/dashboard">Dashboard</NavItem>
              <NavItem destination="/dashboard/chat">Chat</NavItem>
            </div>
          </div>
          <main className="mt-[70px] h-[calc(100vh-70px)] w-full">
            {children}
          </main>
        </body>
      </html>
    </GoogleOAuthProvider>
  );
};

export default RootLayout;
