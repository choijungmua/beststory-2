import fillmainlogo from "../assets/images/fillmainlogo.svg";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* 헤더 섹션 */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center flex-col">
            <img
              src={fillmainlogo}
              alt="로고"
              className="w-[100px] flex justify-center h-[100px]"
            />
            <p className="flex justify-center text-3xl text-primary font-bold">
              BestStory
            </p>
          </div>
          <div className="flex justify-center items-center py-6">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="#features"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    기능
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    사용 방법
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    고객리뷰
                  </a>
                </li>{" "}
                <li>
                  <a href="#team" className="text-gray-700 hover:text-gray-900">
                    우리 팀
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            AI로 멋진 게시물을 만들어 보세요
          </h2>
          <p className="text-xl mb-8">
            최신 AI 기술을 활용하여 콘텐츠 제작 과정을 자동화하세요. 시간을
            절약하고 창의성을 높이며, 소셜 미디어의 존재감을 강화하세요.
          </p>
          <a
            href="#get-started"
            className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-200"
          >
            <Link to="/room">시작하기</Link>
          </a>
        </div>
      </section>

      {/* 기능 섹션 */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            주요 기능
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src=""
                alt="AI 콘텐츠"
                className="w-full h-40 object-cover mb-4"
              />
              <h4 className="text-2xl font-semibold mb-4">AI 기반 콘텐츠</h4>
              <p className="text-gray-600">
                고급 딥러닝 알고리즘을 활용하여 고객 맞춤형 독창적인 콘텐츠를
                생성합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src=""
                alt="템플릿"
                className="w-full h-40 object-cover mb-4"
              />
              <h4 className="text-2xl font-semibold mb-4">
                사용자 맞춤 템플릿
              </h4>
              <p className="text-gray-600">
                다양한 템플릿과 스타일 중에서 선택하여 브랜드의 목소리와 미적
                감각을 일치시킬 수 있습니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src=""
                alt="원클릭 포스팅"
                className="w-full h-40 object-cover mb-4"
              />
              <h4 className="text-2xl font-semibold mb-4">원클릭 게시</h4>
              <p className="text-gray-600">
                단 한 번의 클릭으로 여러 소셜 미디어 플랫폼에 콘텐츠를 자동으로
                게시할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 사용 방법 섹션 */}
      <section id="how-it-works" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">사용 방법</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs">
              <h4 className="text-2xl font-semibold mb-4">1. 아이디어 입력</h4>
              <p className="text-gray-600">
                만들고자 하는 콘텐츠에 대한 간단한 설명을 입력하세요.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs">
              <h4 className="text-2xl font-semibold mb-4">
                2. 맞춤화 및 미리보기
              </h4>
              <p className="text-gray-600">
                생성된 콘텐츠를 원하는 대로 조정하고, 게시 전에 미리보기를
                확인하세요.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs">
              <h4 className="text-2xl font-semibold mb-4">3. 즉시 게시</h4>
              <p className="text-gray-600">
                단 한 번의 클릭으로 원하는 플랫폼에 콘텐츠를 게시하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 고객 리뷰 섹션 */}
      <section id="reviews" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">고객 리뷰</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-xs">
              <p className="text-gray-600 mb-4">
                "이 서비스 덕분에 콘텐츠 생성이 훨씬 수월해졌습니다. 정말 훌륭한
                툴이에요!"
              </p>
              <p className="font-semibold">김영희</p>
              <p className="text-gray-500">소셜 미디어 매니저</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-xs">
              <p className="text-gray-600 mb-4">
                "사용이 간편하고 직관적이며, 결과물도 만족스럽습니다.
                추천합니다!"
              </p>
              <p className="font-semibold">이철수</p>
              <p className="text-gray-500">마케팅 전문가</p>
            </div>
          </div>
        </div>
      </section>

      {/* 팀 소개 섹션 */}
      <section id="team" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">우리 팀</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs">
              <img
                src={team1}
                alt="팀원 사진"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">박영희</h4>
              <p className="text-gray-600">디자이너</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs">
              <img
                src={team2}
                alt="팀원 사진"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">홍길동</h4>
              <p className="text-gray-600">개발자</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section id="faq" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            자주 묻는 질문
          </h3>
          <div className="space-y-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">
                Q: 이 서비스는 무료인가요?
              </h4>
              <p className="text-gray-600">
                A: 기본 기능은 무료로 제공되며, 프리미엄 기능은 유료로
                제공됩니다.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">
                Q: 어떻게 시작하나요?
              </h4>
              <p className="text-gray-600">
                A: '시작하기' 버튼을 클릭하셔서 회원 가입 후 사용을 시작하실 수
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 섹션 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 softway. All rights reserved.</p>
          <p className="mt-2">
            <a href="#privacy-policy" className="hover:underline">
              개인정보 처리방침
            </a>{" "}
            |
            <a href="#terms" className="hover:underline">
              {" "}
              이용 약관
            </a>
          </p>
          <p>
            Softway Inc. softway@softway.co.kr C-809, 161-8 Magokjungang-ro,
            Gangseo-gu, Seoul, Republic of Korea
          </p>
        </div>
      </footer>
    </div>
  );
}
