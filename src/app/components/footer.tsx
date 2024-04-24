import whatsAppIcon from "@root/public/whatsapp.svg";
import instagramIcon from "@root/public/instagram.svg";
import Image from "next/image";
/* In case I need more brand icons: https://simpleicons.org/ */

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row gap-8 justify-between p-10 bg-base-200">
      {/* Brand */}
      <aside>
        <p className="text-3xl flex items-center gap-2">
          <img alt="Logo" src="/logo.svg" className="inline w-6" />
          Company
        </p>
        <small>Copyright © 2024 - All rights reserved</small>
      </aside>

      {/* Socials */}
      <nav className="flex gap-4">
        <a className="btn btn-ghost btn-sm btn-circle">
          <Image priority src={whatsAppIcon} alt="Háblame por WhatsApp" />
        </a>
        <a className="btn btn-ghost btn-sm btn-circle">
          <Image priority src={instagramIcon} alt="Sígueme por Instagram" />
        </a>
      </nav>
    </footer>
  );
}
