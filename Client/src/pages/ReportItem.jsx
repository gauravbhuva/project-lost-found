import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import MainLayout from "@/Layout/MainLayout";
import api from "@/services/api";
import { toast } from "react-toastify";


export default function ReportItem() {
  const [fileName, setFileName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      itemName: "",
      category: "electronics",
      description: "",
      location: "",
      date: "",
      file: null,
    },
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      const isoDate = new Date(data.date).toISOString();
      formData.append("itemName", data.itemName);
      formData.append("category", data.category);
      formData.append("description", data.description);
      formData.append("location", data.location);
      formData.append("foundDate", isoDate);

      if (data.file && data.file.length > 0) {
        formData.append("file", data.file[0]);
      }

      const res = await api.post("/lostThing/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Item reported successfully!");
      console.log("✅ Upload success:", res.data);
      reset();
      setFileName("");
    } catch (error) {
      console.error("❌ Upload failed:", error);
      toast.error(error.response?.data?.message || "Upload failed.");
    }
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">
              Report Found Item
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Item Name */}
              <div>
                <label
                  htmlFor="itemName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Item Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="itemName"
                  type="text"
                  {...register("itemName", { required: "Item name is required" })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                />
                {errors.itemName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.itemName.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  {...register("category")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                >
                  
                  <option value='electronics'>Electronics</option>
                  <option value='books'>Books</option>
                  <option value='id'>ID Cards</option>
                  <option value='keys'>Keys</option>
                  <option value='bags'>Bags</option>
                  <option value='accessories'>Accessories</option>
                </select>
              </div>

              {/* Description */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="3"
                  {...register("description")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Found Location <span className="text-red-500">*</span>
                </label>
                <input
                  id="location"
                  type="text"
                  {...register("location", { required: "Location is required" })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date Found <span className="text-red-500">*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  {...register("date", { required: "Date is required" })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.date.message}
                  </p>
                )}
              </div>

              {/* File Upload */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Photos <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-primary transition-colors">
                  <div className="space-y-1 text-center">
                    <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file"
                          type="file"
                          accept="image/*"
                          {...register("file", { required: "File is required" })}
                          onChange={(e) => {
                            if (e.target.files.length > 0) {
                              setFileName(e.target.files[0].name);
                            } else {
                              setFileName("");
                            }
                          }}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                    {fileName && (
                      <p className="text-sm text-gray-900 mt-2">{fileName}</p>
                    )}
                    {errors.file && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.file.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  reset();
                  setFileName("");
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md text-sm font-medium transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
