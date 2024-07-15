import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-32">
      <div className="md:col-span-2">
        <Image
          src="/images/signin/siggnin.png"
          height={400}
          width={400}
          alt="login"
          className="md:h-[600px] w-full"
        />
      </div>
      <div className="p-10">
        <div className="space-y-5">
          <h1 className="text-2xl">Log in to SwiftCarts</h1>
          <p className="text-xs">Enter Details bellow</p>

          <form className="mt-10 space-y-3">
            <Input
              type="email"
              label="Enter your Email"
              size="sm"
              name="email"
            />
            <Input
              type="password"
              label="Enter your Password"
              size="sm"
              name="password"
            />
            <div className="flex items-center justify-between">
              <Button radius="none" variant="solid" color="danger">
                Create Account
              </Button>
              <Link className="text-danger-500 text-sm" href="/signin">
                Forgot password ?
              </Link>
            </div>
          </form>
          <Button
            color="default"
            variant="bordered"
            startContent={<FcGoogle />}
            fullWidth
            radius="none"
          >
            Sign Up with Google
          </Button>
          <p>
            Not have an account?{" "}
            <Link className="text-blue-500 underline" href="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
