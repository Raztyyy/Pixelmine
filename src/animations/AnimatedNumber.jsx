import CountUp from "react-countup";

export default function AnimatedNumber({
  value,
  currency,
  formatter,
  decimals = 2,
  duration = 1,
}) {
  return (
    <CountUp
      start={0}
      end={Number(value) ?? 0}
      duration={duration}
      decimals={decimals}
      separator=","
      formattingFn={(val) => {
        const fixedVal = Number(val).toFixed(decimals); // already a string with correct decimals
        if (typeof formatter === "function") {
          return formatter(Number(fixedVal), currency);
        }
        return parseFloat(fixedVal).toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
      }}
    />
  );
}
