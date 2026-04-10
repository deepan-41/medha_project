import {Link} from "react-router-dom";
import { Mail, Phone, ShieldCheck, Server, Globe, FileText} from 'lucide-react';
import companyLogo from "../assets/medha_cloud.svg";
const Footer = () => {
  return (
    <footer className="bg-[#0b0f1a] text-gray-300 py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          <div className="bg-[#161b26] p-8 rounded-lg border border-gray-800">
            <div className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <img src={companyLogo} alt="Medha Cloud" className="h-5 w-5" />
              <span>MEDHA CLOUD</span> 
            </div>
            <p className="text-sm leading-relaxed">
              White-label MSP services for partners. Scale your business without hiring.
            </p>
          </div>

          <div className="bg-[#161b26] p-8 rounded-lg border border-gray-800">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-lg">🇺🇸</span> US United States
            </h3>
            <p className="text-sm mb-2">30 N Gould St Ste R, Sheridan, WY 82801</p>
            <div className="flex items-center gap-2 text-orange-500 font-medium">
              <Phone size={16} /> +1 646 775 2855
            </div>
          </div>

          <div className="bg-[#161b26] p-8 rounded-lg border border-gray-800">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-lg">🇮🇳</span> IN India
            </h3>
            <p className="text-sm mb-2">#74, 7th Cross, Krishna Garden, Bangalore 560083</p>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-orange-500 font-medium">
                <Phone size={16} /> +91 93536 44646
              </div>
              <div className="flex items-center gap-2 text-orange-500 font-medium">
                <Mail size={16} /> sales@medhahosting.com
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
          

          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Server size={16} /> Services
            </h4>
            <ul className="space-y-2">
              <li>White Label MSP Services</li>
              <li>Cloud Hosting</li>
              <li>Professional Services</li>
              <li>Server Support</li>
            </ul>
          </div>


          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Globe size={16} /> Migration Services
            </h4>
            <ul className="space-y-2">
              <li>Microsoft 365 Migration</li>
              <li>Exchange to M365</li>
              <li>Google Workspace to M365</li>
              <li>IMAP Email Migration</li>
              <li>Tenant-to-Tenant</li>
            </ul>
          </div>


          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <ShieldCheck size={16} /> Cloud Hosting
            </h4>
            <ul className="space-y-2">
              <li>VPS Hosting</li>
              <li>Dedicated Servers</li>
              <li>HIPAA Cloud Hosting</li>
              <li>PCI DSS Hosting</li>
            </ul>
          </div>


          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <FileText size={16} /> Company
            </h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>
                <Link to="/blog">
                  Blog
                </Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              ⚖️ Legal
            </h4>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>AUP</li>
              <li>SLA</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
               Free Tools
            </h4>
            <ul className="space-y-2 mb-6">
              <li>Tools Hub</li>
              <li>Azure Pricing Calculator</li>
            </ul>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              🛡️ Certifications
            </h4>
            <ul className="space-y-2 text-xs">
              <li>ISO 27001:2022</li>
              <li>SOC 2 Type II</li>
              <li>Microsoft Partner</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;