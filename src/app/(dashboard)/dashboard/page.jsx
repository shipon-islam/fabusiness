"use client";
import Button from "@/components/Button";
import { blogYupSchema } from "@/yup/blogYupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function BlogPost() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [editBlog, setEditBlog] = useState({
    id: "",
    existingImage: "",
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(blogYupSchema(isEdit)),
  });
  //for fetching blogs
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/blog");
      if (!res.ok) {
        throw new Error("something went wrong");
      }
      const data = await res.json();
      setBlogs(data);
    }
    fetchData();
  }, [isRefresh]);
  //for deleting a blog
  const handleDelete = async (id) => {
    const userConfirmed = confirm("Are you sure you want to delete this item?");
    if (!userConfirmed) return;
    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      setBlogs(blogs.filter((blog) => blog._id !== id));
      toast.success("Blog deleted successfully!");
    } catch (error) {
      console.error("There was a problem with the delete operation:", error);
      toast.error(error.message);
    }
  };
  //for submitting the form
  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("title", e.title);
    formData.append("content", e.content);
    if (e.image && e.image.length > 0) {
      formData.append("image", e.image[0]);
    }
    setLoading(true);
    if (isEdit) {
      formData.append("existingImage", editBlog.existingImage);
      try {
        const res = await fetch(`/api/blog/${editBlog.id}`, {
          method: "PUT",
          body: formData,
        });
        const data = await res.json();
        if (data) {
          console.log("edited blog", data);
          reset({
            title: "",
            content: "",
            image: [],
          });
          setLoading(false);
          setIsEdit(false);
          setIsRefresh(!isRefresh);

          toast.success("Blog updated successfully!");
        }
      } catch (error) {
        toast.error(error.message);
        console.error("Error updating blog:", error);
      }
    } else {
      try {
        const res = await fetch("/api/blog", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data) {
          reset();
          setLoading(false);
          setIsEdit(false);
          setIsRefresh(!isRefresh);
          toast.success("Blog created successfully!");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error(error.message);
      }
    }
  };
  const handleEdit = (blog) => {
    setIsEdit(true);
    setEditBlog({
      id: blog._id,
      existingImage: blog.image,
    });
    reset({
      title: blog.title,
      content: blog.content,
      image: [],
    });
    window.scrollTo(0, 0, { behavior: "smooth" });
  };
  return (
    <div className="md:w-4/5 mx-auto">
      <div className="mt-10">
        <h1 className="text-3xl font-semibold">Create New Post</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-y-8 mt-10"
          action="#"
        >
          <div>
            <input
              type="text"
              className="border border-gray-300 p-4 rounded-md w-full block"
              placeholder="Post Title"
              {...register("title")}
            />
            {errors.title && (
              <p className="text-red-500 ml-1 ">{errors.title.message}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Write a Post..."
              className="border border-gray-300 w-full focus:outline-0 rounded-md p-3 min-h-36 "
              {...register("content")}
            ></textarea>
            {errors.content && (
              <p className="text-red-500 ml-1 ">{errors.content.message}</p>
            )}
          </div>
          <div>
            <input
              type="file"
              className="border border-gray-300 p-4 rounded-md accent-amber-50 w-full block"
              {...register("image")}
            />
            {errors.image && (
              <p className="text-red-500 ml-1 ">{errors.image.message}</p>
            )}
          </div>
          {isEdit ? (
            <Button
              name={loading ? "Editing..." : "Edit Post"}
              className="!bg-blue-600 text-white rounded-lg  w-fit"
            />
          ) : (
            <Button
              name={loading ? "Publishing..." : "Publish"}
              className="!bg-blue-600 text-white rounded-lg  w-fit"
            />
          )}
        </form>
      </div>
      <div className="mt-20">
        <h1 className="mb-5 font-bold text-xl">Recent Posts (Last 5)</h1>
        {blogs.length === 0 && (
          <p className="text-gray-500 text-2xl mt-8">There is no blog yet!</p>
        )}
        <div className="grid gap-8 lg:grid-cols-2 ">
          {blogs?.map((blog) => (
            <div key={blog._id} className="custom-shadow p-4 rounded-md ">
              <h5 className="font-semibold  py-1">{blog.title}</h5>
              <Image
                src={`/api/uploads/blog/${blog.image}`}
                width={700}
                height={200}
                alt="post"
                className="rounded-md object-cover w-full h-40"
              />
              <h5 className="my-2">{blog.content}</h5>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="text-gold cursor-pointer"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(blog)}
                  className="text-blue-600 cursor-pointer"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
