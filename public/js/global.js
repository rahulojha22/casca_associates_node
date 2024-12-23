let process = [
    {name: 'Discovery', description: 'We start our projects by understanding the scope and requirements. This is accomplished by working closely with you to make sure we are all on the same page.'},
    {name: 'Plan', description: 'Following the initial kick-off meeting, we will outline your project, create milestones, and agree on project priorities. Now we have a strategic plan in place that aligns with your initial vision and makes your goals achievable.'},
    {name: 'Execute', description: 'The final design takes shape and, at this stage, the idea comes to life representing the visual concepts. Our creative development team reviews and revises the materials until it aligns with your goals.'},
    {name: 'Deliver', description: 'Review and testing takes place, which ensures the quality of your project. We value your reputation and want to make sure it is correct. After this, we present your finished custom project and upon approval, your new website will be launched and promoted.'}
];

let services = [
    {name: 'Customer Support', img: 'customer_support.jpeg', description: 'Our comprehensive customer support and services ensure your clients receive the best experience from start to finish. We provide 24/7 live chat support, email handling, phone assistance, ticket management, complaint resolution, and follow-up services. Our dedicated team is trained to enhance customer satisfaction and build lasting relationships.'},
    {name: 'Bookkeeping', img: 'customer_support.jpeg', description: 'Stay organized and efficient with our expert bookkeeping services. We cover daily transaction recording, account reconciliation, payroll processing, financial statement preparation, expense tracking, and accounts payable/receivable management. Trust us to maintain accuracy and streamline your financial data for better business decisions.'},
    {name: 'Data Entry', img: 'customer_support.jpeg', description: 'Our data entry services are tailored to keep your information accurate and up-to-date. We handle data collection, database management, spreadsheet creation, form processing, CRM data entry, and digital conversion services. We ensure fast and secure data processing to boost your operational productivity.'},
    {name: 'CRM Management', img: 'customer_support.jpeg', description: 'Maximize the effectiveness of your customer relationships with our CRM management solutions. Our services include CRM setup, customization, data entry, lead tracking, pipeline management, automated workflows, and comprehensive reporting. We help you optimize your CRM to enhance client interactions and improve conversion rates.'},
    {name: 'Accounting Services', img: 'customer_support.jpeg', description: 'Our full-spectrum accounting services support your financial health with precision and professionalism. We provide financial planning, general ledger maintenance, tax preparation, budget management, financial forecasting, audit support, and year-end reporting. Rely on our team for accurate and timely financial insights.'},
    {name: 'Insurance Services', img: 'insuarance.jpeg', description: 'Simplify your insurance management with our specialized services. We offer policy management, claim processing, premium calculation, customer assistance, renewal management, and insurance data analysis. Our team ensures that you stay compliant and efficient while focusing on client satisfaction.'},
    {name: 'Dubbing and Voice-Over', img: 'dubbing.jpeg', description: 'Enhance your multimedia projects with professional dubbing and voice-over services. We offer multi-language voice-overs, character dubbing, audiobook narration, explainer video voice-overs, IVR and on-hold messaging, and advertising voice-over services. Bring your content to life with voices that captivate your audience.'},
    {name: 'Sound Design and Production', img: 'sound_design.jpeg', description: 'Create a unique auditory experience with our sound design and production services. Our offerings include sound effects creation, custom audio branding, background score production, podcast editing, and cinematic soundscapes. We tailor sound elements to fit your project’s specific needs for an immersive result.'},
    {name: 'Mixing and Mastering', img: 'mixing.jpeg', description: 'Ensure your audio projects sound polished and professional with our expert mixing and mastering services. We provide multi-track mixing, stereo mastering, stem mastering, audio restoration, EQ balancing, and volume optimization. Your tracks will be radio-ready and deliver an impactful listening experience.'},
    {name: 'Localization', img: 'localization.jpeg', description: 'Reach a global audience with our comprehensive localization services. We offer translation, cultural adaptation, voice-over and dubbing in multiple languages, subtitling, software and app localization, and content tailoring for regional markets. We ensure your message resonates across different languages and cultures seamlessly.'}
]

