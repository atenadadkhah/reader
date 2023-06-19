import Widget from "@/app/components/widget/widget.component";
import PostCategories from "@/app/components/categories/post-categories.component";

const TagsCard = () => {
    return (
        <Widget widgetTitle='دسته بندی ها'>
            <ul className="widget-list-inline widget-card">
                <PostCategories />
            </ul>
        </Widget>
    )
}

export default TagsCard;