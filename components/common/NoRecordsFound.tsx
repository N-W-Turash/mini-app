import { DocumentSearchIcon } from "@/components/icons/Icons";

const NoRecordsFound = ({ fetching = false, size = "default" }) => {
  return (
    <div
      className={`${size === `small` ? `min-h-[140px]` : `min-h-[200px]`} flex flex-col flex-wrap items-center justify-center gap-4 text-sm font-semibold`}
    >
      {fetching ? (
        <></>
      ) : (
        <>
          <span>
            <DocumentSearchIcon
              className={`h-16 w-16 fill-black/[0.6] ${size === `small` ? `sm:h-20 sm:w-20` : `sm:h-24 sm:w-24`}`}
            />
          </span>

          <span className="text-black/60">No Records Found</span>
        </>
      )}
    </div>
  );
};

export default NoRecordsFound;
