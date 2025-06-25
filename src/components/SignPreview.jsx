import B1 from "../utils/B1";
import B2 from "../utils/B2";
import B3 from "../utils/B3";

function SignPreview({ signType, params }) {
  return (
    <div className="border border-gray-300 p-6 bg-gray-300 shadow-md">
      {signType === "В1" && <B1 params={params} />}
      {signType === "В2" && <B2 params={params} />}
      {signType === "В3" && <B3 params={params} />}
      {!["В1", "В2", "В3"].includes(signType) && (
        <div>Тут буде прев’ю {signType}</div>
      )}
    </div>
  );
}

export default SignPreview;