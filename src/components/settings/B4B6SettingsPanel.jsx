import locationTerms from "../../config/locationTerms";

function B4B6SettingsPanel({ label, params, setParams }) {
  const handleSelectChange = (e) => {
    setParams({ ...params, mainText: e.target.value });
  };

  const handleTextChange = (e) => {
    setParams({ ...params, subText: e.target.value });
  };

  return (
    <div className="bg-white border border-gray-300 p-6 shadow-md">
      <p className="text-xl font-semibold mb-4">{label}</p>

      <div className="flex gap-4">
        {/* Поле 1 — вибір з пошуком */}
        <input
          list="city-options"
          value={params.mainText || ""}
          onChange={handleSelectChange}
          placeholder="Оберіть або введіть..."
          className="w-1/2 p-2 border rounded"
        />
        <datalist id="city-options">
          {Object.keys(locationTerms).map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </datalist>

        {/* Поле 2 — довільний текст */}
        <input
          type="text"
          value={params.subText || ""}
          onChange={handleTextChange}
          placeholder="Додатковий текст..."
          className="w-1/2 p-2 border rounded"
        />
      </div>
    </div>
  );
}

export default B4B6SettingsPanel;
