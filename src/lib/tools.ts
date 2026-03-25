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
  Maximize,
  FileDown,
  Camera,
  Scissors,
  Type,
  User,
  ImagePlus,
  ImageMinus,
  Grid,
  FileUp,
  RefreshCw,
  Sliders,
  Zap,
  Eye,
  EyeOff,
  Focus,
  Circle,
  Square,
  Merge,
  FlipHorizontal,
  FlipVertical,
  Brush,
  Highlighter,
  Aperture,
  Search,
  Settings,
  Wand2,
  Palette,
  FileAudio,
  List,
  Film,
  type LucideIcon
} from 'lucide-react';

export type ToolCategory = 
  | 'Organize' 
  | 'Optimize' 
  | 'Convert to PDF' 
  | 'Convert from PDF' 
  | 'Edit' 
  | 'Security' 
  | 'AI Tools'
  | 'Most Used Tools'
  | 'Basic Editing'
  | 'Blur, Pixlate and Special Effects'
  | 'DPI & Quality'
  | 'General Resizing'
  | 'Resize Other Official Sizes'
  | 'Passport & ID Photo Sizes'
  | 'Resize For Social Media'
  | 'Format Conversions'
  | 'Image to PDF'
  | 'General Compression'
  | 'Exact Target Sizes'
  | 'GIF Tools'
  | 'Pi7 Tools'
  | 'Other Tools'
  | 'Convert Images';

export const PDF_CATEGORIES: ToolCategory[] = [
  'Organize', 'Optimize', 'Convert to PDF', 'Convert from PDF', 'Edit', 'Security', 'AI Tools'
];

