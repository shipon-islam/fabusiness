import { useRef } from "react";

const FileInput = ({
  handleFile,
  file,
  acceptableFile,
  className,
  ...rest
}) => {
  const dropRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    if (files && files.length > 0) {
      handleFile(files);
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
    handleFile(e.target.files);
  };

  return (
    <div className="">
      <div
        ref={dropRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border border-black/20 rounded-sm  text-center transition-all flex items-center justify-between w-full py-4 px-3 text-gray-500 ${className}`}
      >
        <div className="flex items-center gap-x-1">
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
            className="lucide lucide-image-up-icon lucide-image-up text-blue-500"
          >
            <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
            <path d="m14 19.5 3-3 3 3" />
            <path d="M17 22v-5.5" />
            <circle cx="9" cy="9" r="2" />
          </svg>
          <div>
            <input
              type="file"
              onChange={handleFileSelect}
              className="hidden"
              id="fileInput"
              {...rest}
            />
            <label htmlFor="fileInput" className="cursor-pointer underline">
              Upload
            </label>
          </div>
          <p className="">or drop files here</p>
        </div>
        <p className="text-sm hidden  sm:block">{acceptableFile}</p>
      </div>
      {file && <p>{file.name}</p>}
    </div>
  );
};

export default FileInput;
