export const register = async (userData: any): Promise<any> => {
  const response = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(userData),  
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    console.error('Error details:', errorResponse); 
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const registeredUser = await response.json();
  return registeredUser;
};
