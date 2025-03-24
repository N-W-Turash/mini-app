import { Table, Pagination, Select } from "antd";
import LoadingIndicator from "@/components/common/LoadingIndicator";
import NoRecordsFound from "@/components/common/NoRecordsFound";
import { defaultFont } from "@/utils/assets/font";
import type { PaginationProps } from "antd";
import { DataGridProps } from "@/utils/types/dataGrid";

const pageSizeOptions = [
  {
    label: "10",
    value: 10,
  },

  {
    label: "20",
    value: 20,
  },

  {
    label: "50",
    value: 50,
  },
];

const NavigationButton = ({ className = "", text = "" }) => {
  return (
    <button className={`${className} text-xs font-semibold ${defaultFont.className}`}>
      {text}
    </button>
  );
};

const itemRender: PaginationProps["itemRender"] = (_, type, originalElement) => {
  const isPrevious = type === "prev";

  if (type === "prev" || type === "next")
    return (
      <NavigationButton
        className={`${isPrevious ? "me-1" : "ms-1"} text-xs font-semibold ${defaultFont.className}`}
        text={`${isPrevious ? "Prev" : "Next"}`}
      />
    );

  return originalElement;
};

const DataGrid = ({
  columns = [],
  dataSource = [],
  rowKey = "",
  fetching = false,
  loading = false,
  tableParams = {},
  total = 0,
  setTableParams,
  pagination = true,
  ...rest
}: DataGridProps) => {
  const handleTableChange = (page: number, pageSize: number) => {
    setTableParams({ pagination: { current: page, pageSize: pageSize } });
  };

  const onPageSizeChange = (value: any) => {
    setTableParams({
      pagination: { current: 1, pageSize: value },
    });
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered={true}
        size="small"
        rowKey={rowKey}
        rowClassName="ant-table-custom-row"
        locale={{
          emptyText: <NoRecordsFound fetching={fetching} size="small" />,
        }}
        loading={{
          indicator: <LoadingIndicator className="!h-6 !w-6 text-green-600" />,
          spinning: fetching,
        }}
        pagination={false}
        scroll={{
          x: 500,
          y: 365,
        }}
        {...rest}
      />

      {pagination && (
        <div
          className={`${fetching ? "pointer-events-none opacity-50" : ""} pagination-container relative mt-4 flex items-center gap-4`}
        >
          <Pagination
            {...tableParams.pagination}
            className="ant-pagination-custom relative w-full"
            total={total}
            responsive={true}
            itemRender={itemRender}
            size="default"
            showSizeChanger={false}
            locale={{ items_per_page: "" }}
            showTotal={(total, range) => {
              const text = `${range[0]}-${range[1]} of ${total} ${total > 1 ? `items` : `item`}`;

              if (total < 1) return <></>;

              return (
                <span className="absolute right-0 hidden text-xs font-medium leading-[26px] text-black/90 sm:block">
                  {!loading && <>{text}</>}
                </span>
              );
            }}
            onChange={handleTableChange}
          />

          <Select
            className="ant-select-mini !h-[30px] w-[100px] !text-xs"
            title="Records per Page"
            value={tableParams?.pagination?.pageSize}
            placeholder="Items/Page"
            disabled={total <= 10}
            options={pageSizeOptions}
            onChange={(value) => onPageSizeChange(value)}
          />
        </div>
      )}
    </>
  );
};

export default DataGrid;
