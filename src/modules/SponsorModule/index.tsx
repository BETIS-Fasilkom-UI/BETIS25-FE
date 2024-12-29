import React from "react";
import { Card } from "@/components/ui/card";

const SponsorModule = () => {
    // Array of sponsor logo paths
    const sponsors: string[] = [
       "https://upload.wikimedia.org/wikipedia/commons/1/16/Logo_Official_SidoMuncul._Tbk.svg", // Logo 1
        "https://static.vecteezy.com/system/resources/thumbnails/019/956/200/small/nike-transparent-nike-free-free-png.png", // Logo 2
        "https://pbs.twimg.com/media/B6WVh3SCQAA_97m.png", // Logo 3
        "https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/799deb1c2310f3eb756d5c9735b13e3c.png",  // Logo 4
        "https://img.lovepik.com/element/45011/5199.png_860.png", //logo 5
    ];

    const generateRows = (sponsorsArray: string[]): string[][] => {
        const rows: string[][] = [];

        // Special case for 4 sponsors to match the upside-down pyramid structure
        if (sponsorsArray.length === 4) {
            rows.push([sponsorsArray[0], "", sponsorsArray[1]]); // Top row with larger gap
            rows.push([sponsorsArray[2], sponsorsArray[3]]); // Bottom row
            return rows;
        }

        let remaining = sponsorsArray.length;
        let rowSize = 1;

        while (remaining > 0) {
            const currentRow: string[] = [];
            for (let i = 0; i < rowSize && sponsorsArray.length > 0; i++) {
                currentRow.push(sponsorsArray.shift()!);
            }
            rows.unshift(currentRow);
            remaining = sponsorsArray.length;
            rowSize++;
        }

        return rows;
    };

    const rows = generateRows([...sponsors]); // Pass a copy of the sponsors array

    let sponsorCount = 1; // Track the correct sponsor number

    return (
        <div className="mt-48 flex flex-col items-center space-y-6">
            {/* Title */}
            <h1 className="text-4xl font-cinzel text-white">Our Sponsors</h1>

            {/* Sponsor Card Container */}
            <Card className="bg-purple-800 p-6 rounded-lg shadow-md w-full max-w-4xl">
                <div className="flex flex-col items-center space-y-8 sm:space-y-4">
                    {rows.map((row, rowIndex) => (
                        <div
                            key={`row-${rowIndex}`}
                            className={`flex ${
                                rowIndex === 0 && rows.length > 1
                                    ? "sm:justify-between justify-center sm:space-x-24"
                                    : rowIndex === rows.length - 1
                                    ? "justify-center sm:space-x-16"
                                    : "justify-center sm:space-x-4"
                            } sm:flex-row flex-col space-y-4 sm:space-y-0`}
                        >
                            {row
                                .filter((sponsorLogo) => sponsorLogo !== "") // Exclude empty strings for mobile
                                .map((sponsorLogo, sponsorIndex) => (
                                    <img
                                        key={`logo-${rowIndex}-${sponsorIndex}`}
                                        src={sponsorLogo}
                                        alt={`Sponsor Logo ${sponsorCount++}`}
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

export default SponsorModule;
