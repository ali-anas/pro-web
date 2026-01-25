import { LucideIcon } from "lucide-react";

export interface Role {
    role: string;
    period: string;
    description: string;
    deliverables?: string[];
}

export interface Experience {
    company: string;
    totalPeriod: string;
    description: string;
    roles: Role[];
}

export type SkillCategory = {
    name: string;
    items: string[];
};

export const EXPERIENCE: Experience[] = [
    {
        company: "PhonePe",
        totalPeriod: "Oct 2024 - Present",
        description: "Building high-scale web products for the Online Merchant ecosystem, optimizing end-to-end payment workflows and earnings management dashboards for millions of users",
        roles: [
            {
                role: "Software Engineer (Web)",
                period: "Oct 2024 - Present",
                description: "Building secure payment solutions(on Web) for online merchants ecosystem.",
                deliverables: [
                    `Designed and built a **Card Checkout JS SDK** from scratch for **Non-PCI merchants**, providing a **secure, seamless** card payment
experience directly on third-party sites.`,
                    `Implemented comprehensive **input components** for the **Internal Design System**, which is consumed across multiple products offered by PhonePe.`,
                    `Acted as the sole **POC for the Partners Portal**, architecting and implementing the frontend for **merchant referral management**,
**Role-Based Access Control (RBAC)**, and **earnings dashboards** for PhonePe partners.`,
                    `Built the **eNACH-setup web project** from scratch with **end-to-end deployment and monitoring pipelines**, allowing end users
to set up recurring payment mandates for merchants platform.`,
                    `Collaborated on **design discussions** and **code reviews**, driving process improvements for enhanced team productivity.`
                ],
            },
        ],
    },
    {
        company: "People Interactive (Shaadi.com)",
        totalPeriod: "Dec 2021 - Sept 2024",
        description: "Played a key role in modernizing the frontend stack and improving user engagement metrics.",
        roles: [
            {
                role: "Software Engineer II",
                period: "Nov 2023 - Sept 2024",
                description: "Led front-end feature development for Search Profiles module, Converted existing Sangam application to a subscrption only \"Sangam Pro\" platform and mentored junior engineers.",
                deliverables: [
                    "Migrated profile listing endpoints from a **Node/PHP** monolith to **Golang microservice**, which **reduced endpoint latency by 40%**.",
                    `Refactored legacy Swipe Card modules from Class-based to React Functional components, maintaining **60fps rendering** on both
web browsers and low-end mobile devices.`,
                    `Led the development of a new **Search Profiles module**, which allowed users to search for profiles based on their interests and preferences.`,
                    `Integrated **Datadog Real User Monitoring (RUM)** to identify bottlenecks, reducing the **Largest Contentful Paint (LCP) score by 44%**.`,
                    `Converted existing Sangam application to a **subscrption only ”Sangam Pro” platform** within **7 days**. Built seamless user experiences
for **profile verification** and **checkout flows** that facilitated verification system to onboard **200k+ government-ID verified profiles**.`,
                ],
            },
            {
                role: "Software Engineer",
                period: "Dec 2021 - Oct 2023",
                description: "Added Localization support for multiple Indian Local languages to the Sangam application, Revamped and optimized registration funnel for higher conversion rates, and improved existing data fetching and caching strategies.",
                deliverables: [
                    `Revamped and Optimized the Registration Funnel, **achieving a 16.2% increase in profile creation** and a **20.4% boost in visit-to-registration conversion** metrics and a **25.4% rise in completed registrations**.`,
                    `Implemented Localization support for **10 vernacular languages**, automating translations via Python scripts, **drove a 36% increase in activation ratios** for vernacular users.`,
                    `Optimized data fetching and caching strategies, significantly reducing network calls and improving perceived performance.`,
                ],
            },
        ],
    },
];

export const SKILLS: SkillCategory[] = [
    {
        name: "Languages",
        items: [
            "JavaScript (ES6+)",
            "TypeScript",
            "C++ (STL)",
            "SQL",
            "Golang (Familiar)",
            "HTML/CSS",
        ],
    },
    {
        name: "Frameworks / Libraries",
        items: ["React.js", "Redux(Toolkit/ Saga)", "Next.js", "Zustand", "Node.js", "Express.js", "Jest", "Enzyme"],
    },
    {
        name: "Tools & Infrastructure",
        items: ["Git", "Docker", "Webpack", "Figma", "CI/CD Pipelines", "Datadog (RUM)"],
    },
    {
        name: "Concepts",
        items: ["Data Structures & Algorithms", "Frontend System Design", "Design Systems", "Web Performance (Core Vitals)"],
    },
];
