import { Button } from "@/components/ui/button";
import Link from "next/link";
import useRegisteredContext from "../../context";

export default function Greet(props: {
  linkPrimary: string;
  linkSecondary: string;
  primaryText: string;
  secondaryText: string;
}) {
  const { isRegistered } = useRegisteredContext();
  return (
    <div className="w-fit flex flex-col gap-10 max-md:gap-6 max-sm:gap-4">
      <div>
        <h1 className="text-[#FFF6F6] text-7xl max-md:text-6xl max-sm:text-4xl font-cinzel">
          {props.primaryText}
        </h1>
        <h2 className="text-white text-4xl max-md:text-xl max-sm:text-base text-center">
          {props.secondaryText}
        </h2>
      </div>
      <div className="w-full flex flex-col gap-5 max-md:gap-4 max-sm:gap-3">
        <Link href={props.linkPrimary}>
          <Button disabled={isRegistered} className="w-full">Daftar Sekarang</Button>
        </Link>
        <Link href={props.linkPrimary} className="hidden">
          <Button className="w-full" variant="secondary">
            Description
          </Button>
        </Link>
      </div>
    </div>
  );
}
