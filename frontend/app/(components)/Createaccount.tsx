"use client"

import { Icons } from "./icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useGoogleLogin } from '@react-oauth/google';

export function DemoCreateAccount() {
  const server_url = process.env.NEXT_PUBLIC_SERVER_URL || '';
  const self_url = process.env.NEXT_PUBLIC_SELF_URL || '';
  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      fetch(`${server_url}/api/v1/auth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: codeResponse.code }),
      })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("session_token",data.accessToken);
        console.log('Backend response:', data);
        //window.location.href = "/";
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    onError: () => {
      console.error('Google login failed');
    },
    flow: 'auth-code',
  });

  return (
    <Card>
      <CardHeader className="space-y-1">
        <div className="w-full h-[60px] flex items-center justify-center">
        <img src={`${self_url}/Hault_logo_white.png`} alt="sf" className="w-[70px] h-[60px]"/>
        </div>
        <CardTitle className="text-2xl justify-center text-center ">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex justify-center items-center">
          <Button variant="outline" onClick={() => googleLogin()}>
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create account</Button>
      </CardFooter>
    </Card>
  )
}