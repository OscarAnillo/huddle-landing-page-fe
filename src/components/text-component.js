import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import 'animate.css';

export default function TextComponent(){
    return (
        <div className='text animate__animated animate__fadeInDownBig'>
            <h1>Build the community your fans will love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussions.</p>
            <button>Register</button>
            <div>
                <BsFacebook className='fb'/>
                <BsTwitter className='tr'/>
                <BsInstagram className='ig'/>
            </div>
        </div>
    )
}