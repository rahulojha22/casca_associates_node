let process = [
    {name: 'US Accounting', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {name: 'ABC', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {name: 'XYZ ABC', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {name: 'US Accounting', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {name: 'US Accounting', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'}
];

$(document).ready(function() {
    console.log(process)
    let process_sec = document.getElementById('process');
    let sec_html = '';
    process.forEach((ele, i)=>{
        let ele_html = '';
        if(i%2===0){
            ele_html = `<div class="process_sec_box">
                <div class="process_content">
                  ${ele.name}
                </div>
                <div class="process_img">
                </div>
            </div></div>`
        }else{
            ele_html = `<div class="process_sec_box">
                  <div class="process_img">
                  </div>
                  <div class="process_content">
                    ${ele.name}
                </div></div>`
        }
        sec_html += ele_html;
    });
    process_sec.innerHTML = sec_html;
});