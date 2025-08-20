import { useState } from "react";
import CountryTabs from "../components/CountryTabs";

export default function Home() {
  const [activeTab, setActiveTab] = useState("us");

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Global Salary Calculator
      </h1>

      <CountryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-6">
        {activeTab === "us" && <p>🇺🇸 US Salary Calculator</p>}
        {activeTab === "ca" && <p>🇨🇦 Canada Salary Calculator</p>}
        {activeTab === "uk" && <p>🇬🇧 UK Salary Calculator</p>}
        {activeTab === "fr" && <p>🇫🇷 France Salary Calculator</p>}
      </div>
    </div>
  );
}
