/* =========================================================
   THANG PORTFOLIO V4
   ---------------------------------------------------------
   ADD PROJECT:
   1. Put images in /images/your-project/
   2. Copy one object in `projects`
   3. Change text + image paths
   4. Save
   ========================================================= */

const projects = [
  {
    title: "Capstone Project: Bep Shinbi",
    category: "UI/UX / Branding",
    label: "UX/UI Design / App Design / Web Design / Branding",
    year: "2025",
    role: "UX/UI Designer",
    image: "images/bep_shinbi/cover.webp",
    description: "A digital system designed to streamline operations and volunteer coordination at Nu Cuoi Shinbi",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "Bep Shinbi is a digital system designed to streamline operations and volunteer coordination at Nu Cuoi Shinbi, a nonprofit restaurant offering nutritious meals to cancer patients and their caregivers at K Hospital (Tan Trieu, Hanoi) for just 2,000 VND. The project aims to digitize internal processes and enhance the experience for staff members, volunteers, and customers of Nu cuoi Shinbi restaurant."
      },
      {
        type: "text",
        title: "Problem Definition",
        paragraphs: [
          "Nu Cuoi Shinbi restaurant serves 300-650 low-cost meals daily but relies on manual operations (meal planning, donations, volunteer coordination) which causing inefficiency and management issues overlaps, errors, and heavy admin workload.",
          "The rise of Digital Philanthropy:"
        ],
        bullets: [
          "Global trend: 79% of nonprofits expect rising service demand and view digital transformation as key to efficiency, transparency, and competitiveness.",
          "Vietnam context: platforms like MB’s Thiện Nguyện App and MoMo’s charity features show the success of digital tools in fundraising and volunteer management."
        ]
      },
      {
        type: "image",
        src: "images/bep_shinbi/image 1.webp"
      },
      {
        type: "text",
        title: "Solution",
        groups: [
          {
            subtitle: "Meal forecasting",
            description: "Daily portions estimated by intuition → frequent surplus or shortage.",
          
            bullets: [
            "For surplus day: sold at hospital gates or donated.",
            "For a shortage day: covered with instant noodles, but only for a limited number of extra portions."
            ]
          },
           {
            subtitle: "Volunteer management",
          
            bullets: [
            "Volunteers often arrive without prior scheduling; tasks are assigned on the spot.",
            "Work allocated mostly by word of mouth → some forget duties, requiring repeated reminders."
            ]
          },
          {
            subtitle: "Customer experience",

            bullets: [
            "No reliable way to know the menu in advance; only shown on a board at the entrance.",
            "Some customers arrive but cannot purchase meals once portions run out."
            ]
          }
        ]
      },
      {
        type: "text",
        title: "UI Design",
        subtitle: "Desktop version"
      },
      {
        type: "image",
        src: "images/bep_shinbi/image 2.webp"
      },
      {
        type: "text",
        subtitle: "Mobile version"
      },
      {
        type: "image",
        src: "images/bep_shinbi/image 3.webp"
      }
    ]
  },
  {
    title: "BOLOJOB",
    category: "UI/UX / Branding",
    label: "UX/UI Design / App Design / Web Design / Branding",
    year: "2026",
    role: "UX/UI Designer",
    image: "images/bolojob/cover.webp",
    description: "A career guidance application designed specifically for high school students.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "Bolojob is a career guidance application designed specifically for high school students, helping them discover their interests, abilities and find the most suitable career path. With a smart platform and personalized experience, Bolojob provides a clear development path and useful resources for students to confidently enter the future."
      },
      {
        type: "image",
        src: "images/bolojob/image 1.webp"
      },
      {
        type: "text",
        text: "The main goal of Bolojob is helping high school students explore their interests, abilities, and career paths through in-depth assessments and updated industry information. Bolojob aims to personalize the experience, provide clear development roadmaps, and offer real-world opportunities to empower students in making confident career choices."
      },
      {
        type: "image",
        src: "images/bolojob/image 2.webp"
      },
      {
        type: "text",
        title: "UI Design",
      },
      {
        type: "image",
        src: "images/bolojob/image 3.webp"
      }
    ]
  },
    {
    title: "CMC Telecom",
    category: "Graphic Design",
    label: "Invitation Design / Social Media Design / Poster Design / Key Visual Design",
    year: "2026",
    role: "Graphic Designer",
    image: "images/cmc_telecom/cover.webp",
    description: "A collection of selected visual works created for CMC Telecom, spanning brand communication, campaigns, digital content, events, and internal communications.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "This project brings together a selection of visual works I created for CMC Telecom across different communication needs and formats. Rather than focusing on a single campaign, it reflects a broader design journey — from digital content and key visuals to event materials, internal communications, and branded assets. Working across these different touchpoints required balancing consistency with flexibility, ensuring that each piece stayed recognizable as part of the CMC Telecom brand while adapting to its own audience, purpose, and context."
      },
      {
        type: "text",
        title: "Job Board Design"
      },
      {
        type: "image",
        src: "images/cmc_telecom/job_board_01.webp"
      },
      {
        type: "text",
        title: "Social Media Design"
      },
      {
        type: "image",
        src: "images/cmc_telecom/social_post_01.webp"
      },
      {
        type: "text",
        title: "Key Visual Design"
      },
      {
        type: "image",
        src: "images/cmc_telecom/key_visual_01.webp"
      },
      {
        type: "text",
        title: "Campaign Design"
      },
      {
        type: "image",
        src: "images/cmc_telecom/campaign_01.webp"
      },
      {
        type: "text",
        title: "Print Design"
      },
      {
        type: "image",
        src: "images/cmc_telecom/print_design_01.webp"
      },
      {
        type: "text",
        title: "Book Design"
      },
      {
        type: "gallery",
        images: [
          "images/cmc_telecom/book_design_01.webp",
          "images/cmc_telecom/book_design_02.webp",
          "images/cmc_telecom/book_design_03.webp",
          "images/cmc_telecom/book_design_04.webp"
        ]
      },
      {
        type: "text",
        title: "Email Longform Design"
      },
      {
        type: "image",
        src: "images/cmc_telecom/email_longform_01.webp"
      }
    ]
  },
  {
    title: "VertZéro",
    category: "Graphic Design",
    label: "Graphic Design / Social Media Design / Banner Design / Poster Design",
    year: "2024",
    role: "Graphic Designer",
    image: "images/vertzero/cover.webp",
    description: "A product by FPT IS, aims to become the leading carbon emissions reporting platform in Southeast Asia.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "VertZéro, a product by FPT IS, aims to become the leading carbon emissions reporting platform in Southeast Asia, providing unparalleled insights and data accuracy and empowering organizations across the region to make informed decisions that positively impact our planet."
      },
      {
        type: "image",
        src: "images/vertzero/image 1.webp"
      },
      {
        type: "text",
        title: "Social Media Design",
      },
      {
        type: "image",
        src: "images/vertzero/image 2.webp"
      },
      {
        type: "text",
        title: "Website Banner Design",
      },
      {
        type: "image",
        src: "images/vertzero/image 3.webp"
      },
      {
        type: "text",
        title: "LinkedIn Banner Design",
      },
      {
        type: "image",
        src: "images/vertzero/image 4.webp"
      }
    ]
  },
  {
    title: "FPT.eSign",
    category: "Branding / Graphic Design",
    label: "Brand Guidelines / Social Media Design",
    year: "2024",
    role: "Graphic Designer",
    image: "images/fpt_esign/cover.webp",
    description: "FPT.eSign is a digital signature service ecosystem licensed by the Ministry of Information and Communications.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "FPT.eSign is a digital signature service ecosystem licensed by the Ministry of Information and Communications. FPT.eSign products are the perfect solution for flexible electronic transaction authentication, document verification, and enhanced security."
      },
      {
        type: "text",
        title: "Brand Guidelines",
      },
      {
        type: "image",
        src: "images/fpt_esign/image 1.webp"
      },
      {
        type: "text",
        title: "Social Media Design",
      },
      {
        type: "image",
        src: "images/fpt_esign/image 2.webp"
      }
    ]
  },
  {
    title: "Lens by Teddy",
    category: "Graphic Design",
    label: "Social Media Design",
    year: "2025",
    role: "Graphic Designer",
    image: "images/lens_by_teddy/cover.webp",
    description: "Lens by Teddy is an online shop that specializes in authentic contact lenses imported from trusted brands in China and South Korea. The shop offers a wide range of stylish, high-quality lenses suitable for both daily use and special occasions.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "Lens by Teddy is an online shop that specializes in authentic contact lenses imported from trusted brands in China and South Korea. The shop offers a wide range of stylish, high-quality lenses suitable for both daily use and special occasions."
      },
      {
        type: "image",
        src: "images/lens_by_teddy/image 1.webp"
      }
      ]
  },
  {
    title: "Leaftlet - Nhã nhạc Cung đình Huế",
    category: "Graphic Design",
    label: "Graphic Design / Leaflet Design",
    year: "2024",
    role: "Graphic Designer",
    image: "images/leaflet_nha_nhac_cung_dinh_hue/cover.webp",
    description: "This project focuses on designing a leaflet introducing Hue Royal Court Music (Nhã nhạc Cung đình Huế)",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "This project focuses on designing a leaflet introducing Hue Royal Court Music (Nhã nhạc Cung đình Huế), emphasizing hand-drawn typography as the core visual element. The design incorporates traditional Vietnamese motifs and cultural details to reflect the elegance and historical value of this intangible heritage. Through typography and layout, the leaflet aims to convey both cultural depth and visual harmony."
      },
      {
        type: "text",
        title: "Leaflet Design",
      },
      {
        type: "image",
        src: "images/leaflet_nha_nhac_cung_dinh_hue/image 1.webp"
      },
      {
        type: "image",
        src: "images/leaflet_nha_nhac_cung_dinh_hue/image 2.webp"
      },
      {
        type: "image",
        src: "images/leaflet_nha_nhac_cung_dinh_hue/image 3.webp"
      },
      {
        type: "image",
        src: "images/leaflet_nha_nhac_cung_dinh_hue/image 4.webp"
      }
    ]
  },
  {
    title: "StepUp Education",
    category: "Graphic Design / Branding",
    label: "Branding / Social Media Design / Poster Design",
    year: "2026",
    role: "Graphic Designer",
    image: "images/stepup_education/cover.webp",
    description: "Step Up Education Center in Pho Yen, Thai Nguyen provides a safe, professional, and supportive learning environment for preschool and primary school students.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "Step Up Education Center in Pho Yen, Thai Nguyen provides a safe, professional, and supportive learning environment for preschool and primary school students. The center focuses on building strong academic foundations while nurturing children’s thinking skills and early development. With dedicated teachers and age-appropriate teaching methods, Step Up Education supports students’ holistic and sustainable growth."
      },
      {
        type: "text",
        title: "Brand Guideline"
      },
      {
        type: "image",
        src: "images/stepup_education/image 1.webp"
      },
      {
        type: "text",
        title: "Facebook Avatar & Cover"
      },
      {
        type: "image",
        src: "images/stepup_education/image 2.webp"
      },
      {
        type: "text",
        title: "Bussiness Card"
      },
      {
        type: "image",
        src: "images/stepup_education/image 3.webp"
      }
    ]
  },
  {
    title: "Azladin",
    category: "Branding / Graphic Design",
    label: "Brand Guidelines",
    year: "2024",
    role: "Graphic Designer",
    image: "images/azladin/cover.webp",
    description: "Azladin is a digital healthcare platform developed by FPT IS to support smart and personalized medical care.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "Azladin is a digital healthcare platform developed by FPT IS to support smart and personalized medical care. A seamless, integrated system enables hospitals and clinics to manage patient records, treatment journeys, and remote consultations. Azladin enhances patient experience, reduces operational costs, and improves the efficiency of healthcare delivery. It’s ideal for healthcare providers aiming to adopt modern, patient-centered, and data-driven care solutions."
      },
      {
        type: "text",
        title: "Brand Guidelines"
      },
      {
        type: "image",
        src: "images/azladin/image-1.webp"
      }
    ]
  },
  {
    title: "FPT.eContract",
    category: "Graphic Design",
    label: "Website Banner Design",
    year: "2024",
    role: "Graphic Designer",
    image: "images/fpt_econtract/cover.webp",
    description: "FPT.eContract is an electronic contract solution pioneering the digitization of unilateral, bilateral or multilateral contract and document signing processes for paperless office.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "FPT.eContract is an electronic contract solution pioneering the digitization of unilateral, bilateral or multilateral contract and document signing processes for paperless office."
      },
      {
        type: "text",
        title: "Brand Guidelines"
      },
      {
        type: "image",
        src: "images/fpt_econtract/image 1.webp"
      }
    ]
  },
  {
    title: "Azinsu",
    category: "Graphic Design",
    label: "Leaflet Design / Social Media Design / Poster Design / Brochure Design",
    year: "2024",
    role: "Graphic Designer",
    image: "images/azinsu/cover.webp",
    description: "AZINSU is a central hub for the entire insurance journey, identified into two areas which promise instant changes and significant enhancements to customer experiences",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "AZINSU is a central hub for the entire insurance journey, identified into two areas which promise instant changes and significant enhancements to customer experiences:",
        bullets: [
          "AZINSU DIGITAL TPA",
          "AZINSU DIGITAL DISTRIBUTION"
        ]
      },
      {
        type: "text",
        title: "Leaflet"
      },
      {
        type: "image",
        src: "images/azinsu/image-1.webp"
      },
      {
        type: "text",
        title: "Brochure"
      },
      {
        type: "image",
        src: "images/azinsu/image 2.webp"
      },
      {
        type: "text",
        title: "Guideline Poster"
      },
      {
        type: "image",
        src: "images/azinsu/image-3.webp"
      },
      {
        type: "text",
        title: "Social Media Design"
      },
      {
        type: "image",
        src: "images/azinsu/image-4.webp"
      },
      {
        type: "text",
        title: "Document Header & Footer"
      },
      {
        type: "image",
        src: "images/azinsu/image-5.webp"
      },
      {
        type: "text",
        title: "LinkedIn Banner Design"
      },
      {
        type: "image",
        src: "images/azinsu/image-6.webp"
      }
    ]
  },
  {
    title: "Volar FINEX",
    category: "Graphic Design / Branding",
    label: "Logo Design / Leaflet Design",
    year: "2024",
    role: "Graphic Designer",
    image: "images/volar_finex/cover.webp",
    description: "Volar FINEX is a digital finance platform developed by FPT IS, focusing on modernizing and automating financial operations for enterprises and financial institutions.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "Volar FINEX is a digital finance platform developed by FPT IS, focusing on modernizing and automating financial operations for enterprises and financial institutions. The solution supports efficient management of financial processes, improves data transparency, and enhances decision-making through intelligent analytics. Volar Finex helps organizations build a secure, scalable, and agile financial ecosystem in the digital age."
      },
      {
        type: "image",
        src: "images/volar_finex/image 1.webp"
      },
      {
        type: "text",
        title: "Leaflet"
      },
      {
        type: "image",
        src: "images/volar_finex/image 2.webp"
      }
    ]
  },
  {
    title: "Kyta Platform",
    category: "Graphic Design / Branding",
    label: "Brand Guideline / Cover Design",
    year: "2024",
    role: "Graphic Designer",
    image: "images/kyta_platform/cover.webp",
    description: "A digital platform developed by FPT IS, designed to enable secure electronic transactions and intelligent digital workflows across organizations",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "Kyta Platform is a digital platform developed by FPT IS, designed to enable secure electronic transactions and intelligent digital workflows across organizations. The platform integrates technologies such as electronic signatures, digital identity, and AI-powered automation to optimize processes, ensure compliance, and improve operational efficiency. Kyta helps businesses accelerate digital transformation with a trusted, flexible, and scalable solution."
      },
      {
        type: "text",
        title: "Brand Guideline"
      },
      {
        type: "image",
        src: "images/kyta_platform/image 1.webp"
      },
      {
        type: "text",
        title: "LinkedIn Banner Design"
      },
      {
        type: "image",
        src: "images/kyta_platform/image 2.webp"
      }
    ]
  },
  {
    title: "Negligence case law analysis",
    category: "Graphic Design",
    label: "Infographic Design / Poster Design",
    year: "2024",
    role: "Graphic Designer",
    image: "images/negligence_case_law_analysis/cover.webp",
    description: "This project involves designing an academic poster titled Negligence Case Law Analysis, focusing on the Matias v. New York Hotel Management (2022) case.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "This project involves designing an academic poster titled Negligence Case Law Analysis, focusing on the Matias v. New York Hotel Management (2022) case. The poster is created to present legal knowledge, analyze negligence principles, and examine the case as a practical study. Through clear visual hierarchy and structured content, the project highlights key lessons relevant to the hospitality management industry."
      },
      {
        type: "text",
        title: "Poster Design"
      },
      {
        type: "image",
        src: "images/negligence_case_law_analysis/image 1.webp"
      }
    ]
  },
  {
    title: "Photobook - Gió Chàng Sơn",
    category: "Graphic Design / Photography",
    label: "Photography / Printed Design / Photobook Design",
    year: "2024",
    role: "Graphic Designer",
    image: "images/photobook_gio_chang_son/cover.webp",
    description: "Gió Chàng Sơn is a photobook project inspired by the traditional Chàng Sơn fan-making village. ",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "Gió Chàng Sơn is a photobook project inspired by the traditional Chàng Sơn fan-making village. The book documents authentic moments of local artisans at work, capturing the quiet rhythm, skilled hands, and cultural values behind each handcrafted fan. Through photography, the project aims to preserve and share the beauty of this long-standing Vietnamese craft."
      },
      {
        type: "text",
        title: "Photobook Design"
      },
      {
        type: "image",
        src: "images/photobook_gio_chang_son/image 1.webp"
      }
    ]
  },
  {
    title: "SkinFocus App",
    category: "UI/UX / Branding",
    label: "UI/UX Design / App Design / UX Research",
    year: "2024",
    role: "UI/UX Designer",
    image: "images/skinfocus_app/cover.webp",
    description: "SkinFocus is a combination of Skincare and Focus, an application to provide and meet users' needs about Skincare.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "SkinFocus is a skin care application that specializes in providing information about skin care steps, usage, and suitable products for each skin type. This app not only updates new products from the market but also has an 'alarm' feature to help users set up a personal skin care schedule. Users can also share information, articles, comments and advice about skin care on this application. Each ingredient and skin care instructions are explained in detail in Vietnamese, and the app also tries to raise users' awareness so they can find the most suitable products and skin care steps."
      },
      {
        type: "text",
        title: "UI Design",
        link: "https://www.figma.com/proto/hNZt0s9JblP8RLmuWvCJGB/WIR-skinfocus-Hi-fi?page-id=0%3A1&type=design&node-id=443-9869&viewport=930%2C202%2C0.19&t=XSOy9d3JGia6mFIu-1&scaling=scale-down&starting-point-node-id=443%3A9869",
        linkText: "View Prototype"
      },
      {
        type: "image",
        src: "images/skinfocus_app/image 1.webp"
      }
    ]
  },
  {
    title: "Website OCOP Huế",
    category: "UI/UX / Branding",
    label: "UI/UX Design / App Design / UX Research",
    year: "2024",
    role: "UI/UX Designer",
    image: "images/website_ocop_hue/cover.webp",
    description: "This website provides a diverse collection of OCOP Hue products, from food, beverages, herbs to handicrafts and garments imbued with Hue cultural identity.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "The OCOP Hue website is an important and reliable source of information for those interested in discovering and shopping for typical products of the land of Hue."
      },
      {
        type: "text",
        title: "UI Design",
        link: "https://www.figma.com/proto/oPjFbBrar9MhuUd6MPxQD0/WDL-OCOP?page-id=881%3A12209&type=design&node-id=881-15123&viewport=-571%2C173%2C0.04&t=r6IMyMyKWsgeqTJQ-1&scaling=min-zoom&starting-point-node-id=881%3A15123",
        linkText: "View Prototype"
      },
      {
        type: "image",
        src: "images/website_ocop_hue/image 1.webp"
      }
    ]
  },
  {
    title: "Landing Page OCOP Huế",
    category: "UI/UX / Branding",
    label: "UI/UX Design / App Design / UX Research",
    year: "2024",
    role: "UI/UX Designer",
    image: "images/landingpage_ocop_hue/cover.webp",
    description: "This website provides a diverse collection of OCOP Hue products, from food, beverages, herbs to handicrafts and garments imbued with Hue cultural identity.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "The OCOP Hue website is an important and reliable source of information for those interested in discovering and shopping for typical products of the land of Hue."
      },
      {
        type: "text",
        title: "UI Design",
        link: "https://www.figma.com/proto/oPjFbBrar9MhuUd6MPxQD0/WDL-OCOP?page-id=1022%3A9990&node-id=1980-10599&p=f&viewport=256%2C288%2C0.08&t=CmnpG8e9UbjdUQ7P-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1980%3A10599",
        linkText: "View Prototype"
      },
      {
        type: "image",
        src: "images/landingpage_ocop_hue/image 1.webp"
      }
    ]
  },
  {
    title: "MB Capital",
    category: "Graphic Design",
    label: "Slide Deck Design / Presentation Design",
    year: "2025 - 2026",
    role: "Graphic Designer",
    image: "images/mb_capital/cover.webp",
    description: "This project focuses on designing a professional slide deck for MB Capital’s 2025 Fund Raising Proposal, Investment Plan, and Entrusted Portfolio Report.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "This project focuses on designing a professional slide deck for MB Capital’s 2025 Fund Raising Proposal, Investment Plan, and Entrusted Portfolio Report. The design emphasizes clarity, data visualization, and a structured layout to effectively communicate financial insights and strategic value. The slides are crafted to support decision-making and reflect MB Capital’s credibility and investment expertise."
      },
      {
        type: "text",
        title: "Fund Raising Proposal"
      },
      {
        type: "image",
        src: "images/mb_capital/image 1.webp"
      },
      {
        type: "text",
        title: "Investment Plan"
      },
      {
        type: "image",
        src: "images/mb_capital/image 2.webp"
      },
      {
        type: "text",
        title: "Entrusted Portfolio Report"
      },
      {
        type: "image",
        src: "images/mb_capital/image 3.webp"
      }
    ]
  },
  {
    title: "GEOBASE",
    category: "Branding",
    label: "Brand Guideline",
    year: "2024",
    role: "Graphic Designer",
    image: "images/geobase/cover.webp",
    description: "A geospatial data platform developed by FPT IS, designed to collect, manage, and analyze location.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "GeoBase is a geospatial data platform developed by FPT IS, designed to collect, manage, and analyze location-based data for government agencies and enterprises. The platform integrates GIS technologies, big data, and intelligent analytics to support planning, monitoring, and decision-making. GeoBase helps organizations build a centralized, accurate, and scalable geospatial data infrastructure for digital transformation."
      },
      {
        type: "text",
        title: "Brand Guideline"
      },
      {
        type: "image",
        src: "images/geobase/image 1.webp"
      }
    ]
  },
  {
    title: "Avatar Frame Design",
    category: "Graphic Design",
    label: "Avatar Frame Design / Social Media Design",
    year: "2025 - 2026",
    role: "Graphic Designer",
    image: "images/avatar_frame_design/cover.webp",
    description: "This project focuses on designing a collection of avatar frames compiled into a unified system.",
    content: [
      {
        type: "text",
        title: "Introduction",
        text: "This project focuses on designing a collection of avatar frames compiled into a unified system. The designs emphasize visual consistency, adaptability, and brand expression, allowing users to personalize their avatars while maintaining a cohesive identity. The project showcases creativity in layout, color, and graphic styling across multiple frame concepts."
      },
      {
        type: "text",
        title: "Avatar Frame Design"
      },
      {
        type: "image",
        src: "images/avatar_frame_design/image 1.webp"
      }
    ]
  }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

