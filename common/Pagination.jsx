import routerPush from "@/utils/routerPush";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";

const PaginationComponent = ({ page, totalPages }) => {
  const router = useRouter();

  // Handlers
  const pageHandler = (e, page) => {
    router.query.page = page;
    routerPush(router);
  };

  return (
    <div dir="ltr" className="col-span-6 flex justify-center">
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={pageHandler}
          color="standard"
        />
      )}
    </div>
  );
};

export default PaginationComponent;
