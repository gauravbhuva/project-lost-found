// src/hooks/useItemsQuery.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/services/api"; // your pre-configured instance

const updateItem = async (id, payload) => {
    const res = await api.put(`/lostThing/${id}`, payload);
    return res.data;
};

export const useItemsQuery = ({ search = '', category = '', startDate = '', endDate = '' }) => {
    return useQuery({
        queryKey: ["items", { search, category, startDate, endDate }],
        queryFn: async () => {
            const params = {};

            if (search) params.search = search;
            if (category) params.category = category;
            if (startDate) params.startDate = startDate;
            if (endDate) params.endDate = endDate;

            if (search || category || startDate || endDate) {
                const response = await api.get("/lostThing/all", { params });
                return response.data;
            } else {
                const response = await api.get("/lostThing/all");
                return response.data;
            }


        },
        select: (res) => res.data,
        retry: (failureCount, error) => {

            if (error.response?.status === 404) return false;

            return failureCount < 2;
        },
        // enabled: !!(search || category || startDate || endDate), // optional
        enabled: true
    });
};

export const useUpdateItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }) => updateItem(id, data),
        onSuccess: (res) => {
            console.log("===>res", res);

            if (res.status === 1) {
                toast.success(res.message || "Item updated successfully");
                queryClient.invalidateQueries(["items"]);
            } else {
                toast.error(res.message || "Failed to update items");
            }
        },
        onError: (err) => {
            toast.error(err.response?.data?.message || "Error updating items");
        },
    });
};

