import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApexCharts from "react-apexcharts";

// Sample data for the chart
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
  const navigate = useNavigate();

  const user = {
    admin: true, // 관리자가 아닌 사용자는 false로 설정
  };

  useEffect(() => {
    if (!user.admin) {
      navigate("/");
    }
  }, [user, navigate]);

  const typeMapping = ["line", "bar", "treemap"];
  const type = typeMapping[typeIndex];

  const handleClick = () => {
    setTypeIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const options = {
    legend: { show: false },
    chart: {
      height: 350,
      type: type,
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
        fontWeight: "normal",
        colors: type === "line" ? ["#333"] : ["#fff"],
      },
      background: {
        enabled: false,
      },
      offsetY: -10,
    },
    title: {
      text: "월별 관리자 페이지 유저 수",
      align: "center",
      style: {
        fontSize: "20px",
        fontWeight: "normal",
        color: "#333",
      },
    },
    colors: ["#666", "#888", "#AAA"],
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
      colors: type === "line" ? ["#666"] : ["#FFF"],
      width: 1.5,
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-normal text-gray-800 mb-4">
                관리자 대시보드
              </h2>
              <button
                onClick={handleClick}
                className="text-gray-600 border border-gray-300 rounded-md px-3 py-1"
              >
                {type}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-200 text-gray-800 rounded-md p-4">
                <h3 className="text-sm font-normal mb-1">총 유저 수</h3>
                <p className="text-2xl font-semibold">1,234</p>
              </div>
              <div className="bg-gray-200 text-gray-800 rounded-md p-4">
                <h3 className="text-sm font-normal mb-1">이번 달 신규 유저</h3>
                <p className="text-2xl font-semibold">256</p>
              </div>
              <div className="bg-gray-200 text-gray-800 rounded-md p-4">
                <h3 className="text-sm font-normal mb-1">활성 유저 비율</h3>
                <p className="text-2xl font-semibold">78%</p>
              </div>
            </div>
            <ApexCharts
              options={options}
              series={series}
              type={type}
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
