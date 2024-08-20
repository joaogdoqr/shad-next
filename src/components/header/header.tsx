"use client";

import { BellIcon, ChevronRight } from "lucide-react";
import { CommandDemo } from "../command/command";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 border-b">
      <CommandDemo></CommandDemo>
      <div className="flex items-center justify-end">
        <Button variant="outline" size="icon">
          <BellIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
