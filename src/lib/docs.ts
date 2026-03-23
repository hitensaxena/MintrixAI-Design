import fs from 'fs';
import path from 'path';

// The documents are located in the documents/ folder
const docsDirectory = path.join(process.cwd(), 'documents');

export interface DocMeta {
  slug: string;
  title: string;
}

export function getAllDocs(): DocMeta[] {
  // Reading the root directory but filtering only the specific required markdown files
  const fileNames = fs.readdirSync(docsDirectory);
  
  // Exclude AGENTS.md, CLAUDE.md, README.md and only include relevant ones
  const allowedDocs = [
    "Architecture Map.md", 
    "Brain Map.md", 
    "Persona Intelligence Cards.md", 
    "Screen Inventory and Navigation Model.md", 
    "Setup and Event Architecture.md", 
    "Trust Approval and Failure Framework.md", 
    "Workflow Priority Map.md", 
    "Workflow and Persona.md"
  ];

  return fileNames
    .filter((fileName) => allowedDocs.includes(fileName))
    .map((fileName) => {
      // Remove ".md" from file name to get slug format, and encode for URL
      const slug = encodeURIComponent(fileName.replace(/\.md$/, ''));
      const title = fileName.replace(/\.md$/, '');
      
      return {
        slug,
        title,
      };
    });
}

export function getDocBySlug(slug: string) {
  const decodedSlug = decodeURIComponent(slug);
  const fullPath = path.join(docsDirectory, `${decodedSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return {
    slug,
    title: decodedSlug,
    content: fileContents,
  };
}
