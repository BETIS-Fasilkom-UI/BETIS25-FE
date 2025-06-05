import { Card } from '@/components/ui/card';

const Medpar = () => {
  // Array of medpar logo paths
  const medpars: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/1/16/Logo_Official_SidoMuncul._Tbk.svg', // Logo 1
    'https://static.vecteezy.com/system/resources/thumbnails/019/956/200/small/nike-transparent-nike-free-free-png.png', // Logo 2
    'https://pbs.twimg.com/media/B6WVh3SCQAA_97m.png', // Logo 3
    'https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/799deb1c2310f3eb756d5c9735b13e3c.png', // Logo 4
    'https://img.lovepik.com/element/45011/5199.png_860.png', //logo 5
  ];

  const generateRows = (medparsArray: string[]): string[][] => {
    const rows: string[][] = [];

    // Special case for 4 medpars to match the upside-down pyramid structure
    if (medparsArray.length === 4) {
      rows.push([medparsArray[0], '', medparsArray[1]]); // Top row with larger gap
      rows.push([medparsArray[2], medparsArray[3]]); // Bottom row
      return rows;
    }

    let remaining = medparsArray.length;
    let rowSize = 1;

    while (remaining > 0) {
      const currentRow: string[] = [];
      for (let i = 0; i < rowSize && medparsArray.length > 0; i++) {
        currentRow.push(medparsArray.shift()!);
      }
      rows.unshift(currentRow);
      remaining = medparsArray.length;
      rowSize++;
    }

    return rows;
  };

  const rows = generateRows([...medpars]); // Pass a copy of the medpars array

  let medparCount = 1; // Track the correct medpar number

  return (
    <div className="hidden lg:flex flex-col items-center space-y-10">
      {/* Title */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-cinzel text-white">
        Our Media Partners
      </h1>

      {/* Medpar Card Container */}
      <Card className="bg-[#6f4589] rounded-[32px] shadow-[4px_4px_12px_0px_rgba(254,245,255,0.40),  4px_-4px_12px_0px_rgba(254,245,255,0.40)] w-[95vw] md:w-[90vw] lg:w-[80vw]">
        <div className="flex flex-col items-center space-y-8 sm:space-y-4">
          {rows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className={`flex ${
                rowIndex === 0 && rows.length > 1
                  ? 'sm:justify-between justify-center sm:space-x-24'
                  : rowIndex === rows.length - 1
                    ? 'justify-center sm:space-x-16'
                    : 'justify-center sm:space-x-4'
              } sm:flex-row flex-col space-y-4 sm:space-y-0`}
            >
              {row
                .filter((medparLogo) => medparLogo !== '') // Exclude empty strings for mobile
                .map((medparLogo, medparIndex) => (
                  <img
                    key={`logo-${rowIndex}-${medparIndex}`}
                    src={medparLogo}
                    alt={`Medpar Logo ${medparCount++}`}
                    className="h-16 w-auto"
                  />
                ))}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Medpar;
