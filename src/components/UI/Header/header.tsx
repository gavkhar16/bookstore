"use client";

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";
import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navItems = [
    { href: "#hero", label: "HOME|" },
    { href: "#article", label: "ABOUT US |" },
    { href: "#book", label: "BOOKS |" },
    { href: "#release", label: "NEW RELEASE |" },
    { href: "#categorie", label: "CONTACT US |" },
    { href: "#subscribe", label: "BLOG" },
  ];

  return (
    <>
      <header>
        <div className={styles.tel}>
          <div className={styles.phone}>
            <img src="/pictures/icons/Vector.svg" alt="telephone" />
            <p>+91 8374902234</p>
          </div>

          <div className={styles.icons}>
            <button>
              <img src="/pictures/icons/Vector (1).svg" alt="Иконка 1" />
            </button>
            <button>
              <img src="/pictures/icons/Vector (2).svg" alt="Иконка 2" />
            </button>
            <button>
              <img src="/pictures/icons/Vector (3).svg" alt="Иконка 3" />
            </button>
            <button>
              <img src="/pictures/icons/Vector (4).svg" alt="Иконка 4" />
            </button>
            <button>
              <img src="/pictures/icons/Vector (5).svg" alt="Иконка 5" />
            </button>
          </div>
        </div>
      </header>

      <Navbar className={styles.navbar}>
        <NavbarContent justify="start">
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>


        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <NavbarItem key={index}>
                <Link
                  href={item.href}
                  onClick={() => setActiveIndex(index)} // клик активирует
                  className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>

        <NavbarContent justify="end">
          <img src="/pictures/icons/Group 294.svg" alt="menu" />
        </NavbarContent>
      </Navbar>
    </>
  );
}
