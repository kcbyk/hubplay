export default function Footer() {
  return (
    <footer className="netflix-footer">
      <div className="footer-socials">
        <a href="#" aria-label="Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="#" aria-label="YouTube">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
      <ul className="footer-links">
        <li>
          <a href="#">Sesli Betimleme</a>
        </li>
        <li>
          <a href="#">Yardım Merkezi</a>
        </li>
        <li>
          <a href="#">Hediye Kartları</a>
        </li>
        <li>
          <a href="#">Medya Merkezi</a>
        </li>
        <li>
          <a href="#">Yatırımcı İlişkileri</a>
        </li>
        <li>
          <a href="#">İş İmkanları</a>
        </li>
        <li>
          <a href="#">Kullanım Koşulları</a>
        </li>
        <li>
          <a href="#">Gizlilik</a>
        </li>
        <li>
          <a href="#">Yasal Hükümler</a>
        </li>
        <li>
          <a href="#">Çerez Tercihleri</a>
        </li>
        <li>
          <a href="#">Kurumsal Bilgiler</a>
        </li>
        <li>
          <a href="#">Bize Ulaşın</a>
        </li>
      </ul>
      <button className="service-code-btn">Hizmet Kodu</button>
      <p className="copyright">
        © 1997-2026 HubPlay, Inc. — Next.js ile Hazırlandı.
      </p>
    </footer>
  );
}
