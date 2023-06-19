import Link from "next/link";

const Direction = ({current}) => {
    return (
        <ul className="list-inline" dir='rtl'>
            <li className="list-inline-item">
                <Link className="text-default" href="/">خانه &nbsp;</Link>
                /
                &nbsp;
            </li>
            <li className="list-inline-item text-primary">{current}</li>
        </ul>
    )
}

export default Direction;