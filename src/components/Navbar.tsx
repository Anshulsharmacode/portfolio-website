import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  return (
    <NavigationMenu className="w-full max-w-screen-lg mx-auto">
      <NavigationMenuList className="flex justify-between items-center">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="font-bold text-lg">Anshul Sharma</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuList>
            <NavigationItem href="#home">Home</NavigationItem>
            <NavigationItem href="#education">Education</NavigationItem>
            <NavigationItem href="#experience">Experience</NavigationItem>
            <NavigationItem href="#projects">Projects</NavigationItem>
            <NavigationItem href="#skills">Skills</NavigationItem>
            <NavigationItem href="#contact">Contact</NavigationItem>
          </NavigationMenuList>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const NavigationItem: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default Navbar;
