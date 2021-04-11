# Git Instructions

If you're forking the branch, stop.  You lose commit history and all ability to merge it back in easily.

### Step 1: Clone the remote branch:

For SSH: ```git clone https://github.com/Cronus-MVP/cronus-mobile.git```
For HTTPS: ```https://github.com/Cronus-MVP/cronus-mobile.git```

### Step 2: Make sure you have the latest development branch
```sh
git pull origin
```

## Step 3: Create a new branch for your changes
```sh
git checkout -b MyNewBranch
```

## Step 4: Make your changes
```sh
git add --all
git commit -am "Your commit message"
```

## Step 5: Push your branch to the remote server (origin)
```sh
git push origin
```
Note: The first time you run the above command, it's going to tell you to set --set-upstream, so rerun it as instructed.  You only have to do that once for a new branch.

## Step 6: Pull Request
Login to github and do a pull request to the development branch


## Step 7: Accept/complete the pull request
Squash & merge if you are done with the branch you just created.

## Step 8: Delete the local branch and pull down the latest development branch
```sh
git checkout development
git branch -d MyNewBranch
git pull origin
```

Note: Always create a new branch locally from the latest version of the development branch.  If you don't do this, you'll need to rebase your current branch to be in sync with development before you can merge it.  If you don't do this, you are likely to encounter difficulties.