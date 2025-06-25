import { useState } from "react";
import SignSelector from "./components/SignSelector";
import SignPreview from "./components/SignPreview";
import B1B3SettingsPanel from "./components/settings/B1B3SettingsPanel";

function App() {
  const [signType, setSignType] = useState("В1");

  const [params, setParams] = useState({
    tableType: "permanent",
    numberType: "national",
    routeNumber: "",
    direction: "straight",
  });

  return (
    <div className="min-h-screen bg-gray-50 text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Конструктор велосипедних знаків</h1>

      <SignSelector signType={signType} setSignType={setSignType} />

      <div className="flex justify-between max-w-4xl mx-auto mb-6 p-4">
        <div className="flex justify-end w-1/2 p-2">
          <SignPreview signType={signType} params={params} />
        </div>

        <div className="flex justify-start w-1/2 p-2">
          {["В1", "В2", "В3"].includes(signType) && (
            <B1B3SettingsPanel
              label={`Налаштування ${signType}`}
              params={params}
              setParams={setParams}
              showDirection={signType !== "В2"}
            />
          )}
        </div>
      </div>

      <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">
        Експортувати знак
      </button>
    </div>
  );
}

export default App;
