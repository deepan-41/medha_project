import { Link } from "react-router-dom";
import {
  MigrationCard,
  RMMCard,
  LiveSupportCard,
} from "../components/Dashboard";

import squareChat from "../assets/conversation.png";
import rightArrow from "../assets/rightarrow.png";
import badge from "../assets/medal.png";
import shield from "../assets/encrypted.png";
import speaker from "../assets/headset.png";
import user from "../assets/user.png";

export default function Home() {
  const cards = [
    {
      icon: badge,
      title: "Getting Started",
      desc: "Pricing takes 5 minutes. Onboarding takes 2 weeks. No contracts.",
      link: "/white-label-msp-services/partner-program",
    },
    {
      icon: speaker,
      title: "Managed IT Services",
      desc: "Helpdesk, monitoring and patching. Under your logo. Billed to you.",
      link: "/white-label-msp-services/managed-it-services",
    },
    {
      icon: shield,
      title: "NOC & SOC Services",
      desc: "We watch clients' networks 24/7. Threats get stopped. You get the credit.",
      link: "/white-label-msp-services/noc-soc-cloud",
    },
    {
      icon: user,
      title: "Staff Augmentation",
      desc: "Need a Windows admin for 10 hours? Hire ours. Invoice your client. We handle payroll.",
      link: "/white-label-msp-services/staff-augmentation",
    },
  ];
  return (
    <>
      <section className="mt-30 flex flex-col items-center justify-center text-center">
        <h1 className="mb-5 text-4xl leading-tight font-bold md:text-5xl">
          White Label MSP, Cloud Hosting
          <span className="mt-2 block bg-clip-text text-blue-800">
            & 24/7 Server Support
          </span>
        </h1>
        <p className="mb-8 max-w-2xl px-5 text-base text-gray-500 sm:text-xl">
          Can't afford 6 more techs? Server crashed? Migration failed? We answer
          in 15 minutes.
        </p>

        <button className="mb-2 flex items-center justify-center gap-2 rounded-md bg-orange-400 px-8 py-3 text-white">
          <img src={squareChat} alt="chat" className="h-4 w-4" />
          <span> Chat with us</span>
          <img src={rightArrow} alt="arrow" className="h-4 w-4" />
        </button>
        <p className="text-base text-gray-400">
          Usually responds in under 2 minutes
        </p>
      </section>

      <section className="pt-15 pb-25">
        <div className="flex flex-col gap-8 px-10 pb-20  sm:space-y-0 sm:flex-row">
          <RMMCard />
          <MigrationCard />
          <LiveSupportCard />
        </div>
        <div className="flex flex-col items-center">
          <p className="px-8 text-center text-base text-gray-600">
            9 years in business fixing IT problems for MSPs, hospitals, banks,
            manufacturers and many industries
          </p>
          <div className="mt-10 grid grid-cols-2 items-center justify-center gap-20 text-center sm:flex sm:gap-40">
            <div className="flex flex-col">
              <p className="text-4xl font-bold">9+</p>
              <p className="text-sm text-gray-400"> years in business</p>
            </div>
            <div className="flex flex-col">
              <p className="text-4xl font-bold">1.2K+</p>
              <p className="text-sm text-gray-400"> Business served</p>
            </div>
            <div className="flex flex-col">
              <p className="text-4xl font-bold">5K+</p>
              <p className="text-sm text-gray-400">Servers managed</p>
            </div>
            <div className="flex flex-col">
              <p className="text-4xl font-bold">1+ PB</p>
              <p className="text-sm text-gray-400">Data migrated</p>
            </div>
            <div className="flex flex-col">
              <p className="text-4xl font-bold">99.99%</p>
              <p className="text-sm text-gray-400">Uptime SLA</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col bg-gray-50 px-5 py-30 sm:px-10">
        <p className="text-sm font-semibold text-blue-900">For MSP Partners</p>
        <h2 className="my-5 text-4xl font-bold">White Label MSP Services</h2>
        <p className="text-xl text-gray-500 sm:max-w-9/13">
          Stop losing clients to bigger MSPs. Add 24/7 NOC/SOC coverage in 4
          weeks — your logo, your pricing, our certified team.
        </p>
        <Link
          to="/white-label-msp-services"
          className="my-5 flex items-center text-blue-900"
        >
          Learn more
          <img src={rightArrow} alt="arrow" className="h-5 w-5" />
        </Link>

        {/* collection of box div */}
        <div className="items-center gap-5 space-y-5 sm:flex sm:space-y-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group w-full rounded-2xl border border-gray-300 p-5 transition-all duration-300 hover:border-gray-600 hover:shadow-2xl sm:w-70 sm:px-7"
            >
              <img src={card.icon} alt="" className="mb-3 h-5 w-5" />

              <h3 className="text-lg font-semibold">{card.title}</h3>

              <p className="my-3 line-clamp-3 text-sm text-gray-600 sm:min-h-[4.5em]">
                {card.desc}
              </p>

              <Link
                to={card.link}
                className="flex items-center text-blue-900 opacity-100 transition duration-300 sm:opacity-0 sm:group-hover:opacity-100"
              >
                Learn more
                <img src={rightArrow} alt="" className="h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center bg-gray-100 px-5 py-30 text-center">
        <p className="mb-5 text-sm">Trusted by 1,200+ businesses worldwide</p>
        <h2 className="mb-6 max-w-xl text-center text-4xl leading-12 font-bold text-gray-900 md:text-5xl">
          Talk to Engineers Who Fix Your IT Problems
        </h2>
        <h1 className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
          No sales scripts. Just certified engineers who fix server crashes,
          failed migrations, and compliance issues every day.
        </h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="mb-2 flex items-center justify-center gap-2 rounded-md bg-orange-400 px-8 py-3 text-white hover:bg-orange-500">
            Talk to Our Team
          </button>
          <button className="mb-2 flex items-center justify-center gap-2 rounded-md border-2 border-gray-300 bg-white px-8 py-3 text-black hover:text-orange-400">
            Start Live Chat
          </button>
        </div>
        <div className="mt-10 items-center justify-center  gap-40 text-center space-y-10 sm:flex sm:space-y-0">
          <div className="flex flex-col">
            <p className="text-4xl font-bold">24Hrs</p>
            <p className="text-sm text-gray-400"> Setup Time</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-bold">99.99%</p>
            <p className="text-sm text-gray-400"> Uptime SLA</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-bold">15min</p>
            <p className="text-sm text-gray-400">Response Time</p>
          </div>
        </div>
        <div className="m-10 w-8/12 border-t bg-white"></div>
        <p className="text-sm text-gray-500">Or reach us directly</p>
        <div className="mt-5 flex flex-col gap-10 md:flex-row">
          <a href="tel:+16467752855">+16467752855(US)</a>
          <a href="tel:+919353644646">+919353644646(India)</a>
          <a href="mailto:sales@medhacloud.com">sales@medhacloud.com</a>
          <span></span>
        </div>
      </section>
    </>
  );
}
