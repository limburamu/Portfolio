import "../styles/PricingCardStyles.css";
import { Link } from "react-router-dom"

import React, {useEffect, useState} from "react";

import Card from "./Card";


const PricingCard = function() {
    const [pricingState, setPricingState] = useState([{type: 'Basic', cost: '$100', days: '3 Days', pages: '3 pages', 
    feature: 'Featured', design: 'Responsive Design'},
    {type: 'Premium', cost: '$200', days: '5 Days', pages: '5 pages',
    feature: 'Featured', design: 'Responsive Design'},
    {type: 'Business', cost: '$500', days: '8 Days', pages: '8 pages', 
    feature: 'Featured', design: 'Responsive Design'},
]); 
   
return (
    <div className="pricing">
        <div className="card-pointer">
            {pricingState.map((data) => {
        return (
            <Card 
            type = {data.type}
            cost = {data.cost}
            days = {data.cost}
            pages = {data.pages}
            feature = {data.feature}
            design = {data.design}
            />
        )
    })}
        </div>
    </div>
//     <div className="pricing">
//         <div className="card-pointer">
//             <div className="card">
//                 <h3>- Basic -</h3>
//                 <span className="bar"></span>
//                 <p className="btc"> $ 100</p>
//                 <p>-3 Days -</p>
//                 <p>-3 Pages -</p>
//                 <p>- Featured -</p>
//                 <p>- Responsive Design -</p>
//                 <Link to="/contact" className="btn">
//                     PURCHASE NOW
//                 </Link>
//             </div>

//             <div className="card">
//                 <h3>- Premium -</h3>
//                 <span className="bar"></span>
//                 <p className="btc"> $ 200</p>
//                 <p>-2 Days -</p>
//                 <p>-5 Pages -</p>
//                 <p>- Featured -</p>
//                 <p>- Responsive Design -</p>
//                 <Link to="/contact" className="btn">
//                     PURCHASE NOW
//                 </Link>
//             </div>

//             <div className="card">
//                 <h3>- Business -</h3>
//                 <span className="bar"></span>
//                 <p className="btc"> $ 300</p>
//                 <p>-5 Days -</p>
//                 <p>-8 Pages -</p>
//                 <p>- Featured -</p>
//                 <p>- Responsive Design -</p>
//                 <Link to="/contact" className="btn">
//                     PURCHASE NOW
//                 </Link>
//             </div>

//         </div>
//     </div>
  )
}

export default PricingCard