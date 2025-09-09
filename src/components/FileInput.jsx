"use client";

import { useRef, useState } from "react";

const SUPPORTED_FORMATS = ["application/pdf", "image/jpeg"];
const MAX_FILES = 5;

export default function FileInput({
  onFileChange,
  acceptableFile = "PDF or JPG (max 5 files)",
  className,
  ...rest
}) {
  const dropRef = useRef();
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState([]);

  const validateAndSetFiles = (selectedFiles) => {
    const allFiles = Array.from(selectedFiles);
    const validFiles = [];
    const errorList = [];

    if (allFiles.length + files.length > MAX_FILES) {
      errorList.push(`❌ You can upload maximum ${MAX_FILES} files at a time`);
      setErrors(errorList);
      return;
    }

    allFiles.forEach((file) => {
      if (!SUPPORTED_FORMATS.includes(file.type)) {
        errorList.push(`${file.name}: ❌ Only PDF or JPG files are allowed`);
      } else {
        validFiles.push(file);
      }
    });

    const newFiles = [...files, ...validFiles];
    setFiles(newFiles);
    setErrors(errorList);
    onFileChange(newFiles.length ? newFiles : null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropRef.current.classList.remove("bg-gray-200");
    const { files: droppedFiles } = e.dataTransfer;
    if (droppedFiles && droppedFiles.length > 0) {
      validateAndSetFiles(droppedFiles);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropRef.current.classList.add("bg-gray-200");
  };

  const handleDragLeave = () => {
    dropRef.current.classList.remove("bg-gray-200");
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFiles(e.target.files);
    }
  };

  return (
    <div className="space-y-2">
      <div
        ref={dropRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border border-black/20 rounded-md text-center transition-all flex items-center justify-between w-full py-4 px-3 text-gray-500 ${className}`}
      >
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500"
          >
            <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
            <path d="m14 19.5 3-3 3 3" />
            <path d="M17 22v-5.5" />
            <circle cx="9" cy="9" r="2" />
          </svg>

          <div>
            <input
              type="file"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              id="fileInput"
              accept=".pdf,.jpg,.jpeg"
              {...rest}
            />
            <label htmlFor="fileInput" className="cursor-pointer underline">
              Upload
            </label>
          </div>

          <p className="text-sm">or drop files here</p>
        </div>

        <p className="text-xs text-gray-400 hidden sm:block">
          {acceptableFile}
        </p>
      </div>

      {files.length > 0 && (
        <div className="text-green-600 text-sm space-y-1">
          {files.map((f, idx) => (
            <p key={idx}>✅ {f.name}</p>
          ))}
        </div>
      )}

      {errors.length > 0 && (
        <div className="text-red-500 text-sm space-y-1">
          {errors.map((err, idx) => (
            <p key={idx}>{err}</p>
          ))}
        </div>
      )}
    </div>
  );
}
