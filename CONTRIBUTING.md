Follow the below instructions for contributing in this project:

# Local Setup
1. Fork this repository and clone it on your device using command `git clone <your_repo_url>`
2. Make sure NodeJS is already installed. If not, download from [here](https://nodejs.org/en/download/)
3. Make sure you at the root of the project directory, then in the terminal, 
    * Run command `npm run start` to download respective dependencies and dev-dependencies
4.Create a Alan ai project from this [link](https://alan.app/) and at the root create a `.env` file and add the environment variables as per the `.env.example` file provided in the `client` directory 
5. After ceating the Alan project, create an Alan script and copy the text written in `alan-script.example.txt` and add the `NEWS_API_KEY` after creating an account on [News API](https://newsapi.org/)

#### The project has been successfully installed in the device.
6. Start the application by running the following command
> ``` npm run start ```
7. Now go to the address below to your default browser
> ```localhost:3000```

*Steps 1-5 are needed for first-time installation only. Only steps 6 and 7 will be needed while devolping the project.*


## Creating an issue

Follow the instructions below while creating the issue.

- Make a branch and include an issue number and a one- or two-word description of the problem. For instance, if issue number 156 concerns adding a navbar, the branch should be named `navbar-156`.  Make a PR from your repository to this main repository when you have committed your modifications to the branch.
- In the issue title, mention the issue type. Select only one of the three kinds available: `Bug`, `Feature` or `Improve`. For instance, the title will be `[Bug] -{brief-definition}` if the issue is about resolving a bug.
- Make sure you mention the following sections in the issue description
  - What is the issue?
  - How to reproduce the issue?
  - What is the expected behaviour?
  - Describe a solution you would like
  - Additional Context (Optional)

  Try to add screenshots or error messages for a better understanding of the issue.


## Making a pull request

Follow the guidelines below when creating a pull request.
- Mention the issue number that the pull request is for in the title. Any PR without a specific issue will not be taken into account. The title of your PR should read `[Fix #20] - {title of PR}` if it is for issue 20.
- Mention the following points in the PR description
  - Fix `<Issue number>`
  - Describe the changes you have made
  - Screenshots
  - Additional Context (Optional)