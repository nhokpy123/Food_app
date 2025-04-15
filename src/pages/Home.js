import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Chào mừng đến với cửa hàng</h1>
        <p className="home-subtitle">Khám phá các sản phẩm chất lượng cao với giá cả phải chăng</p>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="feature-title">Chất lượng đảm bảo</h3>
            <p className="feature-description">Tất cả sản phẩm của chúng tôi đều được kiểm tra kỹ lưỡng</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="feature-title">Giao hàng nhanh</h3>
            <p className="feature-description">Chúng tôi cam kết giao hàng trong vòng 24 giờ</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="feature-title">Nhiều lựa chọn</h3>
            <p className="feature-description">Hàng nghìn sản phẩm phù hợp với mọi nhu cầu</p>
          </div>
        </div>
      </div>
    </div>
  );
}