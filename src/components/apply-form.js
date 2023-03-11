export default function ApplyForm() {
    return (
        <div class="form-container">
        <form action="https://theadultchair.com/careers-form-page/#wpcf7-f22579-p22573-o2" method="post"  enctype="multipart/form-data">
            <div style={{display:'none'}}>
                <input type="hidden" name="_wpcf7" value="22579"/>
                <input type="hidden" name="_wpcf7_version" value="5.7.3"/>
                <input type="hidden" name="_wpcf7_locale" value="en_US"/>
                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f22579-p22573-o2"/>
                <input type="hidden" name="_wpcf7_container_post" value="22573"/>
                <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
            </div>
            <label for="firstname">First name</label>
            <input id="firstname"  type="text" name="firstname" required></input>
            <label for="lastname">Last name</label>
            <input id="lastname" aria-invalid="false"  type="text" name="lastname" required></input>
            <label for="email">Email address</label>
            <input id="email" aria-invalid="false"  type="email" name="email" required></input>
            <label for="phone">Phone number</label>
            <input id="phone" aria-invalid="false"  type="tel" name="phone" required></input>

            <label for="timezone">Are you located in the Central or Eastern Time Zone?</label>
            <select id="timezone"  aria-invalid="false" name="timezone" required><option value="yes">yes</option><option value="no">no</option></select>
            
            <label for="selfhelp">Are you interested in the self-help industry?</label>
            <select id="selfhelp" aria-invalid="false" name="selfhelp" required><option value="yes">yes</option><option value="no">no</option></select>
            
            <label for="service">Do you have at least 2-5 years of customer service or C-Suite leadership support?</label>
            <select id="service" aria-invalid="false" name="service" required><option value="yes">yes</option><option value="no">no</option></select>
            
            <label for="files">Cover letter, resume and additional files</label>
            <input id="files" accept=".pdf,.doc,.docx"  aria-invalid="false" type="file" name="files" required></input>
            
            <p><button type="submit">Submit</button></p>
            </form>
            </div>
    );
}

