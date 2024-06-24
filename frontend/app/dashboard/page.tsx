"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Textarea } from '@/components/ui/textarea'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ContextItem {
  id: string;
  createdTime: string;
  fields: {
    Name: string;
    Description: string;
  };
}

export default function ContextComponent() {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [contexts, setContexts] = useState<ContextItem[]>([]);
  const [dummy,setDummy] = useState<string>('');
  const server_url = process.env.NEXT_PUBLIC_SERVER_URL || '';
  // Fetch initial context items
  useEffect(() => {
    const fetchContexts = async () => {
      try {
        const response = await axios.get(`${server_url}/api/v1/context/read`);
        setContexts(response.data.records);
      } catch (error) {
        console.error('Error fetching contexts:', error);
      }
    };

    fetchContexts();
  }, [dummy]);

  const handleSubmit = async () => {
    if (!name.trim() || !description.trim()) return; // Do nothing if name or description is empty or whitespace

    try {
      const response = await axios.post(`${server_url}/api/v1/context/create`, {
        Name: name,
        Description: description
      });

      setDummy(response.toString());
      // Add the new context item to the contexts array
      // setContexts(prevContexts => [...prevContexts, response.data]);
    } catch (error) {
      console.error('Error creating context item:', error);
    }

    setName(''); // Clear the name input
    setDescription(''); // Clear the description textarea
  };

  return (
    <div className='w-full h-full relative'>
      <ScrollArea className="h-full w-full">
        {contexts.map((context, index) => (
          <div key={index} className='border-b border-black p-2 sm:p-4 flex flex-col gap-2'>
            <p className='text-blue-600'>{context.fields.Name}</p>
            <div>{context.fields.Description}</div>
          </div>
        ))}
      </ScrollArea>
      <div className='absolute bottom-0 left-0 w-full z-10'>
      <div className="w-full flex justify-end items-end">
          <Button className='rounded rounded-0 bg-black' onClick={handleSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </Button>
        </div>
        <div className='w-full flex flex-col gap-2 border-t-2 border-black'>
          <Input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <Textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </div>
      </div>
    </div>
  );
}
