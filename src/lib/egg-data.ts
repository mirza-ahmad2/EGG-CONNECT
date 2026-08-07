import {
  ShieldCheck,
  Scale,
  BarChart3,
  Network,
  Award,
  Building2,
  Cpu,
  Landmark,
  Microscope,
  FileCheck2,
  CreditCard,
  Megaphone,
  Server,
} from "lucide-react";

export const focusAreas = [
  {
    icon: ShieldCheck,
    title: "Fighting Illegal Gambling Through Industry Cooperation",
    description:
      "Coordinated action against unlicensed operators, black-market supply chains, and the enablers that keep them running — replacing fragmented enforcement with shared intelligence.",
  },
  {
    icon: Scale,
    title: "Trusted Standards & Accountability Frameworks",
    description:
      "Practical, measurable standards that raise the bar for integrity across operators, suppliers, and service providers — with clear accountability for those who adopt them.",
  },
  {
    icon: BarChart3,
    title: "Building Data-Driven Market Intelligence",
    description:
      "Evidence over anecdote. Structured market intelligence that helps regulators, operators, and researchers understand what is actually happening in European markets.",
  },
  {
    icon: Network,
    title: "Connecting Expertise Across European Markets",
    description:
      "A working network of specialists across jurisdictions — compliance, payments, advertising, technology — sharing what works and what does not.",
  },
  {
    icon: Award,
    title: "Recognising Organisations & Individuals Contributing to Integrity",
    description:
      "Highlighting the operators, suppliers, and professionals who go beyond compliance to actively strengthen transparency and integrity in the industry.",
  },
] as const;

export const stakeholderCategories = [
  { icon: Building2, label: "Operators" },
  { icon: Cpu, label: "Suppliers" },
  { icon: Landmark, label: "Regulators" },
  { icon: Microscope, label: "Researchers" },
  { icon: FileCheck2, label: "Compliance Experts" },
  { icon: CreditCard, label: "Payment Providers" },
  { icon: Megaphone, label: "Advertising Platforms" },
  { icon: Server, label: "Technology Partners" },
] as const;
