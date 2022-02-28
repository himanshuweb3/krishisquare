import React from "react";

const Insights = () => {
   return (
    <>
      {/* {/*Page Header Start*/}
      <section
        className='page-header clearfix'
        style={{
          backgroundImage: "url(https://escrowindia.globalgroominghealthcare.com/assets/images/about/03.png)",
        }}
      >
        <div className='container'>
          <div className='page-header__inner text-center clearfix'>
            
            <h2>Insights</h2>
          </div>
        </div>
      </section>
      {/* Page Header End*/}

       <div className='container' style={{ padding:'100px 0px' }}>
          <div className='row'>
            <div className='col-xl-3 col-lg-6 '>
               <img src="assets/images/insight1.jpg" />
              <h3>Future of Indian Agriculture - Vision 2030</h3>
              <p>The insights we reached are consequential and sometimes counterintuitive. <p>
               <a href="https://www.omnivore.vc/vision-2030/" target="_blank">read more</a>
           </div>
            <div className='col-xl-3 col-lg-6 '>
               <img src="assets/images/insight2.jpg" />
              <h3>Indian Agricultural transformation</h3>
              <p>Indian Agricultural transformation. <p>
               <a href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://assets.ey.com/content/dam/ey-sites/ey-com/en_in/topics/start-ups/2020/09/ey-agritech-towards-transforming-indian-agriculture.pdf%3Fdownload&ved=2ahUKEwiI-rKZ6pz2AhX3QPUHHZFYBaYQFnoECBYQAQ&usg=AOvVaw0v_PA9iut890kdGeCkiArD" target="_blank">read more</a>
           </div>
            <div className='col-xl-3 col-lg-6 '>
               <img src="assets/images/insight3.jpg" />
              <h3>Agritech Innovations</h3>
              <p>Agritech Innovations <p>
               <a href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://fedev.org/wp-content/uploads/2020/03/AI-TIA%2520Report%2520V7.pdf&ved=2ahUKEwiD2MWr7Jz2AhVWSmwGHYmeA50QFnoECBMQAQ&usg=AOvVaw3TLAnz9Q6-3p8S4uCBeMHM" target="_blank">read more</a>
           </div>
           <div className='col-xl-3 col-lg-6 '>
               <img src="assets/images/insight4.jpg" />
              <h3>NABARD Sustainability report</h3>
              <p>NABARD Sustainability report <p>
               <a href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.nabard.org/auth/writereaddata/tender/2909214958sustainability-report-2019-20.pdf&ved=2ahUKEwj95bnU7Jz2AhWQSmwGHVG8A7kQFnoECAQQAQ&usg=AOvVaw2M1Q0FIjvh152kr26Aqa2-" target="_blank">read more</a>
           </div>
         </div>
       </div>
 </>

  );
};

export default Insights;
