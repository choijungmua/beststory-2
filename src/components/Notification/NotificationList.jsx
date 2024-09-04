import React from "react";

// 문자열이 일정 길이를 초과하면 자르는 함수
function truncateString(str, num) {
  if (typeof str === "string" && str.length > num) {
    return str.slice(0, num) + "...";
  } else if (typeof str === "string") {
    return str;
  } else {
    return "";
  }
}

function NotificationList({ noticeList }) {
  // timestamp를 기준으로 공지사항 목록을 내림차순으로 정렬
  const sortedNoticeList = [...noticeList].sort((a, b) => {
    const aTimestamp = a.timestamp
      ? (a.timestamp.seconds || 0) * 1000 +
        (a.timestamp.nanoseconds || 0) / 1000000
      : 0;
    const bTimestamp = b.timestamp
      ? (b.timestamp.seconds || 0) * 1000 +
        (b.timestamp.nanoseconds || 0) / 1000000
      : 0;
    return bTimestamp - aTimestamp;
  });

  return (
    <ul className="space-y-4">
      {sortedNoticeList.map((notice) => {
        const timestamp = notice.timestamp
          ? (notice.timestamp.seconds || 0) * 1000 +
            (notice.timestamp.nanoseconds || 0) / 1000000
          : 0;
        return (
          <li key={notice.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold">{notice.title}</h3>
            <p className="text-gray-500">
              {timestamp
                ? new Date(timestamp).toLocaleString()
                : "Unknown date"}
            </p>
            <p className="mt-2 text-text">
              {truncateString(notice.description, 20)}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default NotificationList;
