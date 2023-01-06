/*
Challenge
Your challenge is to fix this type error by determining how to represent arrays.
*/

interface User {
    id: number;
    firstName: string;
    lastName: string;
    role: "admin" | "user" | "super-admin";
    posts: Post[]; // this is called generic type
  }

  // OR 

interface UserX {
    id: number;
    firstName: string;
    lastName: string;
    role: "admin" | "user" | "super-admin";
    posts: Array<Post>; // this is called generic type
  }
  
  interface Post {
    id: number;
    title: string;
  }
  
  export const defaultUser: User = {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    role: "admin",
    posts: [
      {
        id: 1,
        title: "How I eat so much apple",
      },
      {
        id: 2,
        title: "Why I don't eat more vegetables",
      },
    ],
  };
  