/*
Challenge
Your challenge is to update the return type for the function so that it is both User 
and { posts: Post[] }.
*/

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}
[];

type UserAndPosts = User & { posts: Post[] }; // this is the way to do it
type UserAndPosts1 = User & { posts: Post[] } & { age: number }; //another way to do it if you want to add more properties
/**
 * How do we type this return statement so it's both
 * User AND { posts: Post[] }
 */
const getDefaultUserAndPosts = (): User & { posts: Post[] } => {
  // this is another way to do it
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much chocolate",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);
