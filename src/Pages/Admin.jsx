import { useState } from "react";
import ApexCharts from "react-apexcharts";
import arrowDown from "../assets/images/arrowDown.svg";

const series = [
  {
    name: "Sales",
    data: [
      { x: "1월", y: 30 },
      { x: "2월", y: 40 },
      { x: "3월", y: 35 },
      { x: "4월", y: 50 },
      { x: "5월", y: 49 },
      { x: "6월", y: 20 },
      { x: "7월", y: 60 },
      { x: "8월", y: 45 },
      { x: "9월", y: 55 },
      { x: "10월", y: 65 },
      { x: "11월", y: 70 },
      { x: "12월", y: 75 },
    ],
  },
];

export default function Admin() {
  const [typeIndex, setTypeIndex] = useState(0);

  // typeIndex 값에 따라 문자열을 결정합니다.
  const typeMapping = ["treemap", "bar", "line"];
  const type = typeMapping[typeIndex];

  // 버튼 클릭 시 typeIndex를 0, 1, 2로 순환하도록 설정합니다.
  const handleClick = () => {
    setTypeIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  // 동적으로 options 객체를 생성합니다.
  const options = {
    legend: { show: false },
    chart: {
      height: 350,
      type: type, // 현재 타입에 맞게 설정합니다.
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        colors: type === "line" ? ["#FFA07A"] : ["#ffffff"], // 조건에 따라 색상 설정
      },
      background: {
        enabled: false, // 배경을 비활성화
      },
      offsetY: -10, // y축 방향으로의 오프셋 (위로 올림)
    },
    title: {
      text: "월별 관리자 페이지 유저 수",
      align: "center",
      style: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#1e293b",
      },
    },
    colors: [
      "#FFA07A",
      "#E6E6FA",
      "#90EE90",
      "#87CEEB",
      "#00CED1",
      "#FFC0CB",
      "#D2B48C",
      "#FFDAB9",
      "#FFD700",
      "#D3D3D3",
      "#ADD8E6",
      "#87CEFA",
    ],

    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
      bar: {
        horizontal: false,
        distributed: false,
        dataLabels: {
          position: "center",
        },
      },
      line: {
        curve: "smooth",
        dataLabels: {
          enabled: true,
        },
      },
    },
    stroke: {
      curve: "smooth",
      colors: type === "line" ? ["#FFA07A"] : ["#FFFFFF"], // 조건에 따라 색상 설정
      width: 2, // 선의 두께 설정
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex justify-between items-center font-bold">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                관리자 대시보드
              </h2>
              <div className="flex gap-4">
                <div className="flex gap-2 items-center cursor-pointer">
                  <p className="ml-[2px]">룸 관리</p>
                  <img src={arrowDown} className="w-[13px]" alt="" />
                </div>
                <div
                  onClick={handleClick}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <p className="ml-[2px]">{type}</p>
                  <img src={arrowDown} className="w-[13px]" alt="" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-500 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">총 유저 수</h3>
                <p className="text-3xl font-bold">1,234</p>
              </div>
              <div className="bg-green-500 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">
                  이번 달 신규 유저
                </h3>
                <p className="text-3xl font-bold">256</p>
              </div>
              <div className="bg-purple-500 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">활성 유저 비율</h3>
                <p className="text-3xl font-bold">78%</p>
              </div>
            </div>
            <div className="">
              <ApexCharts
                options={options}
                series={series}
                type={type}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
