# Actions On Google: Actions SDK Sample

This sample demonstrates how to create an Action for the Google Assistant -- using [Actions SDK](https://developers.google.com/actions/sdk/) in Node.js and deployed on [Cloud Functions for Firebase](https://firebase.google.com/docs/functions/).

## Setup Instructions
### Prerequisites
1. Node.js and NPM
    + We recommend installing using [NVM](https://github.com/creationix/nvm)
1. Install the [Firebase Functions CLI](https://firebase.google.com/docs/functions/get-started#set_up_and_initialize_functions_sdk)
    + We recommend using version 6.5.0, `npm install -g firebase-tools@6.5.0`
    + Run `firebase login` with your Google account
1. [Install the gactions CLI](https://developers.google.com/actions/tools/gactions-cli)
    + You may need to grant execute permission, ‘chmod +x ./gactions’

### Configuration
#### Actions Console
1. From the [Actions on Google Console](https://console.actions.google.com/), add a new project (this will become your *Project ID*) > **Create Project** > under **More options** select **Actions SDK** > keep the **Use Actions SDK to add Actions** window open, will revisit in a later step.

#### Firebase Deployment
1. On your local machine, in the `functions` directory, run `npm install`
1. Run `firebase deploy --project {PROJECT_ID}`, replace {PROJECT_ID} to deploy the function
   ```
    Function URL (webhook): https://${REGION}-${PROJECT_ID}.cloudfunctions.net/webhook
    ```
1. Update the action package, `action.json`, replacing the placeholder value `YOUR_ENDPOINT_URL` with the value for Function URL obtained from the previous step.
1. From the top level directory in this sample, run `gactions update --action_package action.json --project {PROJECT_ID}` with your *Project ID*.
1. Back in the [Actions console](https://console.actions.google.com), from the pop up window > select **OK**.
1. From the left menu under **Test** > select **Simulator** to open the Actions on Google simulator then say or type `Talk to my test app`.

### Running this Sample
+ You can test your Action on any Google Assistant-enabled device on which the Assistant is signed into the same account used to create this project. Just say or type, “OK Google, talk to my test app”.
+ You can also use the Actions on Google Console simulator to test most features and preview on-device behavior.

## References & Issues
+ Questions? Go to [StackOverflow](https://stackoverflow.com/questions/tagged/actions-on-google), [Assistant Developer Community on Reddit](https://www.reddit.com/r/GoogleAssistantDev/) or [Support](https://developers.google.com/actions/support/).
+ For bugs, please report an issue on Github.
+ Actions on Google [Documentation](https://developers.google.com/actions/extending-the-assistant)
+ Actions on Google [Codelabs](https://codelabs.developers.google.com/?cat=Assistant).

## Make Contributions
Please read and follow the steps in the [CONTRIBUTING.md](CONTRIBUTING.md).

## License
See [LICENSE](LICENSE).

## Terms
Your use of this sample is subject to, and by using or downloading the sample files you agree to comply with, the [Google APIs Terms of Service](https://developers.google.com/terms/).
