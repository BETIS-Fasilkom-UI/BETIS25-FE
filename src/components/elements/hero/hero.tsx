import Greet from './greet';
import Jalan from "./assets/jalan";


export default function Page() {
    return (
      <>
      
      <div className="min-h-screen w-full flex justify-center relative">

        <div className="flex flex-col justify-center items-center">
          <Greet 
          primaryText="BETIS 2025"
          secondaryText="Bimbingan Belajar Gratis"
          linkPrimary="Daftar Sekarang"
          linkSecondary="Description"
          />
        </div>
        <Jalan
          className="z-[-1] w-[1150px] max-md:w-[900px] max-sm:w-[645px] aspect-[3197/4262] absolute top-[50%] translate-y-[-23%]"
        />

      </div>

      <div className='h-screen'>

      </div>
      </>
    );
  };