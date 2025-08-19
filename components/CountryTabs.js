import { FlagIcon } from "react-flag-icon-css";

export default function CountryTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex space-x-6 border-b pb-2">
      <button
        onClick={() => setActiveTab("us")}
        className={`flex items-center space-x-2 pb-1 ${
          activeTab === "us" ? "border-b-2 border-blue-600 text-blue-600" : ""
        }`}
      >
        <FlagIcon code="us" size="lg" /> <span>United States</span>
      </button>

      <button
        onClick={() => setActiveTab("ca")}
        className={`flex items-center space-x-2 pb-1 ${
          activeTab === "ca" ? "border-b-2 border-blue-600 text-blue-600" : ""
        }`}
      >
        <FlagIcon code="ca" size="lg" /> <span>Canada</span>
      </button>

      <button
        onClick={() => setActiveTab("uk")}
        className={`flex items-center space-x-2 pb-1 ${
          activeTab === "uk" ? "border-b-2 border-blue-600 text-blue-600" : ""
        }`}
      >
        <FlagIcon code="gb" size="lg" /> <span>United Kingdom</span>
      </button>

      <button
        onClick={() => setActiveTab("fr")}
        className={`flex items-center space-x-2 pb-1 ${
          activeTab === "fr" ? "border-b-2 border-blue-600 text-blue-600" : ""
        }`}
      >
        <FlagIcon code="fr" size="lg" /> <span>France</span>
      </button>
    </div>
  );
}
