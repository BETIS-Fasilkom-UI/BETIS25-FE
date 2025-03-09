import { Greet } from './greet';
import Jalan from './assets/jalan';
import Kerajaan1 from './assets/kerajaan1';
import Kerajaan2 from './assets/kerajaan2';
import KupuKupu from './assets/kupu';

export default function Hero() {
  return (
    <div className="min-h-screen w-screen flex justify-center relative mb-[900px] max-md:mb-[650px] max-sm:mb-[400px]">
      <div className="flex flex-col justify-center items-center">
        <Greet
          primaryText="BETIS 2025"
          secondaryText="Bimbingan Belajar Gratis"
          linkPrimary="/registration"
          linkSecondary="Description"
        />
      </div>

      <Jalan className="z-[-1] w-[1000px] max-md:w-[900px] max-sm:w-[645px] aspect-[3197/4262] absolute top-[50%] translate-y-[-23%]" />
      <Kerajaan1 className="z-[-2] w-[1000px] max-md:w-[900px] max-sm:w-[645px] aspect-[4276/8320] absolute top-[15%] max-sm:top-[30%] left-0 opacity-80" />
      <Kerajaan2 className="z-[-2] w-[1000px] max-md:w-[900px] max-sm:w-[645px] aspect-[5760/8320] absolute top-[15%] max-sm:top-[30%] right-0 opacity-60" />
      <KupuKupu
        reverse={false}
        className="z-[-1] w-[200px] max-md:w-[80px] aspect-[800/678] absolute top-[20%] right-[3%]"
      />
      <KupuKupu
        reverse={true}
        className="z-[-1] w-[180px] max-md:w-[80px] aspect-[800/678] absolute top-[30%] left-[3%] transform scale-x-[-1]"
      />
    </div>
  );
}
