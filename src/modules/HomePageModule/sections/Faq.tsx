import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="mt-48 grid lg:grid-cols-2 lg:gap-20 gap-6 w-[95vw] md:w-[90vw] lg:w-[80vw] mb-48">
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
            <AccordionContent>
              Peserta akan diajarkan materi yang berkaitan dengan Seleksi
              Nasional Berdasarkan Tes (SNBT) 2025.
            </AccordionContent>
          </AccordionItem>

          {/* Question 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Periode KBM BETIS 2025 sampai kapan?
            </AccordionTrigger>
            <AccordionContent>
              Peserta akan diajarkan materi yang berkaitan dengan Seleksi
              Nasional Berdasarkan Tes (SNBT) 2025.
            </AccordionContent>
          </AccordionItem>

          {/* Question 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Kapan pengumuman peserta BETIS 2025 diumumkan?
            </AccordionTrigger>
            <AccordionContent>
              Peserta akan diajarkan materi yang berkaitan dengan Seleksi
              Nasional Berdasarkan Tes (SNBT) 2025.
            </AccordionContent>
          </AccordionItem>

          {/* Question 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Bagaimana jika kita tidak punya slip gaji orang tua?
            </AccordionTrigger>
            <AccordionContent>
              Peserta akan diajarkan materi yang berkaitan dengan Seleksi
              Nasional Berdasarkan Tes (SNBT) 2025.
            </AccordionContent>
          </AccordionItem>

          {/* Question 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Apakah akan ada biaya tertentu yang harus dibayar?
            </AccordionTrigger>
            <AccordionContent>
              Peserta akan diajarkan materi yang berkaitan dengan Seleksi
              Nasional Berdasarkan Tes (SNBT) 2025.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
