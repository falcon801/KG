import { FileText, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { GlassCard } from "../ui/GlassCard";

export function ContactPanel() {
  const { contact } = profile;

  return (
    <GlassCard className="p-0">
      <div className="grid gap-0 md:grid-cols-3">
        <a
          href={`mailto:${contact.email}`}
          className="group flex flex-col gap-3 border-b border-white/10 p-8 transition hover:bg-white/[0.04] md:border-b-0 md:border-r md:border-white/10"
        >
          <Mail className="h-6 w-6 text-[#d8bc83]" />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#9f8f75]">Email</p>
            <p className="mt-1 text-lg font-semibold text-[#f5ead8] group-hover:text-[#fff4df]">{contact.email}</p>
          </div>
        </a>
        <a
          href={`tel:${contact.tel}`}
          className="group flex flex-col gap-3 border-b border-white/10 p-8 transition hover:bg-white/[0.04] md:border-b-0 md:border-r md:border-white/10"
        >
          <Phone className="h-6 w-6 text-[#d8bc83]" />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#9f8f75]">Phone</p>
            <p className="mt-1 text-lg font-semibold text-[#f5ead8] group-hover:text-[#fff4df]">{contact.phoneDisplay}</p>
          </div>
        </a>
        <Link
          to={contact.resumeHref}
          className="group flex flex-col gap-3 border-b border-white/10 p-8 transition hover:bg-white/[0.04] md:border-b-0"
        >
          <FileText className="h-6 w-6 text-[#d8bc83]" />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#9f8f75]">Resume</p>
            <p className="mt-1 text-lg font-semibold text-[#f5ead8] group-hover:text-[#fff4df]">{contact.resumeLabel}</p>
          </div>
        </Link>
      </div>
    </GlassCard>
  );
}
