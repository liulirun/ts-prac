type GuardPredicate<T> = (data: unknown) => data is T;

function processApiResponse<T>(
  rawData: unknown,
  guard: GuardPredicate<T>,
  fallback?: T
): T {
  // Your code here
  if (guard(rawData)){
    return rawData
  }
  if (fallback != undefined){
    return fallback
  }
  throw new Error("API data validation failed and no fallback provided.");  
}

// --- Example Usage ---
interface User {
  id: number;
  name: string;
}

// User Custom Type Guard
const isUser = (data: unknown): data is User => {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    "name" in data
  );
};

const rawSuccess = { id: 101, name: "Alice" };
const rawInvalid = { age: 25 };

const user1 = processApiResponse(rawSuccess, isUser); // Infers type User
const user2 = processApiResponse(rawInvalid, isUser, { id: 0, name: "Guest" }); 
const user3 = processApiResponse(rawInvalid, isUser); 