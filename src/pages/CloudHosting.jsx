import { Link } from "react-router-dom";

import shield from "../assets/encrypted.png";
import rightArrow from "../assets/rightarrow.png";
import cloud from "../assets/cloud.png";
import tick from "../assets/checkmark.png";
import dataServer from "../assets/data-server.png";

export default function CloudHosting() {
  return (
    <>
      <section className="flex flex-col items-center justify-center p-30 text-center">
        <h1 className="text-5xl font-bold">
          Cloud Hosting Services: 99.99% Uptime SLA & 24/7 Expert Support
        </h1>
        <h1 className="mt-5 mb-8 w-8/12 text-xl text-gray-800">
          2025 cloud hosting services with 99.99% uptime SLA. VPS from $6/month
          to enterprise cloud hosting. Microsoft 365, Azure cloud hosting, and
          managed infrastructure. Trusted by 1,200+ businesses worldwide.
        </h1>

        <div className="flex gap-3">
          <button className="mb-2 flex items-center justify-center gap-2 rounded-md bg-orange-400 px-8 py-3 font-bold text-white hover:bg-orange-600">
            Contact us now
          </button>
          <button className="mb-2 flex items-center justify-center gap-2 rounded-md border-2 border-gray-300 bg-white px-8 py-3 font-bold text-black hover:border-orange-400 hover:text-orange-400">
            View All Solutions
          </button>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-gray-300 p-30 text-center">
        <h1 className="text-5xl font-bold">
          Enterprise Cloud Infrastructure: Global Data Centers
        </h1>
        <h1 className="mt-5 mb-8 w-8/12 text-xl text-gray-800">
          Trusted cloud hosting infrastructure serving 1,200+ businesses
          worldwide with mission-critical cloud hosting services since 2016.
        </h1>

        <div className="mt-10 mb-20 flex flex-col items-center justify-center gap-20 text-center sm:flex-row">
          <div className="flex flex-col">
            <p className="text-4xl font-bold">1,200+</p>
            <p className="text-sm text-black">Happy Customers</p>
          </div>
          <div className="flex flex-col">
            <p className="flex text-4xl font-bold">99.99%</p>
            <p className="text-sm text-black">Uptime SLA</p>
          </div>
          <div className="flex flex-col">
            <p className="flex text-4xl font-bold">24/7</p>
            <p className="text-sm text-black">Expert Support</p>
          </div>
          <div className="flex flex-col">
            <p className="flex text-4xl font-bold">ISO 9001</p>
            <p className="text-sm text-black">Certified</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-15">
        <h1 className="text-4xl font-bold">
          Managed Cloud Hosting Solutions: VPS to Enterprise
        </h1>
        <p className="mt-5 mb-8 text-xl text-gray-800">
          Comprehensive solutions for every hosting and cloud infrastructure
          need
        </p>
        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-2xl border-2 border-gray-300 p-8 hover:border-amber-400">
            <img src={cloud} alt="protection" className="h-5 w-5" />
            <h1 className="mt-8 mb-2 w-10/12 text-xl font-bold">
              Infrastructure Hosting: VPS Dedicated, and Colocation
            </h1>
            <p className="mb-5 text-sm">
              VPS, Dedicated Servers, Colocation, Private Cloud, Public Cloud
              hosting
            </p>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>Cloud hosting VPS from $6/Month</span>
            </div>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>Dedicated cloud hosting infrastrure</span>
            </div>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>Colocation services</span>
            </div>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>Private and public hsting solutions</span>
            </div>
            <Link
              to="/cloud-hosting/hosting-solutions"
              className="mt-5 flex items-center text-orange-300"
            >
              Learn more
              <img src={rightArrow} alt="arrow" className="h-5 w-5" />
            </Link>
          </div>

          <div className="rounded-2xl border-2 border-gray-300 p-8 hover:border-amber-400">
            <img src={dataServer} alt="protection" className="h-5 w-5" />
            <h1 className="mt-8 mb-2 w-10/12 text-xl font-bold">
              Compliance Hosting: HIPAA, PCI-DSS, and ERP Solutions
            </h1>
            <p className="mb-5 text-sm">
              Managed Appkication, Database, ERP, HIPAA, PCI-DSS, SAP hosting
            </p>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>Managed cloud hosting applictions</span>
            </div>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>Database cloud hosting and Optimization</span>
            </div>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>ERP and SAP cloud hosting</span>
            </div>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>HIPAA and PCI-DSS compliant cloud Hosting</span>
            </div>
            <Link
              to="/cloud-hosting/specialty-hosting"
              className="mt-5 flex items-center text-orange-300"
            >
              Learn more
              <img src={rightArrow} alt="arrow" className="h-5 w-5" />
            </Link>
          </div>

          <div className="rounded-2xl border-2 border-gray-300 p-8 hover:border-amber-400">
            <img src={shield} alt="protection" className="h-5 w-5" />
            <h1 className="mt-8 mb-2 w-10/12 text-xl font-bold">
              Microsoft Cloud Platform: 365 and Azure Infrastructure
            </h1>
            <p className="mb-5 text-sm">
              Microsoft 365 productivity tools and Azure cloud infrastructure
            </p>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>Mircosoft 365 cloud hosting administration</span>
            </div>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>Azure cloud hosting infrastructure</span>
            </div>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>Hybrid cloud hosting solutions</span>
            </div>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>Microsoft licensing support</span>
            </div>
            <Link
              to="/cloud-hosting/microsoft"
              className="mt-5 flex items-center text-orange-300"
            >
              Learn more
              <img src={rightArrow} alt="arrow" className="h-5 w-5" />
            </Link>
          </div>

          <div className="rounded-2xl border-2 border-gray-300 p-8 hover:border-amber-400">
            <img src={shield} alt="protection" className="h-5 w-5" />
            <h1 className="mt-8 mb-2 w-10/12 text-xl font-bold">
              Security Standards: SSl,ISO 9001 and SLA Guarantees
            </h1>
            <p className="mb-5 text-sm">
              SSL Certificates, ISO 9001, Sla and Compliance services
            </p>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>SSL certificate management</span>
            </div>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>ISO 9001 Certified operations</span>
            </div>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>99.99% uptime SLA</span>
            </div>
            <div className="my-3 flex items-center gap-2 text-sm">
              <img src={tick} alt="tick" className="h-4 w-4" />
              <span>Compliance consulting</span>
            </div>
            <Link
              to="/cloud-hosting/hosting-solutions"
              className="mt-5 flex items-center text-orange-300"
            >
              Learn more
              <img src={rightArrow} alt="arrow" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      {/* last section */}
      <section className="flex flex-col items-center justify-center bg-gray-50 px-5 py-30 text-center">
        <h2 className="w-sm text-4xl font-bold sm:min-w-180 sm:text-5xl">
          Instant Cloud Deployment: VPS from $6/Month
        </h2>
        <p className="w-base mt-5 mb-8 text-xl text-gray-800 sm:w-8/12 sm:text-2xl">
          Get instant cloud hosting deployment, 99.99% uptime SLA, and 24/7
          cloud infrastructure support. VPS from $6/month to enterprise
          infrastructure.
        </p>

        <div className="mt-5 mb-10 flex flex-col items-center justify-center gap-10 text-center sm:flex-row sm:gap-20">
          <div className="flex flex-col">
            <p className="text-2xl font-bold">Instant Deploy (2025)</p>
            <p className="text-sm text-gray-700"> Minutes to launch</p>
          </div>
          <div className="flex flex-col">
            <p className="flex text-2xl font-bold">99.99% Uptime</p>
            <p className="text-sm text-gray-700">2025 Certified SLA</p>
          </div>
          <div className="flex flex-col">
            <p className="flex text-2xl font-bold">24/7 Support</p>
            <p className="text-sm text-gray-700">Always available</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="mb-2 flex items-center justify-center gap-2 rounded-md bg-orange-400 px-8 py-3 font-bold text-white hover:bg-orange-600">
            Contact us now
          </button>
          <button className="mb-2 flex items-center justify-center gap-2 rounded-md border-2 border-gray-300 bg-white px-8 py-3 font-bold text-black hover:border-orange-400 hover:text-orange-400">
            View All Solutions
          </button>
        </div>
      </section>
    </>
  );
}
