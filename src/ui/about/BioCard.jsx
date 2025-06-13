import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-regular-svg-icons";
import BioModal from "./BioModal";

function BioCard({ memberDetails }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <img
        src={memberDetails.image}
        alt={`${memberDetails.name}'s image`}
        className="rounded h-72 w-72 "
      />
      <h2 className="mt-4 text-lg font-medium tracking-tight text-gray-950 dark:text-stone-50">
        {memberDetails.name}
      </h2>
      <p className="mb-4 text-gray-600 text-sm/6 dark:text-stone-50/80">
        {memberDetails.title}
      </p>

      <hr className="w-10 mx-auto mb-4 border-b-4 border-primary" />

      <BioModal memberDetails={memberDetails}>
        Read Bio
        <FontAwesomeIcon
          icon={faPlus}
          className="text-white transition-all duration-300 ease-in-out size-4 xs"
        />
      </BioModal>
    </div>
  );
}

export default BioCard;
