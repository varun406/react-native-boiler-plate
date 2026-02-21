# Firebase App Distribution Guide

This document explains how to use Firebase App Distribution for both Android and iOS in this project.

## 1. Prerequisites

### GitHub Secrets
The following secrets must be added to your GitHub repository (**Settings > Secrets and variables > Actions**):

| Secret Name | Description |
| :--- | :--- |
| `FIREBASE_APP_ID_ANDROID` | Found in Firebase Console (Project Settings). |
| `FIREBASE_APP_ID_IOS` | Found in Firebase Console (Project Settings). |
| `FIREBASE_TOKEN` | Generate via `firebase login:ci`. |
| `ENV_FILE_DEV` | The **entire content** of your `environments/.env.dev` file. |

> [!TIP]
> Using `ENV_FILE_DEV` is the easiest way to manage your environment. Just copy everything from your local `.env.dev` and paste it as a secret.

## 2. CI/CD Workflows

The project includes two workflows:
- **Android**: `.github/workflows/dev-distribution.yml` - Triggers on push to `dev`.
- **iOS**: `.github/workflows/ios-distribution.yml` - Triggers on push to `dev`.

## 3. In-App Updates (SDK)

Testers will see a notification inside the app when a new version is available.
- For Android: Works for APKs distributed via Firebase.
- For iOS: Requires the tester to be registered in Firebase App Distribution.

## 4. Local Distribution

You can distribute builds locally using the following commands:

```bash
# Android
npm run dev:android-distribute

# iOS (Requires Fastlane)
npm run ios-distribute
```

## 5. Troubleshooting
- **Missing Env File**: Ensure `BASE_URL` and `ENV` secrets are set in GitHub.
- **Code Signing**: iOS builds will fail if the Apple certificates/profiles are missing or expired.
