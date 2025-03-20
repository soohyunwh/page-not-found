"use client";

export default function SignupPage() {
    return (
        <div className="auth-container">
            <h1>회원가입</h1>
            <form className="auth-form">
                <input type="text" placeholder="아이디" />
                <input type="email" placeholder="이메일" />
                <input type="password" placeholder="비밀번호" />
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}
