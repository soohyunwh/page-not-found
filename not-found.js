"use client";
import { useState } from "react";
import Link from "next/link";

export default function NotFoundPage() {
    const [language, setLanguage] = useState("kor"); 
    const [hovered, setHovered] = useState(null); 

    const text = {
        kor: {
            title: "Page not found",
            description1: "이 페이지는 단순한 404 에러 페이지가 아닙니다.",
            description2: "저는 실제 웹/앱에서 에러가 발생할 때도 사용자 경험(UX)을 고려해야 한다고 생각합니다.",
            description3: "그래서 에러 페이지에서도 사용자가 유용한 경험을 할 수 있도록 이 프로젝트를 만들었습니다."
        },
        eng: {
            title: "Page not found",
            description1: "This page is not just a simple 404 error page.",
            description2: "I believe that even when an error occurs in a web/app, user experience (UX) should be considered.",
            description3: "That's why I created this project to make error pages more useful."
        }
    };

    return (
        <div className="container">
            <nav className="navbar">
                <div className="lang-selector">
                    <span 
                        className={language === "kor" ? "active" : ""}
                        onClick={() => setLanguage("kor")}>

                        kor
                    </span>
                    <span 
                        className={language === "eng" ? "active" : ""}
                        onClick={() => setLanguage("eng")}>

                        eng
                    </span>
                </div>

                <div className="nav-menu">
                    <Link href="/login" className={hovered === 0 ? "hovered" : ""} 
                        onMouseEnter={() => setHovered(0)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        로그인
                    </Link>
                    <Link href="/signup" className={hovered === 1 ? "hovered" : ""} 
                        onMouseEnter={() => setHovered(1)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        회원가입
                    </Link>
                    <span 
                        className={hovered === 2 ? "hovered" : ""} 
                        onMouseEnter={() => setHovered(2)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        프로젝트 소개
                    </span>
                </div>
            </nav>

            {/* 메인페이지 문구 - 다국어 적용 */}
            <div className="main-content">
                <h1>{text[language].title}<span className="dot">.</span></h1>
                <p>{text[language].description1}</p>
                <p>{text[language].description2}</p>
                <p>{text[language].description3}</p>
            </div>

            {/* 챗봇 연결 버튼 */}
            <div className="chatbot-button">
                <button>💬</button>
            </div>
        </div>
    );
}
