"use client";

export default function LoginPage() {
    return (
        <div className="auth-container">
            <h1>로그인</h1>
            <form className="auth-form">
                <input type="text" placeholder="아이디" />
                <input type="password" placeholder="비밀번호" />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}
