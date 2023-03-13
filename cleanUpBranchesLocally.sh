#!/bin/bash

# Set the threshold for repository age (in days)
threshold=90

# Find all git repositories in the current directory
for repo in $(find . -name ".git" -type d | sed 's/\/.git//'); do

  # Check if the repository is not the "master" repository
  if [[ "$repo" != "./master" ]]; then

    # Get the age of the repository (in days)
    age=$(( ( $(date +%s) - $(date +%s -r "$repo/.git") ) / 86400 ))

    # Check if the repository is older than the threshold
    if [[ $age -gt $threshold ]]; then

      # Delete the repository
      rm -rf "$repo"
      echo "Deleted repository: $repo (age: $age days)"
    fi
  fi
done