import {Logo} from '../assets/img';
export default function Menu() {
    return (
    <div class="menu-wrapper container-fluid">
        <div class="row">
        <div class="logo-wrapper col-lg-3 col-12">
            <a href="https://theadultchair.com/">
                <img src={Logo} alt="" />
            </a>
        </div>
        <div class="nav col-lg-9 col-12">
            <div class="row">
            <div class="col-12 col-md-8">
                <ul>
                <li><a href="https://theadultchair.com/" target="_blank" rel="noreferrer" >Home</a></li>
                <li><a href="https://theadultchair.com/podcasts" target="_blank" rel="noreferrer" >Podcast</a></li>
                <li><a href="https://michellechalfant.com/careers/">Careers</a></li>
                <li><a href="https://theadultchair.com/contact-us" target="_blank" rel="noreferrer" >Contact</a></li>
            </ul> 
            </div>
            </div>
            
        </div>
        </div>
    </div>
);}