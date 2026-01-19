import Link from "next/link";
import Image from "next/image";
import { Clock, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#1a1f3d] py-16 border-t border-navy-dark relative overflow-hidden">
      {/* Background Graphic Decoration (Bottom Right) */}
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] opacity-10 pointer-events-none">
        <div className="w-full h-full rounded-full border-[60px] border-white/20 transform -rotate-45 scale-150" />
        <div className="absolute inset-0 w-full h-full rounded-full border-[60px] border-white/20 transform -rotate-45 scale-125" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-gray-400">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Puente Legal Logo"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="leading-relaxed max-w-xs">
              {t("footer_brand_phrase")}
            </p>
            <p className="pt-4">
              © 2025{" "}
              <span className="underline decoration-gray-500 underline-offset-4">
                PUENTELEGALLLC
              </span>
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-white text-lg font-medium">{t("footer_contact")}</h4>
            <div className="space-y-1">
              <p>401 Broadway, 24th Floor</p>
              <p>New York, NY 10013</p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span>{t("footer_schedule")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span>+1 234 567 8910</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="underline decoration-gray-500 underline-offset-4">
                  info@puentelegal.com
                </span>
              </div>
            </div>
          </div>

          {/* Services Column 1 */}
          <div className="space-y-6">
            <h4 className="text-white text-lg font-medium">{t("footer_services")}</h4>
            <ul className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-colors">
                    Lorem ipsum
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div className="space-y-6">
            <h4 className="text-white text-lg font-medium">{t("footer_services")}</h4>
            <ul className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-colors">
                    Lorem ipsum
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
