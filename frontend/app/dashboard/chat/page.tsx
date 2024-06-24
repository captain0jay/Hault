"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react';
import axios from 'axios';

interface Message {
  sender: 'User' | 'AI';
  text: string;
}
export default function chat(){
    const [text, setText] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const server_url = process.env.NEXT_PUBLIC_SERVER_URL || '';

  const handleSubmit = async () => {
    if (!text.trim()) return; // Do nothing if text is empty or whitespace

    // Add the user's message to the messages array
    setMessages(prevMessages => [...prevMessages, { sender: 'User', text }]);

    try {
      const response = await axios.post(`${server_url}/api/v1/ai/message`, {
        Body: text
      });

      // Add the AI response to the messages array
      setMessages(prevMessages => [...prevMessages, { sender: 'AI', text: response.data }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prevMessages => [...prevMessages, { sender: 'AI', text: 'Error sending message please try again later!' }]);
    }

    setText(''); // Clear the textarea
  };

  return (
    <div className='w-full h-full relative'>
      <ScrollArea className="h-full w-full">
      {messages.map((message, index) => (
        <div key={index} className='border-b border-black p-2 sm:p-4 flex flex-col gap-2'>
            <p className='text-green-600'>{message.sender}</p>
            <div>{message.text}</div>
        </div>
      ))}
        {/* <div className='border-b border-black p-2 sm:p-4 flex flex-col gap-2'>
            <p className='text-green'>User</p>
            <div>Hi how are you?</div>
        </div> */}
      </ScrollArea>
      <div className='absolute bottom-0 left-0 w-full z-10'>
        <div className="w-full flex justify-end items-end">
          <Button className='rounded rounded-0 bg-black' onClick={handleSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </Button>
        </div>
        <div className='w-full h-[100px] border-t-2 border-black flex flex-col gap-2'>
        <Textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What do you wanna ask hault..."/>
        </div>
      </div>
    </div>
  )
}
