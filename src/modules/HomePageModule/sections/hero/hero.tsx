import Greet from './greet';
import Jalan from "./assets/jalan";
import Kerajaan1 from "./assets/kerajaan1";
import Kerajaan2 from "./assets/kerajaan2";
import KupuKupu from "./assets/kupu";
import Buku from "./assets/buku";


export default function Page() {
    return (
      <>
      <div className="min-h-screen w-screen flex justify-center relative">

        <div className="flex flex-col justify-center items-center">
          <Greet 
          primaryText="BETIS 2025"
          secondaryText="Bimbingan Belajar Gratis"
          linkPrimary="Daftar Sekarang"
          linkSecondary="Description"
          />
        </div>

        <Jalan
          className="z-[-1] w-[1000px] max-md:w-[900px] max-sm:w-[645px] aspect-[3197/4262] absolute top-[50%] translate-y-[-23%]"
        />
        <Kerajaan1
          className="z-[-2] w-[1000px] max-md:w-[900px] max-sm:w-[645px] aspect-[4276/8320] absolute top-[15%] max-sm:top-[30%] left-0 opacity-50"
        />
        <Kerajaan2
          className="z-[-2] w-[1000px] max-md:w-[900px] max-sm:w-[645px] aspect-[5760/8320] absolute top-[15%] max-sm:top-[30%] right-0 opacity-50"
        />
        <KupuKupu
          left={false}
          className="z-[-1] w-[200px] max-md:w-[80px] aspect-[800/678] absolute top-[20%] right-[3%]"
        />
        <KupuKupu
          left={true}
          className="z-[-1] w-[180px] max-md:w-[80px] aspect-[800/678] absolute top-[30%] left-[3%] transform scale-x-[-1]"
        />
        <Buku
          className="z-[0] w-[800px] max-md:w-[650px] max-sm:w-[549px] aspect-[5200/1782] absolute top-[1150px] max-md:top-[1100px] max-sm:top-[900px]"
        />
      </div>

      <div className='h-screen'>

      </div>
      </>
    );
  };