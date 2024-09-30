export const register = async (userData: any): Promise<any> => {
  const response = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    body: JSON.stringify(userData)
  }); // Cambiar por contante env
  const registeredUser = await response.json();
  return registeredUser;
};
