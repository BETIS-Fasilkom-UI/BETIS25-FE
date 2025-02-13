import Image from "next/image";
import styles from "./background.module.css"; // Import the CSS module

const Background = () => {
  return (
    <div >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#692597] to-[#220C31] -z-10 h-full"></div>

      {/* Background Images */}
      <Image
        src="/semak-kanan.png"
        width={336}
        height={245}
        alt="Background Image"
        className="absolute bottom-0 right-0 -z-10 w-[200px] md:w-[280px] lg:w-[336px]"
      />
      <Image
        src="/lampu-kiri.png"
        width={258}
        height={558}
        alt="Background Image"
        className="absolute bottom-0 left-0 -z-10 w-40 md:w-48 md:max-w-[240px] lg:w-[258px]"
      />

      {/* New Twinkling Light Images */}
      <div>
        <Image
          src="/cahaya-lampu-gantung.png"
          width={150}  // Reduced size
          height={150} // Reduced size
          alt="Twinkling Hanging Light"
          className={`${styles.twinkleReverse} absolute bottom-[150px] md:bottom-[180px] lg:bottom-[225px] left-[90px] md:left-[107px] lg:left-[135px] w-5 md:w-[27px] lg:w-[35px]`}

        />
        <Image
          src="/cahaya-lampu-tinggi.png"
          width={40}
          height={50} 
          alt="Twinkling Tall Light"
          className={`${styles.twinkle} absolute bottom-[273px] md:bottom-[327px] lg:bottom-[408px] left-[22px] md:left-[25px] lg:left-[31px] w-5 md:w-[27px] lg:w-[35px]`}
        />
      </div>
    </div>
  );
};

export default Background;
