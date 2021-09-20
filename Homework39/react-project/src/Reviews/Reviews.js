import Review from './Review/Review.js'

const Reviews = (props) =>{
    return (
        <div>
            <div className="Reviews">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <Review name='Dima' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dima'/>
                            <Review name='Vika' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vika'/>
                            <Review name='Sasha' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sasha'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Reviews;