import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div>
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-xl font-bold text-sky-500 gap-2 ">Movies</span>
          <span className="text-xl ">Reviews</span>
        </Link>
      </div>
      <ul className="flex gap-10">
        <li className="hidden sm:block">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hidden sm:block">
          <Link href={"/favorites"}>Favorites</Link>
        </li>
        <li className="hidden sm:block">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <SignedOut>
          <Link
            className=" bg-sky-500  px-2 py-1 rounded-lg "
            href={"/sign-in"}
          >
            Sign in
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
