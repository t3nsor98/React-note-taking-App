# React-note-taking-App

A react web app for note taking.

## React Notes App with Firebase Integration

This is a simple React notes app with Firebase integration, allowing you to create, edit, and delete markdown notes. It utilizes Firebase Firestore to store and manage notes data.

### Features

- Create new notes with markdown support.
- Edit existing notes.
- Delete notes.
- Automatic saving of notes using Firebase Firestore.

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Set up Firebase:

   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore database.
   - Create a `.env` file in the root directory of the project and add your Firebase configuration:

     ```
     REACT_APP_FIREBASE_API_KEY=<your-api-key>
     REACT_APP_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
     REACT_APP_FIREBASE_PROJECT_ID=<your-project-id>
     REACT_APP_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
     REACT_APP_FIREBASE_APP_ID=<your-app-id>
     ```

4. Start the development server:

```bash
npm start
```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.

### Usage

- Click on the "Create one now" button to create a new note.
- Click on an existing note from the sidebar to edit it.
- Click on the trash icon to delete a note.

### Technologies Used

- React
- React Split
- Firebase Firestore
- nanoid

### Contributing

Contributions are welcome! Please feel free to submit a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
