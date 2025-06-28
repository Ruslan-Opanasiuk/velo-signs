import locationTerms from "../config/locationTerms";
import transliterate from "../utils/transliterate";
import PathConfigs from "../config/PathConfigs";

function B4({ params }) {
  const mainKey = params.mainText;
  const subInput = params.subText;

  const entry = mainKey ? locationTerms[mainKey] || {} : {};
  const shortUa = entry.ua || "";
  const rawLabel = entry.en || "";
  const position = entry.position || "suffix";
  const iconKey = entry.icon;
  const icon = iconKey && PathConfigs[iconKey];

  const original = subInput || "";
  const translit = subInput ? transliterate(subInput) : "";

  const enLabel =
    position === "suffix"
      ? rawLabel.charAt(0).toLowerCase() + rawLabel.slice(1)
      : rawLabel;

  const firstLine = original ? `${shortUa} ${original}`.trim() : "";
  const secondLine = translit
    ? position === "prefix"
      ? `${enLabel} ${translit}`.trim()
      : `${translit} ${enLabel}`.trim()
    : "";

  return (
    <svg
      width={600}
      height={150}
      xmlns="http://www.w3.org/2000/svg"
      className="shadow"
    >
      <rect x={0} y={0} width={600} height={150} fill="red" />
      <rect x={30} y={35} width={540} height={80} fill="green" />

      {firstLine && (
        <text
          x={300}
          y={50}
          textAnchor="middle"
          fontSize={38/0.7}
          fontFamily="RoadUA-Bold"
          fill="#000000"
        >
          {firstLine}
        </text>
      )}

      {secondLine && (
        <text
          x={300}
          y={100}
          textAnchor="middle"
          fontSize={20/0.7}
          fontFamily="RoadUA-Medium"
          fill="#000000"
        >
          {secondLine}
        </text>
      )}

      {icon && (
        <g transform={`translate(30, ${75-icon.height*icon.scale/2}) scale(${icon.scale})`}>
          <path 
            d={icon.d} 
            fill="#000000" 
            fillRule="evenodd"
          />
        </g>
      )}
    </svg>
  );
}

export default B4;
