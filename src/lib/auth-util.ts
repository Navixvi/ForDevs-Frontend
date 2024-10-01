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
  console.log(registeredUser);
  
  return registeredUser;
};

export const login = async (userData: any): Promise<any> => {
  const response = await fetch("http://localhost:3000/auth/login", {
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

  const loggedUser = await response.json();    
  localStorage.setItem("token", loggedUser.token)
  localStorage.setItem("loggedUser", JSON.stringify(loggedUser.loggedUser))

  return loggedUser;
};

