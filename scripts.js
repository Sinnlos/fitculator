function getBmi(weight,height) {
    height = height/100;
    return Number((weight/(height*height)).toFixed(2));
}

function getPPM(sex,weight,height,age) {
    if (sex == 'Kobieta') {
        return Number((655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age)).toFixed(2));
    } else {
        return Number((66.5 + (13.75 * weight) + (5.003 * height) - (6.775 * age)).toFixed(2));
    }
}

function getCPM(pal,ppm) {
    return Number((pal * ppm).toFixed(2));
}

function getHoma1(insuline,glucose) {
    return Number(((insuline * glucose) / 22.5).toFixed(2));
}

function getHoma2(insuline,glucose) {
    return Number(((insuline * glucose) / 405).toFixed(2));
}


var choice_buttons = document.querySelectorAll('.choice-btn');
choice_buttons.forEach(choice_btn => {
    choice_btn.addEventListener('click', function(){       

        var visible_elements = document.querySelectorAll('.el-visible');
        visible_elements.forEach(vis_el => {
            vis_el.classList.remove('el-visible');
            vis_el.classList.add('el-hidden');
        });

        document.getElementById('info-' + choice_btn.id).classList.remove('el-hidden');
        document.getElementById('info-' + choice_btn.id).classList.add('el-visible');
        document.getElementById('form-' + choice_btn.id).classList.remove('el-hidden');
        document.getElementById('form-' + choice_btn.id).classList.add('el-visible');
    });
    
});


var calc_forms = document.querySelectorAll('.calc-form');
calc_forms.forEach(calc_form => {
    calc_form.addEventListener('submit', function(e){       

        e.preventDefault();


        var x = '';
        var height = null;
        var weight = null;
        var age = null;
        var sex = null;
        var pal = null;
        var insuline = null;
        var glucose = null;
        var loginForm = null;

        var result;

        switch (calc_form.id) {
            case 'form-bmi':
                x = 'bmi'
                weight = document.getElementById('weight-' + x).value;
                height = document.getElementById('height-' + x).value;
                result = getBmi(weight,height);

                document.getElementById('result-' + x).innerText = result;
         
                break;
            case 'form-ppm':
                x = 'ppm'
                weight = document.getElementById('weight-' + x).value;
                height = document.getElementById('height-' + x).value;
                age = document.getElementById('age-' + x).value;
                sex = document.getElementById('sex-' + x).value;
                result = getPPM(sex,weight,height,age);

                document.getElementById('result-' + x).innerText = result;

                break;
            case 'form-cpm':
                x = 'cpm'
                weight = document.getElementById('weight-' + x).value;
                height = document.getElementById('height-' + x).value;
                age = document.getElementById('age-' + x).value;
                sex = document.getElementById('sex-' + x).value;
                pal = document.getElementById('pal-' + x).value;
                var ppm = getPPM(sex,weight,height,age);
                result = getCPM(pal,ppm);

                document.getElementById('result-' + x).innerText = result;

                break;
            case 'form-homa1':
                x = 'homa1'
                insuline = document.getElementById('insuline-' + x).value;
                glucose = document.getElementById('glucose-' + x).value;
                result = getHoma1(insuline,glucose);

                document.getElementById('result-' + x).innerText = result;

                break;
            case 'form-homa2':
                x = 'homa2'
                insuline = document.getElementById('insuline-' + x).value;
                glucose = document.getElementById('glucose-' + x).value;
                result = getHoma2(insuline,glucose);

                document.getElementById('result-' + x).innerText = result;

                break;
            default:
              ''
          }

        
        
    });
});