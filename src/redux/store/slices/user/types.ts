type Plan = {
  id: string;
  name: string;
};

interface User {
  aboutMe: string | null;
  bio: string | null;
  contracts: Array<any>;
  coverImage: string | null;
  createdAt: string;
  deletedAt: string | null;
  email: string;
  firstName: string;
  id: string;
  image: string | null;
  lastName: string;
  links: Array<any>;
  payments: Array<any>;
  plan: Plan | null;
  projects: Array<any>;
  reviews: Array<any>;
  role: string | null;
  subscription: string | null;
  updatedAt: string;
}

export interface UserState {
  value: User | null;
}
