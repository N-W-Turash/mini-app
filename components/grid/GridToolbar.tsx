"use client";

import React, { useState, useCallback, ComponentProps, ReactNode } from "react";
import { Input } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import ToolbarButton from "@/components/grid/ToolbarButton";
import { ReloadIcon, CloseIcon } from "@/components/icons/Icons";
import { TableParams } from "@/utils/types/dataGrid";

interface GridToolbarProps extends ComponentProps<any> {
  additionalComponents?: ReactNode;
  title?: string | ReactNode;
  total?: number;
  fetching?: boolean;
  query?: string;
  setQuery?: React.Dispatch<React.SetStateAction<any>> | undefined;
  setTableParams?: React.Dispatch<React.SetStateAction<any>>;
  showTitleOnly?: boolean;
  queryKey?: string[];
}

const GridToolbar = ({
  additionalComponents,
  title = "",
  fetching = false,
  tableParams = {},
  setQuery = () => {},
  setTableParams = () => {},
  showTitleOnly = false,
  queryKey = [],
}: GridToolbarProps) => {
  const [searchText, setSearchText] = useState("");
  const queryClient = useQueryClient();

  const handleSearch = (searchText?: string) => {
    if (searchText && searchText?.trim() !== "") {
      setQuery(searchText);
      setTableParams({
        pagination: { current: 1, pageSize: tableParams.pagination?.pageSize },
      });
    }
  };

  const onSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.type === "click") {
      setSearchText("");
      setQuery("");
      setTableParams({ pagination: { current: 1, pageSize: 10 } });
    } else {
      setSearchText(event.target.value);
    }
  };

  const reloadTable = useCallback(() => {
    setSearchText("");
    setQuery("");

    setTableParams((previousTableParams: TableParams) => {
      return {
        ...previousTableParams,
        pagination: {
          ...previousTableParams.pagination,
          current: 1,
          pageSize: 10,
        },
      };
    });
  }, [setQuery, setTableParams]);

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-se rounded-ss border border-light-ash border-b-transparent bg-white px-3 py-4">
      <h3
        className={`mb-0 ${showTitleOnly ? "text-semi-sm" : "text-base"} font-semibold text-black`}
      >
        {title}
      </h3>

      {!showTitleOnly && (
        <div
          className={`${fetching ? "pointer-events-none opacity-50" : ""} flex items-center gap-3`}
        >
          <Input
            allowClear={{
              clearIcon: <CloseIcon height="8" width="8" className="text-black/60" />,
            }}
            className="h-[32px] max-w-[180px] !text-xs font-medium"
            placeholder="Search..."
            value={searchText}
            onChange={onSearchTextChange}
            onPressEnter={(event: any) => {
              handleSearch(event.target.value);
            }}
          />

          <ToolbarButton
            title="Reload Table"
            onClick={() => {
              queryClient.invalidateQueries({ queryKey });
              reloadTable();
            }}
          >
            <ReloadIcon height={14} width={14} />
          </ToolbarButton>

          {additionalComponents && additionalComponents}
        </div>
      )}
    </div>
  );
};

export default GridToolbar;
