"use client";
import { FC, useState } from "react";
import Button from "@/app/components/ui/Button";

interface pageProps {}

async function loginWithGoogle() {}

const page: FC<pageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            logo
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
        </div>
        <Button
          isLoading={isLoading}
          type="button"
          className="max-w-sm mx-auto w-full"
          onClick={}
        ></Button>
      </div>
    </>
  );
};

export default page;