export const IMAGE_CATEGORIES: ToolCategory[] = [
  'Most Used Tools', 'Basic Editing', 'Blur, Pixlate and Special Effects', 'DPI & Quality',
  'General Resizing', 'Resize Other Official Sizes', 'Passport & ID Photo Sizes',
  'Resize For Social Media', 'Format Conversions', 'Image to PDF', 'General Compression',
  'Exact Target Sizes', 'GIF Tools', 'Pi7 Tools', 'Other Tools', 'Convert Images'
];

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
  { id: 'increase-pdf-size', name: 'Increase PDF Size', icon: Maximize, category: 'Optimize', description: 'Increase the file size of your PDF document.', implemented: true },
  { id: 'compress-pdf-50kb', name: 'Compress PDF to 50KB', icon: FileDown, category: 'Optimize', description: 'Compress your PDF document to 50KB.', implemented: true },
  { id: 'compress-pdf-100kb', name: 'Compress PDF to 100KB', icon: FileDown, category: 'Optimize', description: 'Compress your PDF document to 100KB.', implemented: true },
  { id: 'compress-pdf-200kb', name: 'Compress PDF to 200KB', icon: FileDown, category: 'Optimize', description: 'Compress your PDF document to 200KB.', implemented: true },
  { id: 'compress-pdf-500kb', name: 'Compress PDF to 500KB', icon: FileDown, category: 'Optimize', description: 'Compress your PDF document to 500KB.', implemented: true },
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

  // Most Used Tools
  { id: 'passport-photo-maker', name: 'Passport Photo Maker', icon: User, category: 'Most Used Tools', description: 'Create passport photos easily.' },
  { id: 'reduce-image-size-kb', name: 'Reduce Image Size in KB', icon: Minimize, category: 'Most Used Tools', description: 'Reduce image size in KB.' },
  { id: 'resize-image-pixel', name: 'Resize Image Pixel', icon: Maximize, category: 'Most Used Tools', description: 'Resize image by pixels.' },
  { id: 'photo-collage-maker', name: 'Photo Collage Maker', icon: Grid, category: 'Most Used Tools', description: 'Create photo collages.' },
  { id: 'generate-signature', name: 'Generate Signature', icon: PenTool, category: 'Most Used Tools', description: 'Generate a digital signature.' },
  { id: 'increase-image-size-kb', name: 'Increase Image Size In KB', icon: Maximize, category: 'Most Used Tools', description: 'Increase image size in KB.' },
  { id: 'ai-photo-enhancer', name: 'AI Photo Enhancer', icon: Sparkles, category: 'Most Used Tools', description: 'Enhance photos using AI.' },
  { id: 'resize-signature', name: 'Resize Signature', icon: Scissors, category: 'Most Used Tools', description: 'Resize signature images.' },
  { id: 'resize-image-cm', name: 'Resize Image In Centimeter', icon: Maximize, category: 'Most Used Tools', description: 'Resize image in centimeters.' },
  { id: 'resize-image-35x45', name: 'Resize Image (3.5cm x 4.5cm)', icon: Crop, category: 'Most Used Tools', description: 'Resize image to 3.5cm x 4.5cm.' },

  // Basic Editing
  { id: 'blur-background', name: 'Blur Background', icon: Droplet, category: 'Basic Editing', description: 'Blur the background of an image.' },
  { id: 'remove-background', name: 'Remove Background', icon: Eraser, category: 'Basic Editing', description: 'Remove the background from an image.' },
  { id: 'remove-object', name: 'Remove Object from Photo', icon: Eraser, category: 'Basic Editing', description: 'Remove objects from photos.' },
  { id: 'add-name-dob', name: 'Add Name & DOB on Photo', icon: Type, category: 'Basic Editing', description: 'Add name and date of birth to photos.' },
  { id: 'rotate-image', name: 'Rotate Image', icon: RotateCw, category: 'Basic Editing', description: 'Rotate images.' },
  { id: 'flip-image', name: 'Flip Image', icon: FlipHorizontal, category: 'Basic Editing', description: 'Flip images horizontally or vertically.' },
  { id: 'watermark-images', name: 'Watermark Images', icon: Droplet, category: 'Basic Editing', description: 'Add watermarks to images.' },
  { id: 'freehand-crop', name: 'Freehand Crop', icon: Crop, category: 'Basic Editing', description: 'Crop images freehand.' },
  { id: 'circle-crop', name: 'Circle Crop', icon: Circle, category: 'Basic Editing', description: 'Crop images into a circle.' },
  { id: 'square-crop', name: 'Square Crop', icon: Square, category: 'Basic Editing', description: 'Crop images into a square.' },
  { id: 'merge-photo-signature', name: 'Merge Photo & Signature', icon: Merge, category: 'Basic Editing', description: 'Merge a photo and a signature.' },
  { id: 'join-multiple-images', name: 'Join Multiple Images', icon: Layers, category: 'Basic Editing', description: 'Join multiple images together.' },
  { id: 'split-image', name: 'Split Image', icon: SplitSquareHorizontal, category: 'Basic Editing', description: 'Split an image into parts.' },
  { id: 'image-color-picker', name: 'Image Color Picker', icon: Palette, category: 'Basic Editing', description: 'Pick colors from an image.' },
  { id: 'edit-metadata', name: 'Edit Metadata', icon: Edit3, category: 'Basic Editing', description: 'Edit image metadata.' },
  { id: 'view-metadata', name: 'View Metadata', icon: Eye, category: 'Basic Editing', description: 'View image metadata.' },
  { id: 'remove-metadata', name: 'Remove Metadata', icon: Eraser, category: 'Basic Editing', description: 'Remove image metadata.' },
  { id: 'crop-png', name: 'Crop PNG', icon: Crop, category: 'Basic Editing', description: 'Crop PNG images.' },

  // Blur, Pixlate and Special Effects
  { id: 'beautify-image', name: 'Beautify Image', icon: Sparkles, category: 'Blur, Pixlate and Special Effects', description: 'Beautify images.' },
  { id: 'unblur-image', name: 'Unblur Image', icon: Focus, category: 'Blur, Pixlate and Special Effects', description: 'Unblur images.' },
  { id: 'blur-image', name: 'Blur Image', icon: Droplet, category: 'Blur, Pixlate and Special Effects', description: 'Blur images.' },
  { id: 'blur-face', name: 'Blur Face', icon: User, category: 'Blur, Pixlate and Special Effects', description: 'Blur faces in images.' },
  { id: 'unblur-face', name: 'Unblur Face', icon: Focus, category: 'Blur, Pixlate and Special Effects', description: 'Unblur faces in images.' },
  { id: 'add-border', name: 'Add Border To Image', icon: Square, category: 'Blur, Pixlate and Special Effects', description: 'Add borders to images.' },
  { id: 'pixelate-image', name: 'Pixelate Image', icon: Grid, category: 'Blur, Pixlate and Special Effects', description: 'Pixelate images.' },
  { id: 'pixelate-face', name: 'Pixelate Face', icon: User, category: 'Blur, Pixlate and Special Effects', description: 'Pixelate faces in images.' },
  { id: 'censor-photo', name: 'Censor Photo', icon: EyeOff, category: 'Blur, Pixlate and Special Effects', description: 'Censor photos.' },
  { id: 'motion-blur', name: 'Motion Blur', icon: Droplet, category: 'Blur, Pixlate and Special Effects', description: 'Apply motion blur to images.' },
  { id: 'grayscale-image', name: 'Grayscale Image', icon: ImageIcon, category: 'Blur, Pixlate and Special Effects', description: 'Convert images to grayscale.' },
  { id: 'black-and-white', name: 'Black & White', icon: ImageIcon, category: 'Blur, Pixlate and Special Effects', description: 'Convert images to black and white.' },
  { id: 'picture-to-pixel-art', name: 'Picture to Pixel Art', icon: Grid, category: 'Blur, Pixlate and Special Effects', description: 'Convert pictures to pixel art.' },
  { id: 'add-white-border', name: 'Add White Border To Image', icon: Square, category: 'Blur, Pixlate and Special Effects', description: 'Add white borders to images.' },
  { id: 'ai-face-generator', name: 'AI Face Generator', icon: Wand2, category: 'Blur, Pixlate and Special Effects', description: 'Generate faces using AI.' },
  { id: 'blemishes-remover', name: 'Blemishes Remover', icon: Eraser, category: 'Blur, Pixlate and Special Effects', description: 'Remove blemishes from photos.' },
  { id: 'retouch-image', name: 'Retouch Image', icon: Brush, category: 'Blur, Pixlate and Special Effects', description: 'Retouch images.' },
  { id: 'add-text-to-image', name: 'Add Text to Image', icon: Type, category: 'Blur, Pixlate and Special Effects', description: 'Add text to images.' },
  { id: 'add-logo-to-image', name: 'Add Logo to Image', icon: ImagePlus, category: 'Blur, Pixlate and Special Effects', description: 'Add logos to images.' },

  // DPI & Quality
  { id: 'increase-image-quality', name: 'Increase Image Quality', icon: Sparkles, category: 'DPI & Quality', description: 'Increase image quality.' },
  { id: 'convert-dpi', name: 'Convert DPI (200, 300, 600)', icon: Settings, category: 'DPI & Quality', description: 'Convert image DPI.' },
  { id: 'check-image-dpi', name: 'Check Image DPI', icon: Search, category: 'DPI & Quality', description: 'Check image DPI.' },
  { id: 'super-resolution', name: 'Super Resolution', icon: Maximize, category: 'DPI & Quality', description: 'Apply super resolution to images.' },

  // General Resizing
  { id: 'resize-image-by-pixel', name: 'Resize Image by Pixel', icon: Maximize, category: 'General Resizing', description: 'Resize images by pixel.' },
  { id: 'resize-in-centimeters', name: 'Resize in Centimeters', icon: Maximize, category: 'General Resizing', description: 'Resize images in centimeters.' },
  { id: 'resize-in-millimeters', name: 'Resize in Millimeters', icon: Maximize, category: 'General Resizing', description: 'Resize images in millimeters.' },
  { id: 'resize-in-inches', name: 'Resize in Inches Bulk Image', icon: Maximize, category: 'General Resizing', description: 'Resize images in inches.' },
  { id: 'resizer-upscale-ai', name: 'Resizer Upscale Image With AI', icon: Wand2, category: 'General Resizing', description: 'Upscale images using AI.' },

  // Resize Other Official Sizes
  { id: 'a4-size', name: 'A4 Size', icon: FileText, category: 'Resize Other Official Sizes', description: 'Resize to A4 size.' },
  { id: 'ssc-photo-resize', name: 'SSC Photo Resize', icon: Crop, category: 'Resize Other Official Sizes', description: 'Resize for SSC photo.' },
  { id: 'pan-card', name: 'PAN Card', icon: Crop, category: 'Resize Other Official Sizes', description: 'Resize for PAN card.' },
  { id: 'upsc-photo', name: 'UPSC Photo', icon: Crop, category: 'Resize Other Official Sizes', description: 'Resize for UPSC photo.' },
  { id: 'psc-photo', name: 'PSC Photo', icon: Crop, category: 'Resize Other Official Sizes', description: 'Resize for PSC photo.' },

  // Passport & ID Photo Sizes
  { id: 'passport-photo-maker-2', name: 'Passport Photo Maker', icon: User, category: 'Passport & ID Photo Sizes', description: 'Create passport photos.' },
  { id: 'resize-sign-6x2', name: 'Resize Sign 6cm x 2cm (300 DPI)', icon: Crop, category: 'Passport & ID Photo Sizes', description: 'Resize signature to 6cm x 2cm.' },
  { id: 'resize-35x45', name: '3.5cm x 4.5cm', icon: Crop, category: 'Passport & ID Photo Sizes', description: 'Resize to 3.5cm x 4.5cm.' },
  { id: 'signature-50x20', name: 'Signature 50mm x 20mm', icon: Crop, category: 'Passport & ID Photo Sizes', description: 'Resize signature to 50mm x 20mm.' },
  { id: 'resize-35mmx45mm', name: '35mm x 45mm', icon: Crop, category: 'Passport & ID Photo Sizes', description: 'Resize to 35mm x 45mm.' },
  { id: 'resize-2x2-inch', name: '2 x 2 Inch', icon: Crop, category: 'Passport & ID Photo Sizes', description: 'Resize to 2 x 2 inches.' },
  { id: 'resize-3x4-inch', name: '3 x 4 Inch', icon: Crop, category: 'Passport & ID Photo Sizes', description: 'Resize to 3 x 4 inches.' },
  { id: 'resize-4x6-inch', name: '4 x 6 Inch', icon: Crop, category: 'Passport & ID Photo Sizes', description: 'Resize to 4 x 6 inches.' },
  { id: 'resize-600x600', name: '600x600 Pixels', icon: Crop, category: 'Passport & ID Photo Sizes', description: 'Resize to 600x600 pixels.' },

  // Resize For Social Media
  { id: 'instagram-no-crop', name: 'Instagram (No Crop)', icon: ImageIcon, category: 'Resize For Social Media', description: 'Resize for Instagram without cropping.' },
  { id: 'instagram-grid-maker', name: 'Instagram Grid Maker', icon: Grid, category: 'Resize For Social Media', description: 'Create grids for Instagram.' },
  { id: 'whatsapp-dp', name: 'WhatsApp DP', icon: User, category: 'Resize For Social Media', description: 'Resize for WhatsApp DP.' },
  { id: 'youtube-banner', name: 'YouTube Banner', icon: ImageIcon, category: 'Resize For Social Media', description: 'Resize for YouTube banner.' },
  { id: 'zoom-out-image', name: 'Zoom Out Image', icon: Minimize, category: 'Resize For Social Media', description: 'Zoom out images.' },

  // Format Conversions
  { id: 'ocr-image', name: 'OCR Image', icon: ScanText, category: 'Format Conversions', description: 'Extract text from images.' },
  { id: 'image-to-jpg', name: 'Image to JPG', icon: FileImage, category: 'Format Conversions', description: 'Convert images to JPG.' },
  { id: 'heic-to-jpg', name: 'HEIC to JPG', icon: FileImage, category: 'Format Conversions', description: 'Convert HEIC to JPG.' },
  { id: 'webp-to-jpg', name: 'WEBP to JPG', icon: FileImage, category: 'Format Conversions', description: 'Convert WEBP to JPG.' },
  { id: 'jpeg-to-png', name: 'JPEG to PNG', icon: FileImage, category: 'Format Conversions', description: 'Convert JPEG to PNG.' },
  { id: 'png-to-jpeg', name: 'PNG to JPEG', icon: FileImage, category: 'Format Conversions', description: 'Convert PNG to JPEG.' },
  { id: 'jpg-to-text', name: 'JPG to Text', icon: FileText, category: 'Format Conversions', description: 'Extract text from JPG.' },
  { id: 'png-to-text', name: 'PNG to Text', icon: FileText, category: 'Format Conversions', description: 'Extract text from PNG.' },

  // Image to PDF
  { id: 'image-to-pdf-2', name: 'Image to PDF', icon: FileType2, category: 'Image to PDF', description: 'Convert images to PDF.' },
  { id: 'pdf-to-jpg-2', name: 'PDF to JPG', icon: FileImage, category: 'Image to PDF', description: 'Convert PDF to JPG.' },
  { id: 'jpg-to-pdf-50kb', name: 'JPG to PDF (Under 50KB)', icon: FileType2, category: 'Image to PDF', description: 'Convert JPG to PDF under 50KB.' },
  { id: 'jpg-to-pdf-100kb', name: 'JPG to PDF (Under 100KB)', icon: FileType2, category: 'Image to PDF', description: 'Convert JPG to PDF under 100KB.' },
  { id: 'jpeg-to-pdf-200kb', name: 'JPEG to PDF (Under 200KB)', icon: FileType2, category: 'Image to PDF', description: 'Convert JPEG to PDF under 200KB.' },
  { id: 'jpg-to-pdf-300kb', name: 'JPG to PDF (Under 300KB)', icon: FileType2, category: 'Image to PDF', description: 'Convert JPG to PDF under 300KB.' },
  { id: 'jpg-to-pdf-500kb', name: 'JPG to PDF (Under 500KB)', icon: FileType2, category: 'Image to PDF', description: 'Convert JPG to PDF under 500KB.' },

  // General Compression
  { id: 'image-compressor', name: 'Image Compressor', icon: Minimize, category: 'General Compression', description: 'Compress images.' },
  { id: 'reduce-size-kb', name: 'Reduce Size in KB', icon: Minimize, category: 'General Compression', description: 'Reduce image size in KB.' },
  { id: 'reduce-size-mb', name: 'Reduce Size in MB', icon: Minimize, category: 'General Compression', description: 'Reduce image size in MB.' },
  { id: 'jpg-to-kb', name: 'JPG to KB', icon: Minimize, category: 'General Compression', description: 'Convert JPG size to KB.' },
  { id: 'convert-mb-to-kb', name: 'Convert MB to KB', icon: Minimize, category: 'General Compression', description: 'Convert MB to KB.' },
  { id: 'convert-kb-to-mb', name: 'Convert KB to MB', icon: Maximize, category: 'General Compression', description: 'Convert KB to MB.' },

  // Exact Target Sizes
  { id: 'compress-5kb', name: 'Compress to 5KB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress image to 5KB.' },
  { id: 'jpeg-10kb', name: 'JPEG to 10KB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress JPEG to 10KB.' },
  { id: 'compress-15kb', name: 'Compress to 15KB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress image to 15KB.' },
  { id: 'compress-20kb', name: 'Compress to 20KB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress image to 20KB.' },
  { id: 'compress-20-50kb', name: 'Compress 20KB-50KB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress image to 20KB-50KB.' },
  { id: 'jpeg-25kb', name: 'JPEG to 25KB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress JPEG to 25KB.' },
  { id: 'jpeg-30kb', name: 'JPEG to 30KB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress JPEG to 30KB.' },
  { id: 'jpeg-40kb', name: 'JPEG to 40KB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress JPEG to 40KB.' },
  { id: 'compress-50kb', name: 'Compress to 50KB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress image to 50KB.' },
  { id: 'compress-100kb', name: 'Compress to 100KB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress image to 100KB.' },
  { id: 'jpeg-150kb', name: 'JPEG to 150KB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress JPEG to 150KB.' },
  { id: 'compress-200kb', name: 'Compress to 200KB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress image to 200KB.' },
  { id: 'jpeg-300kb', name: 'JPEG to 300KB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress JPEG to 300KB.' },
  { id: 'jpeg-500kb', name: 'JPEG to 500KB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress JPEG to 500KB.' },
  { id: 'compress-1mb', name: 'Compress to 1MB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress image to 1MB.' },
  { id: 'compress-2mb', name: 'Compress to 2MB', icon: Minimize, category: 'Exact Target Sizes', description: 'Compress image to 2MB.' },

  // GIF Tools
  { id: 'gif-maker', name: 'GIF Maker', icon: Film, category: 'GIF Tools', description: 'Create GIFs.' },
  { id: 'gif-compressor', name: 'GIF Compressor', icon: Minimize, category: 'GIF Tools', description: 'Compress GIFs.' },
  { id: 'add-text-to-gifs', name: 'Add Text to GIFs', icon: Type, category: 'GIF Tools', description: 'Add text to GIFs.' },
  { id: 'convert-video-to-gif', name: 'Convert Video to GIF', icon: Film, category: 'GIF Tools', description: 'Convert videos to GIFs.' },

  // Pi7 Tools
  { id: 'pi7-collage', name: 'Pi7 Collage', icon: Grid, category: 'Pi7 Tools', description: 'Create collages with Pi7.' },
  { id: 'pi7-pdf-tool', name: 'Pi7 PDF Tool', icon: FileType2, category: 'Pi7 Tools', description: 'Pi7 PDF tools.' },
  { id: 'pi7-audio-tool', name: 'Pi7 Audio Tool', icon: FileAudio, category: 'Pi7 Tools', description: 'Pi7 audio tools.' },
  { id: 'bulk-image-resizer', name: 'Bulk Image Resizer', icon: Maximize, category: 'Pi7 Tools', description: 'Resize images in bulk.' },
  { id: 'list-of-image-tools', name: 'List Of Image Tools', icon: List, category: 'Pi7 Tools', description: 'List of all image tools.' },

  // Other Tools
  { id: 'smalljpg', name: 'SmallJPG', icon: Minimize, category: 'Other Tools', description: 'Compress JPGs.' },
  { id: 'this-person-does-not-exist', name: 'This Person Does Not Exist', icon: User, category: 'Other Tools', description: 'Generate AI faces.' },
  { id: 'generate-invoice', name: 'Generate Invoice', icon: FileText, category: 'Other Tools', description: 'Generate invoices.' },

  // Convert Images
  { id: 'image-to-jpg-2', name: 'Image To JPG', icon: FileImage, category: 'Convert Images', description: 'Convert images to JPG.' },
  { id: 'image-to-jpeg', name: 'Image to JPEG', icon: FileImage, category: 'Convert Images', description: 'Convert images to JPEG.' },
  { id: 'heic-to-jpg-2', name: 'HEIC To JPG', icon: FileImage, category: 'Convert Images', description: 'Convert HEIC to JPG.' },
  { id: 'images-to-pdf', name: 'Images To PDF', icon: FileType2, category: 'Convert Images', description: 'Convert images to PDF.' },
  { id: 'jpg-to-pdf-under-100kb', name: 'JPG to PDF Under 100KB', icon: FileType2, category: 'Convert Images', description: 'Convert JPG to PDF under 100KB.' },
  { id: 'jpg-to-pdf-under-500kb', name: 'JPG to PDF Under 500KB', icon: FileType2, category: 'Convert Images', description: 'Convert JPG to PDF under 500KB.' },
  { id: 'jpg-to-text-2', name: 'JPG to Text', icon: FileText, category: 'Convert Images', description: 'Extract text from JPG.' },
  { id: 'jpeg-to-png-2', name: 'JPEG to PNG', icon: FileImage, category: 'Convert Images', description: 'Convert JPEG to PNG.' },
];
