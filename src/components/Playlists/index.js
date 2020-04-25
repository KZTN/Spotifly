import React from 'react'
import Card from '../Card';
import "./styles.scss";
const Playlists = (props) => {
    const dataPlaylists = [
        {
            id: 101,
            category_id: 1,
            name: 'Liked Songs',
            description: "",
            thumbnail: "https://images.unsplash.com/photo-1512608121467-72931bf816c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 102,
            category_id: 2,
            name: 'Chart playlist 1',
            description: "Lorem ipsum dolor sit amet, consectetur...",
            thumbnail: "https://images.unsplash.com/photo-1587446745330-e5712e1097d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
            id: 103,
            category_id: 2,
            name: 'Chart playlist 2',
            description: "Lorem ipsum dolor sit amet, consectetur...",
            thumbnail: "https://images.unsplash.com/photo-1587471557294-9b5773994a90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 104,
            category_id: 2,
            name: 'Chart playlist 3',
            description: "Lorem ipsum dolor sit amet, consectetur...",
            thumbnail: "https://images.unsplash.com/photo-1527588574470-7152d7c3c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        },
        {
            id: 105,
            category_id: 2,
            name: 'Chart playlist 4',
            description: "Lorem ipsum dolor sit amet, consectetur...",
            thumbnail: "https://images.unsplash.com/photo-1587320734554-fdcd82819e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
            id: 106,
            category_id: 3,
            name: 'Focus playlist 2',
            description: "Lorem ipsum dolor sit amet, consectetur...",
            thumbnail: "https://images.unsplash.com/photo-1523860522695-dfc952f0c10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
        },
        {
            id: 107,
            category_id: 3,
            name: 'Focus playlist 3',
            description: "Lorem ipsum dolor sit amet, consectetur...",
            thumbnail: "https://images.unsplash.com/photo-1526827826797-7b05204a22ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
            id: 108,
            category_id: 4,
            name: 'Mood playlist 1',
            description: "Lorem ipsum dolor sit amet, consectetur...",
            thumbnail: "https://images.unsplash.com/photo-1587491439833-78f88e990f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
        },
        {
            id: 109,
            category_id: 4,
            name: 'Mood playlist 2',
            description: "Lorem ipsum dolor sit amet, consectetur...",
            thumbnail: "https://images.unsplash.com/photo-1587629329212-5f3eb096dc4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        }
    ];
    const machtedPlaylists = dataPlaylists.filter(playlist => playlist.category_id === props.categoryId);

    return(
        <>  
            {machtedPlaylists.map(playlist => (
                <Card name={playlist.name} description={playlist.description} thumbnail={playlist.thumbnail}/>
            ))}
        </>
    );
};

export default Playlists;