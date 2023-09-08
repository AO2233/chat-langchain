'use client';

import { ChatWindow } from "../app/components/ChatWindow";
import { ToastContainer } from "react-toastify";

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../app/theme'

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <ToastContainer />
      <ChatWindow
        apiBaseUrl={process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080"}
        titleText="Chat LangChain 🦜🔗"
        placeholder="What is LangChain Expression Language?"
      ></ChatWindow>
    </ChakraProvider>
  );
}
