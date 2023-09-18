import React from 'react'
import Image from './image'
export default function Sectionmax(props) {
    return (
        <div className="section">
            <section className="defult">
                <h1 className="bookinyouhand up">Book Your Favorite Nearest Salon/Gallery</h1>
                <h1 className="bookinyouhand down">On Your Time</h1>
                <div className="newstyle">
                    <a href="#" className="Homeservice">Home services</a>
                    <a href="#manstyle" className="HairMan">Hair style of Man</a>
                    <a href="#girlsstyle" className="hairgirl">Hair style of Girls</a>
                </div>
            </section>
            <section className="man">
                <p className="heading" id='manstyle'>Man Style</p>
                <div className="imgg">
                    <Image img="./man/agusbarber__-pomp-fade-long-hairstyles-for-men-2018.jpg" detail="agusbarber__-pomp-fade" />
                    <Image img="./man/barberdeano-messy-comp-over-long-hairstyles-for-men-2018.jpg" detail="barberdeano-messy-comp" />
                    <Image img="./man/barberlele23-messy-top-shaved-line-design-long-hairstyles-for-men-2018.jpg" detail="barberlele23-messy-top-shaved-line" />
                    <Image img="./man/drehair-mohawk-skin-fade-long-hairstyles-for-men-2018.jpg" detail="drehair-mohawk-skin-fade" />
                    <Image img="./man/mens-hairstyles.jpg" detail="Agusbarber pomp fade long" />
                    <Image img="./man/morrismotley-long-spiky-textured-hair-long-hairstyles-for-men-2018.jpg" detail="morrismotley-long-spiky-textured" />
                    <Image img="./man/r.braid-barber-spikes-razor-design-huge-beard-long-hairstyles-for-men-2018.jpg" detail="braid-barber-spikes-razor-design-huge-beard" />
                    <Image img="./man/thegentlemanbarbers-modern-hairstyle-long-hairstyles-for-men-2018.jpg" detail="Thegentlemanbarbers-modern" />
                </div>
            </section>
            <hr />
            <section className="girl">
                <p className="heading" id='girlsstyle'>Girls style</p>
                <div className="imgg">
                    <Image img="./woman/Curtain Bangs and Shag Haircut.png" detail="Curtain Bangs and Shag Haircut" />
                    <Image img="./woman/Textured Haircut.png" detail="Textured Haircut" />
                    <Image img="./woman/Tousled Lob Haircut.jpg" detail="Tousled Lob Haircut" />
                    <Image img="./woman/Two-Tier Inverted Bob.png" detail="Two-Tier Inverted Bob" />
                    <Image img="./woman/Wavy Cut with Curtain Bangs.png" detail="Wavy Cut with Curtain Bangs" />
                </div>
            </section>
            <section className="joindoormonk" id='joindoormonk'>
               
                    <div className="detailjoin">
                        <h1>Doormonk business</h1>
                        <p>Begin using Doormonk </p>
                        <p>To improve the way you operate your business.</p>
                        <p>Earn more and more...</p>
                        <button className="joinnow">JOIN NOW</button>
                    </div>
                    {/* <div className="joinimag"><img src={props.desig} alt="" /></div> */}
                    
               
            </section>


        </div>
    )
}
