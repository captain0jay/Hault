"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Inter } from "next/font/google";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const server_url = process.env.NEXT_PUBLIC_SERVER_URL || '';

  useEffect(() => {
    const checkSessionToken = async () => {
      const sessionToken = localStorage.getItem('session_token');

      if (!sessionToken) {
        setIsAuthenticated(false);
        return;
      }else{
        setIsAuthenticated(true);
      }

      try {
        const response = await axios.post(`${server_url}/api/v1/auth/user`, null, {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        });

        if (response.data.status === 'passed') {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        window.location.href = '/login';
        setIsAuthenticated(false);
      }

      if (isAuthenticated === false) {
        window.location.href = '/login';
      }
    };

    checkSessionToken();
  }, []);


  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full h-full'>{children}</div>
  )
}
