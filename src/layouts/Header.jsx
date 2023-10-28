import { AlignJustify } from "react-feather";
import Link from "../components/Link";
import ActiveLink from "../components/ActiveLink";

const Header = () => {
  return (
    <div className="w-full h-16 flex flex-row justify-between p-4 items-center z-10">
      <img src="/banner.png" alt="Turkish Airlines" width="200px" />
      <AlignJustify
        className="button lg:hidden cursor-pointer fill-current transition-colors"
        onClick={() => {
          const menu = document.querySelector(".menu");
          menu.classList.toggle("hidden");
          menu.classList.toggle("flex");
          document.body.classList.toggle("overflow-hidden");
        }}
      />
      <div className="bg-white hidden menu absolute top-16 w-full left-0 p-4 flex-col gap-4 lg:flex lg:flex-row lg:top-0 lg:relative lg:left-auto lg:justify-end lg:p-0 lg:items-center">
        <Link href="#" text="Plan&Book" />
        <Link href="#" text="Fly Different" />
        <Link href="#" text="Discover" />
        <Link href="#" text="Help" />
        <Link href="#" text="Sign Up" />
        <ActiveLink href="#" text="Sign In" />
      </div>
    </div>
  );
};

export default Header;
