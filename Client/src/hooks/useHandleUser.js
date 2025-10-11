// hooks/useSubjectMutations.js
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import api from "@/services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const API_URL = "/user";

// CREATE
const createUser = async (payload) => {
  const res = await api.post(`${API_URL}/create`, payload);
  return res.data; 
};

// UPDATE
const updateUser = async (id, payload) => {
  const res = await api.put(`${API_URL}/${id}`, payload);
  return res.data;
};

// GET ALL
const getUsers = async () => {
  const res = await api.get(API_URL);
  return res.data;
};

// GET BY ID
const getUserById = async (id) => {
  const res = await api.get(`${API_URL}/${id}`);
  return res.data;
};

// ✅ Fetch all subjects
export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    select: (res) => res.data, // return only the `data` array
    onError: (err) => {
      toast.error(err.response?.data?.message || "Failed to fetch user");
    },
  });
};

// ✅ Fetch subject by ID
export const useUserById = (id, enabled = true) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => getUserById(id),
    enabled: !!id && enabled,
    select: (res) => res.data, // return only single subject object
    onSuccess: (res) => {
      toast.success(res.message); // e.g. "Subject fetched successfully"
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Failed to fetch user");
    },
  });
};

// ✅ Create subject
export const useCreateUser = () => {
  const queryClient = useQueryClient();
   const navigate = useNavigate()

  return useMutation({
    mutationFn: createUser,
    onSuccess: (res) => {
      if (res.status === 1) {
        toast.success(res.message || "User created successfully");
        queryClient.invalidateQueries(["subjects"]);
        navigate('/login')
      } else {
        toast.error(res.message || "Failed to create user");
      }
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Error creating user");
    },
  });
};

// ✅ Update subject
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateUser(id, data),
    onSuccess: (res) => {
      if (res.status === 1) {
        toast.success(res.message || "User updated successfully");
        queryClient.invalidateQueries(["subjects"]);
      } else {
        toast.error(res.message || "Failed to update user");
      }
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Error updating user");
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient(); 
    return useMutation({
        mutationFn: (id) => api.delete(`${API_URL}/${id}`),
        onSuccess: (res) => {
            if (res.data.status === 1) {
                toast.success(res.data.message || "User deleted successfully");
                queryClient.invalidateQueries(["users"]);
            } else {
                toast.error(res.data.message || "Failed to delete user");
            }
        },
        onError: (err) => {
            toast.error(err.response?.data?.message || "Error deleting user");
        },
    })
    };
