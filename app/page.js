"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Home = () => {
  // 가상의 명언 데이터와 댓글 데이터
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      imageUrl: "/02d4adba-b1a9-4f6c-a001-e0841a9d4328.webp",
      text: "명언 1",
    },
    {
      id: 2,
      imageUrl:
        "https://postfiles.pstatic.net/MjAyMTAxMjdfMjcg/MDAxNjExNzI1MTYwMTMz.nTq3dpNo4Xxht7vMpHbw84DhlvsQ5YUBJLcV8h_nBWYg.dS0cdbEKO7o2Cw4yXNaUx8oi8Y-uOxnXEM4wLLVddyMg.JPEG.wogb1951/KakaoTalk_20210127_114330049.jpg?type=w773",
      text: "명언 2",
    },
  ]);

  // 가상의 댓글 데이터
  const [comments, setComments] = useState([
    { id: 1, quoteId: 1, text: "댓글 1" },
    { id: 2, quoteId: 1, text: "댓글 2" },
    { id: 3, quoteId: 2, text: "댓글 3" },
  ]);

  // 첫 번째 명언 데이터만 가져오기
  const [quote] = useState(quotes[0]);

  // 첫 번째 명언에 해당하는 댓글만 필터링
  const filteredComments = comments.filter(
    (comment) => comment.quoteId === quote.id
  );

  // 메뉴 표시 상태를 관리하는 상태 변수
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-lg mx-auto p-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">하루명언</h1>
        <div className="relative">
          {" "}
          {/* 메뉴 버튼과 드롭다운 메뉴를 감싸는 컨테이너 */}
          <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            메뉴
          </button>
          {/* 드롭다운 메뉴 */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded shadow-xl">
              <Link
                href="/mypage"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                마이페이지
              </Link>
              <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
                로그인
              </Link>
              {/* 여기에 더 많은 링크 추가 가능 */}
            </div>
          )}
        </div>
      </div>
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <Image
          src={quote.imageUrl}
          alt="명언 이미지"
          width={500} // 이미지의 원래 너비
          height={300} // 이미지의 원래 높이
          layout="responsive" // 반응형 이미지 설정
        />
        <div className="p-4">
          <p className="mt-4 text-lg">{quote.text}</p>
          <div className="mt-6">
            <h2 className="text-xl mb-4">댓글</h2>
            {filteredComments.map((comment) => (
              <p key={comment.id} className="mb-1">
                {comment.text}
              </p>
            ))}
            {/* 입력 필드와 버튼 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
