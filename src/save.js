import { db } from "./firebase-config"; // Firebase 설정 파일
import { doc, setDoc } from "firebase/firestore";

// 카테고리 배열을 Firestore에 저장하는 함수
export const saveCategoriesToFirestore = async () => {
  const categories = [
    "2024",
    "IT",
    "TV",
    "건강",
    "게임",
    "경제",
    "과학",
    "교육",
    "기술",
    "도서",
    "동물",
    "만화",
    "문화",
    "미술",
    "뷰티",
    "연애",
    "생활",
    "소식",
    "스포츠",
    "심리",
    "여행",
    "영화",
    "오락",
    "역사",
    "애니메이션",
    "음식",
    "음악",
    "정치",
    "투자",
    "패션",
    "휴식",
  ];

  try {
    // "categories" 컬렉션에 "categoryList" 문서를 추가합니다.
    const docRef = doc(db, "categories", "categoryList");
    await setDoc(docRef, { categories });

    console.log("Categories successfully written!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

saveCategoriesToFirestore();
