// src/i18n.js
import { button, nav, p } from "framer-motion/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";



i18n.use(initReactI18next).init({
  lng:  "hu",
  fallbackLng: "hu",
  resources: {
    hu: {
      translation: {

          nav: {
          services: "Szolgáltatások",
          reference: "Referencia",
          pricing: "Árak",
          contact: "Kapcsolat",
          continue: "Tovább",
          navbtn: "Érdekel"
        },


        banner: {
          subtitle1:
            "Szia, Sasfalvi Erik vagyok weblap és webshop készítéssel foglalkozom.\nPontPage-el pontosan az online sikered a cél!",
          bannerbtn: "Beszéljünk!",
        },
        work: {
          worktitle1: "Pontosan az ",
          worktitle2: "online sikeredhez!",
          workkonz: "Konzultáció",
          workkonztext: "A konzultáció történhet online vagy személyesen, ennek során megértem az igényeidet, hozok több sablont és versenytárselemzést. Közösen meghatározzuk, hogy a weboldal milyen célt szolgáljon. Nálam nem csupán esztétikus, hanem hatékony megoldást is kapsz.",
          workterv: "Tervezés",
          worktervtext: "A tervezés során elkészítem a főbb látványterveket és a weboldal vázát. Ezeket közösen átbeszéljük, és a te preferenciáid alapján alakítjuk ki a végleges designt. Célom, hogy a weboldalad ne csak szép, hanem átgondolt és jól használható legyen.",
          workfej: "Fejlesztés",
          workfejtext: "A fejlesztés szakaszában a legmodernebb technológiákkal építem fel a weboldalt. Az elkészült rendszer maximálisan reszponzív, gyors és korszerű lesz.",
          workkesz: "Kész weboldal",
          workkesztext: "A kész weboldalt átadás után sem hagyom magára: folyamatos támogatást biztosítok. Segítek követni, hogy kik és honnan érkeznek a weboldaladra, és hasznos információkkal támogatom az online jelenléted.",
          workseo: "SEO Optimalizálás",
          workseotext: "Magas elérés",
          workdesign: "Profi Design",
          workdesigntxt: "Legkorszerűbb eszközök",
          workdomain: "Domain & Tárhely",
          workdomaintxt: "Költséghatékony",
          workmaint: "Karbantartás",
          workmainttxt: "Folyamatos támogatás",
          workresponsive: "Reszponzív Design",
          workresponsivetxt: "Mobil & Tablett barát",
        },
        reference: {
          referencetitle1: "Tekintsd meg ",
          referencetitle2: "a munkáim",
          referencebtn: "Érdekel",
          referszent: "Szentkirályi referencia",
          referdior: "Dior referencia",
          refergoshen: "Goshen referencia",
          refergyudi: "Gyűdi tüzép referencia",
          refereurocorn: "Eurocorn referencia",
          refereleven: "Eleven Pilates referencia",
          referfoglaló: "Foglaló rendszer",
          refertöbbnyelv: "Többnyelvű oldal",
          referthermo: "ThermoTwin referencia",
          referkerti: "Kertikő referencia"
        },
        price: {
          pricetitle1: "Csomagok & Tervek",
          pricesubstitle: "Weboldal / Webshop csomagok — válaszd ki a számodra legmegfelelőbbet! Egyedi igényeket is vállalok",

          pricebasic: "Alap",
          pricebasictext: "Kérj árajánlatot",
          pricebasicsite: "1 oldal",
          pricebasicseo: "SEO optimalizálás",
          pricebasicrespon: "Reszponzív design",
          pricebasicdesign: "Limitált design módosítás",
          pricebasicbtn: "Érdekel",

          pricepro: "Professzionális",
          priceprotext: "Kérj árajánlatot",
          priceprosite: "Akár 4 oldal",
          priceproseo: "SEO optimalizálás",
          priceprorespon: "Reszponzív design",
          priceprosupport: "1 Hónap ingyenes támogatás",
          priceprobtn: "Érdekel",

          pricebooking: "Foglaló rendszer",
          pricebookingtext: "Kérj árajánlatot",
          pricebookingsite: "Akár 5 oldal",
          pricebookingbefore: "Minden előzőt tartalmazza",
          pricebookingsupport: "2 Hónap ingyenes támogatás",
          pricebookingsurface: "Admin felület",
          pricebookingbtn: "Érdekel",

          priceweband3d: "Webshop / 3D design",
          priceweband3dtext: "Egyéni árak",
          priceweband3dbefore: "Minden előzőt tartalmazza",
          priceweband3duiux: "Teljesen egyedi design (UX/UI)",
          priceweband3dsurface: "Admin felület",
          priceweband3dsupport: "3 Hónap ingyenes támogatás",
          priceweband3dbtn: "Érdekel",
        },
        contact: {
          contacttitle: "Kérdésed van? Írj nekem!",
          contactcall: "inkább hívnál?",
          contactwrite: "vagy írj e-mailt:",
          contactsocial: "Látogasd meg a közösségi média oldalaimat is!",

          contactask: "Árajánlatkérés",
          contactname: "Név*",
          contactphone: "Telefonszám",
          contactcompany: "Cég név",
          contactpackage: "Melyik csomag érdekel? (opcionális)",
          contactbasic: "Alap",
          contactpro: "Professzionális",
          contactbooking: "Foglaló rendszer",
          contactweband3d: "Webshop / 3D design",
          contactmessage: "Írd meg üzeneted...",
          contactlegal: "Elolvastam és elfogadom a feltételeket & adatvédelmi szabályzatot.",
          contactbtn: "Üzenet Küldés ↗",


        }

   
    }},
    en: {
      translation: {

        nav: {
          services: "Services",
          reference: "Portfolio",
          pricing: "Pricing",
          contact: "Contact",
          continue: "Continue",
          navbtn: "Interested"
        },


        banner: {
          subtitle1:
            "Hi, I'm Erik Sasfalvi, I build websites and webshops.\nMy goal is to grow your business in the digital space.",
          bannerbtn: "Let's Talk!",

        },
        work: {
          worktitle1: "For your ",
          worktitle2: "online success!",
          workkonz: "Consultation",
          workkonztext: "The consultation can take place online or in person. During this session, I’ll get a clear understanding of your needs, present several templates, and provide a competitor analysis. Together, we’ll define the purpose your website should serve. With me, you’ll receive not only an aesthetically pleasing design but also an effective solution.",
          workterv: "Design",
          worktervtext: "During the design phase, I create the main visual concepts and the structure of the website. We’ll review these together and shape the final design based on your preferences. My goal is to ensure that your website is not only visually appealing but also thoughtfully designed and easy to use.",
          workfej: "Development",
          workfejtext: "In the development phase, I build the website using the latest technologies. The finished system will be fully responsive, fast, and modern.",
          workkesz: "Finished Website",
          workkesztext: "Even after the handover of the finished website, I won’t leave you on your own: I provide ongoing support. I’ll help you track who is visiting your website and from where, and I’ll support your online presence with useful information.",
          workseo: "SEO Optimization",
          workseotext: "High Reach",
          workdesign: "Professional Design",
          workdesigntxt: "State-of-the-art Tools",
          workdomain: "Domain & Hosting",
          workdomaintxt: "Cost-effective",
          workmaint: "Maintenance",
          workmainttxt: "Continuous Support",
          workresponsive: "Responsive Design",
          workresponsivetxt: "Mobile & Tablet Friendly",
        },

        reference: {
          referencetitle1: "Check out my ",
          referencetitle2: "latest projects",
          referencebtn: "Get in Touch",
          referszent: "Szentkiralyi reference",
          referdior: "Dior reference",
          refergoshen: "Goshen reference",
          refergyudi: "Gyűdi tüzép reference",
          refereurocorn: "Eurocorn reference",
          refereleven: "Eleven Pilates reference",
          referfoglaló: "Booking system",
          refertöbbnyelv: "Multi-language site",
          referthermo: "ThermoTwin reference",
          referkerti: "Kertikő reference"

        },
        price: {
          pricetitle1: "Packages & Plans",
          pricesubstitle: "Website / Webshop packages — choose the one that best fits your needs! Custom requests are also available",

          pricebasic: "Basic",
          pricebasictext: "Get a quote",
          pricebasicsite: "1 page",
          pricebasicseo: "SEO optimization",
          pricebasicrespon: "Responsive design",
          pricebasicdesign: "Max 3 Design revisions",
          pricebasicbtn: "I need this",

          pricepro: "Pro",
          priceprotext: "Get a quote",
          priceprosite: "Up to 4 pages",
          priceproseo: "SEO optimization",
          priceprorespon: "Responsive design",
          priceprosupport: "1 month free support",
          priceprobtn: "I need this",

          pricebooking: "Booking system",
          pricebookingtext: "Get a quote",
          pricebookingbefore: "Includes Pro package",
          pricebookingsupport: "2 months free support",
          pricebookingsurface: "Admin surface",
          pricebookingbtn: "I need this",

          priceweband3d: "Webshop / 3D design",
          priceweband3dtext: "Get a quote",
          priceweband3duiux: "Total unique UI/UX design",
          priceweband3dsurface: "admin surface",
          priceweband3dsupport: "3 months free support",
          priceweband3dbtn: "I need this",
        },
        contact: {
          contacttitle: "Have questions? Write to me!",
          contactcall: "Would you rather call?",
          contactwrite: "Write an email to:",
          contactsocial: "Also, check out my social media pages!",
          contactask: "Request a quote!",
          contactname: "Name",
          contactphone: "Phone number",
          contactcompany: "Company name",
          contactpackage: "Which package are you interested in? (optional)",
          contactbasic: "Basic",
          contactpro: "Pro",
          contactbooking: "Booking system",
          contactweband3d: "Webshop / 3D design",
          contactmessage: "Write your message...",
          contactbtn: "Send Message ↗",
          contactlegal: "I have read and agree to the terms & privacy policy.",
        }
    }},
  interpolation: { escapeValue: false }
}});

export default i18n;
