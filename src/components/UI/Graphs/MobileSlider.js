import React, { useRef } from 'react';
import classes from './MobileSlider.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Legend from '.././Legend';
import LineGraph from './LineGraph';
import BarGraph from './BarGraph';

const MobileSlider = ({ date, prices, volumes }) => {
	const slider = useRef(null);

	const settings = {
		arrows: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<>
			<div className={classes.mobile_wrapper}>
				<button
					className={classes.slider_button_prev}
					onClick={() => slider?.current?.slickPrev()}
				>
					&#60;
				</button>
				<button
					className={classes.slider_button_next}
					onClick={() => slider?.current?.slickNext()}
				>
					&#62;
				</button>
				<Slider ref={slider} {...settings}>
					<div>
						<Legend title="Price" value={prices.latestPrice} date={date} />
						<LineGraph label={prices.labels} data={prices.chartData} />
					</div>
					<div>
						<Legend
							title="Volume 24h"
							value={volumes.latestVolume}
							date={date}
						/>
						<BarGraph label={volumes.labels} data={volumes.chartData} />
					</div>
				</Slider>
			</div>
		</>
	);
};

export default MobileSlider;
