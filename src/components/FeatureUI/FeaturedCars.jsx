import FeatureSections from "./FeatureSections"
import one from '../../assets/backgrounds/1.jpg'
import two from '../../assets/backgrounds/2.jpg'
import three from '../../assets/backgrounds/3.jpg'
import four from '../../assets/backgrounds/4.jpg'
import five from '../../assets/backgrounds/5.jpg'

const FeaturedCars = () => {

  const text1 = "Paul Walker's iconic role as Brian O'Conner in '2 Fast 2 Furious' (2003) not only solidified his status as a leading man in the franchise but also left a lasting impact on car culture. His portrayal of the charming and skilled street racer helped popularize the tuner and import car scene, contributing to the fascination with modified cars and high-speed pursuits that became synonymous with the 'Fast and Furious' series. Walker's character and his connection to the world of cars have since become an integral part of the series' legacy and influence on car enthusiasts worldwide."
  const text2 = "Mine's Nissan R34 GT-R is a meticulously crafted homage to the N1 edition Skyline GT-R, designed for racing in championships like JTCC. With a focus on period-correct upgrades, this unique Mine's demo car showcases enhanced engine performance, cooling, suspension, braking, aero, and interior. Owned by a dedicated enthusiast, the car stands as a remarkable example of the R34 GT-R's capabilities, featuring a Mine's Complete Engine and an array of Mine's components that redefine its power, responsiveness, and overall performance."
  const text3 = "James McCue's '99 Nissan GT-R V-Spec is a tribute to the golden era of Japanese tuner shop demo cars, staying true to '90s and early '00s tuning philosophy. Immaculately restored after an initial mishap, the GT-R features a robust HKS-centric engine bay, including an HKS Step Zero 2.8L stroker kit, Naprec oversized valves, and HKS GT2530 turbos. With a perfect blend of iconic components like GReddy coilovers and Volk Racing CE28 wheels, this build not only embodies the power and responsiveness of the era's demos but also captures the essence of a true driving machine."
  const text4 = "Mark Wang's Tsukuba Time-Attack R34 GT-R is a track-focused powerhouse that has made its way from Japan to the US. Originally built by ATTKD, this lightweight monster features a dry carbon roof, weight-reducing modifications, and a host of performance enhancements. With a show-ready interior and a power-to-weight advantage, this R34 boasts impressive acceleration and nimble handling, having set a record lap time of 56.9 seconds at the Tsukuba Championship. While it may no longer dominate the track, its presence is a testament to its racing pedigree and dedication to performance."
  const text5 = "The VeilSide R34 Skyline V-Spec drag car is a true beast. With 1,360 hp on tap, it can outrun just about anything on the road. But it's not just about speed. The car is also incredibly stylish, thanks to its VeilSide body kit. If you're looking for a car that can turn heads and leave everyone in the dust, the VeilSide R34 Skyline V-Spec drag car is the perfect choice for you."



  return (
    <div>
        <FeatureSections title="Paul Walkers R34" text={text1} flip={false} image={one} link={'https://fastandfurious.fandom.com/wiki/1999_Nissan_Skyline_GT-R_R34 '} />
        <hr className="glowing-hr" /> 
        <FeatureSections title="Mine’s R34 Skyline GT-R" text={text2} flip={true} image={two} link={'https://www.motortrend.com/features/130-0703-mines-r34-nissan-skyline-gtr/'} />
        <hr className="glowing-hr" /> 
        <FeatureSections title="James McCue R34 V-Spec" text={text3} flip={false} image={three} link={'https://www.motortrend.com/features/1999-nissan-skyline-gt-r-v-spec-r34-tribute/'} />
        <hr className="glowing-hr" /> 
        <FeatureSections title="Tsukuba Time-Attack R34 Hero" text={text4} flip={true} image={four} link={'https://www.motortrend.com/features/1999-nissan-skyline-gt-r-v-spec-r34-the-legend-continues/'} />
        <hr className="glowing-hr" /> 
        <FeatureSections title="VeilSide 1999 R34" text={text5} flip={false} image={five} link={'https://www.motortrend.com/features/custom-1999-nissan-r34-skyline-gtr-drag-car/'} />
        <hr className="glowing-hr" /> 
    </div>
  )
}

export default FeaturedCars