import { Car, Home, Truck, HeartPulse, LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  slug: string;
  description: string;
  details: string[];
  icon: LucideIcon;
  price: number;
  imageId: string;
  whatIsCovered: string[];
};

export const services: Service[] = [
  {
    title: "Auto Insurance",
    slug: "auto-insurance",
    description: "Protect yourself, your passengers, and your vehicle with coverage that fits your lifestyle. Whether you drive daily or occasionally, our auto policies are built to keep you safe from accidents, theft, or unexpected repairs.",
    details: [
        "Accidents can happen when you least expect them, and the costs of repairs, medical bills, or legal claims can add up fast. The right auto insurance gives you more than financial protection—it gives you peace of mind every time you’re on the road. Whether it’s a small fender bender or a major collision, reliable coverage ensures you’re never left to face it alone.",
        "Understanding your auto insurance is the key to safeguarding yourself, your vehicle, and your finances. Too often, drivers don’t discover what their policy truly covers until after an accident—when it’s too late to make adjustments. By knowing your coverage options, limits, and exclusions, you can make confident decisions and avoid costly surprises.",
        "From liability protection for damages you cause to others, to collision and comprehensive coverage for your own vehicle, each policy is designed to keep you protected. And with uninsured motorist coverage, you’re covered even if the other driver isn’t.",
        "We’re here to help you build the perfect safety net—so you can drive with confidence, knowing you and your loved ones are protected every mile of the way."
    ],
    icon: Car,
    price: 60,
    imageId: 'auto-insurance',
    whatIsCovered: [
      "Liability Coverage (Bodily Injury & Property Damage)",
      "Collision Coverage",
      "Comprehensive Coverage (Theft, Vandalism, Weather)",
      "Uninsured/Underinsured Motorist Protection",
      "Medical Payments Coverage",
      "Personal Injury Protection (PIP)",
      "Roadside Assistance & Rental Reimbursement"
    ]
  },
  {
    title: "Home Insurance",
    slug: "home-insurance",
    description: "Your home deserves the best protection possible. From fire and storm damage to theft or liability, our homeowner plans safeguard everything you’ve worked hard for.",
    details: [
        "Your home is one of your most valuable investments—protecting it is essential. Homeowners insurance provides peace of mind by covering unexpected events such as fire, theft, storms, or liability claims if someone is injured on your property. It helps cover the cost of repairs, rebuilding, and even temporary housing if your home becomes unlivable. Without the right protection, you could be left paying thousands out of pocket for damages or legal costs.",
        "At Venture Quality Insurance Agency, we help you understand exactly what your homeowner’s insurance covers, so there are no surprises when the unexpected happens. Every home and family is unique, which is why having the right coverage matters. From fire and storm damage to theft and liability protection, we ensure your policy provides the protection your property and personal belongings deserve.",
        "Our dedicated team takes the time to review your current policy, explain your options, and customize coverage that fits your needs and budget. With Venture Quality Insurance Agency, you can feel confident knowing your home—and everything that makes it yours—is protected every step of the way."
    ],
    icon: Home,
    price: 55,
    imageId: 'home-insurance',
    whatIsCovered: [
        "Dwelling Protection (Your home's structure)",
        "Personal Property Coverage (Furniture, electronics, etc.)",
        "Liability Protection (Accidents on your property)",
        "Loss of Use/Additional Living Expenses",
        "Other Structures (Garages, sheds, fences)",
        "Medical Payments to Others",
        "Optional Endorsements (Valuables, flood, etc.)"
    ]
  },
  {
    title: "Commercial Insurance",
    slug: "commercial-insurance",
    description: "Running a business comes with risks — from vehicle fleets to client contracts. Our commercial policies protect your company’s assets, employees, and reputation so you can focus on growth, not worry.",
    details: [
        "Running a trucking business or cargo van service comes with unique risks—and the right commercial insurance is essential to keeping your business protected. It safeguards your company, drivers, and assets from financial losses caused by accidents, theft, liability claims, or damage to goods in transit. Whether you operate a single vehicle or manage a large fleet, commercial insurance helps you stay compliant with state and federal regulations while ensuring your business keeps moving after the unexpected happens.",
        "Without the proper coverage, even one accident or claim could lead to costly out-of-pocket expenses, business interruptions, or the loss of your operating authority. At Venture Quality Insurance Agency, we understand the challenges you face on the road and are here to help you find comprehensive protection tailored to your operations.",
        "Drive your business forward with confidence—knowing your team, vehicles, and livelihood are covered every mile of the way."
    ],
    icon: Truck,
    price: 75,
    imageId: 'commercial-insurance',
    whatIsCovered: [
        "General Liability Insurance",
        "Commercial Property Insurance",
        "Business Auto Insurance",
        "Workers' Compensation",
        "Professional Liability (E&O)",
        "Cyber Liability Insurance",
        "Business Interruption Coverage"
    ]
  },
  {
    title: "Life & Health Insurance",
    slug: "life-health-insurance",
    description: "Health coverage that supports your present, and life insurance that protects your family’s future. Our advisors help you find flexible, affordable plans that make sense for your health and financial goals.",
    details: [
        "Protect what matters most with the right life and health insurance coverage. At Venture Quality Insurance Agency, we help individuals and families prepare for life’s uncertainties with customized insurance solutions that provide lasting financial security.",
        "Health insurance ensures you have access to quality care when you need it—without the stress of overwhelming medical costs. Life insurance safeguards your loved ones’ future by covering expenses and maintaining financial stability if the unexpected happens.",
        "Our experienced agents work with you to find the best coverage options for your needs and budget, so you can focus on living confidently today while protecting tomorrow.",
        "Secure your health. Protect your family. Plan your future—with Venture Quality Insurance Agency."
    ],
    icon: HeartPulse,
    price: 45,
    imageId: 'life-health-insurance',
    whatIsCovered: [
        "Term Life Insurance",
        "Whole Life & Universal Life Insurance",
        "Individual & Family Health Plans",
        "Group Health Insurance for Businesses",
        "Disability Insurance",
        "Long-Term Care Insurance",
        "Supplemental Health Coverage (Dental, Vision)"
    ]
  },
];
