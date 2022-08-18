import 'animate.css';

export default function ImageComponent(){
    return (
        <div className="img-box">
            <img src="/images/logo.svg" alt="logo" className="animate__animated animate__wobble" />
            <div className="img-bg animate__animated animate__backInUp"></div>
        </div>
    )
}