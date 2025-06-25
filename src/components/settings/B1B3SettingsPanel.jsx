function B1B3SettingsPanel({ label, params, setParams, showDirection }) {
  const getNumberTypeOptions = () => {
    const options = [];

    if (params.tableType !== "seasonal") {
      options.push(<option key="national" value="national">Національний</option>);
    }

    options.push(<option key="regional" value="regional">Регіональний</option>);
    options.push(<option key="local" value="local">Локальний</option>);

    if (params.tableType === "permanent") {
      options.push(<option key="eurovelo" value="eurovelo">Евровело</option>);
    }

    return options;
  };

  const handleTableTypeChange = (e) => {
    const tableType = e.target.value;
    let numberType = params.numberType;

    if (tableType === "seasonal" && numberType === "national") {
      numberType = "regional";
    }

    if (tableType !== "permanent" && numberType === "eurovelo") {
      numberType = "regional";
    }

    setParams({ ...params, tableType, numberType });
  };

  const handleNumberTypeChange = (e) => {
    const numberType = e.target.value;
    const routeNumber = numberType === "eurovelo" ? "4" : params.routeNumber;

    setParams({ ...params, numberType, routeNumber });
  };

  const handleRouteNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.startsWith("0")) {
      value = value.slice(1);
    }

    if (params.numberType === "eurovelo") {
      value = "4";
    } else {
      value = value.slice(0, 2);
    }

    setParams({ ...params, routeNumber: value });
  };

  return (
    <div className="bg-white border border-gray-300 p-6 shadow-md">
      <p className="text-xl font-semibold mb-4">{label}</p>

      {/* Тип таблички */}
      <label className="block mb-4">
        Тип таблички:
        <select
          value={params.tableType}
          onChange={handleTableTypeChange}
          className="w-full mt-1 p-2 border rounded"
        >
          <option value="permanent">Постійна</option>
          <option value="seasonal">Сезонна</option>
          <option value="temporary">Тимчасова</option>
        </select>
      </label>

      {/* Тип номера маршруту */}
      <label className="block mb-4">
        Тип номера маршруту:
        <select
          value={params.numberType}
          onChange={handleNumberTypeChange}
          className="w-full mt-1 p-2 border rounded"
        >
          {getNumberTypeOptions()}
        </select>
      </label>

      {/* Номер маршруту */}
      <label className="block mb-4">
        Номер маршруту:
        <input
          type="text"
          inputMode="numeric"
          pattern="\\d*"
          value={params.routeNumber}
          onChange={handleRouteNumberChange}
          disabled={params.numberType === "eurovelo"}
          className="w-full mt-1 p-2 border rounded"
          placeholder="12"
        />
      </label>

      {/* Напрямок */}
      {showDirection && (
        <label className="block">
          Напрямок:
          <select
            value={params.direction}
            onChange={(e) => setParams({ ...params, direction: e.target.value })}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="straight">Прямо</option>
            <option value="left">Ліворуч</option>
            <option value="right">Праворуч</option>
            <option value="straight-left">Прямо і ліворуч</option>
            <option value="straight-right">Прямо і праворуч</option>
          </select>
        </label>
      )}
    </div>
  );
}

export default B1B3SettingsPanel;
