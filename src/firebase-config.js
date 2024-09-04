// src/firebase/index.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  addDoc,
  query,
  onSnapshot,
} from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage"; // storage 관련 import 추가

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app); // Firebase Storage 가져오기

// Firestore 관련 메서드
export { db, collection, doc, setDoc, getDoc, addDoc, query, onSnapshot };

// Realtime Database 관련 메서드
export { database, ref, set, onValue };

// Firebase Storage 관련 메서드
export { storage, storageRef, uploadBytes, getDownloadURL };

// 사용자 컬렉션 상수
export const USER_COLLECTION = "users";

// 채팅 기능 (Realtime Database 사용)
export const sendMessage = async (userId, message) => {
  const messageRef = ref(database, "messages/" + Date.now()); // 메시지 ID를 타임스탬프로 설정
  await set(messageRef, {
    userId: userId,
    message: message,
    timestamp: Date.now(),
  });
};

export const listenForMessages = (callback) => {
  const messagesRef = ref(database, "messages");

  onValue(messagesRef, (snapshot) => {
    const messages = [];
    snapshot.forEach((childSnapshot) => {
      messages.push(childSnapshot.val());
    });
    callback(messages);
  });
};

// Firebase Storage 기능 추가
export const uploadFile = async (file, path) => {
  const fileRef = storageRef(storage, path); // 파일 참조 생성
  try {
    await uploadBytes(fileRef, file); // 파일 업로드
    console.log("File uploaded successfully!");
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

export const getFileURL = async (path) => {
  const fileRef = storageRef(storage, path); // 파일 참조 생성
  try {
    const url = await getDownloadURL(fileRef); // 파일 다운로드 URL 가져오기
    return url;
  } catch (error) {
    console.error("Error getting file URL:", error);
    return null;
  }
};
