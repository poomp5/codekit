"use client";

import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icons } from "./icons";

const navItems = [
  {
    title: "Home",
    subItems: ["Home 1", "Home 2", "Home 3"],
  },
  {
    title: "Solutions",
    subItems: [],
  },
  {
    title: "Pages",
    subItems: [],
  },
  {
    title: "Elements",
    subItems: [],
  },
  {
    title: "Blog",
    subItems: [],
  },
  {
    title: "Contacts",
    subItems: [],
  },
];

const colorVariant = [
  {
    href: "/",
    baseColor: "bg-primary",
    secondaryColor: "*:fill-white",
    textColor: "text-white",
  },
  {
    href: "/solution",
    baseColor: "bg-secondary",
    textColor: "text-white",
    secondaryColor: "*:fill-white",
  },
  {
    href: "/elements",
    baseColor: "bg-background",
    textColor: "text-c-black",
    secondaryColor: "*:fill-primary",
  },
];

const socialIcons = Object.values(Icons.Social);

const MobileNav = () => {
  const pathname = usePathname();

  const color = colorVariant.find((item) => item.href === pathname);
  const [openItem, setOpenItem] = useState<string | null>("Home");
  const ElementsPage = pathname === "/elements";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Icons.menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="h-[100dvh] w-full overflow-y-auto p-0"
      >
        <div className={cn("relative flex h-full flex-col", color?.baseColor)}>
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            {ElementsPage ? (
              <Image
                src={"/images/publicity/logo_blue.png"}
                width={92}
                height={30}
                alt="logo"
              />
            ) : (
              <Image
                src={"/images/publicity/logo_white.png"}
                width={92}
                height={30}
                alt="logo"
              />
            )}
          </div>

          <div className="flex-1">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-white/10 font-manrope"
                >
                  <Collapsible
                    open={openItem === item.title}
                    onOpenChange={() =>
                      setOpenItem(openItem === item.title ? null : item.title)
                    }
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          color?.textColor,
                          "flex w-full items-center justify-between rounded-none px-4 py-6 text-left text-lg font-medium"
                        )}
                      >
                        {item.title}
                        {item.subItems.length > 0 &&
                          (openItem === item.title ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          ))}
                      </Button>
                    </CollapsibleTrigger>
                    {item.subItems.length > 0 && (
                      <CollapsibleContent>
                        <div className="space-y-2 px-8 pb-4">
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className={cn(
                                color?.textColor,
                                "flex items-center gap-2 py-2"
                              )}
                            >
                              {subItem}
                              <ArrowRight className="h-4 w-4" />
                            </a>
                          ))}
                        </div>
                      </CollapsibleContent>
                    )}
                  </Collapsible>
                </div>
              ))}
            </nav>
          </div>

          <div className="mt-auto flex items-center justify-between p-6">
            <p className="font-bold text-base font-manrope text-white">
              Follow us
            </p>
            <div className="flex flex-wrap gap-3">
              {socialIcons.map((Icon, index) => (
                <Icon
                  key={index}
                  className={cn("size-6", color?.secondaryColor)}
                />
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
