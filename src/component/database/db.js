import firebase from './firebase';

const db = firebase.firestore();
const settings = {timesstampsInSnapshots:true};
db.settings(settings);

export default db;