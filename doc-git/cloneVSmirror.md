## what is the difference between clone and mirror in git?

In Git, a "clone" and a "mirror" are similar in that they both create a copy of a repository on your local machine, but there is an important difference between the two.

A "clone" is a copy of a repository that is used for development. It is a fully-functional repository, with its own local branches and commits. When you clone a repository, you create a connection to the remote repository, called the "origin," which allows you to pull in updates and push your own changes. You can make changes to the repository, create new branches, and create commits, all of which are local to your copy of the repository.

A "mirror" is an exact copy of a repository, including all branches and commits. Unlike a clone, a mirror does not create a new remote connection and it is only intended for read-only purpose. The mirror is useful for backup or to share with a team but cannot be pushed to

When you create a mirror, you can update it to keep it in sync with the original repository. But, you cannot push changes to the original repository.

In summary, a clone is a copy of a repository that you can use for development, while a mirror is a read-only copy of a repository that is typically used for backup or to share with a team.
