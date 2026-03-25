import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, File as FileIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface DropzoneProps {
  onFilesAccepted: (files: File[]) => void;
  accept?: Record<string, string[]>;
  maxFiles?: number;
  title?: string;
  subtitle?: string;
}

export function Dropzone({ 
  onFilesAccepted, 
  accept = { 'application/pdf': ['.pdf'] }, 
  maxFiles = 0, // 0 means unlimited
  title = "Select PDF files",
  subtitle = "or drop PDFs here"
}: DropzoneProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFilesAccepted(acceptedFiles);
    }
  }, [onFilesAccepted]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept,
    maxFiles: maxFiles > 0 ? maxFiles : undefined
  });

  return (
    <div 
      {...getRootProps()} 
      className={cn(
        "w-full max-w-3xl mx-auto border-2 border-dashed rounded-3xl p-12 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-[300px]",
        isDragActive ? "border-red-500 bg-red-50" : "border-slate-300 hover:border-red-400 hover:bg-slate-50 bg-white"
      )}
    >
      <input {...getInputProps()} />
      <div className={cn(
        "w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors duration-300",
        isDragActive ? "bg-red-100 text-red-600" : "bg-slate-100 text-slate-500"
      )}>
        <UploadCloud className="w-10 h-10" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500">{subtitle}</p>
      
      <button className="mt-8 bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
        Select PDF files
      </button>
    </div>
  );
}
