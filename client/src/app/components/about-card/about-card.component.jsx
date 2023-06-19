import Button from "@/app/components/button/button.component";
import WidgetCard from "@/app/components/widget/widget.component";
import Link from "next/link";

const AboutCard = () => {
    return (
        <WidgetCard className='widget widget-about' widgetTitle='سلام، من آتنا دادخواه هستم!'>
            <img className="img-fluid" src="/images/me/profile.jpg" alt="Themefisher" />
            <p>
                به عنوان یک برنامه‌نویس فول استک باتجربه و متخصص با توجه به توانایی‌هایم در حل مسائل پیچیده و کار تیمی، به دنبال فرصت‌هایی هستم که بتوانم محصولات خلاقانه و کاربردی را ایجاد کنم.</p>
            <ul className="social-icons mb-3">

                <li className="list-inline-item"><a href="#"><i className="ti-facebook"></i></a></li>

                <li className="list-inline-item"><a href="#"><i className="ti-twitter-alt"></i></a></li>

                <li className="list-inline-item"><a href="#"><i className="ti-linkedin"></i></a></li>

                <li className="list-inline-item"><a href="#"><i className="ti-github"></i></a></li>

                <li className="list-inline-item"><a href="#"><i className="ti-youtube"></i></a></li>

            </ul>
            <Link href='https://atenadadkhah.ir/' target='_blank'>
                <Button btnType='primary'>درباره من</Button>
            </Link>
        </WidgetCard>
    )
}

export default AboutCard;