// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  // 🇵🇱 JĘZYK POLSKI
  pl: {
    translation: {
      // --- LAYOUT (Nawigacja) ---
      nav: {
        home: "HOME",
        offer: "OFERTA",
        realizations: "REALIZACJE",
        contact: "KONTAKT"
      },
      
      // --- STRONA GŁÓWNA (Home) ---
      hero: {
        badge: "Otwarty na oferty",
        title_1: "TWOJA",
        title_2: "DEDYKOWANA",
        title_3: "STRONA WWW",
        desc: "Eksperckie projektowanie aplikacji internetowych dla liderów rynku. Odrzucam szablony. Wykonuje audyt SEO online, by Twoja cyfrowa obecność była nie tylko piękna, ale i skuteczna.",
        cta: "DARMOWA KONSULTACJA"
      },
      features: {
        zero: {
          title: "ZERO SZABLONÓW",
          // <0> zamienia się na <strong> w komponencie Home
          desc: "Twój biznes jest unikatowy, więc Twoja witryna też musi taka być. Każda <0>dedykowana strona internetowa</0> powstaje u nas od czystej kartki, bez gotowych motywów."
        },
        tailor: {
          title: "SZYTE NA MIARĘ",
          desc: "Oferujemy zaawansowane <0>projektowanie aplikacji internetowych</0>, dobierając architekturę i technologie idealnie pod specyfikę Twoich procesów biznesowych."
        },
        seo: {
          title: "SEO & DESIGN",
          desc: "Łączymy estetykę z wydajnością. Wykonujemy <0>audyt SEO online</0> już na etapie planowania, by design realnie wspierał widoczność Twojej marki w branży."
        }
      },
      marquee: "OD KONCEPCJI PO WDROŻENIE",

      // --- OFERTA (Services) ---
      services: {
        header: {
          title: "OFERTA",
          subtitle: "Kompleksowe rozwiązania cyfrowe. Nie tworzymy tylko witryn; budujemy narzędzia biznesowe zaprojektowane tak, by generować leady i budować autorytet Twojej marki."
        },
        items: {
          design: {
            title: "UI/UX DESIGN",
            desc: "Przekładamy wartości Twojej marki na język wizualny. Każda dedykowana strona internetowa, którą tworzymy, łączy minimalistyczną estetykę z maksymalną użytecznością.",
            features: ["Unikalna Identyfikacja Wizualna", "Makiety i Prototypowanie", "Responsywność (RWD)", "Dostępność (Accessibility)"]
          },
          dev: {
            title: "DEVELOPMENT",
            desc: "Oferujemy zaawansowane projektowanie aplikacji internetowych. Solidny kod, nowoczesny stack (React, Next.js) i architektura nastawiona na szybkość oraz skalowalność.",
            features: ["Aplikacje SPA / PWA", "Integracje z CMS", "Customowe Animacje", "Rozwój API"]
          },
          growth: {
            title: "GROWTH & SEO",
            desc: "Nawet najpiękniejsza strona jest bezużyteczna, jeśli nikt jej nie widzi. Przeprowadzamy audyt SEO online i wdrażamy strategię, by Google pokochało Twój serwis.",
            features: ["Techniczny Audyt SEO", "Optymalizacja Słów Kluczowych", "Poprawa Wydajności (Core Vitals)", "Konfiguracja Analityki"]
          }
        },
        budget: {
          title: "BUDŻET",
          desc: "Typowy budżet projektu waha się od <0>5,000 PLN do 7,000 PLN</0> w zależności od stopnia skomplikowania.",
          note: "(Każdy projekt wyceniamy indywidualnie.)"
        }
      },

      // --- LAYOUT (Stopka) ---
      footer: {
        rights: "© 2025 Tymon Jezionek.<br/>Wszelkie prawa zastrzeżone.",
        start_project: "ROZPOCZNIJ PROJEKT",
        socials: "SOCIAL MEDIA",
        location_label: "LOKALIZACJA",
        location_city: "Gdańsk, Polska",
        location_remote: "Zdalnie (Globalnie)"
      },

contact: {
        title_1: "LET'S",
        title_2: "TALK",
        info: {
          email: "EMAIL",
          hq: "SIEDZIBA",
          hq_loc: "Gdańsk, Polska",
          hq_remote: "Dostępny zdalnie",
          hours: "GODZINY PRACY",
          hours_val: "Pn - Pt: 09:00 - 17:00"
        },
        form: {
          name_label: "01. Jak się nazywasz?",
          name_placeholder: "Nazwa Firmy / Imię i Nazwisko",
          email_label: "02. Jak możemy się skontaktować?",
          email_placeholder: "twoj@email.com",
          msg_label: "03. Przedstaw nam swoją wizję.",
          msg_placeholder: "Opisz krótko projekt, swoje cele i oczekiwany termin realizacji...",
          btn_sending: "WYSYŁANIE",
          btn_send: "WYŚLIJ",
          success_title: "Dziękujemy!",
          success_msg: "Wiadomość została wysłana pomyślnie. Wrócimy do Ciebie najszybciej jak to możliwe.",
          error_title: "Błąd wysyłki",
          error_msg: "Sprawdź konsolę (F12) w poszukiwaniu szczegółów lub konfigurację EmailJS."
        }
      },

      // --- REALIZACJE (Portfolio) ---
      portfolio: {
        header: {
          title: "REALIZACJE",
          subtitle: "Wybrane projekty z ostatnich lat."
        },
        items: {
          p1: {
            category: "GAS&OIL",
            desc: "Minimalistyczna strona dla firmy z sektora GAS&OIL. Projekt skupia się na przedstawieniu wizji oraz wieloletniego doświadczenia marki."
          },
          p2: {
            category: "PRODUCENT GIER",
            desc: "Prosta witryna, zrealizowana z dostarczonego projektu graficznego klienta, design skupiający się na animacjach i głębi tła."
          },
          p3: {
            category: "KLUB MMA",
            desc: "Przykładowy layout strony dla siłowni Fight Gym. Układ responsywny z dużymi sekcjami hero, kartami treningów oraz harmonogramem zajęć."
          },
          p4: {
            category: "SIŁOWNIA",
            desc: "Przykładowy layout strony dla siłowni Azure Gym. Strona oparta na HTML5 i CSS, z minimalistycznym designem i przejrzystym układem sekcji."
          }
        }
      }
    }
  },
  // 🇬🇧 JĘZYK ANGIELSKI
  en: {
    translation: {
      nav: {
        home: "HOME",
        offer: "OFFER",
        realizations: "WORK",
        contact: "CONTACT"
      },
      hero: {
        badge: "Open for new projects",
        title_1: "YOUR",
        title_2: "DEDICATED",
        title_3: "WEBSITE",
        desc: "Expert web application design for market leaders. I reject templates. I perform an online SEO audit to ensure your digital presence is not only beautiful but also effective.",
        cta: "FREE CONSULTATION"
      },
      features: {
        zero: {
          title: "ZERO TEMPLATES",
          desc: "Your business is unique, so your website must be too. Every <0>dedicated website</0> is created from a blank page, without ready-made themes."
        },
        tailor: {
          title: "TAILOR MADE",
          desc: "We offer advanced <0>web application design</0>, selecting architecture and technologies perfectly suited to your business processes."
        },
        seo: {
          title: "SEO & DESIGN",
          desc: "We combine aesthetics with performance. We perform an <0>online SEO audit</0> at the planning stage so that the design supports your brand's visibility."
        }
      },
      marquee: "FROM CONCEPT TO DEPLOYMENT",
      services: {
        header: {
          title: "OFFER",
          subtitle: "Comprehensive digital solutions. We don't just create websites; we build business tools designed to generate leads and build your brand authority."
        },
        items: {
          design: {
            title: "UI/UX DESIGN",
            desc: "We translate your brand values into a visual language. Every dedicated website we create combines minimalist aesthetics with maximum usability.",
            features: ["Unique Visual Identity", "Wireframing & Prototyping", "Responsiveness (RWD)", "Accessibility"]
          },
          dev: {
            title: "DEVELOPMENT",
            desc: "We offer advanced web application design. Solid code, modern stack (React, Next.js), and architecture focused on speed and scalability.",
            features: ["SPA / PWA Applications", "CMS Integrations", "Custom Animations", "API Development"]
          },
          growth: {
            title: "GROWTH & SEO",
            desc: "Even the most beautiful site is useless if no one sees it. We perform an online SEO audit and implement a strategy so Google loves your website.",
            features: ["Technical SEO Audit", "Keyword Optimization", "Performance (Core Vitals)", "Analytics Configuration"]
          }
        },
        budget: {
          title: "BUDGET",
          desc: "Typical project budget ranges from <0>5,000 PLN to 7,000 PLN</0> depending on complexity.",
          note: "(Each project is priced individually.)"
        }
      },
      footer: {
        rights: "© 2025 Tymon Jezionek.<br/>All rights reserved.",
        start_project: "START A PROJECT",
        socials: "SOCIAL MEDIA",
        location_label: "LOCATION",
        location_city: "Gdańsk, Poland",
        location_remote: "Remote (Global)"
      },
  contact: {
        title_1: "LET'S",
        title_2: "TALK",
        info: {
          email: "EMAIL",
          hq: "HEADQUARTERS",
          hq_loc: "Gdańsk, Poland",
          hq_remote: "Available remotely",
          hours: "OFFICE HOURS",
          hours_val: "Mon - Fri: 09:00 - 17:00"
        },
        form: {
          name_label: "01. What's your name?",
          name_placeholder: "Company Name / Full Name",
          email_label: "02. How can we contact you?",
          email_placeholder: "your@email.com",
          msg_label: "03. Tell us about your vision.",
          msg_placeholder: "Briefly describe the project, goals and deadline...",
          btn_sending: "SENDING",
          btn_send: "SEND",
          success_title: "Thank you!",
          success_msg: "Message sent successfully. We will get back to you as soon as possible.",
          error_title: "Sending error",
          error_msg: "Check console (F12) for details or EmailJS configuration."
        }
      },

      // --- PORTFOLIO ---
      portfolio: {
        header: {
          title: "WORK",
          subtitle: "Selected projects from recent years."
        },
        items: {
          p1: {
            category: "GAS&OIL",
            desc: "Minimalist website for a GAS&OIL sector company. The project focuses on presenting the vision and years of brand experience."
          },
          p2: {
            category: "GAME DEV",
            desc: "Simple website realized from provided client designs, focusing on animations and background depth."
          },
          p3: {
            category: "MMA GYM",
            desc: "Example layout for Fight Gym. Responsive layout with large hero sections, training cards, and class schedule."
          },
          p4: {
            category: "GYM",
            desc: "Example layout for Azure Gym. Based on HTML5 and CSS, featuring minimalist design and clear section layout."
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pl',
    interpolation: { escapeValue: false }
  });

export default i18n;