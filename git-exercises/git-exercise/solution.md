# Git Excercise insights
1. Created a new directory and added a text file using 'echo "Earth's near Moon" >> locations.txt'
Checked the status of the files using "git status" and observed the untracked files and the files whose changes are not staged for commit.
Added the untracked file to the Git staging area using "git add  locations.txt", checked the status again, and saw the file is in the "Changes to be committed" area.Checked the objects (key/value) pairs using "tree.com .git".Committed the file using "git commit -m 'Create a simple commit, add a text file'".
2. Checked the details for the object with key '8a89da7' which has the type 'commit' using "git cat-file -t 8a89da7" and "git cat-file -p 8a89da7" gives back the details about the author like the name and timestamp also committer details and timestamp of the commit.
3. Using "git ls-files -s" check that the edited and newly created files were there in the staging area, it included files that have been committed but not moved to the remote repository.
4. Used "git reset" to unstaged the changes in the files.
5. Observed logs of the repository using the "git log" main command and also learned various options to limit the result.
6. Tried merging a new branch feature to the solutions-git-exercise which created conflict while auto-merging. Solved by add file and again commit.
7. Reverted a commit with hash code of the commit using "git revert 1cf1a029f9e1e4e9616d5fdd4607a800a1443140", found the hash code of commit using "git log -3" to get last 3 commits.
8. Created tag for the last commit and checked out to the tag and fired command "git status" to see HEAD detached address, also in the branch fired "git log" to see tag was pointing to which commit.
9. Created an annotated using 'git tag -a "tag-3.0" -m "Annotated tag for hello file change"' and then fired 'git show tag-3.0' to see all the tag details which included the file for which the commit was, what was the change, timestamp of the same, and commit message.
10. Tried few commands and saw working of SHA  keys and values.