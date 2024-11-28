"use client";
import "@styles/globals.css";

import Nav from "@pages/Nav";
import { useEffect, useState } from "react";
import { Toaster, toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <head>

        <title>Pradeep Sakthi</title>
        <meta name="description" content="Pradeep Sakthi's Portfolio"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      
      </head>
      <body className="dark selection:bg-sky-700" >
        <div className={"dark-main"}>
          
        <div className={"dark-gradient"}></div>
        </div>
        
        <main className="app">
          <Nav ></Nav>
          {children}
          <Toaster position="top-center"
          reverseOrder={false} />
        </main>
      </body>
    </html>
  );
}
