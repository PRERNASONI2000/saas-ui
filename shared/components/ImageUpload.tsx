import React, { useRef, useState, useEffect } from 'react';

const ImageUpload: React.FC<{ onInput: (id: string, file: File | null) => void }> = (props) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const filePickerRef = useRef<HTMLInputElement>(null);

  // Jab file change hogi, preview generate karo
  useEffect(() => {
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onload = () => setPreviewUrl(fileReader.result as string);
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length === 1) {
      const pickedFile = event.target.files[0];
      setFile(pickedFile);
      props.onInput('image', pickedFile); // Parent component ko file bhejna
    }
  };

  const pickImageHandler = () => {
    filePickerRef.current?.click();
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <input
        type="file"
        ref={filePickerRef}
        style={{ display: 'none' }}
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className="w-32 h-32 border border-gray-300 flex items-center justify-center overflow-hidden rounded-lg">
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <p className="text-sm text-gray-500 text-center">Please pick an image.</p>
        )}
      </div>
      <button 
        type="button" 
        onClick={pickImageHandler}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
      >
        PICK IMAGE
      </button>
    </div>
  );
};

export default ImageUpload;