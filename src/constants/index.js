const {
  BookListIcon,
  SettingsIcon,
  SettingUpHandIcon,
  BookIcon,
  DollarFillIcon,
  PayRollIcon,
  RealEstateIcon,
  DDCIcon,
  DMVIcon,
  NotaryIcon,
  BookkeepingIcon,
  HandShakeIcon,
} = require("@/components/SvgIcons");

// export const servicesCardList = [
//   {
//     id: 1,
//     title: "Bookkeeping",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Sit nunc platea sapien egestas nunc nulla varius malesuada. ",
//     icon: <BookIcon />,
//   },
//   {
//     id: 2,
//     title: "Compliance Services",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Sit nunc platea sapien egestas nunc nulla varius malesuada. ",
//     icon: <SettingsIcon />,
//   },
//   {
//     id: 3,
//     title: "Valuation Services",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Sit nunc platea sapien egestas nunc nulla varius malesuada. ",
//     icon: <SettingUpHandIcon />,
//   },
//   {
//     id: 4,
//     title: "Tax Planning",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Sit nunc platea sapien egestas nunc nulla varius malesuada. ",
//     icon: <BookListIcon />,
//   },
//   {
//     id: 5,
//     title: "Payroll Processing",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Sit nunc platea sapien egestas nunc nulla varius malesuada. ",
//     icon: <PayRollIcon />,
//   },
//   {
//     id: 6,
//     title: "Auditing",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Sit nunc platea sapien egestas nunc nulla varius malesuada. ",
//     icon: <DollarFillIcon />,
//   },
// ];
export const servicesCardList = [
  {
    id: 1,
    title: "Individual Tax Return",
    slug: "individual-tax-return",
    description:
      "At FA Business & Tax Solutions Inc., we make individual tax filing stress-free and accurate. Our experts maximize your deductions, ensure compliance with IRS regulations, and help you get the refund you deserve—on time, every time. ",
    icon: <BookIcon />,
    pages: {
      firstSection: {
        top: "Smart Filing. Bigger Returns.",
        bottom: "We simplify your tax filing and help maximize your refund.",
      },
      secondSection: {
        list: [
          "Collect personal income & deduction documents via secure portal or in-person.",
          "Review eligibility for credits (education, dependents, EITC, etc.).",
          "Optimize return for maximum refund or lowest liability.",
          "Prepare, review, and file federal and state returns electronically.",
          "Share results and refund timeline; offer support year-round for any IRS queries.",
        ],
        image: "/images/service-sub-page/individual-tax-return/1.jpg",
      },

      thirdSection: {
        top: "Everything You Need Filed",
        bottom:
          "We handle W-2s, 1099s, state/federal returns, and itemized deductions with clarity and precision.",
        image: "/images/service-sub-page/individual-tax-return/2.jpg",
      },
      fourthSection: {
        heading: "Experts You Can Trust",
        top: "Your taxes are handled by certified professionals with years of personal tax experience.",
        image: "/images/service-sub-page/individual-tax-return/3.jpg",
      },
      fifthSection: {
        heading: "Peace of Mind, Maximized",
        top: "Accurate filing, audit protection, and refund optimization Giving you financial peace of mind.",
        image: "/images/service-sub-page/individual-tax-return/4.jpg",
      },
      sixthSection: {
        top: "Personal. Precise. Professional.",
        bottom:
          "Our process is tailored to your financial profile. We ensure compliance while helping you discover every deduction and credit you're eligible for.",
        image: "/images/service-sub-page/individual-tax-return/5.jpg",
      },
    },
  },
  {
    id: 2,
    title: "Business Tax Return",
    slug: "business-tax-return",
    description:
      "Focus on growing your business while we handle the complexities of corporate tax filing. We specialize in accurate, compliant returns for LLCs, S-Corps, partnerships, and more. Let us help you reduce liabilities and stay ahead of quarterly obligations.",
    icon: <SettingsIcon />,
    pages: {
      firstSection: {
        top: "Filing Built for Business",
        bottom:
          "From LLCs to corporations, we file accurate business tax returns ",
      },
      secondSection: {
        list: [
          "Gather financial statements, payroll records, and expense breakdown.",
          "Identify deductible expenses, credits, and industry-specific tax strategies.",
          "File federal, state, and local business returns (LLC, S Corp, C Corp, etc.).",
          "Review returns with you to ensure accuracy and compliance.",
          "Provide ongoing tax planning to reduce future liabilities.",
        ],
        image: "/images/service-sub-page/business-tax-return/1.jpg",
      },

      thirdSection: {
        top: "Entity-Wise Tax Expertise",
        bottom:
          "We serve S-Corps, C-Corps, Partnerships, LLCs, and more—ensuring tailored and accurate filings.",
        image: "/images/service-sub-page/business-tax-return/2.jpg",
      },
      fourthSection: {
        heading: "Your Financial Wingmen",
        top: "Our experienced tax pros stay updated on corporate tax codes and strategies.",
        image: "/images/service-sub-page/business-tax-return/3.jpg",
      },
      fifthSection: {
        heading: "Save Time, Reduce Risk",
        top: "Ensure compliance, avoid penalties, and uncover tax-saving strategies designed for your business.",
        image: "/images/service-sub-page/business-tax-return/4.jpg",
      },

      sixthSection: {
        top: "Focus on Growth, Not Filing",
        bottom:
          "We manage your business tax complexities so you can focus on what matters—scaling your company.",
        image: "/images/service-sub-page/business-tax-return/5.jpg",
      },
    },
  },
  {
    id: 3,
    title: "Immigration Filing",
    slug: "immigration-filing",
    description:
      "Don’t let paperwork delay your immigration journey. Our team helps you prepare and file all essential immigration forms with precision and care. From green card applications to citizenship filings, we guide you through every step with confidence.",
    icon: <SettingUpHandIcon />,
    pages: {
      firstSection: {
        top: "Filing Support That Cares",
        bottom:
          "We guide you through immigration paperwork with precision and patience",
      },
      secondSection: {
        list: [
          "Conduct an initial consultation to determine the correct visa or petition type.",
          "Guide you on required documents and timelines for USCIS forms.",
          "Prepare, complete, and review forms (I-130, I-485, N-400, etc.).",
          "Submit the application packet with supporting evidence.",
          "Track case status and communicate updates or RFEs (if any).",
        ],
        image: "/images/service-sub-page/immigration-filing/1.jpg",
      },
      thirdSection: {
        top: "All Key Forms Covered",
        bottom:
          "Support for I-130, I-485, N-400, Work Permits, and more—based on your unique case.",
        image: "/images/service-sub-page/immigration-filing/2.jpg",
      },

      fourthSection: {
        heading: "Experienced Filing Advisors",
        top: "Our staff understands both the paperwork and the emotional weight behind it.",
        image: "/images/service-sub-page/immigration-filing/3.jpg",
      },
      fifthSection: {
        heading: "Clear Path, Less Stress",
        top: "Avoid delays and rejections with accurate, well-prepared filings done by professionals.",
        image: "/images/service-sub-page/immigration-filing/4.jpg",
      },
      sixthSection: {
        top: "Documents Done Right",
        bottom:
          "From family petitions to adjustment of status forms, we prepare filings with care and clarity.",
        image: "/images/service-sub-page/immigration-filing/5.jpg",
      },
    },
  },
  {
    id: 4,
    title: "Immigration Translation Services",
    slug: "immigration-translation-services",
    description:
      "Get fast, certified translations accepted by USCIS and government agencies. We translate birth certificates, marriage licenses, affidavits, and more—guaranteeing accuracy and compliance. Your important documents deserve expert handling, and we deliver just that.",
    icon: <BookListIcon />,
    pages: {
      firstSection: {
        top: "USCIS-Ready Translations",
        bottom:
          "Get your important documents translated accurately and professionally,",
      },
      secondSection: {
        list: [
          "Collect documents needing certified translation (birth certs, diplomas, etc.).",
          "Translate content by professionals fluent in both source and target languages.",
          "Format to match original layout and meet USCIS certification standards.",
          "Provide notarized, signed certificate of translation accuracy.",
          "Deliver digital and/or physical copies as required.",
        ],
        image:
          "/images/service-sub-page/immigration-translation-services/1.jpg",
      },
      thirdSection: {
        top: "All Documents Covered",
        bottom:
          "Services include legal, academic, and personal documents—translated with precision and certification.",
        image:
          "/images/service-sub-page/immigration-translation-services/2.jpg",
      },

      fourthSection: {
        heading: "Native & Legal Experts",
        top: "Every translation is reviewed by certified bilingual professionals trained in immigration document standards.",
        image:
          "/images/service-sub-page/immigration-translation-services/3.jpg",
      },
      fifthSection: {
        heading: "Avoid Delays & Rejections",
        top: "Ensure every word is correct and compliant, improving your chances of smooth approval.",
        image:
          "/images/service-sub-page/immigration-translation-services/4.jpg",
      },
      sixthSection: {
        top: "Fast. Certified. Accepted.",
        bottom:
          "We provide certified translations for birth certificates, affidavits, and more—guaranteed acceptance.",
        image:
          "/images/service-sub-page/immigration-translation-services/5.jpg",
      },
    },
  },
  {
    id: 5,
    title: "Real Estate",
    slug: "real-estate",

    description:
      "Buying, selling, or managing property? Our real estate services combine market expertise with financial insight to help you make informed decisions. From closings to investment guidance, we’re with you every step of the way.",
    icon: <RealEstateIcon />,
    pages: {
      firstSection: {
        top: "Property Moves Made Easy",
        bottom:
          "We guide you through the paperwork and financial aspects with expertise.",
      },
      secondSection: {
        list: [
          "Understand your buying/selling/renting goals through a 1:1 consultation.",
          "Match you with suitable listings or market your property professionally.",
          "Handle all paperwork, offers, inspections, and negotiations.",
          "Coordinate with attorneys, inspectors, and lenders as needed.",
          "Close the deal and guide you through final steps smoothly.",
        ],
        image: "/images/service-sub-page/real-estate/1.jpg",
      },
      thirdSection: {
        top: "Buy, Sell, Rent & Grow",
        bottom:
          "Support includes listings, contract reviews, buyer assistance, and ROI analysis for investors.",
        image: "/images/service-sub-page/real-estate/2.jpg",
      },

      fourthSection: {
        heading: "Agents with Tax Insight",
        top: "Our team blends real estate knowledge with financial strategy—ensuring smarter property decisions.",
        image: "/images/service-sub-page/real-estate/3.jpg",
      },
      fifthSection: {
        heading: "Clear Advice, Safe Deals",
        top: "Make informed choices backed by property and tax experts who protect your interests.",
        image: "/images/service-sub-page/real-estate/4.jpg",
      },
      sixthSection: {
        top: "Know the Value, Close Right",
        bottom:
          "We assist in negotiations, closing support, investment evaluations, and more.",
        image: "/images/service-sub-page/real-estate/5.jpg",
      },
    },
  },
  {
    id: 6,
    title: "Bookkeeping",
    slug: "bookkeeping",
    description:
      "Keep your business financially organized with clean, up-to-date books. We handle everything from accounts payable to reconciliations, so you always have a clear picture of your financial health. Say goodbye to messy records and hello to peace of mind. ",
    icon: <BookkeepingIcon />,
    pages: {
      firstSection: {
        top: "Your Books, Bulletproof",
        bottom:
          "Keep your records clean and compliant with our expert bookkeeping services.",
      },
      secondSection: {
        list: [
          "Set up or clean up your books using QuickBooks or Xero.",
          "Categorize transactions, reconcile bank/credit accounts monthly.",
          "Generate profit/loss reports, balance sheets, and cash flow summaries.",
          "Identify financial discrepancies or expense inefficiencies.",
          "Provide monthly/quarterly review and tax-ready reports.",
        ],
        image: "/images/service-sub-page/bookkeeping/1.jpg",
      },

      thirdSection: {
        top: "Full Ledger Coverage",
        bottom:
          "We handle accounts payable, receivable, payroll logging, and monthly reporting.",
        image: "/images/service-sub-page/bookkeeping/2.jpg",
      },

      fourthSection: {
        heading: "Certified & Detail-Obsessed",
        top: "Our team is trained in QuickBooks, Xero, and all major bookkeeping platforms.",
        image: "/images/service-sub-page/bookkeeping/3.jpg",
      },
      fifthSection: {
        heading: "Clean Books = Clear Growth",
        top: "Accurate books improve decision-making, tax readiness, and operational insight.",
        image: "/images/service-sub-page/bookkeeping/4.jpg",
      },
      sixthSection: {
        top: "Every Dollar Accounted",
        bottom:
          "We manage expenses, income, and reconciliations so your books are always investor- and tax-ready.",
        image: "/images/service-sub-page/bookkeeping/5.jpg",
      },
    },
  },
  {
    id: 7,
    title: "Payrolls",
    slug: "payrolls",
    description:
      "Pay your team accurately and on time—without the payroll headaches. We manage tax deductions, direct deposits, filings, and more so you can focus on running your business. Reliable, affordable, and fully compliant. ",
    icon: <DollarFillIcon />,
    pages: {
      firstSection: {
        top: "Payday Made Simple",
        bottom:
          "We handle your entire payroll process—accurately and on time, every time.",
      },
      secondSection: {
        list: [
          "Gather employee data and preferred pay schedules.",
          "Register for payroll tax accounts (if needed).",
          "Process time-sheets and calculate wages, taxes, and deductions.",
          "File state/federal payroll reports and remit payments (941, 940, W-2s).",
          "Provide pay stubs, direct deposit, and year-end tax forms.",
        ],
        image: "/images/service-sub-page/payrolls/1.jpg",
      },
      thirdSection: {
        top: "Payroll From Start to Finish",
        bottom:
          "Includes paycheck processing, benefits tracking, W-2s, and government filings.",
        image: "/images/service-sub-page/payrolls/2.jpg",
      },

      fourthSection: {
        heading: "HR-Savvy Accountants",
        top: "Our team has experience managing small to mid-size business payrolls with precision.",
        image: "/images/service-sub-page/payrolls/3.jpg",
      },
      fifthSection: {
        heading: "Happy Staff, Fewer Errors",
        top: "Avoid fines and employee complaints—stay compliant and consistent.",
        image: "/images/service-sub-page/payrolls/4.jpg",
      },

      sixthSection: {
        top: "Compliant & Convenient",
        bottom:
          "From salary calculations to tax withholdings, our system ensures stress-free payroll.",
        image: "/images/service-sub-page/payrolls/5.jpg",
      },
    },
  },
  {
    id: 8,
    title: "Notary Public",
    slug: "notary-public",
    description:
      "Need documents notarized? We offer fast, professional notarization services for contracts, power of attorney, affidavits, and real estate forms. Walk in or schedule a mobile visit—we make it easy and secure. ",
    icon: <NotaryIcon />,
    pages: {
      firstSection: {
        top: "Seal It with Confidence",
        bottom: "We notarize your legal, personal, or real estate documents",
      },
      secondSection: {
        list: [
          "Verify your identity and review documents for completeness.",
          "Witness signatures and administer oaths or affirmations.",
          "Apply official notary seal and sign in accordance with state law.",
          "Log each notarization in secure records.",
          "Offer mobile notary services if needed.",
        ],
        image: "/images/service-sub-page/notary-public/1.jpg",
      },
      thirdSection: {
        top: "All Notary Needs Met",
        bottom:
          "Affidavits, power of attorney, real estate, and contracts—we notarize them all.",
        image: "/images/service-sub-page/notary-public/2.jpg",
      },

      fourthSection: {
        heading: "Licensed & Available",
        top: "Certified notaries with availability that fits your schedule.",
        image: "/images/service-sub-page/notary-public/3.jpg",
      },
      fifthSection: {
        heading: "Legally Valid, No Hassles",
        top: "Legally Valid, No Hassles",
        image: "/images/service-sub-page/notary-public/4.jpg",
      },
      sixthSection: {
        top: "In-Office or Mobile",
        bottom:
          "Flexible scheduling, certified staff, and secure document handling you can rely on.",
        image: "/images/service-sub-page/notary-public/5.jpg",
      },
    },
  },
  {
    id: 9,
    title: "DDC (Defensive Driving Course)",
    slug: "DDC",
    description:
      "Complete your Defensive Driving Course with ease through our certified program. Great for point reduction, license reinstatement, or insurance discounts. Learn safe driving strategies and meet DMV requirements—fast. ",
    icon: <DDCIcon />,
    pages: {
      firstSection: {
        top: "Drive Safer. Save More.",
        bottom: "Enroll in our state-approved Defensive Driving Course ",
      },
      secondSection: {
        list: [
          "Register you for an approved course online or in-person.",
          "Provide guidance on course format, duration, and requirements.",
          "Issue completion certificate once course is passed.",
          "Submit completion to DMV (if applicable) for ticket dismissal or point reduction.",
          "Support with any DMV follow-up or proof of completion.",
        ],
        image: "/images/service-sub-page/DDC/1.jpg",
      },
      thirdSection: {
        top: "Learn. Pass. Drive On.",
        bottom:
          "Interactive content, flexible scheduling, and fast certificate delivery.",
        image: "/images/service-sub-page/DDC/2.jpg",
      },

      fourthSection: {
        heading: "Certified Driving Instructors",
        top: "Courses are led by experienced professionals who make learning simple and effective.",
        image: "/images/service-sub-page/DDC/3.jpg",
      },
      fifthSection: {
        heading: "Cleaner Record, Lower Costs",
        top: "Reduce points, avoid penalties, and get back on the road confidently.",
        image: "/images/service-sub-page/DDC/4.jpg",
      },
      sixthSection: {
        top: "DMV-Approved & Trusted",
        bottom:
          "Our courses are certified for point reduction, license reinstatement, and traffic court satisfaction.",
        image: "/images/service-sub-page/DDC/5.jpg",
      },
    },
  },
  {
    id: 10,
    title: "DMV Services",
    slug: "DMV-services",
    description:
      "Skip the lines—we handle your DMV paperwork for you. From title transfers to registration renewals and license updates, we ensure everything is done right and on time. Fast, reliable, and stress-free. ",
    icon: <DMVIcon />,
    pages: {
      firstSection: {
        top: "DMV Without the Drama",
        bottom: "We take the stress out of your DMV paperwork",
      },
      secondSection: {
        list: [
          "Assist with DMV form selection based on your need (license, title, registration).",
          "Help gather necessary identification and supporting documents.",
          "Schedule appointments or handle certain services on your behalf.",
          "Review applications to prevent delays or errors.",
          "Follow up and update you on completion status.",
        ],
        image: "/images/service-sub-page/DMV-services/1.jpg",
      },
      thirdSection: {
        top: "All Paperwork. Handled.",
        bottom:
          "From plates to licenses to forms—we guide you through every DMV task.",
        image: "/images/service-sub-page/DMV-services/2.jpg",
      },

      fourthSection: {
        heading: "Agents Who Know the System",
        top: "Introduce the team of certified valuation professionals and their qualifications.",
        image: "/images/service-sub-page/DMV-services/3.jpg",
      },
      fifthSection: {
        heading: "Save Hours, Avoid Mistakes",
        top: "No more confusion or missed steps—just complete, professional service.",
        image: "/images/service-sub-page/DMV-services/4.jpg",
      },
      sixthSection: {
        top: "Skip the Lines & Errors",
        bottom:
          "Our staff helps with title transfers, renewals, VIN checks, and more—saving you time and frustration.",
        image: "/images/service-sub-page/DMV-services/5.jpg",
      },
    },
  },
  {
    id: 11,
    title: "LLC Formation",
    slug: "LLC-formation",
    description:
      "From choosing the best structure to registering with the state, we handle the full LLC setup — paperwork, EIN, compliance, and more.",
    icon: <PayRollIcon />,
    pages: {
      firstSection: {
        top: "Start Smart. Stay Protected",
        bottom:
          "Professional setup, personalized structure, and legal compliance",
      },
      secondSection: {
        list: [
          "Consult with you to determine if an LLC is the right structure",
          "Handle business name search and state registration filing",
          "Obtain EIN from the IRS for tax and banking needs",
          "Draft Operating Agreement for clear business structure",
          "Guide you on annual compliance and reporting steps",
        ],
        image: "/images/service-sub-page/llc/1.jpg",
      },
      thirdSection: {
        top: "Business Formation Experts",
        bottom:
          "Our advisors have years of experience forming LLCs across industries — we make it simple and strategic.",
        image: "/images/service-sub-page/llc/2.jpg",
      },

      fourthSection: {
        heading: "Build Legally, Operate Smoothly",
        top: "Gain liability protection, tax flexibility, and long-term guidance — all handled with care.",
        image: "/images/service-sub-page/llc/3.jpg",
      },
      fifthSection: {
        heading: "Registered & Reliable",
        top: "We’re registered tax professionals and formation experts — trusted by startups and growing businesses alike.",
        image: "/images/service-sub-page/llc/4.jpg",
      },
      sixthSection: {
        top: "From Day One to Done Right",
        bottom:
          "We don’t just file and forget — we’re with you through the setup, growth, and every tax season in between.",
        image: "/images/service-sub-page/llc/5.jpg",
      },
    },
  },
  {
    id: 12,
    title: "Business Formation",
    slug: "business-formation",
    description:
      "FA Business helps you register, structure, and launch your business legally and strategically, whether it’s an  Small, Big, S-Corp, or Corporation.",
    icon: <HandShakeIcon />,
    pages: {
      firstSection: {
        top: "Right Business Structure Start Strong",
        bottom: "Forming a business isn’t just about paperwork",
      },
      secondSection: {
        list: [
          "One-on-one consultation to choose the right structure (LLC, S-Corp, C-Corp, etc.)",
          "Business name availability search and legal registration",
          "Filing of formation documents with the Secretary of State",
          "Application for EIN (Employer Identification Number)",
          "Setup of Operating Agreement and tax structure",
          "Compliance checklist and post-formation guidance",
        ],
        image: "/images/service-sub-page/business-information/1.jpg",
      },
      thirdSection: {
        top: "Guesswork Out of Business Formation",
        bottom:
          "From selecting the right entity to handling the filings, we’re with you at every step — smart, simple, and stress-free.",
        image: "/images/service-sub-page/business-information/2.jpg",
      },

      fourthSection: {
        heading: "Start Your Business with Confidence",
        top: "We’re not just filing agents — we’re your long-term business partner.",
        image: "/images/service-sub-page/business-information/3.jpg",
      },
      fifthSection: {
        heading: "Papers Ready - Just Launch.",
        top: "Our formation services are backed by tax pros and compliance experts, ensuring every detail is done right the first time.",
        image: "/images/service-sub-page/business-information/4.jpg",
      },
      sixthSection: {
        top: "No Stress - Start Business",
        bottom:
          "We’re not just filing agents — we’re your long-term business partner.",
        image: "/images/service-sub-page/business-information/5.jpg",
      },
    },
  },
];
export const testimonialList = [
  {
    id: 1,
    review:
      "“Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.”",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit nunc platea sapien egestas nunc nulla varius malesuada. ",
    rating: 5,
    user: {
      name: "Vera Wilderman",
      image: "/images/user/user-vera.jpg",
      prof: "Future Brand Planner",
    },
  },
  {
    id: 2,
    review:
      "“Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.”",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit nunc platea sapien egestas nunc nulla varius malesuada. ",
    rating: 5,
    user: {
      name: "Marvin McKinney",
      image: "/images/user/user-marvin.jpg",
      prof: "Retailor",
    },
  },
  {
    id: 3,
    review:
      "“Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.”",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit nunc platea sapien egestas nunc nulla varius malesuada. ",
    rating: 5,
    user: {
      name: "Rebecca Hills",
      image: "/images/user/user-rebecca.jpg",
      prof: "Investor Implementation Director",
    },
  },
  {
    id: 4,
    review:
      "“Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.”",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit nunc platea sapien egestas nunc nulla varius malesuada. ",
    rating: 5,
    user: {
      name: "Vera Wilderman",
      image: "/images/user/user-vera.jpg",
      prof: "Future Brand Planner",
    },
  },
  {
    id: 5,
    review:
      "“Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.”",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit nunc platea sapien egestas nunc nulla varius malesuada. ",
    rating: 5,
    user: {
      name: "Marvin McKinney",
      image: "/images/user/user-marvin.jpg",
      prof: "Retailor",
    },
  },
  {
    id: 6,
    review:
      "“Praesent porttitor nunc vitae lacus vehicula, nec mollis eros congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.”",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit nunc platea sapien egestas nunc nulla varius malesuada. ",
    rating: 5,
    user: {
      name: "Rebecca Hills",
      image: "/images/user/user-rebecca.jpg",
      prof: "Investor Implementation Director",
    },
  },
];
export const blogList = [
  {
    id: 1,
    title: "Unveiling the Mystery",

    date: "25 may, 2024",
    image: "/images/blog/blog-1.png",
    user: {
      id: 101,
      name: "Hope Lockman",
      image: "/images/user/user-hope.png",
    },
  },
  {
    id: 2,
    title: "Startup Costs Demystified",
    date: "25 may, 2024",
    image: "/images/blog/blog-2.png",
    user: {
      id: 102,
      name: "Heidi Waters",
      image: "/images/user/user-heidi.jpg",
    },
  },
  {
    id: 3,
    title: "Demystifying Tax Changes",
    date: "25 may, 2024",
    image: "/images/blog/blog-3.png",
    user: {
      id: 103,
      name: "Andrew Williams",
      image: "/images/user/user-andrew.png",
    },
  },
];

export const teamList = [
  {
    id: 1,
    name: "Kerry Herman",
    image: "/images/team/business-men-conversation-pointing-hand-window.jpg",
    mail: "Kerry.Herman@gmail.com",
  },
  {
    id: 2,
    name: "Gayle Cremin",
    image: "/images/team/business-men-conversation-pointing-hand-window-1.jpg",
    mail: "Gayle_Cremin@yahoo.com",
  },
  {
    id: 3,
    name: "Anne Hermann",
    image: "/images/team/man-near-window.jpg",
    mail: "Anne_Hermann87@gmail.com",
  },
];
