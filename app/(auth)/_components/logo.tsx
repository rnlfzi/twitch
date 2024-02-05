import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image src="/spooky.svg" width={80} height={80} alt="Gamehub" />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <h1 className="text-xl font-bold">Gamehub</h1>
        <p className="text-sm font-medium text-muted-foreground">
          A place to play games with friends
        </p>
      </div>
    </div>
  );
};
