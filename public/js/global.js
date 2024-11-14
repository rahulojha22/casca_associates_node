let services = [
    {name: 'US Accounting', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {name: 'ABC', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {name: 'XYZ ABC', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {name: 'US Accounting', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {name: 'US Accounting', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'}
];

$(document).ready(function() {
    console.log(services)
    let service_sec = document.getElementById('services');
    let sec_html = '';
    services.forEach((ele, i)=>{
        let ele_html = '';
        if(i%2===0){
            ele_html = `<div class="service_sec_box">
                <div class="service_content">
                  ${ele.name}
                </div>
                <div class="service_img">
                </div>
            </div></div>`
        }else{
            ele_html = `<div class="service_sec_box">
                  <div class="service_img">
                  </div>
                  <div class="service_content">
                    ${ele.name}
                </div></div>`
        }
        sec_html += ele_html;
    });
    service_sec.innerHTML = sec_html;
});