"use client";
import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Products", path: "/products" },
  ];
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="md:px-10 shadow-md fixed z-[9999]"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-lg">
            <span>Swift</span>
            <span className="text-red-500">Cart</span>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, i) => (
          <NavbarItem key={i}>
            <Link color="foreground" href={item.path}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="flex items-center">
        <NavbarItem className="text-2xl">
          <Input
            type="email"
            className="hidden md:flex"
            placeholder="search here.."
            endContent={
              <CiSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />

          <div className="md:hidden">
            <Badge>
              <CiSearch />
            </Badge>
          </div>
        </NavbarItem>
        <NavbarItem className="text-2xl">
          <Badge content="0" color="default">
            <MdFavoriteBorder />
          </Badge>
        </NavbarItem>
        <NavbarItem>
          <Badge content="0" color="danger">
            <CiShoppingCart className="text-2xl" />
          </Badge>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link color="foreground" className="w-full" href={item.path}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Nav;
