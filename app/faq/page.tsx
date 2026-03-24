import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'QuotesMill kya hai?',
    answer: 'QuotesMill ek WhatsApp-based solution hai manufacturers aur job-work shops ke liye. Customer ne inquiry di WhatsApp pe? QuotesMill automatically samjhta hai aur quotation banata hai. Bas itna hi, simple!'
  },
  {
    question: 'Kya mujhe koi app download karni padegi?',
    answer: 'Nahi! QuotesMill completely WhatsApp-based hai. Aapka phone jo WhatsApp app use karte ho—bas wahi kaam kaafi hai. Koi extra app download nahi. Just connect karo aur shuru karo.'
  },
  {
    question: 'QuotesMill kis type ke businesses ke liye hai?',
    answer: 'Hum small-mid manufacturers ke liye banate hain: CNC shops, job-work shops, auto ancillaries, plastic parts makers, sheet metal workers—basically anyone jinhein har din inquiries aati hain aur manual quotation se time waste hota hai. ₹1 Cr – ₹5 Cr annual revenue vali companies hamara ideal customer hain.'
  },
  {
    question: 'Kya ye Hindi mein kaam karta hai?',
    answer: 'Haan! Hindi, Hinglish, aur English—teeno mein kaam karta hai. Customer ne Hindi mein inquiry di? Hum samajh jayenge. Owner ko Hinglish se zyada comfortable lage? Hum Hinglish mein baat karenge. Simple language, no jargon.'
  },
  {
    question: 'Kya ye abhi available hai?',
    answer: 'Nahi, abhi hum beta phase mein hain. Par early access get kar sakte ho! Early access list join karo aur sabse pehle use karna. Beta launch jaldi ho raha hai—shayyad few weeks mein.'
  },
  {
    question: 'Mera data safe rahega?',
    answer: 'Bilkul safe rahega! Apka data apka business. Hum kisi ko sell nahi karenge, kisi ko share nahi karenge. Servers India mein hain, jurisdiction India mein hai, aur data encryption standard industry best practices follow karte hain. Full privacy, no ads, no tracking.'
  },
  {
    question: 'IndiaMART se jo leads aati hain, unka kya?',
    answer: 'Good question! Customer ne IndiaMART se inquiry forward ki? Hum directly WhatsApp pe receive kar sakte ho, ya manually WhatsApp group mein paste kar sakte ho. QuotesMill dono tarike mein parse karega. Next version mein direct IndiaMART integration add karenge.'
  },
  {
    question: 'Quotation mein meri company ka naam aur logo aayega?',
    answer: 'Haan, bilkul! Aapka company name, logo, GST number—sab set kar sakte ho. Quotation mein apni branding hogi. Customer ko lagega professional quotation aaya, not some generic template.'
  }
]

export default function FAQ() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 mt-16 bg-white dark:bg-slate-950 min-h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white text-balance">
              Aksar Pooche Jaane Wale Sawal
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              QuotesMill ke baare mein jo poocho, sab jawab yahan hai
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b border-slate-200 dark:border-slate-700 last:border-b-0"
              >
                <AccordionTrigger className="py-6 hover:no-underline text-left">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-balance">
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-green-700 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">
            Aur Sawal Ho?
          </h2>
          <p className="text-xl opacity-90">
            Contact karo—hum sab sawal ke jawab denge!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919958521274?text=Hi%20QuotesMill%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition-colors"
            >
              WhatsApp Karo
            </a>
            <a
              href="mailto:contact@quotesmill.com"
              className="inline-block bg-white/20 text-white font-bold py-3 px-8 rounded-full hover:bg-white/30 transition-colors border border-white"
            >
              Email Karo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
