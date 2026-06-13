export const languagesData = ["Tiếng Anh", "Tiếng Nhật", "Tiếng Hàn", "Tiếng Hoa"];

const langImages: Record<string, string[]> = {
  "Tiếng Anh": [
    "/images/english.jpg",
    "/images/english-2.jpg",
    "/images/teacher-english.jpg"
  ],
  "Tiếng Nhật": [
    "/images/japan.jpg",
    "/images/course-japanese.jpg"
  ],
  "Tiếng Hàn": [
    "/images/korean.jpg",
    "/images/course-korean.jpg"
  ],
  "Tiếng Hoa": [
    "/images/china.jpg",
    "/images/china3.jpg",
    "/images/china2.jpg"
  ]
};

const getLangImage = (lang: string, idx: number) => {
  const imgs = langImages[lang] || langImages["Tiếng Anh"];
  return imgs[idx % imgs.length];
};

const generateCourses = (lang: string) => {
  return [
    {
      level: "Beginner",
      levelColor: "bg-emerald-500",
      language: lang,
      title: `${lang} từ Cơ bản đến Giao tiếp`,
      author: "Nguyễn Văn A",
      rating: 4.8,
      hours: 22,
      price: 8.90,
      image: getLangImage(lang, 0)
    },
    {
      level: "Intermediate",
      levelColor: "bg-orange-500",
      language: lang,
      title: `${lang} Thương mại & Công việc`,
      author: "Trần Thị B",
      rating: 4.9,
      hours: 35,
      price: 12.50,
      image: getLangImage(lang, 1)
    },
    {
      level: "Expert",
      levelColor: "bg-blue-500",
      language: lang,
      title: `Luyện thi Chứng chỉ ${lang}`,
      author: "Lê Văn C",
      rating: 5.0,
      hours: 40,
      price: 15.00,
      image: getLangImage(lang, 2)
    }
  ];
};

export interface Course {
  level: string;
  levelColor: string;
  language: string;
  title: string;
  author: string;
  rating: number;
  hours: number;
  price: number;
  image: string;
}

export const allCoursesData = languagesData.reduce((acc, lang) => {
  acc[lang] = generateCourses(lang);
  return acc;
}, {} as Record<string, Course[]>);
