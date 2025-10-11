// src/hooks/useItemsQuery.js
import { useQuery } from "@tanstack/react-query";
import api from "@/services/api"; // your pre-configured instance

export const useItemsQuery = ({ search, category, startDate, endDate }) => {
  return useQuery({
    queryKey: ["items", { search, category, startDate, endDate }],
    queryFn: async () => {
      const params = {};

      if (search) params.search = search;
      if (category) params.category = category;
      if (startDate) params.startDate = startDate;
      if (endDate) params.endDate = endDate;

      const response = await api.get("/lostThing/all", { params });
      return response.data;
    },
    select: (res) => res.data,
     retry: (failureCount, error) => {
     
      if (error.response?.status === 404) return false;
      
      return failureCount < 2;
    },
    // enabled: !!(search || category || startDate || endDate), // optional
    enabled:true
  });
};
