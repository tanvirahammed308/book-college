
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
                <div>
                 <img src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                    
                </div>
                <div>
                    
                   <img src="https://media.istockphoto.com/id/173598452/photo/university-in-autumn.jpg?s=612x612&w=0&k=20&c=jQqpZuTZ6qXIfWqnCW5nqlExJZO0PO47L-ZiaE8jIk0=" alt="" />
                </div>
                <div>
                    
                   <img src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
            </Carousel>
    );
};

export default Banner;