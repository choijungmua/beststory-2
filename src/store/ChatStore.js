import create from "zustand";
import { db, collection, addDoc, onSnapshot } from "../firebase-config"; // Firestore 관련 함수 가져오기

export const useChatShow = create((set) => ({
  chatShow: false,
  setChatShow: (value) => set({ chatShow: value }),
}));

const useChatting = create((set) => ({
  chatting: [],

  // 메시지 보내기 함수, roomId 포함
  sendMessage: async (roomId, userId, message) => {
    try {
      const chatRef = collection(db, "responses", roomId, "messages");
      await addDoc(chatRef, {
        userId,
        message,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error("Error adding message: ", error);
    }
  },

  // 메시지 실시간으로 가져오기 함수
  fetchMessages: (roomId) => {
    return onSnapshot(
      collection(db, "responses", roomId, "messages"),
      (snapshot) => {
        const messages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        set({ chatting: messages });
      }
    );
  },
}));

export { useChatting };
