import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

export default function TextComponent(){
    return (
        <div>
            <h1>Build the community that your fans love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussions.</p>
            <button>Register</button>
            <div>
                <BsFacebook />
                <BsTwitter />
                <BsInstagram />
            </div>
        </div>
    )
}