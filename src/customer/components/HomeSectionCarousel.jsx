import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from './HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { mens_kurta } from '../../Data/Men/men_kurta';
const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        480: { items: 1.5 },
        720: { items: 3 },
        1024: { items: 5.5 }
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);
    const items = mens_kurta.map((item) => <HomeSectionCard product={item} />);

    return (
        <div className="border">
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    responsive={responsive}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 5 && <Button
                    variant="contained"
                    className='z-50 bg-white'
                    onClick={slideNext}
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        right: '0rem',
                        transform: 'translateX(50%) rotate(90deg)',
                        bgcolor: 'white'
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>
                }
                {activeIndex !== 0 && <Button
                    onClick={slidePrev}
                    variant="contained"
                    className='z-50 bg-white'
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        left: '0rem',
                        transform: 'translateX(-50%) rotate(-90deg)',
                        bgcolor: 'white'
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;