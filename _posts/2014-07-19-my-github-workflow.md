---
layout: post
title: "My GitHub workflow"
date: 2014-07-19
---

If you are reading this post then I assume you already know about GitHub is. If not [this](https://github.com/about) page should help you.

GitHub is fun to work with unless you are messing up the process! Things might entangle making you scratch your head or pull your hair even. In a forbidden case one might lose either few or complete code. Hence, it becomes necessary to first understand the process and decide on an appropriate workflow.

Workflow is not same for everyone. Developers prefer one method over the other. Here I share the steps that I follow while working with GitHub.

Having created my github repository on my remote server and my local machine, I visit my local repository and perform the usual editings. Once satisfied with all the changes made, it is time to push the code to remote repository.

But first initialize!

`git init`

Since I edited a good number of files, I first do a `git status` to get a list of all [**modified/untracked**](http://git-scm.com/book/en/Git-Basics-Recording-Changes-to-the-Repository) files so that I do not forget to stage any file.

If it is a new repository I stage all files together to perform a single [commit](https://www.atlassian.com/git/tutorial/git-basics#!commit). The `git add . ` command stages all untracked files at once. Now `git commit -m "Initial Commit"` will represent all changes with a single commit.

If it is an already existing repository, I like to stage and commit files separately. Looking at the list of untracked files I do a `git add filename` followed by `git commit -m "message"`. Yes I like to give a message for my commit then and there not having to open any text editor. In case I forget what changes I made in the file I just do a `git diff path/to/file`. This will list all the changes you made in that particular file.

If I had modified four files, I stage and commit four times. This makes things easier for me to understand.

When the process of staging and committing is done, it is finally the time to push the code to server.

A simple command `git push -u origin master` does the work. If everything went right, you should see a success message ( I usually do :) ).