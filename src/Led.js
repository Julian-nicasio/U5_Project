import React, {Component} from  "react";
import  Lights  from './Lights';

class Led extends Component {
    render(){
        return (
            <div>
            <h2>Led</h2>
                <p>Light emitting diodes, commonly called LEDs, are real unsung heroes in the electronics world. 
                    They do many different jobs in all kinds of devices. They form numbers on digital clocks, 
                    transmit information from remote controls, light up watches and tell you when your appliances 
                    are turned on. Collected together, they can form images on a jumbo television screen or 
                    illuminate a traffic light.</p>

                    <p>Basically, LEDs are just tiny light bulbs that fit easily into an electrical circuit. But 
                    unlike incandescent bulbs, they don't have filaments that burn out, they use less electricity, 
                    and they don't get especially hot. They're illuminated solely by the movement of electrons in a 
                    semiconductor material, and they last just as long as a standard transistor. The life span of an 
                    LED surpasses the short life of an incandescent bulb by thousands of hours. Because of these advantages, 
                    tiny LEDs are one of the most popular technologies used to light LCD TVs.</p>

                    <p>LEDs have several advantages over conventional incandescent lamps, but their main advantage is 
                    efficiency. In incandescent bulbs, the light-production process involves generating a lot of heat 
                    (the filament must be warmed to illuminate). This energy is completely wasted unless you're using 
                    the lamp as a heater, because a huge portion of the available electricity isn't going toward producing 
                    visible light. LEDs generate very little heat, relatively speaking. A much higher percentage of the 
                    electrical energy is going directly to generating light, which cuts down the electricity demands 
                    considerably.</p>

                    <p>Per watt, LEDs output more lumens (or quantities of visible light) than regular incandescent 
                    bulbs. Light emitting diodes have a higher luminous efficacy (how efficiently electricity is converted 
                    to visible light) than incandescents – a 60-watt incandescent bulb can generate between 750-900 lumens, 
                    but you can get the same output from a LED bulb using only 6-8 watts. And that same LED bulb can last 
                    25,000 hours, but the 60-watt incandescent is only likely to light up for about 1,200 hours. In other 
                    words, one LED bulb can last as long as 21 60-watt incandescent bulbs burned consecutively 
                    [source: EarthEasy].</p>

                    <p>Until recently, LEDs were too expensive to use for most lighting applications because they're built 
                    around advanced semiconductor material. The price of semiconductor devices plummeted after the year 
                    2000, however, making LEDs a more cost-effective lighting option for a wide range of situations. While 
                    they may be more expensive than incandescent lights up front (about $5 versus $1 for incandescent bulbs), 
                    their lower cost in the long run can make them a better buy. Several companies have begun selling LED 
                    light bulbs designed to compete with incandescent and compact fluorescents that promise to deliver long 
                    lives of bright light and amazing energy efficiency.</p>
            <Lights/>
            </div>
        );
    }
}
export default Led;