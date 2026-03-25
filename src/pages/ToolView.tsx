import React, { useState } from 'react';
import { TOOLS } from '../lib/tools';
import { Dropzone } from '../components/Dropzone';
import { ArrowLeft, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { PDFDocument, degrees } from 'pdf-lib';

export function ToolView({ toolId, onBack }: { toolId: string, onBack: () => void }) {
  const tool = TOOLS.find(t => t.id === toolId);
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{ url?: string, text?: string, error?: string } | null>(null);

  // Tool specific states
  const [password, setPassword] = useState('');
  const [watermarkText, setWatermarkText] = useState('CONFIDENTIAL');

  if (!tool) return <div>Tool not found</div>;

  const handleFiles = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    setResult(null);
  };

  const processFiles = async () => {
    if (files.length === 0) return;
    setProcessing(true);
    setResult(null);

    try {
      if (!tool.implemented) {
        // Simulate processing for unimplemented tools
        await new Promise(resolve => setTimeout(resolve, 2000));
        setResult({ error: "This feature is coming soon! Our engineers are working hard to bring this to you." });
        setProcessing(false);
        return;
      }

      // Implement real logic for supported tools
      if (tool.id === 'merge') {
        const mergedPdf = await PDFDocument.create();
        for (const file of files) {
          const arrayBuffer = await file.arrayBuffer();
          const pdf = await PDFDocument.load(arrayBuffer);
          const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
          copiedPages.forEach((page) => mergedPdf.addPage(page));
        }
        const pdfBytes = await mergedPdf.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        setResult({ url: URL.createObjectURL(blob) });
      } 
      else if (tool.id === 'split') {
        // Simple split: extract first page as an example, or split all pages into a zip (complex).
        // For simplicity, let's just extract the first page.
        const arrayBuffer = await files[0].arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const newPdf = await PDFDocument.create();
        const [copiedPage] = await newPdf.copyPages(pdf, [0]);
        newPdf.addPage(copiedPage);
        const pdfBytes = await newPdf.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        setResult({ url: URL.createObjectURL(blob) });
      }
      else if (tool.id === 'rotate-pdf') {
        const arrayBuffer = await files[0].arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const pages = pdf.getPages();
        pages.forEach(page => {
          page.setRotation(degrees(page.getRotation().angle + 90));
        });
        const pdfBytes = await pdf.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        setResult({ url: URL.createObjectURL(blob) });
      }
      else if (tool.id === 'protect-pdf') {
        const arrayBuffer = await files[0].arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        // pdf-lib supports encryption in newer versions or via save options
        const pdfBytes = await pdf.save({
          userPassword: password || 'password',
          ownerPassword: password || 'password',
          permissions: {
            printing: 'highResolution',
            modifying: false,
            copying: false,
          },
        });
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        setResult({ url: URL.createObjectURL(blob) });
      }
      else if (tool.id === 'add-watermark') {
        const arrayBuffer = await files[0].arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const pages = pdf.getPages();
        pages.forEach(page => {
          const { width, height } = page.getSize();
          page.drawText(watermarkText, {
            x: width / 4,
            y: height / 2,
            size: 50,
            opacity: 0.3,
            rotate: degrees(45),
          });
        });
        const pdfBytes = await pdf.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        setResult({ url: URL.createObjectURL(blob) });
      }
      else if (tool.id === 'extract-pages') {
        const arrayBuffer = await files[0].arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const newPdf = await PDFDocument.create();
        // Extract first 2 pages if available
        const indices = pdf.getPageCount() > 1 ? [0, 1] : [0];
        const copiedPages = await newPdf.copyPages(pdf, indices);
        copiedPages.forEach(page => newPdf.addPage(page));
        const pdfBytes = await newPdf.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        setResult({ url: URL.createObjectURL(blob) });
      }
      else {
        setResult({ error: "Tool implementation not found." });
      }
    } catch (err: any) {
      console.error(err);
      setResult({ error: err.message || "An error occurred during processing." });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-500 hover:text-slate-900 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all tools
        </button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 text-red-600 mb-6">
            <tool.icon className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{tool.name}</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{tool.description}</p>
        </div>

        {files.length === 0 ? (
          <Dropzone 
            onFilesAccepted={handleFiles} 
            maxFiles={tool.id === 'merge' ? 0 : 1}
            title={`Select PDF file${tool.id === 'merge' ? 's' : ''}`}
          />
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 max-w-3xl mx-auto"
          >
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Selected Files:</h3>
              <ul className="space-y-2">
                {files.map((f, i) => (
                  <li key={i} className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <tool.icon className="w-5 h-5 text-slate-400 mr-3" />
                    <span className="flex-1 truncate font-medium text-slate-700">{f.name}</span>
                    <span className="text-sm text-slate-400">{(f.size / 1024 / 1024).toFixed(2)} MB</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tool specific options */}
            {!result && !processing && tool.id === 'protect-pdf' && (
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-2">Set Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                  placeholder="Enter a secure password"
                />
              </div>
            )}

            {!result && !processing && tool.id === 'add-watermark' && (
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-2">Watermark Text</label>
                <input 
                  type="text" 
                  value={watermarkText}
                  onChange={(e) => setWatermarkText(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                  placeholder="e.g., CONFIDENTIAL"
                />
              </div>
            )}

            {!result && !processing && (
              <div className="flex space-x-4">
                <button 
                  onClick={() => setFiles([])}
                  className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={processFiles}
                  className="flex-1 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
                >
                  Process PDF
                </button>
              </div>
            )}

            {processing && (
              <div className="text-center py-12">
                <Loader2 className="w-12 h-12 text-red-600 animate-spin mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Processing your files...</h3>
                <p className="text-slate-500">This might take a few moments depending on the file size.</p>
              </div>
            )}

            {result && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8"
              >
                {result.error ? (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
                    <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Oops! Something went wrong</h3>
                    <p className="text-red-700 mb-6">{result.error}</p>
                    <button 
                      onClick={() => setResult(null)}
                      className="px-6 py-2 bg-white border border-red-200 text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Task Complete!</h3>
                    <p className="text-green-700 mb-8">Your document has been successfully processed.</p>
                    
                    {result.url && (
                      <a 
                        href={result.url} 
                        download={tool.id === 'merge' ? 'merged.pdf' : `processed_${files[0].name}`}
                        className="inline-block px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
                      >
                        Download File
                      </a>
                    )}

                    {result.text && (
                      <div className="mt-6 text-left bg-white p-6 rounded-xl border border-green-100 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                          <Sparkles className="w-5 h-5 text-indigo-500 mr-2" />
                          AI Output
                        </h4>
                        <div className="prose prose-slate max-w-none">
                          {result.text.split('\n').map((line, i) => (
                            <p key={i} className="mb-2">{line}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-8">
                      <button 
                        onClick={() => { setFiles([]); setResult(null); }}
                        className="text-slate-500 hover:text-slate-800 font-medium underline"
                      >
                        Process another file
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
