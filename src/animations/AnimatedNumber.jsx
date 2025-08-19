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
      end={value ?? 0}
      duration={duration}
      decimals={decimals ?? 0}
      separator=","
      formattingFn={(val) => {
        if (typeof formatter === "function") {
          return formatter(val, currency);
        }
        return val.toLocaleString(undefined, {
          minimumFractionDigits: decimals ?? 0,
          maximumFractionDigits: decimals ?? 2,
        });
      }}
    />
  );
}
