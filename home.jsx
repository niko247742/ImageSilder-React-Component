import React from 'react';
import ImageSlider from './imageSlider';

const Home = () => {
    const firstImage = {id:1, src: require("../images/golden-outside.jpg"), text: "Family Owned, Pet Loved"};
    const images = [
        {id:2, src: require("../images/borderCollie.jpg"), text: "Family Owned, Pet Loved"},
        {id:3, src: require("../images/shihtzu.jpg"), text: "Family Owned, Pet Loved"},
        {id:4, src: require("../images/old-golden.jpg"), text: "Family Owned, Pet Loved"},
        {id:5, src: require("../images/bullDog.jpg"), text: "Family Owned, Pet Loved"},
        {id:6, src: require("../images/doodle.jpg"), text: "Family Owned, Pet Loved"},
    ]

    return (
        <React.Fragment>
            <ImageSlider 
                images = {images}
                firstImage = { firstImage }/>
            {/* <h2>Home Page!</h2> */}

        </React.Fragment>
        
    )
}

export default Home;