import "./contactus.css";

export default function ContactUs() {
    return (
        <div className="contact-us" id="contact">
            <div className="icons-container">
                <div><img src="/images/ph_instagram-logo-fill.png" alt="Instagram"/></div>
                <div><img src="/images/bi_linkedin.png" alt="Linkedln"/></div>
                <div><img src="/images/bi_envelope-fill.png" alt="gmail"/></div>
            </div>
            <div className="copyright">
                <img src="/images/copyright.png" alt="copyright"/>
            </div>
        </div>
    )
}