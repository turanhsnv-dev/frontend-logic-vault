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
  { id: 1, name: "Turan Hasanov", email: "turan@example.com", role: "Admin", metadata: { city: "Baku", level: "Senior" } },
  { id: 2, name: "Ali Yılmaz", email: "ali@dev.com", role: "Developer", metadata: { city: "Istanbul", level: "Junior" } },
  { id: 3, name: "Jessica Smith", email: "jess@tech.io", role: "Designer", metadata: { city: "London", level: "Mid" } },
  { id: 4, name: "Mehmet Demir", email: "mehmet@company.com", role: "Manager", metadata: { city: "Ankara", level: "Senior" } },
  { id: 5, name: "Ayşe Kaya", email: "ayse@frontend.com", role: "Developer", metadata: { city: "Izmir", level: "Senior" } },
];