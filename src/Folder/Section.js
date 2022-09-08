import React from "react";
import Card from "./card";
function Section(){
    return(
        <>
        <section className="py-5">
         <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Card name="Fancy Product" price=" $40.00 - $80.00"/>
         <Card
            name="Special item"
            Original price="$20.00"
            prices="$18.00"
            sale="true"
            reviews="true"
            />
             
            <Card
                  name="Sale Item"
                  sale="true"
                  Original price="$50.00"
                  prices="$25.00"
                 
                  />
               <Card name="Popular Item" reviews="true" price=" $40.00"/>
               <Card 
               name="Sale item"
               Original price="$50.00"
               prices="$25.00"
               sale="true"
               />
               <Card name="Fancy Product"  price=" $120.00-$280.00"/>
               <Card
               name="Special Item"
                Original price="$18.00"
                prices="$18.00"
                sale="true"
                reviews="true"   
                /> 
                <Card name="Popular Item" reviews="true" price=" $40.00"/>    
                        </div>
                        </div> 
                 
      </section>
 </>
    );
}
export default Section;