if (window.gsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const loader = $(".page-loader");
  if (!loader || !window.gsap) { initPage(); return; }

  const counter = { value: 0 };
  const number = $(".loader-number");
  const line = $(".loader-line span");

  gsap.to(counter, {
    value: 100,
    duration: 1.2,
    ease: "power2.out",
    onUpdate: () => {
      if (number) number.textContent = String(Math.round(counter.value)).padStart(2, "0");
    }
  });

  gsap.to(line, { width: "100%", duration: 1.3, ease: "power2.inOut" });
  gsap.to(loader, {
    yPercent: -100,
    duration: 0.9,
    delay: 1.4,
    ease: "power4.inOut",
    onComplete: () => { loader.remove(); initPage(); }
  });
});

function initPage() {
  initHero();
  initReveal();
  initCursor();
  initMagnetic();
  if ($("#featured-grid")) renderFeaturedProjects();

  if ($("#project-grid")) {
    renderCategoryFilters();
    renderProjects();
  }
}

function initHero() {
  if (!window.gsap) return;
  if ($(".hero .word")) {
    gsap.from(".hero .word", { yPercent: 115, duration: 1.1, stagger: 0.12, ease: "power4.out" });
    gsap.from(".hero .eyebrow, .hero-intro, .circle-cta, .hero-meta", { y: 24, opacity: 0, duration: 0.8, stagger: 0.08, delay: 0.2, ease: "power3.out" });
  }
  if ($(".ring-a")) gsap.to(".ring-a", { rotation: 385, duration: 18, repeat: -1, ease: "none" });
  if ($(".ring-b")) gsap.to(".ring-b", { rotation: -385, duration: 25, repeat: -1, ease: "none" });
  if ($(".orbit-dot")) gsap.to(".orbit-dot", { y: 345, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
}

function initReveal() {
  if (!window.gsap || !window.ScrollTrigger) return;
  $$(".reveal").forEach(el => {
    gsap.fromTo(el, { y: 42, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });
}

function projectCard(project) {
  const index = projects.indexOf(project);
  return `
    <article class="project-card" data-index="${index}">
      <div class="project-media">
        <img src="${project.image}" alt="${project.title}" loading="lazy" decoding="async">
      </div>
      <div class="project-info">
        <div>
          <div class="project-number">${String(index + 1).padStart(2, "0")} / ${project.year}</div>
          <h2 class="project-name">${project.title}</h2>
          <div class="project-type">${project.label}</div>
        </div>
        <div class="project-arrow">↗</div>
      </div>
    </article>`;
}

function bindProjectCards(root = document) {
  $$(".project-card", root).forEach(card => {
    card.addEventListener("click", () => {
      window.location.href = `project.html?i=${Number(card.dataset.index)}`;
    });
  });
}

function renderFeaturedProjects() {
  const grid = $("#featured-grid");
  const featured = projects.slice(0, 3);
  grid.innerHTML = featured.map(projectCard).join("");
  bindProjectCards(grid);
  if (window.gsap && window.ScrollTrigger) {
    gsap.fromTo("#featured-grid .project-card", { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: "#featured-grid", start: "top 85%" } });
  }
}


/* =============================
   DYNAMIC PROJECT CATEGORIES

   Supported formats:

   category: "UI/UX"
   category: "UI/UX / Branding"
   category: ["UI/UX", "Branding"]

   IMPORTANT:
   We split string categories only on " / " WITH spaces.
   So "UI/UX" stays one category, while
   "UI/UX / Branding" becomes:
   ["UI/UX", "Branding"]
   ============================= */

function getProjectCategories(project = {}) {
  const value = project.category;

  if (!value) return [];

  if (Array.isArray(value)) {
    return value
      .flatMap(item => String(item).split(/\s+\/\s+/))
      .map(item => item.trim())
      .filter(Boolean);
  }

  return String(value)
    .split(/\s+\/\s+/)
    .map(item => item.trim())
    .filter(Boolean);
}

function getAllCategories() {
  const seen = new Set();
  const categories = [];

  projects.forEach(project => {
    getProjectCategories(project).forEach(category => {
      const key = category.toLowerCase();

      if (!seen.has(key)) {
        seen.add(key);
        categories.push(category);
      }
    });
  });

  return categories;
}

function renderCategoryFilters() {
  const tools = $("#project-tools");
  if (!tools) return;

  const categories = getAllCategories();

  tools.innerHTML = `
    <button class="filter active" data-filter="all">ALL</button>

    ${categories.map(category => `
      <button
        class="filter"
        data-filter="${escapeHtml(category)}"
      >
        ${escapeHtml(category).toUpperCase()}
      </button>
    `).join("")}
  `;

  $$(".filter", tools).forEach(button => {
    button.addEventListener("click", () => {
      $$(".filter", tools).forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");
      renderProjects(button.dataset.filter);
    });
  });
}

function renderProjects(filter = "all") {
  const grid = $("#project-grid");
  if (!grid) return;

  const normalizedFilter = String(filter).trim().toLowerCase();

  const list =
    normalizedFilter === "all"
      ? projects
      : projects.filter(project =>
          getProjectCategories(project).some(
            category => category.toLowerCase() === normalizedFilter
          )
        );

  grid.innerHTML = list.map(projectCard).join("");
  bindProjectCards(grid);

  if (window.gsap) {
    gsap.fromTo(
      "#project-grid .project-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out"
      }
    );
  }
}


function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderBulletList(items = []) {
  if (!Array.isArray(items) || items.length === 0) return "";

  return `
    <ul class="case-bullet-list">
      ${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function renderTextGroup(group = {}) {
  const bodyText = group.text ?? group.description ?? "";

  return `
    <div class="case-group">
      ${group.subtitle ? `<h3 class="case-group-title">${escapeHtml(group.subtitle)}</h3>` : ""}
      ${bodyText ? `<p class="case-section-text">${escapeHtml(bodyText)}</p>` : ""}
      ${Array.isArray(group.paragraphs)
        ? `<div class="case-paragraphs">${group.paragraphs.map(p => `<p class="case-section-text">${escapeHtml(p)}</p>`).join("")}</div>`
        : ""}
      ${renderBulletList(group.bullets)}
    </div>
  `;
}

function renderContentBlock(block, project) {
  if (!block || !block.type) return "";

  if (block.type === "text") {
    // Support both `groups` and the accidental older `Groups` spelling.
    const groups = block.groups ?? block.Groups ?? [];

    return `
      <section class="case-content-block case-text-block">
        <div class="case-text-inner">
          ${block.title ? `<h2 class="case-section-title">${escapeHtml(block.title)}</h2>` : ""}
          ${block.text ? `<p class="case-section-text">${escapeHtml(block.text)}</p>` : ""}
          ${
          block.link
            ? `
              <a
                class="case-content-link"
                href="${block.link}"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${block.linkText || "View Prototype"} ↗
              </a>
            `
            : ""
        }
          ${Array.isArray(block.paragraphs)
            ? `<div class="case-paragraphs">${block.paragraphs.map(p => `<p class="case-section-text">${escapeHtml(p)}</p>`).join("")}</div>`
            : ""}
          ${renderBulletList(block.bullets)}
          ${Array.isArray(groups) && groups.length
            ? `<div class="case-groups">${groups.map(renderTextGroup).join("")}</div>`
            : ""}
        </div>
      </section>
    `;
  }

  if (block.type === "image") {
    if (!block.src) return "";

    return `
      <figure class="case-content-block case-image-block">
        <img
          src="${block.src}"
          alt="${escapeHtml(block.alt || project.title)}"
          loading="lazy"
          decoding="async"
          onerror="this.closest('.case-image-block').classList.add('is-missing')"
        >
        ${block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ""}
      </figure>
    `;
  }

  if (block.type === "gallery") {
  return `
    <div class="case-gallery-block">

      ${(block.images || [])
        .map(
          (src, index) => `
            <figure class="case-gallery-item">
              <img
                src="${src}"
                alt="${project.title} — gallery ${index + 1}"
                loading="lazy"
                decoding="async"
              >
            </figure>
          `
        )
        .join("")}

    </div>
  `;
}

  return "";
}

function renderProjectDetail() {
  const root = $("#project-detail");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  let index = Number(params.get("i"));
  if (!Number.isInteger(index) || !projects[index]) index = 0;

  const project = projects[index];
  const nextIndex = (index + 1) % projects.length;
  document.title = `THANG — ${project.title}`;

  // New projects can use `content`. Older projects that still use `gallery`
  // are converted to image blocks automatically so they keep working.
  const contentBlocks = Array.isArray(project.content) && project.content.length
    ? project.content
    : (project.gallery || []).map(src => ({ type: "image", src }));

  root.innerHTML = `
    <section class="section case-study">
      <div class="case-top">
        <p class="eyebrow">PROJECT / ${String(index + 1).padStart(2, "0")}</p>
        <a href="projects.html" class="back-link magnetic">← ALL PROJECTS</a>
      </div>

      <h1 class="case-title">${escapeHtml(project.title)}</h1>

      <div class="case-meta">
        <div><span>ROLE</span><p>${escapeHtml(project.role)}</p></div>
        <div><span>YEAR</span><p>${escapeHtml(project.year)}</p></div>
        <div><span>DISCIPLINE</span><p>${escapeHtml(project.label)}</p></div>
        <div class="case-about"><span>ABOUT</span><p>${escapeHtml(project.description)}</p></div>
      </div>

      <figure class="case-hero">
        <img src="${project.image}" alt="${escapeHtml(project.title)}" decoding="async">
      </figure>

      <div class="case-content">
        ${contentBlocks.map(block => renderContentBlock(block, project)).join("")}
      </div>

      <div class="case-end">
        <span>NEXT PROJECT</span>
        <a class="next-project magnetic" href="project.html?i=${nextIndex}">${escapeHtml(projects[nextIndex].title)} ↗</a>
      </div>
    </section>`;

  initCursor();
  initMagnetic();

  if (window.gsap) {
    gsap.from(".case-title", { y: 80, opacity: 0, duration: 0.95, ease: "power4.out" });
    gsap.from(".case-meta > div", { y: 30, opacity: 0, duration: 0.7, stagger: 0.07, delay: 0.18, ease: "power3.out" });
    gsap.from(".case-hero", { y: 50, opacity: 0, duration: 0.9, delay: 0.24, ease: "power3.out" });
  }
}

let cursorBound = false;
function initCursor() {
  const glow = $(".cursor-glow");
  if (!glow || cursorBound || !window.gsap) return;
  cursorBound = true;
  document.addEventListener("mousemove", event => {
    gsap.to(glow, { x: event.clientX, y: event.clientY, duration: 0.32, ease: "power3.out" });
  });
}

function initMagnetic() {
  if (!window.gsap) return;
  $$(".magnetic").forEach(element => {
    if (element.dataset.magneticReady === "true") return;
    element.dataset.magneticReady = "true";
    element.addEventListener("mousemove", event => {
      const rect = element.getBoundingClientRect();
      gsap.to(element, { x: (event.clientX - rect.left - rect.width / 2) * 0.16, y: (event.clientY - rect.top - rect.height / 2) * 0.16, duration: 0.35, ease: "power3.out" });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(element, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, .4)" });
    });
  });
}
