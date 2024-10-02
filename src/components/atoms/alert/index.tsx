import React from "react";

import Link from "next/link";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Alert = ({
  description,
  url,
  title,
}: {
  description: string;
  url?: string;
  title: string;
}) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="bg-yellow-300 h-7 w-36 items-center justify-center rounded-2xl hover:text-slate-500 hover:bg-yellow-200 mx-2">
          {title}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>More information</AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col text-center items-center justify-around">
              <div className="pb-7">{description}</div>
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-300 h-7 w-36 justify-center rounded-2xl hover:text-slate-500 hover:bg-yellow-200 mx-2"
                >
                  Demo
                </a>
              ) : (
                <p>Thanks for following me</p>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="bg-yellow-300 h-7 w-20 justify-center rounded-2xl hover:text-slate-500 hover:bg-yellow-200 mx-2">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Alert;
