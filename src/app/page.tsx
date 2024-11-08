import Image from "next/image";
import { Loading } from "@/components/elements/Loading";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="mt-56 py-6 px-12">
      <Textarea placeholder="Hello" />
    </div>
  );
}
