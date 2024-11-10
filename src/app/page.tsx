import Image from "next/image";
import { Loading } from "@/components/elements/Loading";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="mt-56">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </div>
  );
}
