import StackedAvatars from "./StackedAvatars";
import heroImg from "../../assets/placeholder.png";
import DownloadButtons from "./DownloadButtons";

function Hero() {
  return (
    <section className="pt-[6rem] pb-[6rem] sm:pt-[11rem] sm:pb-[11rem] bg-green-50">
      <div className="flex flex-col items-center gap-10 p-6 mx-auto max-w-7xl sm:flex-row ">
        <div className="flex-1">
          {/* Stacked Avatars */}
          <div className="flex items-center gap-3 pb-5">
            <StackedAvatars />
            <div className="stats">
              <p className="p-0 m-0 text-lg font-bold">300+</p>
              <p className="p-0 m-0 text-sm text-gray-600">Downloads</p>
            </div>
          </div>
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-auto sm:max-w-[30rem]">
            Earn as you engage. Own what you create with Pixelmine.
          </h1>
          <p className="pt-5 pb-5 max-w-[30rem] text-sm/6 text-gray-600">
            Pixelmine is a social networking system that enhances user
            empowerment by decentralizing control and governance across multiple
            nodes or servers.
          </p>
          <DownloadButtons />
        </div>
        <div className="flex-1 ">
          <img src={heroImg} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
