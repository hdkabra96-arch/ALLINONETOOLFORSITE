import {
  Layers,
  SplitSquareHorizontal,
  Minimize,
  FileText,
  Presentation,
  Table,
  FileType2,
  Edit3,
  Image as ImageIcon,
  FileImage,
  PenTool,
  Droplet,
  RotateCw,
  Code,
  Unlock,
  Lock,
  LayoutGrid,
  FileCheck,
  Wrench,
  Hash,
  Scan,
  ScanText,
  GitCompare,
  Eraser,
  Crop,
  Sparkles,
  Languages,
  FileOutput,
  Compass,
  Book,
  Briefcase,
  type LucideIcon
} from 'lucide-react';

export type ToolCategory = 
  | 'Organize' 
  | 'Optimize' 
  | 'Convert to PDF' 
  | 'Convert from PDF' 
  | 'Edit' 
  | 'Security' 
  | 'AI Tools';

export interface Tool {
  id: string;
  name: string;
  icon: LucideIcon;
  category: ToolCategory;
  description: string;
  implemented?: boolean; // If true, we have real logic. If false, it's a simulated/coming soon tool.
}

export const TOOLS: Tool[] = [
  { id: 'merge', name: 'Merge PDF', icon: Layers, category: 'Organize', description: 'Combine multiple PDFs into one unified document.', implemented: true },
  { id: 'split', name: 'Split PDF', icon: SplitSquareHorizontal, category: 'Organize', description: 'Separate one page or a whole set for easy conversion into independent PDF files.', implemented: true },
  { id: 'compress', name: 'Compress PDF', icon: Minimize, category: 'Optimize', description: 'Reduce file size while optimizing for maximal PDF quality.' },
  { id: 'pdf-to-word', name: 'PDF to Word', icon: FileText, category: 'Convert from PDF', description: 'Easily convert your PDF files into easy to edit DOC and DOCX documents.' },
  { id: 'pdf-to-powerpoint', name: 'PDF to PowerPoint', icon: Presentation, category: 'Convert from PDF', description: 'Turn your PDF files into easy to edit PPT and PPTX slideshows.' },
  { id: 'pdf-to-excel', name: 'PDF to Excel', icon: Table, category: 'Convert from PDF', description: 'Pull data straight from PDFs into Excel spreadsheets in a few short seconds.' },
  { id: 'word-to-pdf', name: 'Word to PDF', icon: FileType2, category: 'Convert to PDF', description: 'Make DOC and DOCX files easy to read by converting them to PDF.' },
  { id: 'powerpoint-to-pdf', name: 'PowerPoint to PDF', icon: FileType2, category: 'Convert to PDF', description: 'Make PPT and PPTX slideshows easy to view by converting them to PDF.' },
  { id: 'excel-to-pdf', name: 'Excel to PDF', icon: FileType2, category: 'Convert to PDF', description: 'Make EXCEL spreadsheets easy to read by converting them to PDF.' },
  { id: 'edit-pdf', name: 'Edit PDF', icon: Edit3, category: 'Edit', description: 'Add text, images, shapes or freehand annotations to a PDF document.' },
  { id: 'pdf-to-jpg', name: 'PDF to JPG', icon: ImageIcon, category: 'Convert from PDF', description: 'Convert each PDF page into a JPG or extract all images contained in a PDF.' },
  { id: 'jpg-to-pdf', name: 'JPG to PDF', icon: FileImage, category: 'Convert to PDF', description: 'Convert JPG images to PDF in seconds. Easily adjust orientation and margins.' },
  { id: 'sign-pdf', name: 'Sign PDF', icon: PenTool, category: 'Security', description: 'Sign yourself or request electronic signatures from others.' },
  { id: 'add-watermark', name: 'Add Watermark', icon: Droplet, category: 'Security', description: 'Stamp an image or text over your PDF in seconds. Choose the typography, transparency and position.', implemented: true },
  { id: 'remove-watermark', name: 'Remove Watermark', icon: Eraser, category: 'Security', description: 'Remove watermarks from your PDF documents easily.' },
  { id: 'rotate-pdf', name: 'Rotate PDF', icon: RotateCw, category: 'Organize', description: 'Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!', implemented: true },
  { id: 'html-to-pdf', name: 'HTML to PDF', icon: Code, category: 'Convert to PDF', description: 'Convert webpages in HTML to PDF. Copy and paste the URL of the page you want and convert it to PDF with a click.' },
  { id: 'unlock-pdf', name: 'Unlock PDF', icon: Unlock, category: 'Security', description: 'Remove PDF password security, giving you the freedom to use your PDFs as you want.' },
  { id: 'protect-pdf', name: 'Protect PDF', icon: Lock, category: 'Security', description: 'Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access.' },
  { id: 'organize-pdf', name: 'Organize PDF', icon: LayoutGrid, category: 'Organize', description: 'Sort, add and delete PDF pages. Drag and drop the page thumbnails and sort them in our PDF organizer.' },
  { id: 'pdf-to-pdfa', name: 'PDF to PDF/A', icon: FileCheck, category: 'Convert from PDF', description: 'Convert PDF documents to PDF/A for archiving and long-term preservation.' },
  { id: 'repair-pdf', name: 'Repair PDF', icon: Wrench, category: 'Optimize', description: 'Repair a damaged PDF and recover data from corrupt PDF. Fix PDF files with our Repair tool.' },
  { id: 'page-numbers', name: 'Page Numbers', icon: Hash, category: 'Edit', description: 'Add page numbers into PDFs with ease. Choose your positions, dimensions, typography.' },
  { id: 'scan-to-pdf', name: 'Scan to PDF', icon: Scan, category: 'Convert to PDF', description: 'Capture document scans from your mobile device or webcam and send them instantly to your browser.' },
  { id: 'autocad-to-pdf', name: 'AutoCAD to PDF', icon: Compass, category: 'Convert to PDF', description: 'Convert AutoCAD files (DWG, DXF) to PDF documents easily.' },
  { id: 'openoffice-to-pdf', name: 'OpenOffice to PDF', icon: FileText, category: 'Convert to PDF', description: 'Convert OpenOffice documents (ODT, ODS, ODP) to PDF format.' },
  { id: 'ebooks-to-pdf', name: 'eBooks to PDF', icon: Book, category: 'Convert to PDF', description: 'Convert your eBooks (EPUB, MOBI, AZW3) to PDF for easy reading.' },
  { id: 'iwork-to-pdf', name: 'iWork to PDF', icon: Briefcase, category: 'Convert to PDF', description: 'Convert Apple iWork files (Pages, Numbers, Keynote) to PDF.' },
  { id: 'ocr-pdf', name: 'OCR PDF', icon: ScanText, category: 'Optimize', description: 'Easily convert scanned PDF into searchable and selectable documents.' },
  { id: 'compare-pdf', name: 'Compare PDF', icon: GitCompare, category: 'Edit', description: 'Show a side-by-side document comparison and easily spot changes between different file versions.' },
  { id: 'redact-pdf', name: 'Redact PDF', icon: Eraser, category: 'Security', description: 'Permanently remove visible text and graphics from a document.' },
  { id: 'crop-pdf', name: 'Crop PDF', icon: Crop, category: 'Edit', description: 'Crop PDF online to a selected area, adjust margin size and crop all pages at once.' },
  { id: 'extract-pages', name: 'Extract Pages', icon: FileOutput, category: 'Organize', description: 'Get a new document containing only the desired pages.', implemented: true },
];
