import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define el servicio de RTK Query
export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' || 'http://localhost:3001' }),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => '/projects',
    }),
  }),
});

// Exporta los hooks generados por RTK Query
export const { useGetProjectsQuery } = projectApi;

// Define el tipo de proyecto (ajústalo según tu backend)
export interface Project {
  id: number;
  title: string;
  description: string;
  // Agrega otros campos según tu modelo
}
