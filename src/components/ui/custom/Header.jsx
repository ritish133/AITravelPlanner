import React, { useEffect, useState } from "react";
import './Header.css'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { Link, useNavigation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { Button } from "../button";
function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDailog, setOpenDailog] = useState(false);

  useEffect(() => {
    console.log(user);
  }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = async (tokenInfo) => {
    console.log("HERE", tokenInfo);
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDailog(false);
        window.location.reload();
      });
  };

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5 w-screen">
      <a href="/">
        <div className="flex items-center">
          <img src="/T.png" className="h-14 ml-5" />
          <div className="text-[30px]">RAVELOCITY</div>
        </div>
      </a>

      <div>
        {user ? (
          <div className="flex items-center gap-3 hide">
            <a href='https://ai-studio-project.vercel.app/supportus'>
            <Button className={`hover:text-primary hover:font-bold transition-all cursor-pointer`}>Support Us</Button>
            </a>
            <a href='https://ai-studio-project.vercel.app/'>
            <Button className={`hover:text-primary hover:font-bold transition-all cursor-pointer`}>AI Studio</Button>
            </a>
            <a href="/create-trip">
              <Button variant="outline" className="rounded-full">
                + Create Trip
              </Button>
            </a>
            <a href="/my-trips">
              <Button variant="outline" className="rounded-full">
                My Trips
              </Button>
            </a>
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  className="h-[35px] w-[35px] rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <div className="flex gap-5">
            <a href='https://ai-studio-project.vercel.app/supportus'>
            <Button className={`hover:text-primary hover:font-bold transition-all cursor-pointer`}>Support Us</Button>
            </a>
          <a href='https://ai-studio-project.vercel.app/' >
          <Button className="hover:text-primary hover:font-bold transition-all cursor-pointer hide-on-small-screen">AI Studio</Button>
          </a>
          <Button onClick={() => setOpenDailog(true)} className="hide-on-screen">Sign In</Button>
          </div>
          
        )}
      </div>
      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <div className="flex items-center">
                <img src="/T.png" className="h-14 ml-5" />
                <div className="text-[30px]">RAVELOCITY</div>
              </div>
              <h2 className="font-bold text-lg mt-7">Sign In With Google</h2>
              <p>Sign in to the App with Google authentication securely</p>

              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
