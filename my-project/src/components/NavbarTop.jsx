import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

export default function NavbarTop() {
  return (
      <div style={{ margin: ' 0px 30px',position: 'relative', zIndex: '1',paddingTop: '30px',fontFamily: 'Poppins'}}  >  
      <Navbar style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white background
        backdropFilter: 'blur(20px)', // Apply a blur effect
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // Optional: Add a subtle border
        borderRadius: '24px'
      }}
      >
      <NavbarBrand className="justify-start">
        <p className="font-bold text-inherit text-2xl">EXCURSIO</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-10 text-xl font-medium" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Travel Guide
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">fiona@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="settings">My Trips</DropdownItem>
            <DropdownItem key="settings">Payment</DropdownItem>
=            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      </Navbar>
      </div>
    
  );
}
