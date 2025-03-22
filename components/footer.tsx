"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react"; // Assuming you're using lucide for icons
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Icons } from "./icons";
import { SectionContainer } from "./section-container";

const footer = [
  {
    title: "About",
    sub: ["Home", "About Us", "Services", "Solution"],
  },
  {
    title: "Information",
    sub: ["Contacts", "Our team", "Blog", "FAQ"],
  },
  {
    title: "Service",
    sub: ["Pages", "Elements", "Site map", "Pricing", "FAQ"],
  },
];

const socialIcons = Object.values(Icons.Social);

const FooterMobile = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const FooterSection = ({
    title,
    id,
    children,
  }: {
    title: string;
    id: string;
    children: React.ReactNode;
  }) => (
    <div className="border-b border-white/10">
      <button
        onClick={() => toggleSection(id)}
        className="flex justify-between items-center w-full py-4 text-left"
      >
        <h3 className="text-base text-white font-normal">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            openSection === id ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openSection === id ? "max-h-48" : "max-h-0"
        }`}
      >
        <div className="pb-4">{children}</div>
      </div>
    </div>
  );

  return (
    <footer className="bg-secondary text-sm">
      <SectionContainer className="space-y-4">
        <Image
          className="size-fit"
          src="/images/publicity/logo_blue.png"
          width={180}
          height={108}
          alt="logo"
        />
        <FooterSection title="Quick link" id="quick-links">
          <ul className="space-y-2">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Our Services</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </FooterSection>

        <FooterSection title="Service" id="services">
          <ul className="space-y-2">
            <li>
              <Link href="#">Consulting</Link>
            </li>
            <li>
              <Link href="#">Development</Link>
            </li>
            <li>
              <Link href="#">Analytics</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
          </ul>
        </FooterSection>

        <FooterSection title="Contact info" id="contact">
          <ul className="space-y-2">
            <li>123 Business Street</li>
            <li>New York, NY 10001</li>
            <li>Phone: (555) 123-4567</li>
            <li>Email: contact@example.com</li>
          </ul>
        </FooterSection>

        <div className="mt-8 flex justify-between items-center">
          <h1 className="font-manrope font-bold text-base text-white">Follow us</h1>
          <div className="flex gap-[15px]">
            {socialIcons.map((Icon, index) => (
              <Icon key={index} className="*:fill-c-background size-[25px]" />
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-start text-tertiary font-open-sans space-x-4 text-xs opacity-80 ">
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms of use</Link>
        </div>

        <div className="mt-4 text-start text-xs text-tertiary  font-open-sans">
          Ensome© 2022 All Rights Reserved
        </div>
      </SectionContainer>
    </footer>
  );
};

const FooterMain = () => {
  return (
    <SectionContainer className="space-y-10">
      <div className="flex justify-between w-full">
        <Image
          className="size-fit"
          src="/images/publicity/logo_blue.png"
          width={150}
          height={48}
          alt="logo"
        />
        <div className="flex gap-28">
          {footer.map((item, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <h1 className="font-manrope text-base font-bold">{item.title}</h1>
              <div className="font-open-sans flex flex-col space-y-4 text-sm">
                {item.sub.map((sub) => (
                  <h2 key={sub}>{sub}</h2>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <div className="flex justify-between">
        <div className="space-y-[15px]">
          <h1 className="font-manrope font-bold text-base">Contacts</h1>
          <div className="flex gap-[30px]">
            <div className="flex flex-col gap-[10px] font-open-sans text-sm text-[#292D33]">
              <span>+1 601-201-5580</span>
              <div className="font-semibold flex gap-[4px]">
                <span>ensome@info.co.</span>
                <Icons.arrowRight />
              </div>
            </div>
            <div className="flex flex-col gap-[10px] font-open-sans text-sm text-[#292D33]">
              <span>1642 Washington Avenue, Jackson, MS, 39201</span>
              <div className="font-semibold flex gap-[4px]">
                <span>Driving directions</span>
                <Icons.arrowRight />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-[15px]">
          <h1 className="font-manrope font-bold text-base">Social</h1>
          <div className="flex gap-[15px]">
            {socialIcons.map((Icon, index) => (
              <Icon key={index} className="*:fill-primary size-[25px]" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="font-manrope flex gap-[15px] text-c-gray">
          <div className="font-semibold flex items-center gap-[4px] ">
            <span>Privacy policy</span>
            <Icons.arrowRight className="stroke-c-gray" />
          </div>
          <div className="font-semibold flex items-center gap-[4px]">
            <span>Terms of use</span>
            <Icons.arrowRight className="stroke-c-gray" />
          </div>
        </div>

        <p className="font-open-sans text-sm text-c-gstroke-c-gray">
          © 2022 Ensome. All Rights Reserved.
        </p>
      </div>
    </SectionContainer>
  );
};

const Solution = () => {
  const quickLinks = [
    "Home",
    "Solutions",
    "Blog",
    "Contacts",
    "Our team",
    "About Us",
    "Services",
    "FAQ",
  ];

  const serviceLinks = ["Pages", "Elements", "FAQ", "Pricing", "Site map"];

  const contactInfo = [
    "ensome@info.co.us",
    "+1 601-201-5580",
    `1642 Washington Avenue, Jackson,\nMS, Mississippi, 39201`,
  ];

  return (
    <footer className="bg-[#001F3F] text-white">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3 space-y-6">
            <Image
              className="size-fit"
              src="/images/publicity/logo_white.png"
              width={150}
              height={48}
              alt="logo"
            />
            <p className="text-sm text-gray-300 pr-4">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </p>
            <div className="space-y-[15px]">
              <div className="flex gap-[15px]">
                {socialIcons.map((Icon, index) => (
                  <Icon
                    key={index}
                    className="*:fill-c-background size-[25px]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block md:col-span-2"></div>

          <div className="col-span-12 md:col-span-2 space-y-4">
            <h1 className="font-manrope text-base font-bold">Quick Link</h1>
            <ul className="font-open-sans space-y-2.5 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <h2>{link}</h2>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-2 space-y-4">
            <h1 className="font-manrope text-base font-bold">Service</h1>
            <ul className="font-open-sans space-y-2.5 text-sm">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <h2>{link}</h2>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3 space-y-4">
            <h3 className="text-base font-medium">Contact info</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  {info.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 my-10"></div>

        <div className="flex flex-col md:flex-row justify-between text-xs text-gray-400">
          <p>Ensome© 2022 All Rights Reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <h2 className="text-sm text-gray-300">Privacy policy</h2>
            <h2 className="text-sm text-gray-300">Terms of use</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer = () => {
  const pathname = usePathname();
  const IsSolutionPage = pathname === "/solution";
  const IsElementPage = pathname === "/elements";

  return (
    <div
      className={cn(
        IsSolutionPage ? "bg-secondary" : "bg-c-background",
        "w-full"
      )}
    >
      <div className="not-sm:hidden">
        {IsSolutionPage || IsElementPage ? <Solution /> : <FooterMain />}
      </div>
      <div className="sm:hidden">
        <FooterMobile />
      </div>
    </div>
  );
};

export default Footer;
