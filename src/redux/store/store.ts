import { configureStore } from '@reduxjs/toolkit';
import { projectApi } from './services/projectService';

export const store = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.reducer,
    // Agrega otros reducers aquí si los tienes
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware),
});

// Tipos para la Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
