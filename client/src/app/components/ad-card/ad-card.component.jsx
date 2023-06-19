import Link from "next/link";
import Button from "@/app/components/button/button.component";

const AdCard = () => {
    return (
        <div className="promotion">
            <img src="/images/promotion.jpg" className="img-fluid w-100" />
                <div className="promotion-content">
                    <h5 className="has-text-white mb-3">وبسایت هایی خارق العاده بسازید</h5>
                    <p className="has-text-white mb-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع</p>
                    <Button btnType='primary'>
                        شروع کنید
                    </Button>
                </div>
        </div>
    )
}

export default AdCard;