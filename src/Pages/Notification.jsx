import { useEffect, useState, useCallback } from "react";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase-config";
import NotificationList from "../components/Notification/NotificationList";
import NotificationDetail from "../components/Notification/NotificationDetail";
import useUserStore from "../store/Auth";
const NoticePage = () => {
  const [newTitle, setNewTitle] = useState(""); // 제목 상태 추가
  const [newNotice, setNewNotice] = useState("");
  const [noticeList, setNoticeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useUserStore();

  // 파이어 베이스 Fetch
  const fetchNotices = useCallback(async () => {
    setLoading(true); // Set loading to true at the start of fetch
    try {
      const querySnapshot = await getDocs(collection(db, "notices"));
      const notices = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNoticeList(notices);
    } catch (err) {
      setError("Failed to fetch notices.");
      console.error("Error fetching notices:", err);
    } finally {
      setLoading(false); // Set loading to false after fetch
    }
  }, []);

  // 공지 추가하기
  const handleAddNotice = async () => {
    if (newTitle.trim() && newNotice.trim()) {
      try {
        await addDoc(collection(db, "notices"), {
          title: newTitle, // 제목 저장
          description: newNotice,
          timestamp: serverTimestamp(),
        });
        setNewTitle(""); // 제목 초기화
        setNewNotice(""); // 내용 초기화
        await fetchNotices(); // 공지 리스트를 새로고침합니다.
      } catch (err) {
        setError("Failed to add notice.");
        console.error("Error adding notice:", err);
      }
    }
  };

  useEffect(() => {
    fetchNotices();
  }, [fetchNotices]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-error text-center">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">공지 사항 추가</h2>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg mb-4"
            placeholder="제목을 입력하세요..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg resize-none mb-4"
            rows="4"
            placeholder="새로운 공지 사항을 입력하세요"
            value={newNotice}
            onChange={(e) => setNewNotice(e.target.value)}
          />
          <button
            onClick={handleAddNotice}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150"
          >
            추가
          </button>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">공지 사항 목록</h2>
          <ul className="space-y-4">
            <NotificationList noticeList={noticeList} />
            {/* <NotificationDetail />{" "} */}
            {/* Ensure this is properly receiving and displaying data */}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default NoticePage;
