// src/mock-data/users.ts

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  metadata: {
    city: string;
    level: string;
  };
}

export const MOCK_USERS: User[] = [
  { id: 1, name: "Turan Hasanov", email: "turan@example.com", role: "Frontend Architect", metadata: { city: "Baku", level: "Senior" } },
  { id: 2, name: "Ali Yılmaz", email: "ali@dev.com", role: "Backend Developer", metadata: { city: "Istanbul", level: "Junior" } },
  { id: 3, name: "Jessica Smith", email: "jess@tech.io", role: "UI/UX Designer", metadata: { city: "London", level: "Mid" } },
  { id: 4, name: "Mehmet Demir", email: "mehmet@company.com", role: "Project Manager", metadata: { city: "Ankara", level: "Senior" } },
  { id: 5, name: "Ayşe Kaya", email: "ayse@frontend.com", role: "React Developer", metadata: { city: "Izmir", level: "Senior" } },
  { id: 6, name: "John Doe", email: "john@startup.com", role: "Fullstack Developer", metadata: { city: "New York", level: "Mid" } },
  { id: 7, name: "Elena Rostova", email: "elena@data.ru", role: "Data Scientist", metadata: { city: "Moscow", level: "Senior" } },
  { id: 8, name: "Chen Wei", email: "chen@ai.cn", role: "AI Engineer", metadata: { city: "Beijing", level: "Junior" } },
  { id: 9, name: "Sophie Martin", email: "sophie@design.fr", role: "Product Designer", metadata: { city: "Paris", level: "Senior" } },
  { id: 10, name: "Carlos Ruiz", email: "carlos@mobile.es", role: "iOS Developer", metadata: { city: "Madrid", level: "Mid" } },
  { id: 11, name: "Aisha Khan", email: "aisha@cloud.ae", role: "DevOps Engineer", metadata: { city: "Dubai", level: "Senior" } },
  { id: 12, name: "David Kim", email: "david@gaming.kr", role: "Game Developer", metadata: { city: "Seoul", level: "Junior" } },
  { id: 13, name: "Zeynep Arslan", email: "zeynep@qa.com", role: "QA Engineer", metadata: { city: "Bursa", level: "Mid" } },
  { id: 14, name: "Liam O'Connor", email: "liam@security.ie", role: "Cybersecurity Analyst", metadata: { city: "Dublin", level: "Senior" } },
  { id: 15, name: "Yuki Tanaka", email: "yuki@robotics.jp", role: "Embedded Systems", metadata: { city: "Tokyo", level: "Senior" } },
  { id: 16, name: "Fatma Şahin", email: "fatma@marketing.tr", role: "SEO Specialist", metadata: { city: "Antalya", level: "Mid" } },
  { id: 17, name: "Lucas Silva", email: "lucas@backend.br", role: "Node.js Developer", metadata: { city: "São Paulo", level: "Junior" } },
  { id: 18, name: "Emma Wilson", email: "emma@hr.co.uk", role: "Tech Recruiter", metadata: { city: "Manchester", level: "Senior" } },
  { id: 19, name: "Omar Farooq", email: "omar@db.eg", role: "Database Admin", metadata: { city: "Cairo", level: "Mid" } },
  { id: 20, name: "Mia Wong", email: "mia@analytics.sg", role: "Data Analyst", metadata: { city: "Singapore", level: "Junior" } },
];