import { useQuery } from "@tanstack/react-query";
import { graphQLClient } from "./graphQLClient";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { ProductType } from "../types";
import { parse } from "graphql";
import { getProduct } from "../graphql-queries/product";

export const useGetProduct = (id: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getProduct", id],
    queryFn: async () => {
      const query: TypedDocumentNode<
        { Product: ProductType },
        Record<any, number>
      > = parse(getProduct);

      return graphQLClient.request(query, { id });
    },
  });

  return { data, isLoading, error };
};
