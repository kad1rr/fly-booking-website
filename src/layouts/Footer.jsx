import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather";
import Link from "../components/Link";

const Footer = () => {
  return (
    <div className="flex flex-col bg-gray-300 items-center">
      <div className="flex flex-row gap-x-2 md:gap-x-4 bg-gray-200 w-full p-4 items-center justify-center">
        <Link href="#" text={<Facebook />} />
        <Link href="#" text={<Twitter />} />
        <Link href="#" text={<Instagram />} />
        <Link href="#" text={<Youtube />} />
        <Link href="#" text={<Linkedin />} />
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-4 h-auto">
        <Link href="#" text="Plan&Book" />
        <Link href="#" text="Fly Different" />
        <Link href="#" text="Discover" />
        <Link href="#" text="Help" />
        <Link href="#" text="Sign Up" />
        <Link href="#" text="Sign In" />
        <Link href="#" text="Accesibility" />
        <Link href="#" text="Privacy & Cookies" />
        <Link href="#" text="Legal Notice" />
        <Link href="#" text="Others" />
      </div>
      <p className="mb-6">Turkish Airlines Copyright © 1996 - 2023</p>
    </div>
  );
};

export default Footer;
