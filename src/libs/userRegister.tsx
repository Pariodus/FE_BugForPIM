export default async function userRegister(username: string, email: string, password: string, tel: string) {
    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email,
          password,
          tel,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to register user"); 
      }
  
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error("Registration error:", error);
      throw error; 
    }
  }
  