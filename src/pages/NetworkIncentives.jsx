import { useLoaderData } from "react-router-dom";

function NetworkIncentives() {
  const [{ incentives, activity_points, pixelpoint }] = useLoaderData();

  return (
    <section className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
      <div className="flex flex-col gap-5 text-center">
        <div> Incentives: {incentives}</div>
        <div>activity_points: {activity_points}</div>
        <div> pixelpoint: {pixelpoint}</div>
      </div>
    </section>
  );
}

export default NetworkIncentives;
