import React, {FC} from 'react';
import FeedItem from "./feed-item/feed-item";
import styles from "./feed.module.css";
import {IOrderTypes} from "../../interfaces/interfaces";


type TFeedProps = {
    orders?: IOrderTypes[] | null
}

const Feed: FC<TFeedProps> = ({orders}) => {

    return (
        <div className={`${styles.feed}`}>
            {orders && orders?.map((order) => {
                return <FeedItem key={order._id} order={order}/>
            })}
        </div>
    );
};

export default Feed;
