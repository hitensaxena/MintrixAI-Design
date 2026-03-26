import fs from 'fs';
import path from 'path';

// The documents are located in the documents/ folder
const docsDirectory = path.join(process.cwd(), 'documents');

export interface DocMeta {
  slug: string;
  title: string;
}

export interface DocGroup {
  superCategory: 'Product' | 'Design';
  category: string;
  docs: DocMeta[];
}

export function getAllDocs(): DocMeta[] {
  // Reading the root directory but filtering only the specific required markdown files
  const fileNames = fs.readdirSync(docsDirectory);
  
  // Exclude AGENTS.md, CLAUDE.md, README.md and only include relevant ones
  const allowedDocs = [
    "Product Brief.md", 
    "Confidence and Surface Behavior.md",
    "Setup Architecture.md",
    "System Architecture.md",
    "Event Architecture.md",
    "Persona AI Agent Architecture.md",
    "Intelligence Layer Processor Architecture.md",
    "Living Curriculum State Architecture.md",
    "Policies, Settings and Autonomy Architecture.md",
    "Screen Inventory and Navigation Model.md",
    "System Operations.md",
    "Confidence and Surface Behavior.md",
    "Policies, Trust and Governance.md",
    "Setup, Tuning, Setting and Maintainance of Intelligence.md",
    "Persona Agents.md",
    "Daily Feed.md",
    "Approval Inbox.md",
    "Exception Center.md",
    "Transparency Log.md",
    "Role-based Dashboard.md",
    "Workspace.md",
    "User Profile and Settings.md",
    "Event Cards.md",
    "Primary Navigation.md",
    "Surface-based Navigation.md",
    "Persona Intelligence Cards.md", 
    "Approval and Transparency.md",
    "Tuning and Policies.md",
    "Setup and Onboarding.md",
    "Living Curriculum And Pace.md",
    "Teacher daily teaching.md",
    "Principal Operations and Exceptions.md",
    "Admin Operations and Exceptions.md",
    "Students Workflows.md",
    "Design Foundation and Philosophy.md",
    "User Personas and Journeys.md",
    "Agent Personas and Journeys.md",
    "Teacher Grading and Intervention Flow.md",
    "Parent Communication and Consent Flow.md",
    "Admin Substrate Setup Flow.md",
    "Core Event Spawning Flow.md",
    "High-Stakes Approval Flow.md",
    "Principal Triage Flow.md",
    "Color Architecture.md",
    "Typography and Spacing.md",
    "Voice and Tone.md",
    "Interface Components.md",
    "Layout and Spatial Model.md",
    "Motion and Transitions.md"
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

  const groups: { superCategory: 'Product' | 'Design'; category: string; docTitles: string[] }[] = [
    {
      superCategory: "Product",
      category: "Foundations",
      docTitles: [
        "Product Brief",
        "Persona Intelligence Cards",
        "Workflow Management"
      ]
    },
    {
      superCategory: "Product",
      category: "System Architecture",
      docTitles: [
        "Setup Architecture",
        "System Architecture",
        "Event Architecture",
        "Persona AI Agent Architecture",
        "Intelligence Layer Processor Architecture",
        "Living Curriculum State Architecture",
        "Policies, Settings and Autonomy Architecture",
        "Screen Inventory and Navigation Model",
        "System Operations"
      ]
    },
    {
      superCategory: "Product",
      category: "Trust and Intelligence",
      docTitles: [
        "Confidence and Surface Behavior",
        "Policies, Trust and Governance",
        "Setup, Tuning, Setting and Maintainance of Intelligence",
        "Persona Agents"
      ]
    },
    {
      superCategory: "Product",
      category: "Workflows",
      docTitles: [
        "Approval and Transparency",
        "Tuning and Policies",
        "Setup and Onboarding",
        "Living Curriculum And Pace",
        "Teacher daily teaching",
        "Principal Operations and Exceptions",
        "Admin Operations and Exceptions",
        "Students Workflows"
      ]
    },
    {
      superCategory: "Design",
      category: "Design Foundation",
      docTitles: [
        "Design Foundation and Philosophy",
        "Layout and Spatial Model",
        "Motion and Transitions"
      ]
    },
    {
      superCategory: "Design",
      category: "Personas and Journey",
      docTitles: [
        "User Personas and Journeys",
        "Agent Personas and Journeys"
      ]
    },
    {
      superCategory: "Design",
      category: "Useflows",
      docTitles: [
        "Core Event Spawning Flow",
        "High-Stakes Approval Flow",
        "Principal Triage Flow",
        "Teacher Grading and Intervention Flow",
        "Parent Communication and Consent Flow",
        "Admin Substrate Setup Flow"
      ]
    },
    {
      superCategory: "Design",
      category: "Design System",
      docTitles: [
        "Color Architecture",
        "Typography and Spacing",
        "Voice and Tone",
        "Interface Components"
      ]
    },
    {
      superCategory: "Design",
      category: "Surfaces",
      docTitles: [
        "Daily Feed",
        "Approval Inbox",
        "Exception Center",
        "Transparency Log",
        "Role-based Dashboard",
        "Workspace",
        "User Profile and Settings"
      ]
    },
    {
      superCategory: "Design",
      category: "Components",
      docTitles: [
        "Event Cards"
      ]
    },
    {
      superCategory: "Design",
      category: "Navigation",
      docTitles: [
        "Primary Navigation",
        "Surface-based Navigation"
      ]
    }
  ];

  return groups.map(group => ({
    superCategory: group.superCategory,
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
