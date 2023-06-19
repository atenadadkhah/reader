import Banner from "@/app/components/banner/banner.component";
import Direction from "@/app/components/direction/direction.component";
import Section from "@/app/components/section/section.component";
import Container from "@/app/components/container/container.component";
import Button from "@/app/components/button/button.component";

const About = () => {
    return (
        <>
            <Banner>
                <h1 className="my-4">درباره ما</h1>
                <Direction current='درباره ما'/>
            </Banner>


            <Section sectionType='sm'>
                <Container>
                    <div className="columns is-align-items-center is-justify-content-center">
                        <div className="column is-5-widescreen is-6-desktop mb-4">
                            <div className="image-wrapper">
                                <img className="img-fluid w-100" src="/images/about-us-1.jpg" />
                            </div>
                        </div>
                        <div className="column is-5-widescreen is-6-desktop">
                            <div className="pr-4">
                                <h2 className="mb-3">ماموریت اصلی من چیست و چه کاری می خواهم انجام دهم؟</h2>
                                <p>با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>


            <Section sectionType='sm'>
                <Container>
                    <div className="columns is-align-items-center is-justify-content-center">
                        <div className="column is-5-widescreen is-6-desktop">
                            <div className="pr-4">
                                <h2 className="mb-4">ما تیمی از بهترین نویسندگان را داریم</h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                                <Button type='button' btnType='primary'>نویسندگان ما</Button>
                            </div>
                        </div>
                        <div className="column is-5-widescreen is-6-desktop mb-4">
                            <div className="image-wrapper">
                                <img className="img-fluid w-100" src="images/about-us-2.jpg" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>


            <section className="section-sm author">
                <div className="container">
                    <div className="columns">
                        <div className="column is-6-widescreen is-8-desktop mx-auto has-text-centered">
                            <h2 className="mb-4">به تیم نویسندگان عالی بپیوندید</h2>
                            <p className="mb-4">کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                            <Button type='button' btnType='primary'>پیوستن</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;