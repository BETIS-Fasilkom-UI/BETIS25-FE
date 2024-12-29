import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FaqModule = () => {
  return (
    <section className="mt-48 flex flex-col lg:flex-row items-start gap-16 px-6 lg:px-20">
      {/* Left Section: FAQ Title and Description */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        {/* FAQ Title */}
        <h1>FAQ</h1>
        {/* Subtitle */}
        <h2>Frequently Asked Question</h2>
        {/* Description */}
        <p className="hidden lg:inline">
          Berikut adalah beberapa pertanyaan yang sering diajukan. Jika masih
          membutuhkan bantuan lebih lanjut, silakan hubungi Contact Person yang
          tersedia.
        </p>
      </div>

      {/* Right Section: Accordion */}
      <div className="w w-full lg:w-1/2">
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {/* Question 1 */}
          <AccordionItem value="item-1" className="mb-10">
            <AccordionTrigger>
              Materi apa yang diajarkan di BETIS 2025?
            </AccordionTrigger>
            <AccordionContent>
              Peserta akan diajarkan materi yang berkaitan dengan Seleksi
              Nasional Berdasarkan Tes (SNBT) 2025.
            </AccordionContent>
          </AccordionItem>

          {/* Question 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Bagaimana sistem pembelajaran BETIS 2025?
            </AccordionTrigger>
            <AccordionContent>bla bla</AccordionContent>
          </AccordionItem>

          {/* Question 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Periode KBM BETIS 2025 sampai kapan?
            </AccordionTrigger>
            <AccordionContent>bla bla</AccordionContent>
          </AccordionItem>

          {/* Question 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Kapan pengumuman peserta BETIS 2025 diumumkan?
            </AccordionTrigger>
            <AccordionContent>bla bla</AccordionContent>
          </AccordionItem>

          {/* Question 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Bagaimana jika kita tidak punya slip gaji orang tua?
            </AccordionTrigger>
            <AccordionContent>bla bla</AccordionContent>
          </AccordionItem>

          {/* Question 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Apakah akan ada biaya tertentu yang harus dibayar?
            </AccordionTrigger>
            <AccordionContent>bla bla</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqModule;

