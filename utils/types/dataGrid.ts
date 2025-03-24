import { ComponentProps } from "react";
import type { GetProp, TableProps } from "antd";

export type ColumnsType<T> = TableProps<T>["columns"];

export type TablePaginationConfig = Exclude<
  GetProp<TableProps, "pagination">,
  boolean
>;

export interface TableParams {
  pagination?: TablePaginationConfig;
}

export interface DataGridProps extends ComponentProps<any> {
  columns: Array<object>;
  dataSource: Array<object> | [];
  rowKey: string;
  fetching?: boolean;
  loading?: boolean;
  tableParams?: TableParams;
  total?: number;
}
