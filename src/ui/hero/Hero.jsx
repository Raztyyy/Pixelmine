import StackedAvatars from "./StackedAvatars";
import heroImg from "../../assets/placeholder.png";
import DownloadButtons from "./DownloadButtons";

function Hero() {
  return (
    <section className="pt-[2rem] pb-[2rem] sm:pt-[8rem] sm:pb-[8rem] bg-green-50">
      <div className="flex gap-10 items-center mx-auto  max-w-7xl p-6 flex-col sm:flex-row ">
        <div className="flex-1">
          {/* Stacked Avatars */}
          <div className="flex gap-3 items-center pb-5">
            <StackedAvatars />
            <div className="stats">
              <p className="m-0 p-0 text-lg font-bold">300+</p>
              <p className="m-0 p-0 text-gray-400 text-sm">Downloads</p>
            </div>
          </div>
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-auto sm:max-w-[30rem]">
            Earn as you engage. Own what you create with Pixelmine.
          </h1>
          <p className="pt-5 max-w-[30rem] text-lg">
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
