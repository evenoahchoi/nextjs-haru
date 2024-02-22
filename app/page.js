"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Home = () => {
  // 가상의 명언 데이터와 댓글 데이터
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      imageUrl:
        "https://postfiles.pstatic.net/MjAyMTAxMjdfMjcg/MDAxNjExNzI1MTYwMTMz.nTq3dpNo4Xxht7vMpHbw84DhlvsQ5YUBJLcV8h_nBWYg.dS0cdbEKO7o2Cw4yXNaUx8oi8Y-uOxnXEM4wLLVddyMg.JPEG.wogb1951/KakaoTalk_20210127_114330049.jpg?type=w773",
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

  return (
    <div className="max-w-lg mx-auto p-5">
      <h1 className="text-2xl font-bold mb-6">하루명언</h1>
      <div className="border border-gray-300 rounded-lg p-4">
        <Image
          src={quote.imageUrl}
          alt="명언 이미지"
          width={500}
          height={300}
          className="rounded"
        />
        <p className="mt-4 text-lg">{quote.text}</p>
        <div className="mt-6">
          <h2 className="text-xl mb-4">댓글</h2>
          {filteredComments.map((comment) => (
            <p key={comment.id} className="mb-1">{comment.text}</p>
          ))}
          <input
            type="text"
            placeholder="댓글 작성..."
            className="w-full p-2 border border-gray-300 rounded mt-2 mb-3"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;