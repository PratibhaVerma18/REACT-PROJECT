import React,{useState}  from 'react';
import Menu from"./Menu";
const GalleryReact=()=>{
    const[items,setItems]=useState(Menu);
return(
    <>
     <h1 className="mt-5 text-center main-heading">order your fav dish</h1>
     <hr/>
     <div className="menu-tabs container">
         <div className="menu-tab d-flex justify-content-around">
         <button className="btn btn-warning">brkfas</button>
         <button className="btn btn-warning">Evening</button>
         <button className="btn btn-warning">Lunch</button>
         <button className="btn btn-warning">Dinner</button>
         <button className="btn btn-warning">All</button>
     </div>
     </div>
     {/* my main section */}
     <div className="menu-items container-fluid mt-5">
         <div className="row">
             <div className="col-11 mx-auto">
                 <div className="row my-5">
                 {
                     items.map((elem)=>{
                     const{id,name,image,description,price}= elem;
                     return(
                     

                     <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                         <div className="row Item-inside">
                             {/* for images */}
                             <div className="col-12 col-md-12 col-lg-4 img-div">
                                 <img src={image} alt={name} className="img-fluid"/>
                             </div>
                             {/* menu items description */}
                             <div className="col-12 col-md col-lg-8">
                                 <div className="main title pt-4 pb-3">
                                     <h1>{name}</h1>
                                     <p>{description}</p>
                                 </div>
                                 <div className="menu-price-book">
                                     <div className="price-book-device d-flex justify-content-between">
                                         <h2>{price}</h2>
                                         <a href="/">
                                             <button className="btn-btn-warning">order now</button>
                                         </a>
                                     </div>
                                     <p>Prices may vary on selected date</p>
                                 </div>
                             </div>

                         </div>
                     </div>
                     );
                     })
                    }
                 </div>
             </div>
         </div>

     </div>

                     

    </>
                     
)
}


       

export default GalleryReact;
