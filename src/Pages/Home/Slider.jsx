
import SectionTitle from "../../components/SectionTitle";




import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const Slider = () => {
    return (
        <section className="mb-5">
            <SectionTitle 
            subHeading={"photo gallery"}
            heading={"graduation pictures"}
            >

            </SectionTitle>
            <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper md:w-auto"
      >
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1577036421869-7c8d388d2123?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </SwiperSlide>
        
      </Swiper>
           
            
           
            
        </section>
    );
};

export default Slider;