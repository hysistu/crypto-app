import { useEffect, useState } from "react";

function getData(callBack: Function, key: string, _page: number, query?: any) {
  // records: 2, currentPage: 1, totalPages: 1, results: Array;
  const [loader, setLoader] = useState<boolean>(false);
  const [records, setRecords] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [data, setData] = useState<Array<any>>([]);

  const reloadData = () => {
    setLoader(true);
    callBack(_page, query).then((data: any) => {
      const { currentPage, records, results, totalPages } = data[key];
      setRecords(records);
      setPage(currentPage);
      setData(results);
      setTotalPage(totalPages);
      setLoader(false);
    });
  };
  useEffect(() => {
    reloadData();
  }, [_page]);

  return { loader, records, page, totalPage, reloadData, data };
}

export default getData;
