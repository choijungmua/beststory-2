import Chat from "../components/Chat";
import Contents from "../components/Main/Contents";
import { useChatShow } from "../store/ChatStore";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config"; // Firestore 설정 파일
import { useCategory } from "../store/Array";
const MainChat = () => {
  const { chatShow } = useChatShow();
  const { id } = useParams(); // URL에서 id 파라미터를 가져옵니다.
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { setCategoryArray } = useCategory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const docRef = doc(db, "responses", id); // Firestore에서 문서 참조
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data()); // 문서의 데이터를 상태로 설정
          setCategoryArray(docSnap.data().postCategory);
        } else {
          setError("해당 데이터가 존재하지 않습니다."); // 문서가 없는 경우
        }
      } catch (error) {
        console.error("Firestore 데이터 불러오기 오류:", error);
        setError("데이터를 불러오는 데 오류가 발생했습니다."); // 데이터 불러오기 오류
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]); // id가 변경될 때마다 데이터를 새로 가져옴

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full">Loading...</div>
    );
  if (error) return <div className="text-red-500">{error}</div>;
  return (
    <section className="bg-bgColor flex ">
      <div className="mx-[260px] max-lg:gap-0 pt-[20px] flex gap-[25px] max-2xl:mx-[50px] max-lg:mx-[10px] max-sm:mx-0">
        <Contents data={data} id={id} />

        <Chat id={id} data={data} chatShow={chatShow} />
      </div>
    </section>
  );
};

export default MainChat;
