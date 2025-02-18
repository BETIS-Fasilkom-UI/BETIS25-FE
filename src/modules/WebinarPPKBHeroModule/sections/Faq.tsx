import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="mt-48 grid lg:grid-cols-2 lg:gap-20 gap-6 px-5 md:px-10 lg:px-20 w-full mb-48">
      {/* Left Section: FAQ Title and Description */}
      <div className="text-center lg:text-left">
        {/* FAQ Title */}
        <h1 className="font-cinzel text-2xl md:text-4xl lg:text-5xl">FAQ</h1>
        {/* Subtitle */}
        <h2 className="font-raleway font-semibold text-xl md:text-3xl lg:text-4xl">
          Frequently Asked Question
        </h2>
        {/* Description */}
        <p className="mt-6 max-lg:hidden font-raleway text-xl">
          Berikut adalah beberapa pertanyaan yang sering diajukan. Jika masih
          membutuhkan bantuan lebih lanjut, silakan hubungi Contact Person yang
          tersedia.
        </p>
      </div>

      {/* Right Section: Accordion */}
      <div>
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {/* Question 1 */}
          <AccordionItem value="item-1" className="w-full">
            <AccordionTrigger>
              Apakah acaranya terbuka untuk selain peserta BETIS?
            </AccordionTrigger>
            <AccordionContent>
              Iya, Webinar PPKB akan terbuka untuk umum.
            </AccordionContent>
          </AccordionItem>

          {/* Question 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger>Apakah acara ini berbayar?</AccordionTrigger>
            <AccordionContent>
              Untuk peserta Betis maupun non peserta Betis, Webinar PPKB tidak
              berbayar (gratis).
            </AccordionContent>
          </AccordionItem>

          {/* Question 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Apakah saya dapat mengakses rekaman acara jika tidak bisa hadir?
            </AccordionTrigger>
            <AccordionContent>
              Akan terdapat rekaman acara yang akan dibagikan setelah acara
              selesai melalui grup.
            </AccordionContent>
          </AccordionItem>

          {/* Question 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Apakah saya membutuhkan aplikasi tertentu untuk mengikuti acara?
            </AccordionTrigger>
            <AccordionContent>
              Acara ini dilakukan secara online melalui aplikasi Zoom sesuai
              dengan link yang diberikan.
            </AccordionContent>
          </AccordionItem>

          {/* Question 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Apakah akan terdapat sesi klinik essay PPKB 1 on 1?
            </AccordionTrigger>
            <AccordionContent>
              Tidak, pembicara hanya akan menjelaskan secara keseluruhan
              bagaimana menulis essay PPKB dengan baik dan benar. Namun, akan
              terdapat sesi tanya jawab jika memiliki pertanyaan
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
