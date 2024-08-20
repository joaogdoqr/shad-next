"use client";

import { Command, CommandGroup, CommandItem, CommandList } from "../ui/command";
import {
  User,
  HandCoins,
  Inbox,
  BellRing,
  Settings,
  GlobeLock,
  ScrollText,
} from "lucide-react";
import { UserItem } from "../user/user-item";

export const Sidebar = () => {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User />,
          text: "Profile",
        },
        {
          link: "/",
          icon: <HandCoins />,
          text: "Billing",
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <BellRing />,
          text: "Notifications",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <GlobeLock />,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <ScrollText />,
          text: "Logs",
        },
      ],
    },
  ];

  return (
    <aside className="flex flex-col fixed w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem></UserItem>
      </div>
      <div>
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem key={optionKey} className="cursor-pointer">
                    <i className="mr-2">{option.icon}</i>
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
    </aside>
  );
};
