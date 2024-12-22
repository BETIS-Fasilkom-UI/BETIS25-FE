import Greet from './greet';
export default function Page() {
    return (
      <div className="h-screen w-full flex justify-center">
        <div className="w-11/12 flex flex-col justify-center items-center">
          <Greet 
          primaryText="BETIS 2025"
          secondaryText="Bimbingan Belajar Gratis"
          linkPrimary="Daftar Sekarang"
          linkSecondary="Description"
          />
        </div>
      </div>
    );
  };