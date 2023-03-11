export default function SubForm() {

    return (
            <form action="https://theadultchair.com/careers-form-page/#wpcf7-f22572-p22573-o1" method="post"  >
                <div style={{display:'none'}}>
                <input type="hidden" name="_wpcf7" value="22572"/>
                <input type="hidden" name="_wpcf7_version" value="5.7.3"/>
                <input type="hidden" name="_wpcf7_locale" value="en_US"/>
                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f22572-p22573-o1"/>
                <input type="hidden" name="_wpcf7_container_post" value="22573"/>
                <input type="hidden" name="_wpcf7_posted_data_hash" value=""/>
                </div>
                
                <input type="text" name="fullname" placeholder="Name" required/>
                <input type="email" name="email" placeholder="Email" required/>
                <p>
                <input id="terms-conditions" type="checkbox" value="agree" name="terms-conditions" required/><label for="terms-conditions">By clicking this button you agree to receive emails from the Michelle Chalfant company.</label> 
                </p>
                <p><button type="submit">Sign up</button></p>
            </form>  
    );
}

