'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function Greet(props: {
  linkPrimary: string;
  linkSecondary: string;
  primaryText: string;
  secondaryText: string;
}) {
  const { replace } = useRouter();
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
        <Button
          onClick={() => replace(props.linkPrimary)}
          className="w-full"
          disabled
        >
          Daftar Sekarang
        </Button>
      </div>
    </div>
  );
}
