const fs = require('fs');

function rep(file, search, replace) {
  try {
    let c = fs.readFileSync(file, 'utf8');
    c = c.split(search).join(replace);
    fs.writeFileSync(file, c);
  } catch (e) {
    console.error('Error modifying ' + file, e);
  }
}

rep('src/data/course-catalog-data.ts', '{} as Record<string, any[]>', '{} as Record<string, unknown[]>');

rep('src/modules/about-us/components/virtual-mentorship-section.tsx', 'import Image from "next/image";\n', '');
rep('src/modules/about-us/components/virtual-mentorship-section.tsx', 'import Image from "next/image";\r\n', '');
rep('src/modules/about-us/components/virtual-mentorship-section.tsx', 'import { Play, Video } from "lucide-react";\n', '');
rep('src/modules/about-us/components/virtual-mentorship-section.tsx', 'import { Play, Video } from "lucide-react";\r\n', '');

rep('src/modules/home/components/features-section.tsx', 'import { Target, Rocket, Gem } from "lucide-react";\n', '');
rep('src/modules/home/components/features-section.tsx', 'import { Target, Rocket, Gem } from "lucide-react";\r\n', '');

rep('src/modules/home/components/hero-section.tsx', 'import Link from "next/link";\n', '');
rep('src/modules/home/components/hero-section.tsx', 'import Link from "next/link";\r\n', '');

rep('src/modules/study-abroad/components/popular-courses-section.tsx', 'import { Play, Video, CheckCircle2, Globe } from "lucide-react";', 'import { CheckCircle2, Globe } from "lucide-react";');

rep('src/modules/study-abroad/components/study-abroad-documents.tsx', 'import { X, ZoomIn, FileText, Eye } from "lucide-react";', 'import { X, FileText, Eye } from "lucide-react";');

rep('src/modules/study-abroad/components/study-abroad.tsx', 'import Link from "next/link";\n', '');
rep('src/modules/study-abroad/components/study-abroad.tsx', 'import Link from "next/link";\r\n', '');

console.log('Fixed ESLint issues');
