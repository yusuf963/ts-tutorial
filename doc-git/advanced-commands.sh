`git bisect`: This command helps you to find the commit that introduced a bug in your code.
 It does this by performing a binary search through the commit history, allowing you to narrow down the range of commits to search through.

`git stash`: This command allows you to temporarily save changes that you have made to your working directory but are not ready to commit.
 You can then switch to a different branch, and later come back to your original branch and apply the saved changes.

`git reflog` : This command shows a log of all the updates to the tip of branches. It keeps track of all the changes to the branches,
 even if they are not reachable by any branch or tag.

`git submodule` : This command allows you to include other Git repositories within your own repository.
 This is useful for managing dependencies, tracking external libraries, or keeping different parts of a monorepo in separate repos.

`git cherry-pick`: This command allows you to apply specific commits from one branch to another, rather than merging or rebasing
 the entire branch. This is useful when you want to selectively pick changes from one branch to another, rather than merging the entire branch.

`git rebase`: This command allows you to reapply your commits on top of another branch or commit. This is useful for incorporating upstream
  changes, keeping a linear commit history, or resolving conflicts. The command takes an optional parameter for the branch or commit to rebase
   onto, and can also accept various flags for different options. The -i flag, for instance, allows you to interactively modify the commits
    before they are reapplied.

`git reset`: This command is used to undo commits, move the current branch pointer, or unstage changes. The command takes a mandatory
 parameter for the commit or branch to reset to, and an optional flag (--hard, --soft, --mixed) to specify the type of reset.

`git revert` : This command creates a new commit that undoes the changes made in a specified commit, it\'s useful when you want to undo
 changes that have already been pushed to a remote repository and don\'t want to change the entire commit history.

Keep in mind that both git reset and git rebase commands have the potential to cause issues if not used carefully,
 as they can alter the commit history, so it\'s a good practice to make sure you have a backup of your work and understand the effects
  of the commands before using them.

All the above commands have different parameters and flags, you can use git help <command> to know more about specific command.
