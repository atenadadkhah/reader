import SearchBox from "@/app/components/search-box/search-box.component";
import AboutCard from "@/app/components/about-card/about-card.component";
import TagsCard from "@/app/components/tags-card/tags-card.component";
import AdCard from "@/app/components/ad-card/ad-card.component";

const WidgetsBar = () => {
    return (
        <aside className="column is-4-desktop @@sidebar">
            <SearchBox/>
            <AboutCard/>
            <AdCard />
            <TagsCard/>
        </aside>
    )
}

export default WidgetsBar;