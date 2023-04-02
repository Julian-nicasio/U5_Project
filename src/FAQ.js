import React, {Component} from  "react";
import Leaves from './Leaves'

class FAQ extends Component {
    render(){
        return (
            <div>
            <h2>FAQ</h2>
                <p><b>Do I have to replace my existing gutters to get gutter protection?</b></p>
                <p>Absolutely not! Our gutter guard will fit right onto your existing gutters, 
                which will save you money as well as keep your gutters clean.</p>

                <p><b>Why do I need gutters?</b></p>
                <p>This is a question that we encounter a lot and the answer 
                is quite simple: gutters prevent erosion. Without gutters, your home’s foundation is at danger, 
                and it might be at risk of cracked floors, cracked walls, and uneven floors.</p>

                <p><b>How long do gutter guards last?</b></p>
                <p>Gutter guards that are constructed from lightweight aluminum can be expected to last up to two decades 
                as long as proper maintenance is performed throughout the years. Keeping the gutter guards clean is a 
                sure way to extend their life span.</p>

                <p><b>Can the gutter guard handle a heavy rainstorm?</b></p>
                <p>Yes. Gutter guards are designed as a mesh screen that prevents leaves from entering your gutters 
                    while still allowing water to flow through. This means that water will be directed away from 
                    your home during even the heaviest rainstorms.</p>
            <Leaves/>
            </div>
        );
    }
}
export default FAQ;