$(document).ready(function() {
    let service_sec = document.getElementById('service_box');
    let service_html = '';
    services.forEach((ele, i)=>{        
	service_html += `<div class="service_item">
        <button type="button" class="btn service_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openServiceDetails(${i})">
          <div class="service_card clr_white">
            <img src="/images/services/${ele.img}" class="service_img" />
            <p class="service_title">${ele.name}</p>
          </div>
        </button>        
      </div>`;
    });

    service_sec.innerHTML = service_html;

    let process_sec = document.getElementById('process');
    let sec_html = '';
    process.forEach((ele, i)=>{
        let ele_html = '';
        if(i%2===0){
            ele_html = `<div class="process_sec_box border1">
                <div class="process_content">
                  <p class="process_name1">${ele.name}</p>
                  <p class="description1">${ele.description}</P>
                </div>
                <div class="process_img">
                    <img class="img" src="/images/6-our-plane-ai.png" />
                </div>
            </div></div>`
        }else{
            ele_html = `<div class="line_img">
                    <img class="line" src="/images/line_img1.png" />
                </div>
                <div class="process_sec_box ${i===process.length-1?'border21':'border2'}">
                  <div class="process_img">
                    <img class="img" src="/images/6-our-plane-ai.png" />
                  </div>
                  <div class="process_content">
                    <p class="process_name2">${ele.name}</p>
                    <p class="description2">${ele.description}</P>
                </div></div>`
                if(process[i+1]){
                    ele_html += `<div class="line_img"><img class="line" src="/images/line_img.png" /></div>`;
                }
        }
        sec_html += ele_html;
    });
    process_sec.innerHTML = sec_html;

    function isFullyVisible(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Usage
    const targetDiv = document.querySelector('#footer_2');
    window.addEventListener('scroll', () => {
        if (isFullyVisible(targetDiv)) {
            targetDiv.classList.remove("footer_2");
            targetDiv.classList.add("footer_2_vis");            
        } else {
            targetDiv.classList.remove("footer_2_vis");
            targetDiv.classList.add("footer_2");
        }
    });    

});

function openServiceDetails(index) {
    let element = services.filter((ele, i)=> i===index)[0];
    let service_name = document.getElementById('service_name');
    let service_desc = document.getElementById('service_desc');
    service_name.innerHTML = element.name || 'No Name';
    service_desc.innerHTML = element.description || 'No Description';    
}

document.getElementById('slideLeft').addEventListener('click', function() {
    const scrollableDiv = document.getElementById('service_box');
    scrollableDiv.scrollBy({ left: -300, behavior: 'smooth' }); // Slide left by 100px
    stopScroll = false;
});

document.getElementById('slideRight').addEventListener('click', function() {
    const scrollableDiv = document.getElementById('service_box');
    scrollableDiv.scrollBy({ left: 300, behavior: 'smooth' }); // Slide right by 100px
    stopScroll = false;
});

let stopScroll = true;
let scrollableDiv = document.getElementById('service_box');
let scrollDirection = 1;
setInterval(() => {
    if(stopScroll){
            scrollableDiv.scrollBy({ left: 300 * scrollDirection, behavior: 'smooth' });
        if (scrollableDiv.scrollLeft + scrollableDiv.clientWidth >= scrollableDiv.scrollWidth) {
            scrollDirection = -1; // Change direction to left
        } else if (scrollableDiv.scrollLeft <= 0) {
            scrollDirection = 1; // Change direction to right
        }
    }
}, 2000); // Slides right every 2 seconds

async function sendMail(){
    let name = document.getElementById('user_name').value;
    let phone = document.getElementById('user_phone').value;
    let email = document.getElementById('user_email').value;
    let message = document.getElementById('user_message').value;
    if(!name || !phone || !email || !message){
        let alert_sec = document.getElementById('alert_sec');
        let alert_text = document.getElementById('alert_text');
        alert_sec.style.display = 'block';
        alert_text.innerHTML = "Please fill all the fields in the form!";
        return;
    }
    let postData = {
        name: name,
        phone: phone,
        email: email,
        message: message
    }
    
    await fetch('/send_email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('Response from server:', data);
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}

function closeAlert(){
    let alert_sec = document.getElementById('alert_sec');
    alert_sec.style.display = 'none';
}