import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-12 lg:mr-0 shrink-0">
          <Image src="/spooky.svg" width={32} height={32} alt="Gamehub" />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <h1 className="text-lg font-bold">Gamehub</h1>
          <p className="text-xs font-medium text-muted-foreground">
            A place to play games with friends
          </p>
        </div>
      </div>
    </Link>
  );
};
