"use client";
import { supabase } from "@/lib/supabase/department";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import React from "react";

const Signin = () => {
  return (
    <div className="text-black absolute top-0 w-full bg-white py-12">
      <div className="w-[25%] mx-auto">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </div>
    </div>
  );
};

export default Signin;
