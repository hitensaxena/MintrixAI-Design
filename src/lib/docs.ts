import fs from 'fs';
import path from 'path';

// The documents are located in the documents/ folder
const docsDirectory = path.join(process.cwd(), 'documents');

export interface DocMeta {
  slug: string;
  title: string;
}

export interface DocGroup {
  category: string;
  docs: DocMeta[];
}

export function getAllDocs(): DocMeta[] {
  // Reading the root directory but filtering only the specific required markdown files
  const fileNames = fs.readdirSync(docsDirectory);
  
  // Exclude AGENTS.md, CLAUDE.md, README.md and only include relevant ones
  const allowedDocs = [
    "Architecture Map.md", 
    "Brain Map.md", 
    "Confidence and Surface Behavior.md",
    "Event Template Definitions and Exception Taxonomy.md",
    "Interface - Approval Inbox.md",
    "Interface - Daily Feed.md",
    "Interface - Exception Center.md",
    "Interface - Navigation Model.md",
    "Interface - Transparency Log.md",
    "Interface - Workspace Surface.md",
    "Persona Intelligence Cards.md", 
    "Role-Based Dashboard Structure.md",
    "Screen Inventory and Navigation Model.md", 
    "Setup and Event Architecture.md", 
    "System Operations and User Flow.md",
    "Trust Approval and Failure Framework.md", 
    "Workflow - Approval and Transparency.md",
    "Workflow - Living Curriculum and Pace.md",
    "Workflow - Principal Operations and Exceptions.md",
    "Workflow - Setup and Calibration.md",
    "Workflow - Teacher Daily Teaching.md",
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

export function getGroupedDocs(): DocGroup[] {
  const allDocs = getAllDocs();

  const groups = [
    {
      category: "Foundations",
      docTitles: [
        "Brain Map",
        "Architecture Map",
        "Persona Intelligence Cards",
        "Workflow and Persona"
      ]
    },
    {
      category: "System Architecture",
      docTitles: [
        "System Operations and User Flow",
        "Setup and Event Architecture",
        "Event Template Definitions and Exception Taxonomy",
        "Screen Inventory and Navigation Model"
      ]
    },
    {
      category: "Trust & Intelligence",
      docTitles: [
        "Trust Approval and Failure Framework",
        "Confidence and Surface Behavior"
      ]
    },
    {
      category: "Core Workflows",
      docTitles: [
        "Workflow Priority Map",
        "Workflow - Teacher Daily Teaching",
        "Workflow - Living Curriculum and Pace",
        "Workflow - Principal Operations and Exceptions",
        "Workflow - Setup and Calibration",
        "Workflow - Approval and Transparency"
      ]
    },
    {
      category: "Interface Structure",
      docTitles: [
        "Interface - Navigation Model",
        "Interface - Daily Feed",
        "Interface - Approval Inbox",
        "Interface - Exception Center",
        "Interface - Workspace Surface",
        "Interface - Transparency Log",
        "Role-Based Dashboard Structure"
      ]
    }
  ];

  return groups.map(group => ({
    category: group.category,
    docs: allDocs.filter(doc => group.docTitles.includes(doc.title))
  }));
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
