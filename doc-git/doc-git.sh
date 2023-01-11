DOC URL
https://github.com/git-guides
https://git-scm.com/book/en/v2
https://git-scm.com/docs

# Path: git-clone.sh
# Clone a repository into a new directory
git clone <repo>
# Clone a repository into a directory of name <directory>
git clone <repo> <directory>
# Clone a repository into a directory of name <directory> and checkout the branch <branch>
git clone -b <branch> <repo> <directory>

# Path: git-commit.sh
# Commit all changes
git commit -a
# Commit all changes with a message
git commit -a -m "message"
# Commit all changes with a message and sign it
git commit -a -m "message" -s
# Commit all changes with a message and sign it with a specific key
git commit -a -m "message" -S <key>
# Commit all changes with a message and sign it with a specific key and a specific user
git commit -a -m "message" -S <key> --local-user <user>

# Path: git-config.sh
# Set the user name
git config --global user.name "name"
# Set the user email
git config --global user.email "email"
# Set the editor
git config --global core.editor "editor"
# Set the merge tool
git config --global merge.tool "tool"
# Set the diff tool
git config --global diff.tool "tool"
# Set the pager
git config --global core.pager "pager"
# Set the default branch
git config --global init.defaultBranch "branch"
# Set the default branch
git config --global init.defaultBranch "branch"

# Path: resolve conflicts.sh
# Resolve conflicts
git add <file>
git commit
# Path: rebase
# Rebase
git rebase <branch>
# Rebase with interactive mode
git rebase -i <branch>
# Rebase with interactive mode and autosquash
git rebase -i --autosquash <branch>
# Rebase with interactive mode and autosquash and squash all commits
git rebase -i --autosquash <branch>~<number>
# Path: revert
# Revert
git revert <commit>
# Path: reset
# Reset
git reset <commit>
# Path: stash
# Stash
git stash
# Stash with message
git stash save "message"
# Stash with message and include untracked files
git stash save "message" --include-untracked
# Stash with message and include untracked files and keep index
git stash save "message" --include-untracked --keep-index
# Path: resotre stash
# Restore stash
git stash pop
# Restore stash with index
git stash pop --index
# Path: cherry-pick
# Cherry-pick
git cherry-pick <commit>
# Path: merge
# Merge
git merge <branch>
# Merge with squash
git merge --squash <branch>
# Merge with squash and commit
git merge --squash <branch>
git commit
# Path: mirror
# Mirror
git push --mirror <repo>
# Path: push
# Push
git push
# Push with force
git push --force
# Push with force and tags
git push --force --tags
# Push with force and tags and all
git push --force --tags --all

