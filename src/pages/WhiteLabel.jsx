export default function WhiteLabel() {
  return (
    <>
      <section className="flex flex-col items-center justify-center p-30 text-center">
        <h1 className="w-90 text-4xl font-bold sm:w-full sm:text-5xl">
          White Label Managed Services for MSPs
        </h1>
        <p className="mt-5 mb-8 w-90 text-center text-xl font-semibold text-gray-600 sm:w-3xl">
          White label MSP services — we answer tickets, monitor servers, and
          handle incidents under your brand. Our MSP helpdesk, MSP NOC services,
          and service desk outsourcing let you scale without hiring.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="mb-2 flex items-center justify-center gap-2 rounded-md bg-blue-900 px-8 py-3 text-white hover:bg-blue-500">
            Start Free Trial
          </button>
          <button className="mb-2 flex items-center justify-center gap-2 rounded-md border-2 border-gray-300 bg-white px-8 py-3 text-black hover:border-blue-900">
            View Pricing
          </button>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-gray-100 px-5 pt-25 pb-20 text-center">
        <h2 className="w-90 text-3xl font-bold sm:w-full sm:text-3xl">
          Outsourced NOC, SOC & Helpdesk — Trusted by MSPs Worldwide
        </h2>
        <p className="mt-5 mb-8 line-clamp-3 text-lg text-gray-800 sm:max-w-3xl sm:text-lg">
          MSPs worldwide use our managed NOC and 24/7 NOC services from
          Bangalore—5X cheaper than onshore, invisible to their clients
        </p>

        <div className="mt-10 grid grid-cols-2 items-center justify-center gap-20 text-center sm:flex sm:gap-40">
          <div className="flex flex-col">
            <p className="text-4xl font-bold">32</p>
            <p className="text-sm text-gray-400">Active MSP Partners</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-bold">99.99%</p>
            <p className="text-sm text-gray-400"> SLA Uptime</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-bold">24/7</p>
            <p className="text-sm text-gray-400">Support Coverage</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-bold">4.9/5</p>
            <p className="text-sm text-gray-400">Partner Satisfaction</p>
          </div>
        </div>
      </section>
    </>
  );
}
